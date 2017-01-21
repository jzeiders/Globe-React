//>>built
define("dojo dojo/fx/easing ../util/oo ../annotations/BoxShadow ../annotations/Angle ../annotations/Label ../defaults".split(" "),function(d,r,m,s,t,u,v){m=m.declare(function(a){d.mixin(this,a);this.style=a.style||v.copy();a.stencil&&(this.stencil=a.stencil,this.util=a.stencil.util,this.mouse=a.stencil.mouse,this.container=a.stencil.container,this.style=a.stencil.style);this.shortType=this.util.abbr(this.type);this.isText=/Text/.test(this.type);this.isLine=/Line|Vector|Axes|Arrow/.test(this.type);
this.renderHit=this.style.renderHitLayer;!this.renderHit&&(this.style.renderHitLines&&this.isLine)&&(this.renderHit=!0);if(!this.renderHit&&this.style.useSelectedStyle){this.useSelectedStyle=!0;this.selCopy=d.clone(this.style.selected);for(var b in this.style.norm)void 0===this.style.selected[b]&&(this.style.selected[b]=this.style.norm[b]);this.textSelected=d.clone(this.style.text);this.textSelected.color=this.style.selected.fill}this.angleSnap=this.style.angleSnap||1;this.marginZero=a.marginZero||
this.style.anchors.marginZero;this.id=a.id||this.util.uid(this.type);this._cons=[];!this.annotation&&!this.subShape&&this.util.attr(this.container,"id",this.id);this.connect(this,"onBeforeRender","preventNegativePos");this._offX=this.mouse.origin.x;this._offY=this.mouse.origin.y;this.isText&&(this.align=a.align||this.align,this.valign=a.valign||this.valign,a.data&&a.data.makeFit?(b=this.makeFit(a.data.text,a.data.width),this.textSize=this.style.text.size=b.size,this._lineHeight=b.box.h):(this.textSize=
parseInt(this.style.text.size,10),this._lineHeight=1.4*this.textSize),this.deleteEmptyCreate=void 0!==a.deleteEmptyCreate?a.deleteEmptyCreate:this.style.text.deleteEmptyCreate,this.deleteEmptyModify=void 0!==a.deleteEmptyModify?a.deleteEmptyModify:this.style.text.deleteEmptyModify);this.attr(a.data);this.noBaseRender||(a.points?(a.data&&!1===a.data.closePath&&(this.closePath=!1),this.setPoints(a.points),this.connect(this,"render",this,"onRender",!0),this.baseRender&&this.enabled&&this.render(),a.label&&
this.setLabel(a.label),a.shadow&&this.addShadow(a.shadow)):a.data?(a.data.width=a.data.width?a.data.width:this.style.text.minWidth,a.data.height=a.data.height?a.data.height:this._lineHeight,this.setData(a.data),this.connect(this,"render",this,"onRender",!0),this.baseRender&&this.enabled&&this.render(a.data.text),this.baseRender&&a.label&&this.setLabel(a.label),this.baseRender&&a.shadow&&this.addShadow(a.shadow)):this.draws&&(this.points=[],this.data={},this.connectMouse(),this._postRenderCon=d.connect(this,
"render",this,"_onPostRender")),this.showAngle&&(this.angleLabel=new t({stencil:this})),this.enabled||(this.disable(),this.moveToBack(),this.render(a.data.text)))},{type:"dojox.drawing.stencil",minimumSize:10,enabled:!0,drawingType:"stencil",setData:function(a){this.data=a;this.points=this.dataToPoints()},setPoints:function(a){this.points=a;this.pointsToData&&(this.data=this.pointsToData())},onDelete:function(a){console.info("onDelete",this.id)},onBeforeRender:function(a){},onModify:function(a){},
onChangeData:function(a){},onChangeText:function(a){},onRender:function(a){this._postRenderCon=d.connect(this,"render",this,"_onPostRender");this.created=!0;this.disconnectMouse();this.shape?this.shape.superClass=this:this.container.superClass=this;this._setNodeAtts(this)},onChangeStyle:function(a){this._isBeingModified=!0;this.enabled?(this.style.current=this.style.norm,this.style.currentHit=this.style.hitNorm,this.style.currentText=this.style.text):(this.style.current=this.style.disabled,this.style.currentText=
this.style.textDisabled,this.style.currentHit=this.style.hitNorm);this.selected?(this.useSelectedStyle&&(this.style.current=this.style.selected,this.style.currentText=this.textSelected),this.style.currentHit=this.style.hitSelected):this.highlighted&&(this.style.currentHit=this.style.hitHighlighted);this.render()},animate:function(a,b){console.warn("ANIMATE..........................");var g=a.d||a.duration||1E3,f=a.ms||20,l=a.ease||r.linear,c=(new Date).getTime(),e=0,n=!0,h,p;d.isArray(a.start)?(h=
a.start,p=a.end):d.isObject(a.start)?(h=a.start,p=a.end,n=!1):console.warn("No data provided to animate");var k=setInterval(d.hitch(this,function(){var a=(new Date).getTime()-c,b=l(1-a/g);if(a>g||100<e++)clearInterval(k);else if(n){var f=[];d.forEach(h,function(a,c){f.push({x:(p[c].x-h[c].x)*b+h[c].x,y:(p[c].y-h[c].y)*b+h[c].y})});this.setPoints(f);this.render()}else{var a={},q;for(q in h)a[q]=(p[q]-h[q])*b+h[q];this.attr(a)}}),f)},attr:function(a,b){var g=this.enabled?this.style.norm:this.style.disabled,
f=this.enabled?this.style.text:this.style.textDisabled,l=this.textSelected||{},c,e,n,h=d.toJson(g),p=d.toJson(f),k={x:!0,y:!0,r:!0,height:!0,width:!0,radius:!0,angle:!0},m=!1;"object"!=typeof a?(c={},c[a]=b):c=d.clone(a);c.width&&(n=c.width,delete c.width);for(e in c)e in g&&(g[e]=c[e]),e in f&&(f[e]=c[e]),e in l&&(l[e]=c[e]),e in k&&(k[e]=c[e],m=!0,"radius"==e&&void 0===c.angle?c.angle=k.angle=this.getAngle():"angle"==e&&void 0===c.radius&&(c.radius=k.radius=this.getRadius())),"text"==e&&this.setText(c.text),
"label"==e&&this.setLabel(c.label);void 0!==c.borderWidth&&(g.width=c.borderWidth);if(this.useSelectedStyle){for(e in this.style.norm)void 0===this.selCopy[e]&&(this.style.selected[e]=this.style.norm[e]);this.textSelected.color=this.style.selected.color}if(this.created){if(void 0!==c.x||void 0!==c.y){l=this.getBounds(!0);k={dx:0,dy:0};for(e in c)if("x"==e||"y"==e||"r"==e)k["d"+e]=c[e]-l[e];this.transformPoints(k)}e=this.points;void 0!==c.angle?this.dataToPoints({x:this.data.x1,y:this.data.y1,angle:c.angle,
radius:c.radius}):void 0!==n&&(e[1].x=e[2].x=e[0].x+n,this.pointsToData(e));void 0!==c.height&&void 0===c.angle&&(console.log("Doing P2D-2"),e[2].y=e[3].y=e[0].y+c.height,this.pointsToData(e));void 0!==c.r&&(this.data.r=Math.max(0,c.r));if(m||p!=d.toJson(f)||h!=d.toJson(g))this.onChangeStyle(this);c.width=n;void 0!=c.cosphi&&(!this.data?this.data={cosphi:c.cosphi}:this.data.cosphi=c.cosphi,this.style.zAxis=0!=c.cosphi?!0:!1)}},exporter:function(){var a=this.type.substring(this.type.lastIndexOf(".")+
1).charAt(0).toLowerCase()+this.type.substring(this.type.lastIndexOf(".")+2),b=d.clone(this.style.norm);b.borderWidth=b.width;delete b.width;"path"==a?b.points=this.points:b=d.mixin(b,this.data);b.type=a;this.isText&&(b.text=this.getText(),b=d.mixin(b,this.style.text),delete b.minWidth,delete b.deleteEmptyCreate,delete b.deleteEmptyModify);if(a=this.getLabel())b.label=a;return b},disable:function(){this.renderHit=this.enabled=!1;this.onChangeStyle(this)},enable:function(){this.renderHit=this.enabled=
!0;this.onChangeStyle(this)},select:function(){this.selected=!0;this.onChangeStyle(this)},deselect:function(a){a?setTimeout(d.hitch(this,function(){this.selected=!1;this.onChangeStyle(this)}),200):(this.selected=!1,this.onChangeStyle(this))},_toggleSelected:function(){this.selected&&(this.deselect(),setTimeout(d.hitch(this,"select"),0))},highlight:function(){this.highlighted=!0;this.onChangeStyle(this)},unhighlight:function(){this.highlighted=!1;this.onChangeStyle(this)},moveToFront:function(){this.container&&
this.container.moveToFront()},moveToBack:function(){this.container&&this.container.moveToBack()},onTransformBegin:function(a){this._isBeingModified=!0},onTransformEnd:function(a){this._isBeingModified=!1;this.onModify(this)},onTransform:function(a){if(!this._isBeingModified)this.onTransformBegin();this.setPoints(this.points);this.render()},transformPoints:function(a){if(a.dx||a.dy){var b=d.clone(this.points),g=!1;d.forEach(this.points,function(b){b.x+=a.dx;b.y+=a.dy;if(b.x<this.marginZero||b.y<this.marginZero)g=
!0});g?(this.points=b,console.error("Attempt to set object '"+this.id+"' to less than zero.")):(this.onTransform(),this.onTransformEnd())}},applyTransform:function(a){this.transformPoints(a)},setTransform:function(a){this.attr({x:a.dx,y:a.dy})},getTransform:function(){return this.selected?this.container.getParent().getTransform():{dx:0,dy:0}},addShadow:function(a){a=!0===a?{}:a;a.stencil=this;this.shadow=new s(a)},removeShadow:function(){this.shadow.destroy()},setLabel:function(a){this._label?void 0!=
a&&this._label.setLabel(a):this._label=new u.Label({text:a,util:this.util,mouse:this.mouse,stencil:this,annotation:!0,container:this.container,labelPosition:this.labelPosition})},getLabel:function(){return this._label?this._label.getText():null},getAngle:function(){var a=this.pointsToData(),a=this.util.angle({start:{x:a.x1,y:a.y1},x:a.x2,y:a.y2},this.angleSnap);0>a?a=360+a:a;return a},getRadius:function(){var a=this.getBounds(!0);return this.util.length({start:{x:a.x1,y:a.y1},x:a.x2,y:a.y2})},getBounds:function(a){var b=
this.points,d,f;return 2==b.length?(a?(a=b[0].x,d=b[0].y,f=b[1].x,b=b[1].y):(a=b[0].x<b[1].x?b[0].x:b[1].x,d=b[0].y<b[1].y?b[0].y:b[1].y,f=b[0].x<b[1].x?b[1].x:b[0].x,b=b[0].y<b[1].y?b[1].y:b[0].y),{x1:a,y1:d,x2:f,y2:b,x:a,y:d,w:f-a,h:b-d}):{x1:b[0].x,y1:b[0].y,x2:b[2].x,y2:b[2].y,x:b[0].x,y:b[0].y,w:b[2].x-b[0].x,h:b[2].y-b[0].y}},preventNegativePos:function(){if(!this._isBeingModified&&this.points&&this.points.length){if("dojox.drawing.tools.custom.Axes"==this.type){var a=this.marginZero,b=this.marginZero;
d.forEach(this.points,function(b){a=Math.min(b.y,a)});d.forEach(this.points,function(a){b=Math.min(a.x,b)});a<this.marginZero&&d.forEach(this.points,function(b,d){b.y+=this.marginZero-a},this);b<this.marginZero&&d.forEach(this.points,function(a){a.x+=this.marginZero-b},this)}else d.forEach(this.points,function(a){a.x=0>a.x?this.marginZero:a.x;a.y=0>a.y?this.marginZero:a.y});this.setPoints(this.points)}},_onPostRender:function(a){this._isBeingModified&&(this.onModify(this),this._isBeingModified=!1);
if(!this.editMode&&!this.selected&&this._prevData&&d.toJson(this._prevData)!=d.toJson(this.data))this.onChangeData(this),this._prevData=d.clone(this.data);else if(!this._prevData&&(!this.isText||this.getText()))this._prevData=d.clone(this.data)},_setNodeAtts:function(a){this.util.attr(a,"drawingType",this.enabled&&(!this.annotation||"label"==this.drawingType)?this.drawingType:"")},destroy:function(){if(!this.destroyed){if(this.data||this.points&&this.points.length)this.onDelete(this);this.disconnectMouse();
this.disconnect(this._cons);d.disconnect(this._postRenderCon);this.remove(this.shape,this.hit);this.destroyed=!0}},remove:function(){var a=arguments;if(!a.length){if(!this.shape)return;a=[this.shape]}for(var b=0;b<a.length;b++)a[b]&&a[b].removeShape()},connectMult:function(){1<arguments.length?this._cons.push(this.connect.apply(this,arguments)):d.isArray(arguments[0][0])?d.forEach(arguments[0],function(a){this._cons.push(this.connect.apply(this,a))},this):this._cons.push(this.connect.apply(this,arguments[0]))},
connect:function(a,b,g,f,l){var c;if("object"!=typeof a)g?(f=g,g=b,b=a,a=this):(f=b,b=a,a=g=this);else if(f){if(l)return c=d.connect(a,b,function(a){d.hitch(g,f)(a);d.disconnect(c)}),this._cons.push(c),c}else f=g,g=this;c=d.connect(a,b,g,f);this._cons.push(c);return c},disconnect:function(a){a&&(d.isArray(a)||(a=[a]),d.forEach(a,d.disconnect,d))},connectMouse:function(){this._mouseHandle=this.mouse.register(this)},disconnectMouse:function(){this.mouse.unregister(this._mouseHandle)},render:function(){},
dataToPoints:function(a){},pointsToData:function(a){},onDown:function(a){this._downOnCanvas=!0;d.disconnect(this._postRenderCon);this._postRenderCon=null},onMove:function(a){},onDrag:function(a){},onUp:function(a){}});d.setObject("dojox.drawing.stencil._Base",m);return m});