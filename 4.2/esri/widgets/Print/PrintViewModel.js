// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang ./FileLink ../../request ../../core/Accessor ../../core/Collection ../../core/Error ../../core/promiseUtils ../../geometry/Extent ../../Viewpoint ../../views/2d/viewpointUtils ../../tasks/PrintTask ../../tasks/support/PrintTemplate ../../tasks/support/PrintParameters".split(" "),function(l,g,m,n,h,p,k,q,r,s,t,u,v){return n.createSubclass({declaredClass:"esri.widgets.Print.PrintViewModel",constructor:function(){this.print=this.print.bind(this)},properties:{templates:{type:[u]},
view:{},printServiceUrl:{value:null,type:String},_printTask:{dependsOn:["printServiceUrl"],get:function(){return new t(this.printServiceUrl,{updateDelay:this.updateDelay})}},state:{value:"disabled",get:function(){return!this.get("view.ready")?"disabled":"ready"},dependsOn:["view.ready"],readOnly:!0},updateDelay:{value:1E3,type:Number},scale:{dependsOn:["view.scale"],type:Number,get:function(){return this.view.scale}},exportedLinks:{type:h.ofType(g),value:new h({})}},print:function(a,c){c||(c=this.getExtent(this.view.viewpoint,
this.scale,this.view.size));var f=new v({view:this.view,template:a});return this._printTask.execute(l.mixin(f,{extent:c}))},addExportedLinks:function(a){a=new g({name:a,url:"",state:"pending"});this.exportedLinks.add(a)},getPrintTemplatesFromService:function(){return-1===this.printServiceUrl.toLowerCase().split("/").indexOf("gpserver")?k.reject("Can't fetch print templates information from provided URL"):m(this.printServiceUrl,{callbackParamName:"callback",query:{f:"json"},timeout:6E4}).then(function(a){a=
a&&a.data;this._printTask.mode=-1<a.executionType.toLowerCase().indexOf("async")?"async":"sync";var c={};(a&&a.parameters).forEach(function(a){var b=a.choiceList&&a.choiceList.slice(),d;b&&(b.length&&a.defaultValue)&&(d=b.indexOf(a.defaultValue));-1<d&&(b.splice(d,1),b.unshift(a.defaultValue));if("Format"===a.name)c.format={defaultValue:a.defaultValue,choiceList:b};else if("Layout_Template"===a.name){var b=b.filter(function(a){return"map_only"!==a.toLowerCase()}),e;b.some(function(a,b){var c=a.toLowerCase();
if(-1<c.indexOf("letter")&&-1<c.indexOf("landscape"))return e=b,!0;-1<c.indexOf("a4")&&-1<c.indexOf("landscape")&&(e=b);return!1});e&&(d=b[e],b.splice(e,1),b.unshift(d));c.layout={defaultValue:b&&b[0]||a.defaultValue,choiceList:b}}});return c}.bind(this),function(a){return k.reject(new p("fetching-print-templates-info-error",a))})},getExtent:function(a,c,f){return s.getExtent(new q,new r({scale:c,targetGeometry:a.targetGeometry}),f)}})});