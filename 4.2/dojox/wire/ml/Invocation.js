//>>built
define(["dojo","dijit","dojox","dojo/require!dojox/wire/ml/Action"],function(c,p,d){c.provide("dojox.wire.ml.Invocation");c.require("dojox.wire.ml.Action");c.declare("dojox.wire.ml.Invocation",d.wire.ml.Action,{object:"",method:"",topic:"",parameters:"",result:"",error:"",_run:function(){if(this.topic){var a=this._getParameters(arguments);try{c.publish(this.topic,a),this.onComplete()}catch(e){this.onError(e)}}else if(this.method){var b=this.object?d.wire.ml._getValue(this.object):c.global;if(b){var a=
this._getParameters(arguments),f=b[this.method];if(!f){f=b.callMethod;if(!f)return;a=[this.method,a]}try{var k=!1;if(b.getFeatures){var l=b.getFeatures();if("fetch"==this.method&&l["dojo.data.api.Read"]||"save"==this.method&&l["dojo.data.api.Write"]){var g=a[0];g.onComplete||(g.onComplete=function(){});this.connect(g,"onComplete","onComplete");g.onError||(g.onError=function(){});this.connect(g,"onError","onError");k=!0}}var h=f.apply(b,a);if(!k)if(h&&h instanceof c.Deferred){var m=this;h.addCallbacks(function(a){m.onComplete(a)},
function(a){m.onError(a)})}else this.onComplete(h)}catch(n){this.onError(n)}}}},onComplete:function(a){this.result&&d.wire.ml._setValue(this.result,a);this.error&&d.wire.ml._setValue(this.error,"")},onError:function(a){this.error&&(a&&a.message&&(a=a.message),d.wire.ml._setValue(this.error,a))},_getParameters:function(a){if(!this.parameters)return a;var e=[],b=this.parameters.split(",");if(1==b.length)a=d.wire.ml._getValue(c.trim(b[0]),a),c.isArray(a)?e=a:e.push(a);else for(var f in b)e.push(d.wire.ml._getValue(c.trim(b[f]),
a));return e}})});