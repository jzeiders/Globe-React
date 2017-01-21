// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports dojo/Deferred ../../core/promiseUtils ../../core/executeAsync ./VertexMemoryBuffer ./IndexMemoryBuffer ./TileParser ./BackgroundBucket ./FillBucket ./LineBucket ./SymbolBucket ./Placement ./GeometryUtils".split(" "),function(G,H,z,q,A,e,h,B,C,D,E,F,s,t){return function(){function f(b,e,a,k){void 0===k&&(k=0);this.rotation=0;this._symbolBuckets=[];this.tileKey=b;this.refKey=e;this._workerTileHandler=a;this.status=0;this.rotation=k;this.placementEngine=new s.PlacementEngine(t.C_DEG_TO_RAD*
k)}f.prototype.setDataAndParse=function(b,f){var a=this;this.polygonVertexBuffer=new e.PolygonMemoryBuffer;this.polygonOutlineVertexBuffer=new e.PolygonOutlineMemoryBuffer;this.polygonIndexBuffer=new h.TriangleElementMemoryBuffer;this.polygonOutlineIndexBuffer=new h.TriangleElementMemoryBuffer;this.lineVertexBuffer=new e.LineMemoryBuffer;this.lineIndexBuffer=new h.TriangleElementMemoryBuffer;this.lineJoinVertexBuffer=new e.LineJoinMemoryBuffer;this.markerVertexBuffer=new e.SymbolMemoryBuffer;this.markerIndexBuffer=
new h.TriangleElementMemoryBuffer;this.textVertexBuffer=new e.SymbolMemoryBuffer;this.textIndexBuffer=new h.TriangleElementMemoryBuffer;var k=new z(function(b){a.status=6});this._parse(b,f).then(function(b){a.placementEngine=null;for(var e=new Uint32Array([2,a.polygonVertexBuffer.sizeInBytes,3,a.polygonOutlineVertexBuffer.sizeInBytes,6,a.polygonIndexBuffer.sizeInBytes,7,a.polygonOutlineIndexBuffer.sizeInBytes,0,a.lineVertexBuffer.sizeInBytes,8,a.lineIndexBuffer.sizeInBytes,1,a.lineJoinVertexBuffer.sizeInBytes,
4,a.markerVertexBuffer.sizeInBytes,9,a.markerIndexBuffer.sizeInBytes,5,a.textVertexBuffer.sizeInBytes,10,a.textIndexBuffer.sizeInBytes]),d=[],f=b.length,l=0;l<f;l++){var c=b[l];c instanceof D?(d.push(c.layerIndex),d.push(1),d.push(c.polygonIndexStart),d.push(c.polygonIndexCount),d.push(c.polygonOutlineIndexStart),d.push(c.polygonOutlineIndexCount)):c instanceof E?(d.push(c.layerIndex),d.push(2),d.push(c.triangleIndexStart),d.push(c.triangleIndexCount),d.push(c.connectorStart),d.push(c.connectorCount)):
c instanceof F?(d.push(c.layerIndex),d.push(3),d.push(0===c.markerIndexCount?0:c.markerIndexStart),d.push(c.markerIndexCount),d.push(0===c.textIndexCount?0:c.textIndexStart),d.push(c.textIndexCount),d.push(c.sdfMarker?1:0)):c instanceof C&&(d.push(c.layerIndex),d.push(0))}b=new Uint32Array(d);var d=a.polygonVertexBuffer.toBuffer(),f=a.polygonOutlineVertexBuffer.toBuffer(),l=a.polygonIndexBuffer.toBuffer(),c=a.polygonOutlineIndexBuffer.toBuffer(),h=a.lineVertexBuffer.toBuffer(),u=a.lineIndexBuffer.toBuffer(),
v=a.lineJoinVertexBuffer.toBuffer(),w=a.markerVertexBuffer.toBuffer(),g=a.markerIndexBuffer.toBuffer(),x=a.textVertexBuffer.toBuffer(),y=a.textIndexBuffer.toBuffer();a.placementEngine=null;a.polygonVertexBuffer=null;a.polygonIndexBuffer=null;a.polygonOutlineVertexBuffer=null;a.polygonOutlineIndexBuffer=null;a.lineVertexBuffer=null;a.lineIndexBuffer=null;a.lineJoinVertexBuffer=null;k.resolve({data:{bufferDataInfo:e.buffer,bucketDataInfo:b.buffer,bufferData:[d,f,l,c,h,u,v,w,g,x,y]},buffers:[d,l,f,c,
h,u,v,w,g,x,y,e.buffer,b.buffer]})});return k.promise};f.prototype.addBucket=function(b){this._symbolBuckets.push(b)};f.prototype.updateSymbols=function(b){var f=this,a=this._symbolBuckets;if(!a)return q.resolve({data:null});this.rotation=b;var k=new s.PlacementEngine(360*(b/256)*t.C_DEG_TO_RAD),m=new e.SymbolMemoryBuffer,n=new h.TriangleElementMemoryBuffer,d=new e.SymbolMemoryBuffer,p=new h.TriangleElementMemoryBuffer,l=[],c=a.length,r=0;return A(function(){if(6===f.status)return!0;if(r<c){var b=
a[r++].copy(m,n,d,p,k);b&&(l.push(b),b.updateSymbols())}return r>=c},5).then(function(){if(6===f.status||0===m.sizeInBytes&&0===n.sizeInBytes&&0===d.sizeInBytes&&0===p.sizeInBytes)return{data:null};var a=new Uint32Array([4,m.sizeInBytes,9,n.sizeInBytes,5,d.sizeInBytes,10,p.sizeInBytes]),b=[];c=l.length;for(var e=0;e<c;e++){var g=l[e];b.push(g.layerIndex);b.push(3);b.push(0===g.markerIndexCount?0:g.markerIndexStart);b.push(g.markerIndexCount);b.push(0===g.textIndexCount?0:g.textIndexStart);b.push(g.textIndexCount);
b.push(g.sdfMarker?1:0)}var b=new Uint32Array(b),e=m.toBuffer(),g=n.toBuffer(),h=d.toBuffer(),k=p.toBuffer();return{data:{bufferDataInfo:a.buffer,bucketDataInfo:b.buffer,bufferData:[e,g,h,k]},buffers:[e,g,h,k,a.buffer,b.buffer]}}).otherwise(function(a){return q.resolve({data:null})})};f.prototype.setObsolete=function(){this.status=6};f.prototype.getLayers=function(){return this._workerTileHandler.getLayers()};f.prototype.getWorkerTileHandler=function(){return this._workerTileHandler};f.prototype._parse=
function(b,e){return!b||0===b.byteLength?q.resolve([]):(new B(b,this,e)).parse()};return f}()});