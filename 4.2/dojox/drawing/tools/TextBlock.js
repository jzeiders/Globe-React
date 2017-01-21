//>>built
define(["dojo","dijit/registry","../util/oo","../manager/_registry","../stencil/Text"],function(b,q,n,r,s){var h;b.addOnLoad(function(){(h=b.byId("conEdit"))?h.parentNode.removeChild(h):console.error("A contenteditable div is missing from the main document. See 'dojox.drawing.tools.TextBlock'")});n=n.declare(s,function(a){if(a.data){a=a.data;var d=a.text?this.typesetter(a.text):a.text,c=!a.width?this.style.text.minWidth:"auto"==a.width?"auto":Math.max(a.width,this.style.text.minWidth),e=this._lineHeight;
d&&"auto"==c?(e=this.measureText(this.cleanText(d,!1),c),c=e.w,e=e.h):this._text="";this.points=[{x:a.x,y:a.y},{x:a.x+c,y:a.y},{x:a.x+c,y:a.y+e},{x:a.x,y:a.y+e}];a.showEmpty||d?(this.editMode=!0,b.disconnect(this._postRenderCon),this._postRenderCon=null,this.connect(this,"render",this,"onRender",!0),a.showEmpty?(this._text=d||"",this.edit()):d&&a.editMode?(this._text="",this.edit()):d&&this.render(d),setTimeout(b.hitch(this,function(){this.editMode=!1}),100)):this.render()}else this.connectMouse(),
this._postRenderCon=b.connect(this,"render",this,"_onPostRender")},{draws:!0,baseRender:!1,type:"dojox.drawing.tools.TextBlock",_caretStart:0,_caretEnd:0,_blockExec:!1,selectOnExec:!0,showEmpty:!1,onDrag:function(a){this.parentNode||this.showParent(a);var d=this._startdrag;a=a.page;this._box.left=d.x<a.x?d.x:a.x;this._box.top=d.y;this._box.width=(d.x<a.x?a.x-d.x:d.x-a.x)+this.style.text.pad;b.style(this.parentNode,this._box.toPx())},onUp:function(a){if(this._downOnCanvas){this._downOnCanvas=!1;var d=
b.connect(this,"render",this,function(){b.disconnect(d);this.onRender(this)});this.editMode=!0;this.showParent(a);this.created=!0;this.createTextField();this.connectTextField()}},showParent:function(a){if(!this.parentNode){var d=a.pageX||10,c=a.pageY||10;this.parentNode=b.doc.createElement("div");this.parentNode.id=this.id;var e=this.style.textMode.create;this._box={left:d,top:c,width:a.width||1,height:a.height&&8<a.height?a.height:this._lineHeight,border:e.width+"px "+e.style+" "+e.color,position:"absolute",
zIndex:500,toPx:function(){var a={},b;for(b in this)a[b]="number"==typeof this[b]&&"zIndex"!=b?this[b]+"px":this[b];return a}};b.style(this.parentNode,this._box);document.body.appendChild(this.parentNode)}},createTextField:function(a){var d=this.style.textMode.edit;this._box.border=d.width+"px "+d.style+" "+d.color;this._box.height="auto";this._box.width=Math.max(this._box.width,this.style.text.minWidth*this.mouse.zoom);b.style(this.parentNode,this._box.toPx());this.parentNode.appendChild(h);b.style(h,
{height:a?"auto":this._lineHeight+"px",fontSize:this.textSize/this.mouse.zoom+"px",fontFamily:this.style.text.family});h.innerHTML=a||"";return h},connectTextField:function(){if(!this._textConnected){var a=q.byId("greekPalette"),d=void 0==a?!1:!0;d&&b.mixin(a,{_pushChangeTo:h,_textBlock:this});this._textConnected=!0;this._dropMode=!1;this.mouse.setEventMode("TEXT");this.keys.editMode(!0);var c,e,g,f,k=this,l=!1,m=function(){k._dropMode||(b.forEach([c,e,g,f],function(a){b.disconnect(a)}),k._textConnected=
!1,k.keys.editMode(!1),k.mouse.setEventMode(),k.execText())};c=b.connect(h,"keyup",this,function(c){b.trim(h.innerHTML)&&!l?(b.style(h,"height","auto"),l=!0):2>b.trim(h.innerHTML).length&&l&&(b.style(h,"height",this._lineHeight+"px"),l=!1);if(this._blockExec)c.keyCode==b.keys.SPACE&&(b.stopEvent(c),d&&a.onCancel());else if(13==c.keyCode||27==c.keyCode)b.stopEvent(c),m()});e=b.connect(h,"keydown",this,function(c){(13==c.keyCode||27==c.keyCode)&&b.stopEvent(c);if(220==c.keyCode){if(!d){console.info("For greek letter assistance instantiate: dojox.drawing.plugins.drawing.GreekPalette");
return}b.stopEvent(c);this.getSelection(h);this.insertText(h,"\\");this._blockExec=this._dropMode=!0;a.show({around:this.parentNode,orient:{BL:"TL"}})}if(this._dropMode)switch(c.keyCode){case b.keys.UP_ARROW:case b.keys.DOWN_ARROW:case b.keys.LEFT_ARROW:case b.keys.RIGHT_ARROW:b.stopEvent(c);a._navigateByArrow(c);break;case b.keys.ENTER:b.stopEvent(c);a._onCellClick(c);break;case b.keys.BACKSPACE:case b.keys.DELETE:b.stopEvent(c),a.onCancel()}else this._blockExec=!1});g=b.connect(document,"mouseup",
this,function(a){!this._onAnchor&&"conEdit"!=a.target.id?(b.stopEvent(a),m()):"conEdit"==a.target.id&&""==h.innerHTML&&(h.blur(),setTimeout(function(){h.focus()},200))});this.createAnchors();f=b.connect(this.mouse,"setZoom",this,function(a){m()});h.focus();this.onDown=function(){};this.onDrag=function(){};setTimeout(b.hitch(this,function(){h.focus();this.onUp=function(){!k._onAnchor&&this.parentNode&&(k.disconnectMouse(),m(),k.onUp=function(){})}}),500)}},execText:function(){var a=b.marginBox(this.parentNode),
a=Math.max(a.w,this.style.text.minWidth),d=this.cleanText(h.innerHTML,!0);h.innerHTML="";h.blur();this.destroyAnchors();var d=this.typesetter(d),d=this.measureText(d,a),c=this.mouse.scrollOffset(),e=this.mouse.origin,g=this._box.left+c.left-e.x,c=this._box.top+c.top-e.y,g=g*this.mouse.zoom,c=c*this.mouse.zoom,a=a*this.mouse.zoom;d.h*=this.mouse.zoom;this.points=[{x:g,y:c},{x:g+a,y:c},{x:g+a,y:c+d.h},{x:g,y:c+d.h}];this.editMode=!1;console.log("EXEC TEXT::::",this._postRenderCon);d.text||(this._text=
"",this._textArray=[]);this.render(d.text);this.onChangeText(this.getText())},edit:function(){this.editMode=!0;var a=this.getText()||"";console.log("EDIT TEXT:",a," ",a.replace("/n"," "));if(!this.parentNode&&this.points){var b=this.pointsToData(),c=this.mouse.scrollOffset(),e=this.mouse.origin,b={pageX:b.x/this.mouse.zoom-c.left+e.x,pageY:b.y/this.mouse.zoom-c.top+e.y,width:b.width/this.mouse.zoom,height:b.height/this.mouse.zoom};this.remove(this.shape,this.hit);this.showParent(b);this.createTextField(a.replace("/n",
" "));this.connectTextField();a&&this.setSelection(h,"end")}},cleanText:function(a,d){d&&b.forEach(["\x3cbr\x3e","\x3cbr/\x3e","\x3cbr /\x3e","\\n","\\r"],function(c){a=a.replace(RegExp(c,"gi")," ")});a=a.replace(/&nbsp;/g," ");a=function(a){var b={"\x26lt;":"\x3c","\x26gt;":"\x3e","\x26amp;":"\x26"},d;for(d in b)a=a.replace(RegExp(d,"gi"),b[d]);return a}(a);a=b.trim(a);return a=a.replace(/\s{2,}/g," ")},measureText:function(a,d){this.showParent({width:d||"auto",height:"auto"});this.createTextField(a);
var c="",e=h;e.innerHTML="X";c=b.marginBox(e).h;e.innerHTML=a;if(!d||/(<br\s*\/*>)|(\n)|(\r)/gi.test(a))c=a.replace(/(<br\s*\/*>)|(\n)|(\r)/gi,"\n"),e.innerHTML=a.replace(/(<br\s*\/*>)|(\n)|(\r)/gi,"\x3cbr/\x3e");else if(b.marginBox(e).h==c)c=a;else{var g=a.split(" "),f=[[]],k=0;for(e.innerHTML="";g.length;){var l=g.shift();e.innerHTML+=l+" ";b.marginBox(e).h>c&&(k++,f[k]=[],e.innerHTML=l+" ");f[k].push(l)}b.forEach(f,function(a,b){f[b]=a.join(" ")});c=f.join("\n");e.innerHTML=c.replace("\n","\x3cbr/\x3e")}e=
b.marginBox(e);h.parentNode.removeChild(h);b.destroy(this.parentNode);this.parentNode=null;return{h:e.h,w:e.w,text:c}},_downOnCanvas:!1,onDown:function(a){this._startdrag={x:a.pageX,y:a.pageY};b.disconnect(this._postRenderCon);this._postRenderCon=null;this._downOnCanvas=!0},createAnchors:function(){this._anchors={};var a=this,d=this.style.anchors,c=d.width,e=d.size-2*c,g=-1*(d.size/2)+"px",d={position:"absolute",width:e+"px",height:d.size-2*c+"px",backgroundColor:d.fill,border:c+"px "+d.style+" "+
d.color};b.isIE&&(d.paddingLeft=e+"px",d.fontSize=e+"px");e=[{top:g,left:g},{top:g,right:g},{bottom:g,right:g},{bottom:g,left:g}];for(g=0;4>g;g++){var f=0==g||3==g,c=this.util.uid(f?"left_anchor":"right_anchor"),k=b.create("div",{id:c},this.parentNode);b.style(k,b.mixin(b.clone(d),e[g]));var l,m,p;l=b.connect(k,"mousedown",this,function(c){f=-1<c.target.id.indexOf("left");a._onAnchor=!0;var d=c.pageX,e=this._box.width;b.stopEvent(c);m=b.connect(document,"mousemove",this,function(a){a=a.pageX;f?(this._box.left=
a,this._box.width=e+d-a):this._box.width=a+e-d;b.style(this.parentNode,this._box.toPx())});p=b.connect(document,"mouseup",this,function(c){d=this._box.left;e=this._box.width;b.disconnect(m);b.disconnect(p);a._onAnchor=!1;h.focus();b.stopEvent(c)})});this._anchors[c]={a:k,cons:[l]}}},destroyAnchors:function(){for(var a in this._anchors)b.forEach(this._anchors[a].con,b.disconnect,b),b.destroy(this._anchors[a].a)},setSavedCaret:function(a){this._caretStart=this._caretEnd=a},getSavedCaret:function(){return{start:this._caretStart,
end:this._caretEnd}},insertText:function(a,b){var c;c=a.innerHTML;var e=this.getSavedCaret();c=c.replace(/&nbsp;/g," ");c=c.substr(0,e.start)+b+c.substr(e.end);c=this.cleanText(c,!0);this.setSavedCaret(Math.min(c.length,e.end+b.length));a.innerHTML=c;this.setSelection(a,"stored")},getSelection:function(a){var d,c;b.doc.selection?(c=b.doc.selection.createRange(),d=b.body().createTextRange(),d.moveToElementText(a),a=d.duplicate(),d.moveToBookmark(c.getBookmark()),a.setEndPoint("EndToStart",d),d=this._caretStart=
a.text.length,c=this._caretEnd=a.text.length+c.text.length,console.warn("Caret start: ",d," end: ",c," length: ",a.text.length," text: ",a.text)):(this._caretStart=b.global.getSelection().getRangeAt(a).startOffset,this._caretEnd=b.global.getSelection().getRangeAt(a).endOffset,console.log("Caret start: ",this._caretStart," end: ",this._caretEnd))},setSelection:function(a,d){console.warn("setSelection:");if(b.doc.selection){var c=b.body().createTextRange();c.moveToElementText(a);switch(d){case "end":c.collapse(!1);
break;case "beg":c.collapse();break;case "all":c.collapse();c.moveStart("character",0);c.moveEnd("character",a.text.length);break;case "stored":c.collapse();var e=this._caretStart-this._caretEnd;c.moveStart("character",this._caretStart);c.moveEnd("character",e)}c.select()}else{var g=function(a,b){b=b||[];for(var c=0;c<a.childNodes.length;c++){var d=a.childNodes[c];3==d.nodeType?b.push(d):d.tagName&&"img"==d.tagName.toLowerCase()&&b.push(d);d.childNodes&&d.childNodes.length&&g(d,b)}return b};console.log("ff node:",
a);a.focus();c=b.global.getSelection();c.removeAllRanges();var e=b.doc.createRange(),f=g(a);switch(d){case "end":console.log("len:",f[f.length-1].textContent.length);e.setStart(f[f.length-1],f[f.length-1].textContent.length);e.setEnd(f[f.length-1],f[f.length-1].textContent.length);break;case "beg":e.setStart(f[0],0);e.setEnd(f[0],0);break;case "all":e.setStart(f[0],0);e.setEnd(f[f.length-1],f[f.length-1].textContent.length);break;case "stored":console.log("Caret start: ",this._caretStart," caret end: ",
this._caretEnd),e.setStart(f[0],this._caretStart),e.setEnd(f[0],this._caretEnd)}c.addRange(e);console.log("sel ",d," on ",a)}}});b.setObject("dojox.drawing.tools.TextBlock",n);n.setup={name:"dojox.drawing.tools.TextBlock",tooltip:"Text Tool",iconClass:"iconText"};r.register(n.setup,"tool");return n});