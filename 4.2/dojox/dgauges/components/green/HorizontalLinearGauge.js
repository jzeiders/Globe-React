//>>built
define("dojo/_base/lang dojo/_base/declare dojo/_base/Color ../utils ../../RectangularGauge ../../LinearScaler ../../RectangularScale ../../RectangularValueIndicator ../DefaultPropertiesMixin".split(" "),function(e,f,d,g,h,k,l,m,n){return f("dojox.dgauges.components.green.HorizontalLinearGauge",[h,n],{borderColor:[50,50,50],fillColor:[109,183,19],indicatorColor:[0,0,0],constructor:function(){this.borderColor=new d(this.borderColor);this.fillColor=new d(this.fillColor);this.indicatorColor=new d(this.indicatorColor);
this.addElement("background",e.hitch(this,this.drawBackground));var c=new k,a=new l;a.set("scaler",c);a.set("labelPosition","leading");a.set("paddingLeft",30);a.set("paddingRight",30);a.set("paddingTop",28);a.set("labelGap",2);a.set("font",{family:"Helvetica",weight:"bold",size:"7pt"});this.addElement("scale",a);var b=new m;b.set("interactionArea","gauge");b.set("value",c.minimum);b.set("paddingTop",32);b.set("indicatorShapeFunc",e.hitch(this,function(a,b){return a.createPolyline([0,0,-10,-20,10,
-20,0,0]).setFill(this.indicatorColor)}));a.addIndicator("indicator",b)},drawBackground:function(c,a,b){b=g.brightness(new d(this.fillColor),100);c.createRect({x:0,y:0,width:a,height:50,r:10}).setFill(this.borderColor);c.createRect({x:3,y:3,width:a-6,height:44,r:7}).setFill({type:"linear",x1:0,y1:2,x2:0,y2:30,colors:[{offset:0,color:b},{offset:1,color:this.fillColor}]});c.createRect({x:6,y:6,width:a-12,height:38,r:5}).setFill({type:"linear",x1:0,y1:6,x2:0,y2:38,colors:[{offset:0,color:[226,226,221]},
{offset:0.5,color:[239,239,236]},{offset:1,color:"white"}]})}})});