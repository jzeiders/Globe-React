// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("../../../core/declare dojo/Deferred dojo/_base/lang ../webgl-engine/Stage ../webgl-engine/lib/Texture ../webgl-engine/lib/Util".split(" "),function(g,h,k,e,l,m){var f=m.assert;return g(null,{constructor:function(a,b,c){this._streamDataSupplier=a;this._stage=b;this._textureRecords={};this._loadedHandler=this._loadedHandler.bind(this);this._errorHandler=this._errorHandler.bind(this);this._textureOptions=c||{}},acquire:function(a,b){var c;if(c=this._textureRecords[a])return c.referenceCount++,
c.texture||c.clientDfd;if(b){var d=b(a);this._stage.add(e.ModelContentType.TEXTURE,d);c={texture:d,referenceCount:1};this._textureRecords[a]=c;return d}c=new h;d=this._streamDataSupplier.request(a,"image");this._textureRecords[a]={clientDfd:c,loaderDfd:d,texture:null,referenceCount:1};d.then(this._loadedHandler,this._errorHandler);return c.promise},release:function(a){var b=this._textureRecords[a];b?(1>b.referenceCount&&console.warn("TextureCollection: reference count is \x3c 1 for "+a),b.referenceCount--,
1>b.referenceCount&&(b.texture?(this._stage.remove(e.ModelContentType.TEXTURE,b.texture.getId()),b.texture=null):this._streamDataSupplier.cancelRequest(b.loaderDfd),delete this._textureRecords[a])):console.warn("TextureCollection: texture doesn't exist: "+a)},isInUse:function(a){a=this._textureRecords[a];f(!a||0<a.referenceCount,"texture record with zero reference count");return!!a},_loadedHandler:function(a,b,c){a=this._textureRecords[a];f(a&&!a.texture);c=k.mixin({width:b.width,height:b.height},
this._textureOptions);b=new l(b,"symbol",c);this._stage.add(e.ModelContentType.TEXTURE,b);a.texture=b;a.clientDfd.resolve(b)},_errorHandler:function(a){a=this._textureRecords[a];f(a&&!a.texture);a.clientDfd.reject()}})});