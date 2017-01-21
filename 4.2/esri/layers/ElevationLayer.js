// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators dojo/_base/lang ../request ../core/Error ../core/promiseUtils ../core/requireUtils ./TiledLayer ./mixins/ArcGISMapService ./mixins/ArcGISCachedService ./mixins/OperationalLayer ./mixins/PortalLayer ./support/rasterFormats/LercCodec".split(" "),function(k,w,l,c,d,e,f,m,g,n,p,q,r,s,t,u){return function(h){function b(a){h.call(this);this.type="elevation";this.url=null;this.opacity=
1;this.operationalLayerType="ArcGISTiledElevationServiceLayer"}l(b,h);b.prototype.normalizeCtorArgs=function(a,v){return"string"===typeof a?e.mixin({},{url:a},v):a};b.prototype.load=function(){var a=this;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(a){for(var b=0;b<a.typeKeywords.length;b++)if("elevation 3d layer"===a.typeKeywords[b].toLowerCase())return!0;throw new m("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",
{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"});}}).always(function(){return a._fetchImageService()}));return this};b.prototype.fetchTile=function(a,b,d,c){var e=this;void 0===c&&(c=0);return this.load().then(function(){return e._fetchTileAvailability(a,b,d)}).then(function(){var c=e.getTileUrl(a,b,d);return f(c,{responseType:"array-buffer",failOk:!0})}).then(function(a){a=u.decode(a.data,{noDataValue:c,returnFileInfo:!0});return{values:a.pixelData,width:a.width,height:a.height,
maxZError:a.fileInfo.maxZError,noDataValue:a.noDataValue}})};b.prototype.queryElevation=function(a,b){var c=this;return n.when(k,"./support/ElevationQuery").then(function(d){return(new d.ElevationQuery).query(c,a,b)})};b.prototype._fetchTileAvailability=function(a,b,c){return this.tilemapCache?this.tilemapCache.fetchAvailability(a,b,c):g.resolve("unknown")};b.prototype._fetchImageService=function(){var a=this;return g.resolve().then(function(){if(a.resourceInfo)return a.resourceInfo;var b={query:e.mixin({f:"json"},
a.parsedUrl.query),responseType:"json",callbackParamName:"callback"};return f(a.parsedUrl.path,b)}).then(function(b){b.ssl&&(a.url=a.url.replace(/^http:/i,"https:"));a.read(b.data,{origin:"service",url:a.parsedUrl})})};c([d.shared({"3d":"../views/3d/layers/ElevationLayerView3D"})],b.prototype,"viewModulePaths",void 0);c([d.property()],b.prototype,"resourceInfo",void 0);c([d.property()],b.prototype,"type",void 0);c([d.property()],b.prototype,"url",void 0);c([d.property({json:{readable:!1,writable:!1}})],
b.prototype,"opacity",void 0);c([d.property()],b.prototype,"operationalLayerType",void 0);return b=c([d.subclass("esri.layers.ElevationLayer")],b)}(d.declared(p,q,r,s,t))});