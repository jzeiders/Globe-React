//>>built
define("dojo/_base/array dojo/_base/declare dojo/dom-class dojo/dom-style dojo/_base/lang ../_WidgetBase ./_LayoutWidget ./utils".split(" "),function(c,b,e,f,g,h,k,l){b=b("dijit.layout.LayoutContainer",k,{design:"headline",baseClass:"dijitLayoutContainer",startup:function(){this._started||(c.forEach(this.getChildren(),this._setupChild,this),this.inherited(arguments))},_setupChild:function(a){this.inherited(arguments);a.region&&e.add(a.domNode,this.baseClass+"Pane")},_getOrderedChildren:function(){var a=
c.map(this.getChildren(),function(a,b){return{pane:a,weight:["center"==a.region?Infinity:0,a.layoutPriority,("sidebar"==this.design?1:-1)*(/top|bottom/.test(a.region)?1:-1),b]}},this);a.sort(function(a,b){for(var c=a.weight,e=b.weight,d=0;d<c.length;d++)if(c[d]!=e[d])return c[d]-e[d];return 0});return c.map(a,function(a){return a.pane})},layout:function(){l.layoutChildren(this.domNode,this._contentBox,this._getOrderedChildren())},addChild:function(a,b){this.inherited(arguments);this._started&&this.layout()},
removeChild:function(a){this.inherited(arguments);this._started&&this.layout();e.remove(a.domNode,this.baseClass+"Pane");f.set(a.domNode,{top:"auto",bottom:"auto",left:"auto",right:"auto",position:"static"});f.set(a.domNode,/top|bottom/.test(a.region)?"width":"height","auto")}});b.ChildWidgetProperties={region:"",layoutAlign:"",layoutPriority:0};g.extend(h,b.ChildWidgetProperties);return b});