// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper dojo/_base/lang ../../../../Color ./Graphics3DSymbolLayer ./Graphics3DGraphicLayer ./ElevationAligners ./Graphics3DSymbolCommonCode ./graphicUtils ./FastSymbolUpdates ./objectResourceUtils ../../lib/glMatrix ../../support/aaBoundingBox ../../webgl-engine/Stage ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/materials/Material ../../webgl-engine/lib/Util".split(" "),function(g,q,G,u,y,H,w,z,r,I,
s,A,B,t,n,J,k,K,L){var M=L.assert,v=B.mat4d,C=B.vec3d,p=[1,1,1],D=[0,0,0],N=[10,10,10];g=[-0.5,-0.5,-0.5,0.5,0.5,0.5];q=[-0.5,-0.5,0,0.5,0.5,1];var E={sphere:g,cube:g,cylinder:q,cone:q,"inverted-cone":q,tetrahedron:[-0.5,-0.5,0,0.5,0.5,0.5],diamond:g},F=[n.ModelContentType.MATERIAL,n.ModelContentType.TEXTURE,n.ModelContentType.GEOMETRY];return function(g){function b(){g.apply(this,arguments)}G(b,g);b.prototype._prepareResources=function(){var a=this.symbol,h=this._getStageIdHint();a.resource&&a.resource.href?
this._prepareModelResources(a.resource.href,h):this._preparePrimitiveResources(a.resource?a.resource.primitive:"sphere",h)};b.prototype._sizeToScale=function(a,h,c,d){for(var e=Array(3),f=2;0<=f;f--){var b=a[f];"symbolValue"===b?e[f]=c?c[f]:1:null!==b&&isFinite(b)?e[f]=b/(h[f+3]-h[f]):e[f]=null}a=d;h=0;for(f=2;0<=f;f--)b=e[f],null!==b&&(a=b,h=Math.max(h,Math.abs(b)));for(f=2;0<=f;f--)null===e[f]?e[f]=a:0===e[f]&&(e[f]=0.001*h);return e};b.prototype._computeSymbolScale=function(a,h){var c=[a.width,
a.depth,a.height];return c[0]||c[1]||c[2]?this._sizeToScale(c,h,null,1):null};b.prototype._preparePrimitiveResources=function(a,h){var c=this.symbol;if("sphere"===a)this._geometryData=k.createPolySphereGeometry(0.5,2,!0);else if("cube"===a)this._geometryData=k.createBoxGeometry(1);else if("cylinder"===a)this._geometryData=k.createCylinderGeometry(1,0.5,32,[0,0,1],[0,0,0.5]);else if("cone"===a)0>c.height?(this._geometryData=k.createConeGeometry(1,0.5,15,!0),c.height=-c.height):this._geometryData=k.createConeGeometry(1,
0.5,15,!1),k.cgToGIS(this._geometryData);else if("inverted-cone"===a)this._geometryData=k.createConeGeometry(1,0.5,15,!0),k.cgToGIS(this._geometryData);else if("tetrahedron"===a)this._geometryData=k.createTetrahedronGeometry(1),k.cgToGIS(this._geometryData);else if("diamond"===a)this._geometryData=k.createDiamondGeometry(1),k.cgToGIS(this._geometryData);else{console.warn("Unknown object symbol primitive: "+a);this.reject();return}this._geometry=new J(this._geometryData,h);this._context.stage.add(n.ModelContentType.GEOMETRY,
this._geometry);this._boundingBox=E[a];this._symbolScale=this._computeSymbolScale(c,this._boundingBox);this._objectScale=this._computeObjectScale();var d=this._getMaterialOpacity(),d={specular:[0,0,0],shininess:3,opacity:d,transparent:1>d||this._isPropertyDriven("opacity"),instanced:["transformation"]};this._isPropertyDriven("color")?(d.ambient=p,d.diffuse=p):(c=c.material?y.toUnitRGB(c.material.color):p,d.ambient=c,d.diffuse=c);this._fastUpdates=s.initFastSymbolUpdatesState(this._context.renderer,
this._supportsShaderVisualVariables(),this._fastVisualVariableConvertOptions());this._fastUpdates.enabled?(u.mixin(d,this._fastUpdates.materialParameters),d.instanced.push("featureAttribute")):this._hasPerInstanceColor()&&d.instanced.push("color");this._material=new K(d,h+"_objectmat");this._context.stage.add(n.ModelContentType.MATERIAL,this._material);this.resolve()};b.prototype._prepareModelResources=function(a,h){var c=this,d={materialParamsMixin:{instanced:["transformation"]},bakeTransformations:!0,
idHint:h,streamDataSupplier:this._context.streamDataSupplier};this._fastUpdates=s.initFastSymbolUpdatesState(this._context.renderer,this._supportsShaderVisualVariables(),this._fastVisualVariableConvertOptions());this._fastUpdates.enabled?(u.mixin(d.materialParamsMixin,this._fastUpdates.materialParameters),d.materialParamsMixin.instanced.push("featureAttribute")):this._hasPerInstanceColor()&&d.materialParamsMixin.instanced.push("color");this._symbolLoaderPromise=A.fetch(a,d);this._symbolLoaderPromise.then(function(a){c._symbolLoaderPromise=
null;if(!c.isRejected()){var h=a.stageResources,d=c._context.stage,b=c.symbol.material,m;c._isPropertyDriven("color")?m={ambient:p,diffuse:p}:b&&b.color&&(b=y.toUnitRGB(b.color),m={ambient:b.map(function(a){return a/1.5}),diffuse:b});var l=c._computeModelOpacityOverride(),b=h[n.ModelContentType.MATERIAL];a.originalMaterialOpacities=Array(b.length);b.forEach(function(c,h){var b=c.getParameterValues();a.originalMaterialOpacities[h]=b.opacity;m&&c.setParameterValues(m);null!=l.overwrite?c.setParameterValues({opacity:l.overwrite,
transparent:l.blendingRequired}):null!=l.multiply&&(b.opacity*=l.multiply,b.transparent=1>b.opacity,c.setParameterValues({opacity:b.opacity,transparent:b.transparent}))});F.forEach(function(a){for(var c=h[a],b=0;c&&b<c.length;b++)d.add(a,c[b])});c._boundingBox=A.computeBoundingBox(a);c._pivotOffset=a.pivotOffset;c._symbolScale=c._computeSymbolScale(c.symbol,c._boundingBox);c._objectScale=c._computeObjectScale();c._i3sModel=a;s.updateFastSymbolUpdatesState(c._fastUpdates,c._context.renderer,c._fastVisualVariableConvertOptions())&&
b.forEach(function(a){return a.setParameterValues(c._fastUpdates.materialParameters)});c.resolve()}},function(){c._symbolLoaderPromise=null;c.isFulfilled()||c.reject()})};b.prototype._forEachMaterial=function(a){this._i3sModel?this._i3sModel.stageResources[n.ModelContentType.MATERIAL].forEach(a):a(this._material)};b.prototype._computeModelOpacityOverride=function(){var a={overwrite:null,blendingRequired:!1,multiply:null},b=this._getMaterialOpacity();this._isPropertyDriven("opacity")?(a.overwrite=
b,a.blendingRequired=!0):this.symbol.material&&void 0!==this.symbol.material.transparency?(a.overwrite=b,a.blendingRequired=1>a.overwrite):1>b&&(a.multiply=b,a.blendingRequired=!0);return a};b.prototype.destroy=function(){this.isFulfilled()||this.reject();this._symbolLoaderPromise&&this._symbolLoaderPromise.cancel();var a=this._context.stage;if(this._i3sModel){var b=this._i3sModel.stageResources;F.forEach(function(c){for(var d=b[c],e=0;d&&e<d.length;e++)a.remove(c,d[e].getId())})}else this._material&&
a.remove(n.ModelContentType.MATERIAL,this._material.getId()),this._geometry&&a.remove(n.ModelContentType.GEOMETRY,this._geometry.getId())};b.prototype._getGeometry=function(a){a=a.geometry;return"polyline"===a.type?r.placePointOnPolyline(a):"polygon"===a.type?r.placePointOnPolygon(a):"extent"===a.type?a.center:"point"!==a.type?(this._logWarning("unsupported geometry type for object symbol: "+a.type),null):a};b.prototype.createGraphics3DGraphic=function(a,b){var c=this._getGeometry(a);if(null===c)return null;
var d="graphic"+a.uid,e=this._getGraphicElevationInfo(a);return this._createAs3DShape(a,c,b,e,d,a.uid)};b.prototype.layerPropertyChanged=function(a,b,c){var d=this;if("opacity"===a){if(this._i3sModel){var e=this._computeModelOpacityOverride();this._i3sModel.stageResources[n.ModelContentType.MATERIAL].forEach(function(a,c){if(null!=e.overwrite)a.setParameterValues({opacity:e.overwrite,transparent:e.blendingRequired});else{var b=d._i3sModel.originalMaterialOpacities[c];null!=e.multiply&&(b*=e.multiply);
a.setParameterValues({opacity:b,transparent:1>b})}})}else b=this._getMaterialOpacity(),this._material.setParameterValues({opacity:b,transparent:1>b||this._isPropertyDriven("opacity")});return!0}if("elevationInfo"===a){this._updateElevationInfo();a=this._context.elevationProvider;var f=this._context.renderCoordsHelper,k=z.perObjectElevationAligner,O=r.ELEV_MODES.ABSOLUTE_HEIGHT,m;for(m in b){var l=b[m],g=l._graphics[c];g&&g instanceof w&&(l=this._getGraphicElevationInfo(l.graphic),g.elevationAligner=
l.mode!==O?k:null,g.elevationInfo.set(l),k(g,a,f))}return!0}return!1};b.prototype.applyRendererDiff=function(a,b,c,d){var e=this,f;for(f in a.diff)switch(f){case "visualVariables":if(s.updateFastSymbolUpdatesState(this._fastUpdates,b,this._fastVisualVariableConvertOptions()))this._forEachMaterial(function(a){return a.setParameterValues(e._fastUpdates.materialParameters)});else return!1;break;default:return!1}return!0};b.prototype._createAs3DShape=function(a,b,c,d,e,f){var k=this,g=null,m=null;if(a=
this._getFastUpdateAttrValues(a))g=g||{},g.featureAttribute=a,m=function(a){return s.evaluateModelTransform(k._fastUpdates.materialParameters,g.featureAttribute,a)};!this._fastUpdates.enabled&&this._hasPerInstanceColor()&&(g=g||{},g.color=I.mixinColorAndOpacity(c.color,c.opacity));var l=this._context.layer.id;a=v.identity();this._applyObjectRotation(c,this.symbol,a);this._applyObjectScale(c,a);this._applyAnchor(a);if(this._i3sModel){c=this._i3sModel.stageResources[n.ModelContentType.GEOMETRY];var p=
this._i3sModel.materialsByComponent;e=r.createStageObjectForPoint.call(this,b,null,null,null,null,d,e,l,f);if(null===e)return null;for(f=0;f<c.length;f++){for(var l=p[f],q=l.length,t=Array(q),x=0;x<q;x++)t[x]=g;e.addGeometry(c[f],l,a,t,null,m)}}else e=r.createStageObjectForPoint.call(this,b,[this._geometry],[[this._material]],[a],[g],d,e,l,f,null,m);if(null===e)return null;if(this._fastUpdates.enabled){var u=s.getMaterialParams(this._fastUpdates.visualVariables,this._fastVisualVariableConvertOptions());
this._forEachMaterial(function(a){return a.setParameterValues(u)})}e.setCastShadow(!0);m=null;d.mode!==r.ELEV_MODES.ABSOLUTE_HEIGHT&&(m=z.perObjectElevationAligner);d=new w(this,e,null,null,null,m,d,w.VisibilityModes.REMOVE_OBJECT);r.extendPointGraphicElevationInfo(d,b,this._context.elevationProvider);return d};b.prototype._computeObjectScale=function(a){a&&a.size&&this._isPropertyDriven("size")?(a=this._sizeToScale(a.size,this._boundingBox,this._symbolScale,null),M(null!=a[0],"sizeInfo has no values")):
a=this._symbolScale?this._symbolScale.slice(0):this._i3sModel?[1,1,1]:N.slice(0);for(var b=this._context.renderCoordsHelper.unitInMeters,c=2;0<=c;c--)a[c]/=b;return a};b.prototype._applyObjectScale=function(a,b){if(!this._fastUpdates.enabled||!this._fastUpdates.customTransformation){var c=this._computeObjectScale(a);(1!==c[0]||1!==c[1]||1!==c[2])&&v.scale(b,c)}};b.prototype._applyObjectRotation=function(a,b,c){a=(a.rotationAngle||0)+(b.heading||0);return 0!==a?v.rotateZ(c,-a/180*Math.PI,c):null};
b.prototype._computeAnchor=function(){switch(this.symbol.anchor){case "center":return C.scale(t.center(this._boundingBox),-1);case "bottom":var a=t.center(this._boundingBox);return[-a[0],-a[1],-this._boundingBox[2]];default:return this._pivotOffset?C.scale(this._pivotOffset,-1,Array(3)):D}};b.prototype._applyAnchor=function(a){if(!this._fastUpdates.enabled||!this._fastUpdates.customTransformation){var b=this._computeAnchor();b&&v.translate(a,b)}};b.prototype._hasPerInstanceColor=function(){return this._isPropertyDriven("color")||
this._isPropertyDriven("opacity")};b.prototype._supportsShaderVisualVariables=function(){return!this._context.stage.has("angleInstancedArrays")?!1:!0};b.prototype._fastVisualVariableConvertOptions=function(){var a=this._boundingBox?t.size(this._boundingBox):p,b=this._boundingBox?this._computeAnchor():D;return{modelSize:a,unitInMeters:this._context.renderCoordsHelper.unitInMeters,transformation:{anchor:b,scale:this._objectScale}}};b.PRIMITIVE_BOUNDING_BOX=E;return b}(H)});