// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/json","dojo/Deferred","../../request"],function(n,k,p,q,h){return n(null,{declaredClass:"esri.tasks._NAServiceDescription",_sd:null,getServiceDescription:function(g,f){var c=new q;if(this._sd)return c.resolve(this._sd),c.promise;if(this.url&&this.parsedUrl){var a=this.url,b=(this.parsedUrl.path.match(/\/solve$/)||[]).length?"Route":(this.parsedUrl.path.match(/\/solveClosestFacility$/)||[]).length?"ClosestFacility":"ServiceAreas",d,m=function(a){h(a+
("/"===a[a.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:b},callbackParamName:"callback"}).then(function(e){var a=[],l=null;if(e&&e.data&&e.data.results&&e.data.results.length){e=e.data;for(var b=0;b<e.results.length;b++)if("supportedTravelModes"===e.results[b].paramName){if(e.results[b].value&&e.results[b].value.features)for(var f=0;f<e.results[b].value.features.length;f++)if(e.results[b].value.features[f].attributes){var g=p.parse(e.results[b].value.features[f].attributes.TravelMode);
a.push(g)}}else"defaultTravelMode"===e.results[b].paramName&&(l=e.results[b].value)}d.supportedTravelModes=a;d.defaultTravelMode=l;c.resolve(d)},function(a){console.log("Could not read from the routingUtilities service.");c.reject(a)})};h(a,{query:{f:"json"},callbackParamName:"callback"}).then(function(b){d=b.data;d.supportedTravelModes||(d.supportedTravelModes=[]);for(b=0;b<d.supportedTravelModes.length;b++)d.supportedTravelModes[b].id||(d.supportedTravelModes[b].id=d.supportedTravelModes[b].itemId);
f?c.resolve(d):g?m(g):10.4<=d.currentVersion?h(a+("/"===a[a.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"},callbackParamName:"callback"}).then(function(a){d.supportedTravelModes=a.data.supportedTravelModes;d.defaultTravelMode=a.data.defaultTravelMode;c.resolve(d)},function(a){console.log("Could not get to the NAServer's retrieveTravelModes.");c.reject(a)}):h(a.substring(0,a.indexOf("/rest/")+6)+"info",{query:{f:"json"},callbackParamName:"callback"}).then(function(b){b.data.owningSystemUrl?
(a=b.data.owningSystemUrl,h(a+("/"===a[a.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"},callbackParamName:"callback"}).then(function(a){a&&a.data&&a.data.helperServices&&a.data.helperServices.routingUtilities&&a.data.helperServices.routingUtilities.url?m(a.data.helperServices.routingUtilities.url):(console.log("Portal does not have helperServices.routingUtilities defined."),c.resolve(d))},function(a){console.log("Could not get to the portal's self.");c.reject(a)})):c.resolve(d)},
function(a){console.log("Could not get to the NAServer service description.");c.reject(a)})},function(a){c.reject(a)})}else c.reject("NA Task has no URL specified.");c.then(k.hitch(this,function(a){this._sd=a}),k.hitch(this,function(){this._sd=null}));return c.promise},_isInputGeometryZAware:function(g,f){for(var c=0;c<f.length;c++){var a=g[f[c]];if(a&&a.length)for(var b=0;b<a.length;b++)if(a[b].hasZ)return!0}return!1},_dropZValuesOffInputGeometry:function(g,f){var c,a;for(c=0;c<f.length;c++){var b=
g[f[c]];if(b&&b.length)for(a=0;a<b.length;a++)b[a].z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}})});