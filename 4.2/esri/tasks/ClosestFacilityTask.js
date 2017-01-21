// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang ../request ../core/promiseUtils ../geometry/support/normalizeUtils ./Task ./support/NAServiceDescription ./support/ClosestFacilitySolveResult".split(" "),function(g,h,k,l,m,n,p){return m.createSubclass([n],{declaredClass:"esri.tasks.ClosestFacilityTask",properties:{parsedUrl:{get:function(){var a=this._parseUrl(this.url);a.path+="/solveClosestFacility";return a}},url:{}},solve:function(a,c){var e=[],b=[],d={},f={};a.incidents&&a.incidents.features&&this._collectGeometries(a.incidents.features,
b,"incidents.features",d);a.facilities&&a.facilities.features&&this._collectGeometries(a.facilities.features,b,"facilities.features",d);a.pointBarriers&&a.pointBarriers.features&&this._collectGeometries(a.pointBarriers.features,b,"pointBarriers.features",d);a.polylineBarriers&&a.polylineBarriers.features&&this._collectGeometries(a.polylineBarriers.features,b,"polylineBarriers.features",d);a.polygonBarriers&&a.polygonBarriers.features&&this._collectGeometries(a.polygonBarriers.features,b,"polygonBarriers.features",
d);return l.normalizeCentralMeridian(b).then(function(a){for(var b in d){var c=d[b];e.push(b);f[b]=a.slice(c[0],c[1])}return this._isInputGeometryZAware(f,e)?this.getServiceDescription():k.resolve({dontCheck:!0})}.bind(this)).then(function(b){!b.hasZ&&!b.dontCheck&&this._dropZValuesOffInputGeometry(f,e);b={query:this._encode(g.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON(f))),callbackParamName:"callback"};if(this.requestOptions||c)b=g.mixin({},this.requestOptions,c,b);return h(this.parsedUrl.path,
b)}.bind(this)).then(this._handleSolveResponse)},_collectGeometries:function(a,c,e,b){b[e]=[c.length,c.length+a.length];a.forEach(function(a){c.push(a.geometry)})},_handleSolveResponse:function(a){return p.fromJSON(a.data)}})});