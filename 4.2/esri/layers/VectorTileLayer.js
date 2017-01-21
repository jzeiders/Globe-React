// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
require({cache:{"esri/portal/support/jsonContext":function(){define(["require","exports","../Portal","../../core/urlUtils"],function(l,h,e,a){h.createForItem=function(c){return{origin:"portal-item",url:a.urlToObject(c.itemUrl),portal:c.portal||e.getDefault()}}})},"esri/layers/support/vectorTileLayerLoader":function(){define("require exports dojo/has dojo/_base/lang ../../core/promiseUtils ../../core/urlUtils ../../config ../../request".split(" "),function(l,h,e,a,c,b,d,m){function g(d){if(d){var c=
b.getOrigin(d);!b.canUseXhr(c)&&-1===q.indexOf(c)&&q.push(c);return d}}function f(d,c,a){if(null!=c.sources){a&&-1!==a.path.indexOf("root.json")&&(a.path=a.path.substr(0,a.path.indexOf("root.json")),d.styleUrl=a.path);var g=n(c,a),f=c.sprite,m=c.glyphs;g&&g.url&&(g=a&&a.path?a.path:g.url,c.sprite&&!b.isAbsolute(c.sprite)&&(f=b.join(g,c.sprite)),c.glyphs&&!b.isAbsolute(c.glyphs)&&(m=b.join(g,c.glyphs)));d.style=c;d.spriteUrl=f;d.glyphsUrl=m;return s(d,c,a)}if(c.hasOwnProperty("tileInfo"))return d.layerDefinition=
c,d.serviceUrl=a.path,t(d,c,a)}function t(c,d,a){if(r&&!d.hasOwnProperty("defaultStyles"))throw Error("Service definition must have 'defaultStyles' element!");d=d.defaultStyles;b.isAbsolute(d)?c.styleUrl=b.normalize(d):c.styleUrl=b.normalize(b.join(a.path,d));g(c.styleUrl);return m(b.join(c.styleUrl,"root.json"),{responseType:"json"}).then(function(d){var a=d.data.sprite,g=d.data.glyphs;a&&!b.isAbsolute(a)&&(a=b.join(c.styleUrl,a));g&&!b.isAbsolute(g)&&(g=b.join(c.styleUrl,g));c.spriteUrl=a;c.glyphsUrl=
g;return c.style=d.data})}function s(d,a,f){(a=n(a,f))||c.reject("Source isn't available in the syle object!");if(a.url)return d.serviceUrl=a.url,b.isAbsolute(d.serviceUrl)||(d.serviceUrl=b.join(f.path,d.serviceUrl)),g(d.serviceUrl),m(d.serviceUrl,{query:{f:"json"},responseType:"json"}).then(function(b){d.layerDefinition=p(b.data);return d});d.layerDefinition=p(a);return c.resolve(d)}function n(d,c){if(!d.sources)return null;var a=d.sources,g=null;if(a.esri)g=a.esri,c&&(g.url&&!b.isAbsolute(g.url))&&
(a=c.path.substring(0,c.path.lastIndexOf("/")),g.url=b.join(a,g.url));else{for(var f=0,m=Object.keys(a);f<m.length;f++){var e=m[f];if(-1!==e.toLocaleLowerCase().indexOf("street")&&"vector"===g.type){g=a[e];break}}if(!g){f=0;for(m=Object.keys(a);f<m.length&&!(e=m[f],g=a[e],"vector"===g.type);f++);}}return g}function p(b){if(b.hasOwnProperty("tileInfo"))return b;for(var d={xmin:-2.0037507067161843E7,ymin:-2.0037507067161843E7,xmax:2.0037507067161843E7,ymax:2.0037507067161843E7,spatialReference:{wkid:102100}},
c=(d.xmax-d.xmin)/512,a=[],f=b.hasOwnProperty("minzoom")?parseFloat(b.minzoom):0,m=b.hasOwnProperty("maxzoom")?parseFloat(b.maxzoom):16;f<m;f++){var e=c/Math.pow(2,f);a.push({level:f,scale:Math.floor(3779.527559055118*e),resolution:e})}b.tiles.forEach(g);return{capabilities:"TilesOnly",initialExtent:d,fullExtent:d,minScale:a[0].scale,maxScale:a[a.length-1].scale,tiles:b.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-2.0037508342787E7,y:2.0037508342787E7},lods:a,spatialReference:{wkid:102100}}}}
var r=0,q=d.defaults&&d.defaults.io.corsEnabledServers||d.request.corsEnabledServers;h.loadMetadata=function(d){if(!d)return c.reject("invalid input URL!");var e={layerDefinition:null,parsedUrl:null,serviceUrl:null,style:null,styleUrl:null,url:null,spriteUrl:null,glyphsUrl:null};if("string"!==typeof d)return f(e,d,null).then(function(){return e});d=e.url=b.normalize(d);var h=e.parsedUrl=b.urlToObject(d);g(d);return m(h.path,{responseType:"json",query:a.mixin({f:"json"},h.query)}).then(function(b){return f(e,
b.data,h)}).then(function(){return e})}})},"esri/views/vectorTiles/style/StyleRepository":function(){define(["require","exports","./StyleLayer"],function(l,h,e){return function(){function a(c,b){this.styleJSON=c;this.version=parseFloat(c.version);this.sprite=b?b.spriteUrl:c.sprite;this.glyphs=b?b.glyphsUrl:c.glyphs;this.layers=(c.layers||[]).map(a._create);this._identifyRefLayers()}a.prototype._identifyRefLayers=function(){for(var a=[],b=[],d=0,m=this.layers;d<m.length;d++){var g=m[d];if(1===g.type){var f=
g.sourceLayer,f=f+("|"+JSON.stringify(g.minzoom)),f=f+("|"+JSON.stringify(g.maxzoom)),f=f+("|"+JSON.stringify(g.filter));a.push({key:f,layer:g})}2===g.type&&(f=g.sourceLayer,f+="|"+JSON.stringify(g.minzoom),f+="|"+JSON.stringify(g.maxzoom),f+="|"+JSON.stringify(g.filter),f+="|"+JSON.stringify(g.layout["line-cap"]),f+="|"+JSON.stringify(g.layout["line-join"]),b.push({key:f,layer:g}))}this._assignRefLayers(a);this._assignRefLayers(b)};a.prototype._assignRefLayers=function(a){a.sort(function(b,d){return b.key<
d.key?-1:b.key>d.key?1:0});for(var b,d,m=a.length,g=0;g<m;g++){var f=a[g];if(f.key===b)f.layer.refLayerId=d;else if(b=f.key,d=f.layer.id,1===f.layer.type&&!f.layer.hasPaintProperty("fill-outline-color"))for(var e=g+1;e<m;e++){var h=a[e];if(h.key===b){if(h.layer.hasPaintProperty("fill-outline-color")){a[g]=h;a[e]=f;d=h.layer.id;break}}else break}}};a._create=function(a,b,d){b=1-(1+b)*(1/(d.length+1));switch(a.type){case "background":return new e.StyleLayer(0,a,b);case "fill":return new e.StyleLayer(1,
a,b);case "line":return new e.StyleLayer(2,a,b);case "symbol":return new e.StyleLayer(3,a,b);case "raster":throw Error("Unsupported vector tile raster layer");case "circle":throw Error("Unsupported vector tile circle layer");}throw Error("Unknown vector tile layer");};return a}()})},"esri/views/vectorTiles/style/StyleLayer":function(){define(["require","exports","./StyleDefinition","./StyleProperty","./Filter"],function(l,h,e,a,c){l=function(){function b(b,a,c){this.type=b;this.id=a.id;this.source=
a.source;this.sourceLayer=a["source-layer"];this.minzoom=a.minzoom;this.maxzoom=a.maxzoom;this.filter=a.filter;this.layout=a.layout;this.paint=a.paint;this.z=c;switch(b){case 0:this._layoutDefinition=e.StyleDefinition.backgroundLayoutDefinition;this._paintDefinition=e.StyleDefinition.backgroundPaintDefinition;break;case 1:this._layoutDefinition=e.StyleDefinition.fillLayoutDefinition;this._paintDefinition=e.StyleDefinition.fillPaintDefinition;break;case 2:this._layoutDefinition=e.StyleDefinition.lineLayoutDefinition;
this._paintDefinition=e.StyleDefinition.linePaintDefinition;break;case 3:this._layoutDefinition=e.StyleDefinition.symbolLayoutDefinition,this._paintDefinition=e.StyleDefinition.symbolPaintDefinition}this._layoutProperties=this._parseLayout(this.layout);this._paintProperties=this._parsePaint(this.paint)}b.prototype.getFeatureFilter=function(){return void 0!==this._featureFilter?this._featureFilter:this._featureFilter=c.createFilter(this.filter)};b.prototype.hasLayoutProperty=function(b){var a=this._layoutProperties;
return a&&a[b]?!0:!1};b.prototype.hasPaintProperty=function(b){var a=this._paintProperties;return a?void 0!==a[b]:!1};b.prototype.getLayoutValue=function(b,a){var c,f=this._layoutProperties;f&&(f=f[b])&&(c=f.getValue(a));f=this._layoutDefinition[b];void 0===c&&(c=f["default"]);"enum"===f.type&&(c=f.values.indexOf(c));return c};b.prototype.getPaintValue=function(b,a){var c,f=this._paintProperties;f&&(f=f[b])&&(c=f.getValue(a));f=this._paintDefinition[b];void 0===c&&(c=f["default"]);"enum"===f.type&&
(c=f.values.indexOf(c));return c};b.prototype._parseLayout=function(b){var c={},g;for(g in b)c[g]=new a(this._layoutDefinition[g],b[g]);return c};b.prototype._parsePaint=function(b){var c={},g;for(g in b)c[g]=new a(this._paintDefinition[g],b[g]);return c};return b}();h.StyleLayer=l;l=function(){return function(b,a){this.cap=b.getLayoutValue("line-cap",a);this.join=b.getLayoutValue("line-join",a);this.miterLimit=b.getLayoutValue("line-miter-limit",a);this.roundLimit=b.getLayoutValue("line-round-limit",
a)}}();h.LineLayout=l;l=function(){return function(b,a,c){this.allowOverlap=b.getLayoutValue("icon-allow-overlap",a);this.ignorePlacement=b.getLayoutValue("icon-ignore-placement",a);this.optional=b.getLayoutValue("icon-optional",a);this.rotationAlignment=b.getLayoutValue("icon-rotation-alignment",a);this.size=b.getLayoutValue("icon-size",a);this.rotate=b.getLayoutValue("icon-rotate",a);this.padding=b.getLayoutValue("icon-padding",a);this.keepUpright=b.getLayoutValue("icon-keep-upright",a);this.offset=
b.getLayoutValue("icon-offset",a);c&&(1===this.rotationAlignment&&!b.hasLayoutProperty("icon-rotation-alignment"))&&(this.rotationAlignment=0)}}();h.IconLayout=l;l=function(){return function(b,a,c){this.allowOverlap=b.getLayoutValue("text-allow-overlap",a);this.ignorePlacement=b.getLayoutValue("text-ignore-placement",a);this.optional=b.getLayoutValue("text-optional",a);this.rotationAlignment=b.getLayoutValue("text-rotation-alignment",a);this.font=b.getLayoutValue("text-font",a);this.maxWidth=b.getLayoutValue("text-max-width",
a);this.lineHeight=b.getLayoutValue("text-line-height",a);this.letterSpacing=b.getLayoutValue("text-letter-spacing",a);this.justify=b.getLayoutValue("text-justify",a);this.anchor=b.getLayoutValue("text-anchor",a);this.maxAngle=b.getLayoutValue("text-max-angle",a);this.size=b.getLayoutValue("text-size",a);this.rotate=b.getLayoutValue("text-rotate",a);this.padding=b.getLayoutValue("text-padding",a);this.keepUpright=b.getLayoutValue("text-keep-upright",a);this.transform=b.getLayoutValue("text-transform",
a);this.offset=b.getLayoutValue("text-offset",a);c&&(1===this.rotationAlignment&&!b.hasLayoutProperty("text-rotation-alignment"))&&(this.rotationAlignment=0)}}();h.TextLayout=l})},"esri/views/vectorTiles/style/StyleDefinition":function(){define(["require","exports"],function(l,h){var e=function(){function a(){}a.backgroundLayoutDefinition={visibility:{type:"enum",values:["visible","none"],"default":"visible"}};a.fillLayoutDefinition={visibility:{type:"enum",values:["visible","none"],"default":"visible"}};
a.lineLayoutDefinition={visibility:{type:"enum",values:["visible","none"],"default":"visible"},"line-cap":{type:"enum",values:["butt","round","square"],"default":"butt"},"line-join":{type:"enum",values:["bevel","round","miter"],"default":"miter"},"line-miter-limit":{type:"number","default":2},"line-round-limit":{type:"number","default":1.05}};a.symbolLayoutDefinition={visibility:{type:"enum",values:["visible","none"],"default":"visible"},"symbol-placement":{type:"enum",values:["point","line"],"default":"point"},
"symbol-spacing":{type:"number",minimum:1,"default":250},"symbol-avoid-edges":{type:"boolean","default":!1},"icon-image":{type:"string"},"icon-allow-overlap":{type:"boolean","default":!1},"icon-ignore-placement":{type:"boolean","default":!1},"icon-optional":{type:"boolean","default":!1},"icon-rotation-alignment":{type:"enum",values:["map","viewport"],"default":"viewport"},"icon-size":{type:"number",minimum:0,"default":1},"icon-rotate":{type:"number","default":0},"icon-padding":{type:"number",minimum:0,
"default":2},"icon-keep-upright":{type:"boolean","default":!0},"icon-offset":{type:"array",value:"number",length:2,"default":[0,0]},"text-field":{type:"string"},"text-rotation-alignment":{type:"enum",values:["map","viewport"],"default":"viewport"},"text-font":{type:"array",value:"string","default":["Open Sans Regular","Arial Unicode MS Regular"]},"text-size":{type:"number",minimum:0,"default":16},"text-max-width":{type:"number",minimum:0,"default":10},"text-line-height":{type:"number","default":1.2},
"text-letter-spacing":{type:"number","default":0},"text-justify":{type:"enum",values:["left","center","right"],"default":"center"},"text-anchor":{type:"enum",values:"center left right top bottom top-left top-right bottom-left bottom-right".split(" "),"default":"center"},"text-max-angle":{type:"number",minimum:0,"default":45},"text-rotate":{type:"number","default":0},"text-padding":{type:"number",minimum:0,"default":2},"text-keep-upright":{type:"boolean","default":!0},"text-transform":{type:"enum",
values:["none","uppercase","lowercase"],"default":"none"},"text-offset":{type:"array",value:"number",length:2,"default":[0,0]},"text-allow-overlap":{type:"boolean","default":!1},"text-ignore-placement":{type:"boolean","default":!1},"text-optional":{type:"boolean","default":!1}};a.backgroundPaintDefinition={"background-opacity":{type:"number",minimum:0,maximum:1,"default":1},"background-color":{type:"color","default":[0,0,0,1]},"background-pattern":{type:"string"}};a.fillPaintDefinition={"fill-opacity":{type:"number",
minimum:0,maximum:1,"default":1},"fill-antialias":{type:"boolean","default":!0},"fill-color":{type:"color","default":[0,0,0,1]},"fill-outline-color":{type:"color","default":[0,0,0,0]},"fill-translate":{type:"array",value:"number",length:2,"default":[0,0]},"fill-translate-anchor":{type:"enum",values:["map","viewport"],"default":"map"},"fill-pattern":{type:"string"}};a.linePaintDefinition={"line-opacity":{type:"number",minimum:0,maximum:1,"default":1},"line-color":{type:"color","default":[0,0,0,1]},
"line-translate":{type:"array",value:"number",length:2,"default":[0,0]},"line-translate-anchor":{type:"enum",values:["map","viewport"],"default":"map"},"line-width":{type:"number",minimum:0,"default":1},"line-gap-width":{type:"number",minimum:0,"default":0},"line-offset":{type:"number","default":0},"line-blur":{type:"number",minimum:0,"default":0},"line-dasharray":{type:"array",value:"number","default":[]},"line-pattern":{type:"string"}};a.symbolPaintDefinition={"icon-opacity":{type:"number",minimum:0,
maximum:1,"default":1},"icon-color":{type:"color","default":[0,0,0,1]},"icon-halo-color":{type:"color","default":[0,0,0,0]},"icon-halo-width":{type:"number",minimum:0,"default":0},"icon-halo-blur":{type:"number",minimum:0,"default":0},"icon-translate":{type:"array",value:"number",length:2,"default":[0,0]},"icon-translate-anchor":{type:"enum",values:["map","viewport"],"default":"map"},"text-opacity":{type:"number",minimum:0,maximum:1,"default":1},"text-color":{type:"color","default":[0,0,0,1]},"text-halo-color":{type:"color",
"default":[0,0,0,0]},"text-halo-width":{type:"number",minimum:0,"default":0},"text-halo-blur":{type:"number",minimum:0,"default":0},"text-translate":{type:"array",value:"number",length:2,"default":[0,0]},"text-translate-anchor":{type:"enum",values:["map","viewport"],"default":"map"}};a.rasterPaintDefinition={"raster-opacity":{type:"number",minimum:0,maximum:1,"default":1},"raster-hue-rotate":{type:"number","default":0},"raster-brightness-min":{type:"number",minimum:0,maximum:1,"default":0},"raster-brightness-max":{type:"number",
minimum:0,maximum:1,"default":1},"raster-saturation":{type:"number",minimum:-1,maximum:1,"default":0},"raster-contrast":{type:"number",minimum:-1,maximum:1,"default":0},"raster-fade-duration":{type:"number",minimum:0,"default":300}};a.circlePaintDefinition={"circle-opacity":{type:"number",minimum:0,maximum:1,"default":1},"circle-radius":{type:"number",minimum:0,"default":5},"circle-color":{type:"color","default":[0,0,0,1]},"circle-blur":{type:"number",minimum:0,"default":0},"circle-translate":{type:"array",
value:"number",length:2,"default":[0,0]},"circle-translate-anchor":{type:"enum",values:["map","viewport"],"default":"map"}};return a}();h.StyleDefinition=e})},"esri/views/vectorTiles/style/StyleProperty":function(){define(["require","exports","../../../Color","../GeometryUtils"],function(l,h,e,a){return function(){function c(a,d){var e;switch(a.type){case "number":e=!0;break;case "color":e=!0;d=c._parseColor(d);break;case "array":e="number"===a.value;break;default:e=!1}this.getValue=e?this._interpolate(d):
this._piecewise(d)}c.prototype._piecewise=function(a){var c=a.stops;return c?function(a){var b=c.length;if(0!==b){for(var f=0,e=0;e<b;e++)if(c[e][0]<=a)f=e;else break;return c[f][1]}}:function(){return a}};c.prototype._interpolate=function(b){var c=b.stops;if(c){var e=b.base||1;return function(b){for(var f,h,l=c.length,n=0;n<l;n++){var p=c[n];if(p[0]<=b)f=p;else{h=p;break}}if(f&&h){n=h[0]-f[0];b-=f[0];b=1===e?b/n:(Math.pow(e,b)-1)/(Math.pow(e,n)-1);if(Array.isArray(f[1])){f=f[1];h=h[1];l=[];for(n=
0;n<f.length;n++)l.push(a.interpolate(f[n],h[n],b));return l}return a.interpolate(f[1],h[1],b)}if(f)return f[1];if(h)return h[1]}}return function(){return b}};c._parseColor=function(a){if(Array.isArray(a))return a;if("string"===typeof a){var d=new e(a);if(d)return[d.r/255,d.g/255,d.b/255,d.a||1]}if(a&&a.stops)return a.stops=a.stops.map(function(a){return[a[0],c._parseColor(a[1])]}),a;throw Error("Incorrect color definition "+a);};return c}()})},"esri/views/vectorTiles/GeometryUtils":function(){define(["require",
"exports"],function(l,h){function e(a,b){a%=b;return 0<=a?a:a+b}h.C_INFINITY=Number.POSITIVE_INFINITY;h.C_PI=Math.PI;h.C_2PI=2*h.C_PI;h.C_PI_BY_2=h.C_PI/2;h.C_RAD_TO_256=128/h.C_PI;h.C_256_TO_RAD=h.C_PI/128;h.C_DEG_TO_256=256/360;h.C_DEG_TO_RAD=h.C_PI/180;h.C_SQRT2=1.414213562;h.C_SQRT2_INV=1/h.C_SQRT2;var a=1/Math.LN2;h.positiveMod=e;h.radToByte=function(a){return e(a*h.C_RAD_TO_256,256)};h.degToByte=function(a){return e(a*h.C_DEG_TO_256,256)};h.log2=function(c){return Math.log(c)*a};h.sqr=function(a){return a*
a};h.clamp=function(a,b,d){return Math.min(Math.max(a,b),d)};h.interpolate=function(a,b,d){return a*(1-d)+b*d};h.between=function(a,b,d){return a>=b&&a<=d||a>=d&&a<=b}})},"esri/views/vectorTiles/style/Filter":function(){define(["require","exports"],function(l,h){return function(){function e(a,c,b){this._op=a;"$type"===c?(this._val=b instanceof Array?b.map(function(a){return e._types.indexOf(a)}):e._types.indexOf(b),this._op+=11):(this._key=c,this._val=b)}e.prototype.filter=function(a){switch(this._op){case 0:return this._val;
case 1:return a.values[this._key]===this._val;case 2:return a.values[this._key]!==this._val;case 3:return a.values[this._key]<this._val;case 4:return a.values[this._key]>this._val;case 5:return a.values[this._key]<=this._val;case 6:return a.values[this._key]>=this._val;case 7:return-1!==this._val.indexOf(a.values[this._key]);case 8:return-1===this._val.indexOf(a.values[this._key]);case 9:for(var c=0,b=this._val;c<b.length;c++){var d=b[c];if(d.filter(a))return!0}return!1;case 10:c=0;for(b=this._val;c<
b.length;c++)if(d=b[c],!d.filter(a))return!1;return!0;case 11:c=0;for(b=this._val;c<b.length;c++)if(d=b[c],d.filter(a))return!1;return!0;case 12:return a.type===this._val;case 13:return a.type!==this._val;case 14:return a.type<this._val;case 15:return a.type>this._val;case 16:return a.type>=this._val;case 17:return a.type<=this._val;case 18:return-1!==this._val.indexOf(a.type);case 19:return-1===this._val.indexOf(a.type)}};e.createFilter=function(a){if(!a)return new e(0,void 0,!0);var c=a[0];if(1>=
a.length)return new e(0,void 0,"any"!==c);switch(c){case "\x3d\x3d":return new e(1,a[1],a[2]);case "!\x3d":return new e(2,a[1],a[2]);case "\x3e":return new e(4,a[1],a[2]);case "\x3c":return new e(3,a[1],a[2]);case "\x3e\x3d":return new e(6,a[1],a[2]);case "\x3c\x3d":return new e(5,a[1],a[2]);case "in":return new e(7,a[1],a.slice(2));case "!in":return new e(8,a[1],a.slice(2));case "any":return new e(9,void 0,a.slice(1).map(e.createFilter.bind(this)));case "all":return new e(10,void 0,a.slice(1).map(e.createFilter.bind(this)));
case "none":return new e(11,void 0,a.slice(1).map(e.createFilter.bind(this)));default:throw Error("invalid operator: "+c);}};e._types=["Unknown","Point","LineString","Polygon"];return e}()})},"esri/views/vectorTiles/SchemaHelper":function(){define(["require","exports","../../core/Error"],function(l,h,e){return function(){function a(a){this.lockedSchemaPixelSize=a}a.prototype.getCompatibleLevelRowCol=function(a){var b=a[0],d=a[1];a=a[2];if(256===this.lockedSchemaPixelSize&&0<b)b--,d>>=1,a>>=1;else if(0!==
b&&512!==this.lockedSchemaPixelSize)throw new e("Cannot get a compatible tile key for the locked tiling scheme!");return[b,d,a]};a.prototype.getSchemaShift=function(a,b){var d=0,e=0;256===this.lockedSchemaPixelSize&&(a[2]%2&&(d=2*b),a[1]%2&&(e=2*b));return[d,e]};a.prototype.adjustLevel=function(a){return 256===this.lockedSchemaPixelSize?0<a?a-1:0:a};a.create256x256CompatibleTileInfo=function(a){if(!a)return null;if(256===a.rows&&256===a.cols)return a;for(var b=a.format,d=a.compressionQuality,e=a.dpi,
g=a.origin,f=a.spatialReference,h=[],l,n,p=0,r=a.lods.length;p<r;p++){var q=a.lods[p];l=q.scale;n=2*q.resolution;h.push({level:q.level,scale:l,resolution:n})}return{rows:256,cols:256,dpi:e,format:b,compressionQuality:d,origin:g,spatialReference:f,lods:h}};return a}()})},"*noref":1}});
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/_base/lang ../core/accessorSupport/decorators ../core/Error ../core/MultiOriginJSONSupport ../core/urlUtils ../core/promiseUtils ../core/lang ../request ../geometry/Extent ../geometry/SpatialReference ../portal/support/jsonContext ./TiledLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./mixins/ArcGISCachedService ./support/TileInfo ./support/vectorTileLayerLoader ../views/vectorTiles/style/StyleRepository ../views/vectorTiles/SchemaHelper".split(" "),function(l,
h,e,a,c,b,d,m,g,f,t,s,n,p,r,q,v,w,x,y,u,z,A,B){return function(h){function k(a,b){h.call(this);this.fullExtent=this.currentStyleInfo=null;this.operationalLayerType="VectorTileLayer";this.tileInfo=null;this.type="vector-tile";this.url=null}e(k,h);k.prototype.normalizeCtorArgs=function(a,b){return"string"===typeof a?c.mixin({},{url:a},b):a};k.prototype.load=function(){var a=this,b=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1}).then(function(){if(a.portalItem&&a.portalItem.id){var b=
a.portalItem.itemUrl+"/resources/styles/root.json";return s(b,{query:{f:"json"}}).then(function(c){c.data&&a.read({url:b},r.createForItem(a.portalItem))})}}).always(function(){return a.loadStyle()});this.addResolvingPromise(b);return this};Object.defineProperty(k.prototype,"attributionDataUrl",{get:function(){var a=this.currentStyleInfo,a=a&&a.serviceUrl&&g.urlToObject(a.serviceUrl);return!a?null:this._getDefaultAttribution(a.path)},enumerable:!0,configurable:!0});Object.defineProperty(k.prototype,
"serviceUrl",{get:function(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null},enumerable:!0,configurable:!0});Object.defineProperty(k.prototype,"spatialReference",{get:function(){return this.tileInfo&&this.tileInfo.spatialReference||null},enumerable:!0,configurable:!0});Object.defineProperty(k.prototype,"styleUrl",{get:function(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null},enumerable:!0,configurable:!0});k.prototype.writeStyleUrl=function(a,b){a&&g.isProtocolRelative(a)&&
(a="https:"+a);a&&!t.endsWith(a,"root.json")&&(a=g.join(a,"root.json"));b.styleUrl=a};k.prototype.readTileIndexType=function(a,b){return b.type};k.prototype.readTileIndexUrl=function(a,b){return g.join(this.serviceUrl,b.tileMap)};k.prototype.readTileServers=function(a,b){var c=this,d=b.tiles;this.serviceUrl&&d.forEach(function(a,b,d){d[b]=g.join(c.serviceUrl,a)});return d};k.prototype.readVersion=function(a,b){return b.version?parseFloat(b.version):parseFloat(b.currentVersion)};k.prototype.readTileInfo256=
function(a,b){return new u(B.create256x256CompatibleTileInfo(this.tileInfo.toJSON()))};k.prototype.loadStyle=function(a){a=a||this.url;if(this._loadingPromise&&"string"===typeof a&&this.url===a)return this._loadingPromise;var b=this._loadingPromise;this._loadingPromise=this._getSourceAndStyle(a);b&&!b.isFulfilled()&&b.cancel();return this._loadingPromise};k.prototype.getTileUrl=function(a,b,c){var d=this.tileServers[b%this.tileServers.length];return d=d.replace(/\{z\}/gi,a.toString()).replace(/\{y\}/gi,
b.toString()).replace(/\{x\}/gi,c.toString())};k.prototype.write=function(a,b){return b&&b.origin&&!this.styleUrl?(b.messages&&b.messages.push(new d("vectortilelayer:unsupported","VectorTileLayer ("+this.title+", "+this.id+") with style defined by JSON only are not supported",{layer:this})),null):this.inherited(arguments,[a,b])};k.prototype._getSourceAndStyle=function(a){var b=this;return!a?f.reject(Error("invalid style!")):z.loadMetadata(a).then(function(a){b._set("currentStyleInfo",{serviceUrl:a.serviceUrl,
styleUrl:a.styleUrl,spriteUrl:a.spriteUrl,glyphsUrl:a.glyphsUrl,style:a.style,layerDefinition:a.layerDefinition});b._set("styleRepository",new A(a.style,a));b.read(a.layerDefinition)})};k.prototype._getDefaultAttribution=function(a){var b=a.match(/^https?:\/\/(basemaps|basemapsbeta)\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i);a=["World_Basemap"];if(b){var c=b[3]&&b[3].toLowerCase();if(c)for(var b=b[2]||"",d=0;d<a.length;d++){var e=a[d];if(-1<e.toLowerCase().indexOf(c))return g.normalize("//static.arcgis.com/attribution/Vector"+
b+"/"+e)}}};a([b.shared({"2d":"../views/2d/layers/VectorTileLayerView2D","3d":"../views/3d/layers/VectorTileLayerView3D"})],k.prototype,"viewModulePaths",void 0);a([b.property({readOnly:!0,dependsOn:["currentStyleInfo"]})],k.prototype,"attributionDataUrl",null);a([b.property({readOnly:!0})],k.prototype,"currentStyleInfo",void 0);a([b.property({type:n,readOnly:!0})],k.prototype,"fullExtent",void 0);a([b.property({readOnly:!0,dependsOn:["currentStyleInfo"]})],k.prototype,"serviceUrl",null);a([b.property({type:p,
dependsOn:["tileInfo"],readOnly:!0})],k.prototype,"spatialReference",null);a([b.property({readOnly:!0})],k.prototype,"styleRepository",void 0);a([b.property({readOnly:!0,dependsOn:["currentStyleInfo"],json:{writable:!0,writeAlways:!0}})],k.prototype,"styleUrl",null);a([b.write("styleUrl")],k.prototype,"writeStyleUrl",null);a([b.property({readOnly:!0})],k.prototype,"tileIndexType",void 0);a([b.read("tileIndexType",["tileIndexType","type"])],k.prototype,"readTileIndexType",null);a([b.property({readOnly:!0})],
k.prototype,"tileIndexUrl",void 0);a([b.read("tileIndexUrl",["tileIndexUrl","tileMap"])],k.prototype,"readTileIndexUrl",null);a([b.property({readOnly:!0,type:u})],k.prototype,"tileInfo",void 0);a([b.property({readOnly:!0})],k.prototype,"tileServers",void 0);a([b.read("tileServers",["tiles"])],k.prototype,"readTileServers",null);a([b.property({json:{readable:!1}})],k.prototype,"type",void 0);a([b.property({json:{origins:{webDocument:{readFrom:"styleUrl"},portalItem:{readFrom:"url"}},writable:!1,readable:!1}})],
k.prototype,"url",void 0);a([b.property({readOnly:!0})],k.prototype,"version",void 0);a([b.read("version",["version","currentVersion"])],k.prototype,"readVersion",null);a([b.property({readOnly:!0})],k.prototype,"tileInfo256",void 0);a([b.read("tileInfo256",["tileInfo"])],k.prototype,"readTileInfo256",null);return k=a([b.subclass("esri.layers.VectorTileLayer")],k)}(b.declared(q,v,w,x,m,y))});