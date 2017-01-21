// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("../../../core/declare dojo/_base/lang dojo/Deferred ../../../core/Accessor ../../../core/Promise ../../../core/urlUtils ../../../core/promiseUtils ../../support/WebSocketConnector ../../../tasks/QueryTask ../../../request".split(" "),function(p,e,q,r,s,l,g,t,m,u){return p([r,s],{getDefaults:function(a){var b=this.inherited(arguments),d=a.layer;d&&(b=e.mixin(b,{url:d.url}));return b},initialize:function(){this.addResolvingPromise(this._fetchLayers())},properties:{connectionInfo:{get:function(){if(this.layer.hasMemorySource||
this.layer.socketUrl)return{serviceSocketUrls:[this.layer.socketUrl]};if(this.layerDefinition){var a={},b=this.layerDefinition,d=[],c=[],e=[],f,h,k;b.streamUrls&&b.streamUrls.forEach(function(b){"ws"===b.transport&&(d=b.urls,a.token=b.token)},this);d.forEach(function(a){0===a.lastIndexOf("wss",0)?e.push(a):c.push(a)});if((b="https"===l.appUrl.scheme||0===this.url.lastIndexOf("https:",0)?e:0===c.length?e:c)&&1<b.length)for(f=0;f<b.length-1;f++)h=f+Math.floor(Math.random()*(b.length-f)),k=b[h],b[h]=
b[f],b[f]=k;a.serviceSocketUrls=b;return a}}},latestUrl:{get:function(){var a=this.layerDefinition;return(a=a.keepLatestArchive&&a.keepLatestArchive.featuresUrl)?a:null}},latestQueryTask:{get:function(){var a=this.latestUrl;return a?new m(a):null}},relatedFeaturesInfo:{get:function(){var a=(this.layerDefinition||{}).relatedFeatures;return a=a&&a.featuresUrl?a:null}},relatedFeaturesQueryTask:{get:function(){var a=this.relatedFeaturesInfo;return(a=a?a.featuresUrl:null)?new m(a):null}},parsedUrl:{get:function(){return this.url?
l.urlToObject(this.url):null}},url:null},createWebSocketConnector:function(a){var b=new q;this.then(function(){var d=this.connectionInfo,c,n=this.layer.spatialReference,f,h,k={};try{c=this.makeFilter()}catch(g){b.reject(g);return}if(d){d.socketUrl?h=[d.socketUrl]:d.serviceSocketUrls&&(h=d.serviceSocketUrls.map(function(a){return a+"/"+this.layer.socketDirection}.bind(this)));k.socketUrls=h;if(c&&(c.where||c.geometry||c.outFields))f=e.mixin(f||{},{where:c.where,geometry:c.geometry,outFields:c.outFields});
d.token&&(f=e.mixin(f||{},{token:d.token}));a&&(n&&a.wkid!==n.wkid)&&(f=e.mixin(f||{},{outSR:a.wkid}));k.queryParams=f;k.layerSource=this;d=new t(k);b.resolve(d)}else b.reject(Error("No web socket urls found"))}.bind(this));return b.promise},getWebSocketToken:function(){return this._fetchLayer().then(function(){var a=null;this.layerDefinition.streamUrls&&this.layerDefinition.streamUrls.some(function(b){if("ws"===b.transport)return a=b.token,!0},this);return a}.bind(this))},makeFilter:function(a){var b=
this.layer,d=null,d=null,c;a?(a.hasOwnProperty("definitionExpression")&&(c=e.mixin(c||{},{where:a.definitionExpression})),a.hasOwnProperty("geometryDefinition")&&(d=a.geometryDefinition,c=e.mixin(c||{},{geometry:d}))):(b.hasOwnProperty("definitionExpression")&&b.definitionExpression&&(c=e.mixin(c||{},{where:b.definitionExpression})),b.hasOwnProperty("geometryDefinition")&&b.geometryDefinition&&(d=JSON.stringify(b.geometryDefinition.toJSON()),c=e.mixin(c||{},{geometry:d})));if((a=this.relatedFeaturesInfo&&
this.relatedFeaturesInfo.outFields||b.outFields)&&-1===a.indexOf("*")){var g=b.fields.map(function(a){return a.name}),d=a.filter(function(a){return-1!==g.indexOf(a)}).join(",");c=e.mixin(c||{},{outFields:d})}return c},_fetchLayers:function(){return this._fetchStreamLayer().then(function(a){a.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));this.layerDefinition=a.data;return this._fetchArchiveLayer()}.bind(this)).then(function(a){this.archivedLayerDefinition=a&&a.data;return this._fetchRelatedLayer()}.bind(this)).then(function(a){this.relatedLayerDefinition=
a&&a.data}.bind(this))},_fetchStreamLayer:function(){return this._requestServiceDefinition({url:this.layer.parsedUrl.path,content:e.mixin({f:"json"},this.layer.parsedUrl.query)})},_fetchArchiveLayer:function(){var a=this.latestUrl;return!a?g.resolve():this._requestServiceDefinition({url:a})},_fetchRelatedLayer:function(){var a=this.relatedFeaturesInfo;return!a?g.resolve():this._requestServiceDefinition({url:a.featuresUrl})},_requestServiceDefinition:function(a){return!a||!a.url?g.reject(Error("url is a required options property")):
u(a.url,{query:e.mixin(a.content||{},{f:"json"}),responseType:"json",callbackParamName:"callback"})}})});