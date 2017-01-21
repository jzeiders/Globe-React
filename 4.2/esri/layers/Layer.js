// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require dojo/Deferred ../core/Accessor ../core/Error ../core/Evented ../core/Identifiable ../core/Loadable ../core/urlUtils ../core/requireUtils ../core/promiseUtils ../core/Logger ../config ../kernel ../request ../geometry/SpatialReference ../geometry/Extent".split(" "),function(d,m,c,f,n,p,q,r,e,s,g,t,h,u,k,v){var w=0,l=g.getLogger("esri.layers.Layer");c=c.createSubclass([n,p,q],{declaredClass:"esri.layers.Layer",properties:{attributionDataUrl:null,credential:{value:null,readOnly:!0,dependsOn:["loaded",
"parsedUrl"],get:function(){var a=this.loaded&&this.parsedUrl&&h.id&&h.id.findCredential(this.parsedUrl.path)||null;a&&a.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));return a}},fullExtent:new v(-180,-90,180,90,k.WGS84),hasAttributionData:{readOnly:!0,dependsOn:["attributionDataUrl"],get:function(){return null!=this.attributionDataUrl}},id:{get:function(){return Date.now().toString(16)+"-layer-"+w++}},legendEnabled:!0,listMode:"show",opacity:{value:1,type:Number,cast:function(a){return 0>a?
0:1<a?1:a}},parsedUrl:{readOnly:!0,dependsOn:["url"],get:function(){var a=this._get("url");return a?r.urlToObject(a):null}},popupEnabled:!0,refreshInterval:0,attributionVisible:!0,spatialReference:k.WGS84,title:null,token:{dependsOn:["credential.token"],get:function(){var a=this.get("parsedUrl.query.token"),b=this.get("credential.token");return a||b||null},set:function(a){a?this._override("token",a):this._clearOverride("token")}},type:{type:String,readOnly:!0,value:null,json:{readable:!1}},url:{value:null},
visible:!0},initialize:function(){this.otherwise(function(a){g.getLogger(this.declaredClass).error("#load()","Failed to load layer (title: '"+this.title+"', id: '"+this.id+"')",a)})},createLayerView:function(a){var b=this.viewModulePaths[a.type];return b?e.when(d,b).then(function(b){b.default&&(b=b.default);return new b({layer:this,view:a})}.bind(this)):s.reject(new f("layerview:module-unavailable","No LayerView module available for layer '${layer.declaredClass}' and view type: '${view.type}'",{view:a,
layer:this}))},destroyLayerView:function(a){a.destroy()},fetchAttributionData:function(){var a=this.attributionDataUrl;this.hasAttributionData&&a?a=u(a,{query:{f:"json"},responseType:"json"}).then(function(a){return a.data}):(a=new m,a.reject(new f("layer:no-attribution-data","Layer does not have attribution data")),a=a.promise);return a},refresh:function(){this.emit("refresh")}});c.fromArcGISServerUrl=function(a){"string"===typeof a&&(a={url:a});var b=e.when(d,"./support/arcgisLayers").then(function(b){return b.fromUrl(a)});
b.otherwise(function(b){l.error("#fromArcGISServerUrl({ url: '"+a.url+"'})","Failed to create layer from arcgis server url",b)});return b};c.fromPortalItem=function(a){if(a&&!a.portalItem&&"object"===typeof a&&(!a.declaredClass||"esri.portal.PortalItem"===a.declaredClass))a={portalItem:a};var b=e.when(d,"../portal/support/portalLayers").then(function(b){return b.fromItem(a)});b.otherwise(function(b){var c=a&&a.portalItem;l.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+
(c&&c.portal&&c.portal.url||t.portalUrl)+"', id: '"+(c&&c.id||"unset")+"')",b)});return b};return c});