// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support"],function(c,e,f,g,h){c=function(c){function d(b,a){void 0===b&&(b=300);void 0===a&&(a=1.5);c.call(this,"recognizers.PointerClickAndDrag",!1);this.maximumClickDelay=b;this.movementUntilDrag=a;this._pointerState=new Map;this._pointerDrag=this.registerOutgoing("pointer-drag");this._pointerClick=this.registerOutgoing("pointer-click");this.registerIncoming("pointer-down",this._handlePointerDown.bind(this));
this.registerIncoming("pointer-up",this._handlePointerUp.bind(this));this._moveHandle=this.registerIncoming("pointer-move",this._handlePointerMove.bind(this));this._moveHandle.pause()}f(d,c);d.prototype._handlePointerDown=function(b){var a=b.data;this._pointerState.set(a.native.pointerId,{startEvent:a,previousEvent:a,startTimestamp:b.timestamp,totalMovement:0,isDragging:!1,downButton:a.native.button});this.startCapturingPointer(a.native);this._moveHandle.resume()};d.prototype._createPointerDragData=
function(b,a,d){return{action:b,startEvent:a.startEvent,previousEvent:a.previousEvent,currentEvent:d}};d.prototype._handlePointerMove=function(b){b=b.data;var a=this._pointerState.get(b.native.pointerId);a&&(a.isDragging?this._pointerDrag.emit(this._createPointerDragData("update",a,b)):(a.totalMovement+=h.manhattanDistance(b,a.previousEvent),a.totalMovement>this.movementUntilDrag&&(a.isDragging=!0,a.previousEvent=a.startEvent,this._pointerDrag.emit(this._createPointerDragData("start",a,a.startEvent)),
this._pointerDrag.emit(this._createPointerDragData("update",a,b)))),a.previousEvent=b)};d.prototype._handlePointerUp=function(b){var a=b.data,d=a.native.pointerId,c=this._pointerState.get(d);c&&(c.isDragging?this._pointerDrag.emit(this._createPointerDragData("end",c,a)):c.downButton===a.native.button&&b.timestamp-c.startTimestamp<=this.maximumClickDelay&&this._pointerClick.emit(a),this._pointerState.delete(d),this.stopCapturingPointer(a.native),0===this._pointerState.size&&this._moveHandle.pause())};
return d}(g.InputHandler);e.PointerClickAndDrag=c});