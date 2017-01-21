// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../input/InputHandler ./support ../../navigation/NavigationConstants".split(" "),function(c,f,g,h,k,e){c=function(c){function b(l,m,a,d){var b=this;c.call(this,"esri.views.3d.input.handlers.DragRotate",!0);this.view=l;this.pointerType=m;this.pivotPoint=a;this.registerIncoming("drag",d,function(a){return b._handleDrag(a)});switch(a){case "center":this._navigationPivot=e.Rotate.PivotPoint.POI;break;case "eye":this._navigationPivot=
e.Rotate.PivotPoint.EYE}}g(b,c);b.prototype._handleDrag=function(c){var b=c.data;if(!(1<b.pointers.length)){var a=b.pointers[0];if(k.eventMatchesPointerType(a.startEvent.native,this.pointerType)){var a=[a.currentEvent.x,this.view.height-a.currentEvent.y],d=this.view.navigation.rotate;switch(b.action){case "start":d.begin(a,this._navigationPivot);break;case "update":d.update(a,this._navigationPivot);break;case "end":d.end(a)}c.stopPropagation()}}};return b}(h.InputHandler);f.DragRotate=c});