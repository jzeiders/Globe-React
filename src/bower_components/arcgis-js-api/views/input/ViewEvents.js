// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","./InputHandler","../../geometry/ScreenPoint"],function(t,e,n,r,a){function i(t){return!!s[t]}function o(t){for(var e=0,n=t;e<n.length;e++){var r=n[e];if(!i(r))return!1}return!0}var p,s={click:!0,"double-click":!0,drag:!0,"key-down":!0,"key-up":!0,"pointer-down":!0,"pointer-move":!0,"pointer-up":!0,"mouse-wheel":!0};!function(t){t[t.Left=0]="Left",t[t.Middle=1]="Middle",t[t.Right=2]="Right"}(p||(p={}));var u=function(){function t(t){this.handlers=new Map,this.counter=0,this.view=t,this.inputManager=null}return t.prototype.connect=function(t){var e=this;t&&this.disconnect(),this.inputManager=t,this.handlers.forEach(function(t,n){return e.inputManager.installHandlers(n,[t])})},t.prototype.disconnect=function(){var t=this;this.inputManager&&this.handlers.forEach(function(e,n){return t.inputManager.uninstallHandlers(n)}),this.inputManager=null},t.prototype.destroy=function(){this.disconnect(),this.handlers.clear(),this.view=null},t.prototype.register=function(t,e,n){var r=this,a=Array.isArray(t)?t:t.split(",");if(!o(a))return a.some(i)&&console.error("Error: registering input events and other events on the view at the same time is not supported."),null;var p=Array.isArray(e)?e:[];n=Array.isArray(e)?n:e;var s=this.createUniqueGroupName(),u=new c(this.view,a,p,n);return this.handlers.set(s,u),this.inputManager&&this.inputManager.installHandlers(s,[u]),{remove:function(){return r.removeHandler(s)}}},t.prototype.removeHandler=function(t){this.handlers.has(t)&&this.handlers["delete"](t),this.inputManager&&this.inputManager.uninstallHandlers(t)},t.prototype.createUniqueGroupName=function(){return this.counter+=1,"viewEvents_"+this.counter},t}();e.ViewEvents=u;var c=function(t){function e(e,n,r,a){var i=this;t.call(this,"esri.views.input.ViewEventHandler",!0),this.view=e;for(var o=0,p=n;o<p.length;o++){var s=p[o];switch(s){case"click":this.registerIncoming("click",r,function(t){return a(i.wrapClick(t))});break;case"double-click":this.registerIncoming("double-click",r,function(t){return a(i.wrapDoubleClick(t))});break;case"drag":this.registerIncoming("drag",r,function(t){return a(i.wrapDrag(t))});break;case"key-down":this.registerIncoming("key-down",r,function(t){return a(i.wrapKeyDown(t))});break;case"key-up":this.registerIncoming("key-up",r,function(t){return a(i.wrapKeyUp(t))});break;case"pointer-down":this.registerIncoming("pointer-down",r,function(t){return a(i.wrapPointer(t,"pointer-down"))});break;case"pointer-move":this.registerIncoming("pointer-move",r,function(t){return a(i.wrapPointer(t,"pointer-move"))});break;case"pointer-up":this.registerIncoming("pointer-up",r,function(t){return a(i.wrapPointer(t,"pointer-up"))});break;case"mouse-wheel":this.registerIncoming("mouse-wheel",r,function(t){return a(i.wrapMouseWheel(t))})}}}return n(e,t),e.prototype.wrapClick=function(t){var e=t.data.x,n=t.data.y,r=t.data["native"],i=t.timestamp,o="touch"===t.data["native"].pointerType?0:t.data["native"].button;return{type:"click",button:o,x:e,y:n,"native":r,timestamp:i,screenPoint:new a(e,n),mapPoint:this.view.toMap(e,n),stopPropagation:function(){return t.stopPropagation()}}},e.prototype.wrapDoubleClick=function(t){var e=t.data.x,n=t.data.y,r=t.data["native"],a=t.timestamp,i="touch"===t.data["native"].pointerType?0:t.data["native"].button;return{type:"double-click",button:i,x:e,y:n,"native":r,timestamp:a,mapPoint:this.view.toMap(e,n),stopPropagation:function(){return t.stopPropagation()}}},e.prototype.wrapDrag=function(t){var e=t.data.currentState.center.x,n=t.data.currentState.center.y,r=t.data.action,a=t.data.pointers[0].currentEvent["native"],i=t.timestamp,o={x:t.data.startState.center.x,y:t.data.startState.center.y};return{type:"drag",action:r,x:e,y:n,origin:o,"native":a,timestamp:i,stopPropagation:function(){return t.stopPropagation()}}},e.prototype.wrapKeyDown=function(t){var e=t.data.key,n=t.data.repeat,r=t.data["native"],a=t.timestamp;return{type:"key-down",key:e,repeat:n,"native":r,timestamp:a,stopPropagation:function(){return t.stopPropagation()}}},e.prototype.wrapKeyUp=function(t){var e=t.data.key,n=t.data["native"],r=t.timestamp;return{type:"key-up",key:e,"native":n,timestamp:r,stopPropagation:function(){return t.stopPropagation()}}},e.prototype.wrapPointer=function(t,e){var n=t.data.x,r=t.data.y,a=t.data["native"].pointerId,i=t.data["native"].pointerType,o=t.data["native"],p=t.timestamp;return{type:e,x:n,y:r,pointerId:a,pointerType:i,"native":o,timestamp:p,stopPropagation:function(){return t.stopPropagation()}}},e.prototype.wrapMouseWheel=function(t){var e=t.data.x,n=t.data.y,r=t.data["native"],a=t.timestamp,i=t.data.deltaY;return{type:"mouse-wheel",x:e,y:n,deltaY:i,"native":r,timestamp:a,stopPropagation:function(){return t.stopPropagation()}}},e}(r.InputHandler)});