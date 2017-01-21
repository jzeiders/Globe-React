//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/window dojo/dom-class dojo/dom-construct dojo/dom-style dojo/ready dijit/_Container dijit/_WidgetBase ./_ItemBase ./common ./FixedSplitterPane ./Heading ./iconUtils ./ListItem ./RoundRect ./SpinWheel ./SpinWheelSlot ./SwapView ./TabBarButton ./ToolBarButton ./View".split(" "),function(f,g,c,t,h,n,u,l,p,B,d,v,w,x,b,y,q,e,z,r,s,A){var k;dojox.mobile.FlippableView=z;var m=new function(){this.dispatch=function(a,b){var c=a.replace(/.*\./,"");this["check"+
c]&&this["check"+c](b)};this.checkCarousel=function(a){console.log("[MIG:error] Carousel has no backward compatibility, since it was experimental in 1.7. The new Carousel supports dojo/store instead of dojo/data.")};this.checkFixedSplitter=function(a){if(!this._fixedSplitter_css_checked){this._fixedSplitter_css_checked=!0;var b=h.create("div",{className:"mblFixedSplitter"},c.body());0==n.get(b,"height")&&(h.create("link",{href:"../themes/android/FixedSplitter.css",type:"text/css",rel:"stylesheet"},
c.doc.getElementsByTagName("head")[0]),console.log("[MIG:fixed] FixedSplitter.css does not seem to be loaded. Loaded it for you just now. It is in the device theme folder."));c.body().removeChild(b);setTimeout(function(){a.resize()},1E3)}};this.checkFixedSplitterPane=function(a){console.log("[MIG:fixed] FixedSplitterPane: Deprecated. Use dojox/mobile/Container instead.")};this.checkFixedSplitter=function(a){if(!this._fixedSplitter_css_checked){this._fixedSplitter_css_checked=!0;var b=h.create("div",
{className:"mblFixedSplitter"},c.body());0==n.get(b,"height")&&(h.create("link",{href:"../themes/android/FixedSplitter.css",type:"text/css",rel:"stylesheet"},c.doc.getElementsByTagName("head")[0]),console.log("[MIG:fixed] FixedSplitter.css does not seem to be loaded. Loaded it for you just now. It is in the device theme folder."));c.body().removeChild(b);setTimeout(function(){a.resize()},1E3)}};this.checkListItem=function(a){(void 0!==a.sync||a.srcNodeRef&&a.srcNodeRef.getAttribute("sync"))&&console.log("[MIG:fixed] ListItem: The sync property is no longer supported. (async always)");
if(void 0!==a.btnClass||a.srcNodeRef&&a.srcNodeRef.getAttribute("btnClass"))console.log("[MIG:fixed] ListItem: The btnClass property is no longer supported. Use rightIcon instead."),a.rightIcon=a.btnClass||a.srcNodeRef&&a.srcNodeRef.getAttribute("btnClass");if(void 0!==a.btnClass2||a.srcNodeRef&&a.srcNodeRef.getAttribute("btnClass2"))console.log("[MIG:fixed] ListItem: The btnClass2 property is no longer supported. Use rightIcon2 instead."),a.rightIcon2=a.btnClass2||a.srcNodeRef&&a.srcNodeRef.getAttribute("btnClass2")};
this.checkSpinWheelSlot=function(a){if(a.labels&&a.labels[0]&&"["===a.labels[0].charAt(0)){for(var b=0;b<a.labels.length;b++)a.labels[b]=a.labels[b].replace(/^\[*[\'\"]*/,""),a.labels[b]=a.labels[b].replace(/[\'\"]*\]*$/,"");console.log("[MIG:fixed] SpinWheelSlot: dojox/mobile/parser no longer accepts array-type attribute like labels\x3d\"['A','B','C','D','E']\". Specify as labels\x3d\"A,B,C,D,E\" instead.")}};this.checkSwapView=function(a){(a=a.srcNodeRef)&&"dojox.mobile.FlippableView"===(a.getAttribute("dojoType")||
a.getAttribute("data-dojo-type"))&&console.log("[MIG:fixed] FlippableView: FlippableView is no longer supported. Use SwapView instead.")};this.checkSwitch=function(a){"mblItemSwitch"===a["class"]&&console.log('[MIG:fixed] Switch: class\x3d"mblItemSwitch" is no longer necessary.')};this.checkTabBar=function(a){if("segmentedControl"===(a.barType||a.srcNodeRef&&a.srcNodeRef.getAttribute("barType")))console.log("[MIG:warning] TabBar: segmentedControl in 1.8 produces the same UI regardless of the current theme. See the inline doc in migrationAssist.js for details."),
h.create("style",{innerHTML:".iphone_theme .mblTabBarSegmentedControl .mblTabBarButtonIconArea { display: none; }"},c.doc.getElementsByTagName("head")[0])};this.checkTabBarButton=function(a){if(0===(a["class"]||"").indexOf("mblDomButton"))console.log('[MIG:fixed] TabBarButton: Use icon\x3d"'+a["class"]+'" instead of class\x3d"'+a["class"]+'".'),a.icon=a["class"],a["class"]="",a.srcNodeRef&&(a.srcNodeRef.className="")};this.checkToolBarButton=function(a){if(0===(a["class"]||"").indexOf("mblColor"))console.log('[MIG:fixed] ToolBarButton: Use defaultColor\x3d"'+
a["class"]+'" instead of class\x3d"'+a["class"]+'".'),a.defaultColor=a["class"],a["class"]="",a.srcNodeRef&&(a.srcNodeRef.className="");if(0===(a["class"]||"").indexOf("mblDomButton"))console.log('[MIG:fixed] ToolBarButton: Use icon\x3d"'+a["class"]+'" instead of class\x3d"'+a["class"]+'".'),a.icon=a["class"],a["class"]="",a.srcNodeRef&&(a.srcNodeRef.className="")}};p.prototype.postMixInProperties=function(){m.dispatch(this.declaredClass,this);dojo.forEach([v,w,y,q,r,s,A],function(a){this.declaredClass!==
a.prototype.declaredClass&&this instanceof a&&m.dispatch(a.prototype.declaredClass,this)},this)};f=function(a){g.extend(a,{select:function(b){console.log("[MIG:fixed] "+this.declaredClass+"(id\x3d"+this.id+'): Use set("selected", boolean) instead of select/deselect.');a.prototype.set.apply(this,["selected",!b])},deselect:function(){this.select(!0)}})};f(s);f(r);g.extend(b,{set:function(a,b){"btnClass"===a?(console.log("[MIG:fixed] "+this.declaredClass+"(id\x3d"+this.id+'): Use set("rightIcon",x) instead of set("btnClass",x).'),
a="rightIcon"):"btnClass2"===a&&(console.log("[MIG:fixed] "+this.declaredClass+"(id\x3d"+this.id+'): Use set("rightIcon2",x) instead of set("btnClass2",x).'),a="rightIcon2");p.prototype.set.apply(this,[a,b])}});g.extend(q,{getValue:function(){console.log('[MIG:fixed] SpinWheel: getValue() is no longer supported. Use get("values") instead.');return this.get("values")},setValue:function(a){console.log('[MIG:fixed] SpinWheel: setValue() is no longer supported. Use set("values",x) instead.');return this.set("values",
a)}});g.extend(e,{getValue:function(){console.log('[MIG:fixed] SpinWheelSlot: getValue() is no longer supported. Use get("value") instead.');return this.get("value")},getKey:function(){console.log('[MIG:fixed] SpinWheelSlot: getKey() is no longer supported. Use get("key") instead.');return this.get("key")},setValue:function(a){console.log('[MIG:fixed] SpinWheelSlot: setValue() is no longer supported. Use set("value",x) instead.');return this.set("value",a)}});g.mixin(d,{createDomButton:function(){console.log("[MIG:fixed] dojox.mobile(id\x3d"+
arguments[0].id+"): createDomButton was moved to iconUtils.");return x.createDomButton.apply(this,arguments)}});d=[];f=c.doc.styleSheets;for(b=0;b<f.length;b++)if(!f[b].href&&(l=f[b].cssRules||f[b].imports))for(e=0;e<l.length;e++)l[e].href&&d.push(l[e].href);e=c.doc.getElementsByTagName("link");for(b=0;b<e.length;b++)d.push(e[b].href);for(b=0;b<d.length;b++)-1!==d[b].indexOf("/iphone/")?k="iphone":-1!==d[b].indexOf("/android/")?k="android":-1!==d[b].indexOf("/blackberry/")?k="blackberry":-1!==d[b].indexOf("/custom/")&&
(k="custom"),t.add(c.doc.documentElement,k+"_theme"),d[b].match(/themes\/common\/(FixedSplitter.css)|themes\/common\/(SpinWheel.css)/)&&console.log("[MIG:error] "+(RegExp.$1||RegExp.$2)+" is no longer in the themes/common folder. It is in the device theme folder.");u(function(){dojo.hash&&(console.log("[MIG:fixed] dojo/hash detected. If you would like to enable the bookmarkable feature, require dojox/mobile/bookmarkable instead of dojo/hash"),dojo.require?dojo.require("dojox.mobile.bookmarkable"):
require(["dojox/mobile/bookmarkable"]))});return m});