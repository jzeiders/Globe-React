// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports dojo/promise/all dojo/Deferred ./Rect ../webgl/Texture ./RectangleBinPack".split(" "),function(A,B,w,x,u,y,z){return function(){function d(b,g,a){this.height=this.width=0;this._dirty=!1;this._glyphIndex={};this._rangePromises={};(0>=b||0>=g)&&console.error("Glyph mosaic width and height must be greater than zero!");this.width=b;this.height=g;this._glyphSource=a;this._binPack=new z(b,g);this._glyphData=new Uint8Array(b*g)}d.prototype.getGlyphItems=function(b,g,a){for(var c=
this,n=[],q=this._glyphSource,f=new Set,h=1/256,d=0;d<a.length;d++)f.add(Math.floor(a[d]*h));var r=[];f.forEach(function(a){if(256>=a){var b=new x;r.push(b.promise);var k=g+a,e=c._rangePromises[k];e?e.push(b):(c._rangePromises[k]=[b],q.getRange(g,a).then(function(){var a=c._rangePromises[k];delete c._rangePromises[k];for(var b=0;b<a.length;b++)a[b].resolve()}))}});return w(r).then(function(d){d=c._glyphIndex[g];d||(d={},c._glyphIndex[g]=d);for(var f=0;f<a.length;f++){var k=a[f],e=d[k];if(e)e.tileIDs.add(b),
n[k]={rect:e.rect,metrics:e.metrics};else{var p=q.getGlyph(g,k);if(p&&p.metrics){var e=p.metrics,l=void 0;if(0===e.width)l=new u(0,0,0,0);else{var m=e.width+6,h=e.height+6,l=c._binPack.allocate(m+(m%4?4-m%4:0),h+(h%4?4-h%4:0));0>=l.width&&(l=new u(0,0,0,0));var p=p.bitmap,r=void 0,v=void 0;if(p)for(var s=0;s<h;s++)for(var r=m*s,v=c.width*(l.y+s)+l.x,t=0;t<m;t++)c._glyphData[v+t]=p[r+t]}m=new Set;m.add(b);d[k]={rect:l,metrics:e,tileIDs:m};n[k]={rect:l,metrics:e};c._dirty=!0}}}return n})};d.prototype.removeGlyphs=
function(b){for(var d in this._glyphIndex){var a=this._glyphIndex[d];if(a){var c=void 0,n;for(n in a)if(c=a[n],c.tileIDs["delete"](b),0===c.tileIDs.size){for(var c=c.rect,q=void 0,f=void 0,h=0;h<c.height;h++){q=this.width*(c.y+h)+c.x;for(f=0;f<c.width;f++)this._glyphData[q+f]=0}delete a[n];this._dirty=!0}}}};d.prototype.bind=function(b,d,a){void 0===a&&(a=0);this._texture||(this._texture=new y(b,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));
this._texture.setSamplingMode(d);b.bindTexture(this._texture,a);this._dirty&&this._texture.setData(this._glyphData);this._dirty=!1};return d}()});