// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/extendsHelper ./ImmutableArray ../geometry/Point ../kernel".split(" "),function(n,p,h,k,d,l){var m=0===l.version.indexOf("4.");return function(g){function c(b,a,c,f,e,d){g.call(this,b);this._lazyPt=[];this._hasM=this._hasZ=!1;this._spRef=a;this._hasZ=c;this._hasM=f;this._cacheId=e;this._partId=d}h(c,g);c.prototype.get=function(b){if(void 0===this._lazyPt[b]){var a=this._elements[b];if(void 0===a)return;var c=this._hasZ,f=this._hasM,e=null,e=c&&!f?new d(a[0],
a[1],a[2],void 0,this._spRef):f&&c?new d(a[0],a[1],void 0,a[2],this._spRef):c&&f?new d(a[0],a[1],a[2],a[3],this._spRef):new d(a[0],a[1],this._spRef);m?e.cache._arcadeCacheId=this._cacheId.toString()+"-"+this._partId.toString()+"-"+b.toString():e.setCacheValue("_arcadeCacheId",this._cacheId.toString()+"-"+this._partId.toString()+"-"+b.toString());this._lazyPt[b]=e}return this._lazyPt[b]};c.prototype.equalityTest=function(b){return b===this?!0:null===b||!1===b instanceof c?!1:b.getUniqueHash()===this.getUniqueHash()};
c.prototype.getUniqueHash=function(){return this._cacheId.toString()+"-"+this._partId.toString()};return c}(k)});