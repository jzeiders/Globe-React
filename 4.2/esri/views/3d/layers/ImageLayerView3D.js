// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("../../../core/HandleRegistry ../../../core/promiseUtils ../../layers/LayerView ../../../geometry/Extent ../lib/glMatrix ../webgl-engine/Stage ../webgl-engine/lib/Texture ../webgl-engine/lib/RenderGeometry ../webgl-engine/lib/GeometryData ../webgl-engine/lib/GeometryUtil ../webgl-engine/materials/Material ../webgl-engine/lib/Util".split(" "),function(x,y,z,A,B,f,C,D,E,F,G,h){var r=h.assert,H=B.mat4d,m=h.VertexAttrConstants,K=function(){var b=new Float32Array([0,0,1]);return function(a,c,e){var d=
[a[1]-c[1],a[3]-a[1],c[3]-a[3],123456],g=[a[0]-c[0],a[2]-a[0],c[2]-a[2],123456],I=c[2]-c[0],J=c[3]-c[1],k=0<g[0]&&0<g[2]?3:2;a=0<d[0]&&0<d[2]?3:2;var p=(a+1)*(k+1),l=new Float32Array(3*p),p=new Float32Array(2*p);a=new Uint32Array(6*(a*k-1));for(var f=0,h=0,r=0,n=0,q=0,s=0;4>s;s++){var v=d[s];if(!(0>=v)){for(var u=0,t=0;4>t;t++){var w=g[t];0>=w||(l[h++]=c[0]+u,l[h++]=c[1]+f,l[h++]=e,p[r++]=u/I,p[r++]=f/J,3>t&&(3>s&&!(1===t&&1===s))&&(a[q++]=n,a[q++]=n+1,a[q++]=n+k+1,a[q++]=n+1,a[q++]=n+k+2,a[q++]=
n+k+1),n++,u+=w)}f+=v}}c={};c[m.POSITION]={size:3,data:l};c[m.NORMAL]={size:3,data:b};c[m.UV0]={size:2,data:p};e={};d=new Uint32Array(a.length);for(l=0;l<d.length;l++)d[l]=0;e[m.POSITION]=a;e[m.NORMAL]=d;e[m.UV0]=a;return{faces:{type:"triangle",indices:e,positionKey:m.POSITION},vertexAttr:c,id:E.getNewId().toString()}}}();return z.createSubclass({declaredClass:"esri.views.3d.layers.ImageLayerView3D",properties:{suspended:{dependsOn:["view.scale","layer.minScale","layer.maxScale"]}},constructor:function(){this._extents=
[];this._images=[];this._handles=new x},initialize:function(){this.drawingOrder=this.view.getDrawingOrder(this.layer.uid);this._handles.add(this.watch("suspended",function(b){if(b)this.clear(),this.emit("draped-data-change");else{b=this._extents.length;for(var a=0;a<b;a++)this._fetch(a)}}.bind(this)));this._handles.add([this.watch("fullOpacity",this._opacityChangeHandler.bind(this)),this.layer.watch("exportImageParameters.version",this._layerExportParametersChangeHandler.bind(this)),this.layer.on("redraw",
this._layerRedrawHandler.bind(this))],"layer")},destroy:function(){this.clear();this._handles.destroy()},_handles:null,_images:null,supportsDraping:!0,hasDraped:!0,drawingOrder:0,_drawingOrderSetter:function(b){var a=this._get("drawingOrder");if(b!==a){var c={};this._images.forEach(function(a){a&&a.material&&(a.material.setRenderPriority(b),c[a.material.getId()]=!0)});h.objectEmpty(c)||(this.view._stage.getTextureGraphicsRenderer().updateRenderOrder(c),this.emit("draped-data-change"))}this._set("drawingOrder",
b)},canResume:function(){if(!this.inherited(arguments))return!1;var b=this.layer.minScale,a=this.layer.maxScale;if(0<b||0<a){var c=this.view.scale;if(c<a||0<b&&c>b)return!1}return!0},setDrapingExtent:function(b,a,c,e){var d=(a[2]-a[0])/(a[3]-a[1]);this._extents[b]={extent:a,spatialReference:c,imageSize:1.0001<d?[e,e/d]:0.9999>d?[e*d,e]:[e,e]};this.suspended||this._fetch(b)},getGraphicsFromStageObject:function(b,a){return y.reject()},clear:function(){for(var b in this._images)this._clearImage(b)},
_fetch:function(b){var a=this._extents[b],c=a.extent,e=new A(c[0],c[1],c[2],c[3],a.spatialReference),d=this._images[b];d||(d=this._images[b]={texture:null,material:null,rendergeometry:null,canvas:null,pixelData:null,worldExtent:c,loading:!0});d.promise&&d.promise.cancel();d.loading=!0;d.promise=this.layer.fetchImage({extent:e,width:a.imageSize[0],height:a.imageSize[1]}).then(function(a){d.canvas=document.createElement("canvas");d.pixelData=a.pixelData;d.worldExtent=c;a=d.canvas;var e=a.getContext("2d"),
f=this.layer.applyFilter(d.pixelData).pixelBlock;a.width=f.width;a.height=f.height;var k=e.createImageData(f.width,f.height),f=f.getAsRGBA();k.data.set(f);e.putImageData(k,0,0);this._createStageObjects(b,a);0===b&&(this._images[1]&&this._images[1].rendergeometry)&&this._createStageObjects(1,null);this._evaluateUpdatingState();this.emit("draped-data-change")}.bind(this)).always(function(){d.loading=!1;d.promise=null})},_updateImage:function(b){var a=this._images[b];if(a&&a.pixelData){var c=a.canvas,
e=c.getContext("2d"),d=this.layer.applyFilter(a.pixelData).pixelBlock,f=e.createImageData(d.width,d.height),h=d.getAsRGBA();c.width=d.width;c.height=d.height;f.data.set(h);e.putImageData(f,0,0);this._createStageObjects(b,a.canvas)}this.emit("draped-data-change")},_clearImage:function(b){b=this._images[b];var a=this.view._stage;b&&(b.rendergeometry&&a.getTextureGraphicsRenderer().removeRenderGeometries([b.rendergeometry]),b.texture&&a.remove(f.ModelContentType.TEXTURE,b.texture.getId()),b.material&&
a.remove(f.ModelContentType.MATERIAL,b.material.getId()),b.rendergeometry=b.texture=b.material=b.pixelData=b.canvas=b.loading=!1)},_layerRedrawHandler:function(){for(var b=0;b<this._images.length;b++)this._updateImage(b)},_layerExportParametersChangeHandler:function(){for(var b=0;b<this._extents.length;b++)this._extents[b]&&this._fetch(b)},_opacityChangeHandler:function(b){this._images.forEach(function(a){a&&a.material&&a.material.setParameterValues({opacity:b})}.bind(this));this.emit("draped-data-change")},
_evaluateUpdatingState:function(){this.notifyChange("updating")},isUpdating:function(){var b=!1,a;for(a in this._images)if(this._images[a].loading){b=!0;break}return b},_createStageObjects:function(b,a){var c=this.view._stage,e=c.getTextureGraphicsRenderer(),d=this._images[b];a?(d.texture&&c.remove(f.ModelContentType.TEXTURE,d.texture.getId()),d.texture=new C(a,"imageLayer",{width:a.width,height:a.height}),c.add(f.ModelContentType.TEXTURE,d.texture)):r(d.texture);d.material?a&&d.material.setParameterValues({textureId:d.texture.getId()}):
(d.material=new G({ambient:[1,1,1],diffuse:[0,0,0],transparent:!0,opacity:this.fullOpacity,textureId:d.texture.getId()},"imageLayer"),d.material.setRenderPriority(this.drawingOrder),c.add(f.ModelContentType.MATERIAL,d.material));if(0===b)c=d.worldExtent,c=F.createSquareGeometry([[c[0],c[1],-1],[c[2],c[1],-1],[c[2],c[3],-1],[c[0],c[3],-1]],!0);else{r(1===b);c=this._images[0].worldExtent;if(!c)return;c=K(c,d.worldExtent,-1)}var g=new D(c);g.material=d.material;g.origin={vec3:[0,0,0],id:"0_0"};g.transformation=
H.identity();g.name="imageLayer";g.uniqueName="imageLayer#"+c.id;e.addRenderGeometries([g]);d.rendergeometry&&e.removeRenderGeometries([d.rendergeometry]);d.rendergeometry=g}})});