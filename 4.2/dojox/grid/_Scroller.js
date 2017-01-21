//>>built
define(["dijit/registry","dojo/_base/declare","dojo/_base/lang","./util","dojo/_base/html"],function(k,l,m,n,g){var p=function(a){a&&dojo.forEach(k.toArray(),function(b){b.domNode&&g.isDescendant(b.domNode,a,!0)&&b.destroy()})},h=function(a,b){for(var c=[],d=0,e;e=a.childNodes[d];){d++;var f=g.byId(e);(f&&f.tagName?f.tagName.toLowerCase():"")==b&&c.push(e)}return c};return l("dojox.grid._Scroller",null,{constructor:function(a){this.setContentNodes(a);this.pageHeights=[];this.pageNodes=[];this.stack=
[]},rowCount:0,defaultRowHeight:32,keepRows:100,contentNode:null,scrollboxNode:null,defaultPageHeight:0,keepPages:10,pageCount:0,windowHeight:0,firstVisibleRow:0,lastVisibleRow:0,averageRowHeight:0,page:0,pageTop:0,init:function(a,b,c){switch(arguments.length){case 3:this.rowsPerPage=c;case 2:this.keepRows=b;case 1:this.rowCount=a}this.defaultPageHeight=(0<this.grid.rowHeight?this.grid.rowHeight:this.defaultRowHeight)*this.rowsPerPage;this.pageCount=this._getPageCount(this.rowCount,this.rowsPerPage);
this.setKeepInfo(this.keepRows);this.invalidate();this.scrollboxNode&&(this.scrollboxNode.scrollTop=0,this.scroll(0),this.scrollboxNode.onscroll=m.hitch(this,"onscroll"))},_getPageCount:function(a,b){return a?Math.ceil(a/b)||1:0},destroy:function(){this.invalidateNodes();delete this.contentNodes;delete this.contentNode;delete this.scrollboxNode},setKeepInfo:function(a){this.keepRows=a;this.keepPages=!this.keepRows?this.keepPages:Math.max(Math.ceil(this.keepRows/this.rowsPerPage),2)},setContentNodes:function(a){this.colCount=
(this.contentNodes=a)?this.contentNodes.length:0;this.pageNodes=[];for(a=0;a<this.colCount;a++)this.pageNodes[a]=[]},getDefaultNodes:function(){return this.pageNodes[0]||[]},invalidate:function(){this._invalidating=!0;this.invalidateNodes();this.pageHeights=[];this.height=this.pageCount?(this.pageCount-1)*this.defaultPageHeight+this.calcLastPageHeight():0;this.resize();this._invalidating=!1},updateRowCount:function(a){this.invalidateNodes();this.rowCount=a;a=this.pageCount;0===a&&(this.height=1);
this.pageCount=this._getPageCount(this.rowCount,this.rowsPerPage);if(this.pageCount<a)for(a-=1;a>=this.pageCount;a--)this.height-=this.getPageHeight(a),delete this.pageHeights[a];else this.pageCount>a&&(this.height+=this.defaultPageHeight*(this.pageCount-a-1)+this.calcLastPageHeight());this.resize()},pageExists:function(a){return Boolean(this.getDefaultPageNode(a))},measurePage:function(a){return this.grid.rowHeight?((a+1)*this.rowsPerPage>this.rowCount?this.rowCount-a*this.rowsPerPage:this.rowsPerPage)*
this.grid.rowHeight:(a=this.getDefaultPageNode(a))&&a.innerHTML?a.offsetHeight:void 0},positionPage:function(a,b){for(var c=0;c<this.colCount;c++)this.pageNodes[c][a].style.top=b+"px"},repositionPages:function(a){for(var b=this.getDefaultNodes(),c=0,d=0;d<this.stack.length;d++)c=Math.max(this.stack[d],c);var e=(d=b[a])?this.getPageNodePosition(d)+this.getPageHeight(a):0;for(a+=1;a<=c;a++){if(d=b[a]){if(this.getPageNodePosition(d)==e)break;this.positionPage(a,e)}e+=this.getPageHeight(a)}},installPage:function(a){for(var b=
0;b<this.colCount;b++)this.contentNodes[b].appendChild(this.pageNodes[b][a])},preparePage:function(a,b){for(var c=b?this.popPage():null,d=0;d<this.colCount;d++){var e=this.pageNodes[d],f=null===c?this.createPageNode():this.invalidatePageNode(c,e);f.pageIndex=a;e[a]=f}},renderPage:function(a){var b=[],c;for(c=0;c<this.colCount;c++)b[c]=this.pageNodes[c][a];c=0;for(a*=this.rowsPerPage;c<this.rowsPerPage&&a<this.rowCount;c++,a++)this.renderRow(a,b)},removePage:function(a){var b=0;for(a*=this.rowsPerPage;b<
this.rowsPerPage;b++,a++)this.removeRow(a)},destroyPage:function(a){for(var b=0;b<this.colCount;b++){var c=this.invalidatePageNode(a,this.pageNodes[b]);c&&g.destroy(c)}},pacify:function(a){},pacifying:!1,pacifyTicks:200,setPacifying:function(a){this.pacifying!=a&&(this.pacifying=a,this.pacify(this.pacifying))},startPacify:function(){this.startPacifyTicks=(new Date).getTime()},doPacify:function(){var a=(new Date).getTime()-this.startPacifyTicks>this.pacifyTicks;this.setPacifying(!0);this.startPacify();
return a},endPacify:function(){this.setPacifying(!1)},resize:function(){this.scrollboxNode&&(this.windowHeight=this.scrollboxNode.clientHeight);for(var a=0;a<this.colCount;a++)n.setStyleHeightPx(this.contentNodes[a],Math.max(1,this.height));a=!this._invalidating;if(!a){var b=this.grid.get("autoHeight");"number"==typeof b&&b<=Math.min(this.rowsPerPage,this.rowCount)&&(a=!0)}a&&this.needPage(this.page,this.pageTop);a=this.page<this.pageCount-1?this.rowsPerPage:this.rowCount%this.rowsPerPage||this.rowsPerPage;
b=this.getPageHeight(this.page);this.averageRowHeight=0<b&&0<a?b/a:0},calcLastPageHeight:function(){if(!this.pageCount)return 0;var a=(this.rowCount%this.rowsPerPage||this.rowsPerPage)*this.defaultRowHeight;return this.pageHeights[this.pageCount-1]=a},updateContentHeight:function(a){this.height+=a;this.resize()},updatePageHeight:function(a,b,c){if(this.pageExists(a)){var d=this.getPageHeight(a),e=this.measurePage(a);void 0===e&&(e=d);this.pageHeights[a]=e;if(d!=e){this.updateContentHeight(e-d);var f=
this.grid.get("autoHeight");"number"==typeof f&&f>this.rowCount||!0===f&&!b?c?(b=this.grid.viewsNode.style,b.height=parseInt(b.height)+e-d+"px",this.repositionPages(a)):this.grid.sizeChange():this.repositionPages(a)}return e}return 0},rowHeightChanged:function(a,b){this.updatePageHeight(Math.floor(a/this.rowsPerPage),!1,b)},invalidateNodes:function(){for(;this.stack.length;)this.destroyPage(this.popPage())},createPageNode:function(){var a=document.createElement("div");g.attr(a,"role","presentation");
a.style.position="absolute";a.style[this.grid.isLeftToRight()?"left":"right"]="0";return a},getPageHeight:function(a){a=this.pageHeights[a];return void 0!==a?a:this.defaultPageHeight},pushPage:function(a){return this.stack.push(a)},popPage:function(){return this.stack.shift()},findPage:function(a){for(var b=0,c=0,d=0;b<this.pageCount&&!(d=this.getPageHeight(b),c+d>=a);b++,c+=d);this.page=b;this.pageTop=c},buildPage:function(a,b,c){this.preparePage(a,b);this.positionPage(a,c);this.installPage(a);this.renderPage(a);
this.pushPage(a)},needPage:function(a,b){var c=this.getPageHeight(a);this.pageExists(a)?this.positionPage(a,b):(this.buildPage(a,!this.grid._autoHeight&&this.keepPages&&this.stack.length>=this.keepPages,b),c=this.updatePageHeight(a,!0));return c},onscroll:function(){this.scroll(this.scrollboxNode.scrollTop)},scroll:function(a){this.grid.scrollTop=a;if(this.colCount){this.startPacify();this.findPage(a);for(var b=this.height,c=this.getScrollBottom(a),d=this.page,e=this.pageTop;d<this.pageCount&&(0>
c||e<c);d++)e+=this.needPage(d,e);this.firstVisibleRow=this.getFirstVisibleRow(this.page,this.pageTop,a);this.lastVisibleRow=this.getLastVisibleRow(d-1,e,c);b!=this.height&&this.repositionPages(d-1);this.endPacify()}},getScrollBottom:function(a){return 0<=this.windowHeight?a+this.windowHeight:-1},processNodeEvent:function(a,b){for(var c=a.target;c&&c!=b&&c.parentNode&&c.parentNode.parentNode!=b;)c=c.parentNode;if(!c||!c.parentNode||c.parentNode.parentNode!=b)return!1;a.topRowIndex=c.parentNode.pageIndex*
this.rowsPerPage;var d=a.topRowIndex,e;a:{e=0;for(var f,g=c.parentNode;f=g.childNodes[e++];)if(f==c){e-=1;break a}e=-1}a.rowIndex=d+e;a.rowTarget=c;return!0},processEvent:function(a){return this.processNodeEvent(a,this.contentNode)},renderRow:function(a,b){},removeRow:function(a){},getDefaultPageNode:function(a){return this.getDefaultNodes()[a]},positionPageNode:function(a,b){},getPageNodePosition:function(a){return a.offsetTop},invalidatePageNode:function(a,b){var c=b[a];c&&(delete b[a],this.removePage(a,
c),p(c),c.innerHTML="");return c},getPageRow:function(a){return a*this.rowsPerPage},getLastPageRow:function(a){return Math.min(this.rowCount,this.getPageRow(a+1))-1},getFirstVisibleRow:function(a,b,c){if(!this.pageExists(a))return 0;var d=this.getPageRow(a),e=this.getDefaultNodes();a=h(e[a],"div");for(var e=0,f=a.length;e<f&&b<c;e++,d++)b+=a[e].offsetHeight;return d?d-1:d},getLastVisibleRow:function(a,b,c){if(!this.pageExists(a))return 0;var d=this.getDefaultNodes(),e=this.getLastPageRow(a);a=h(d[a],
"div");for(d=a.length-1;0<=d&&b>c;d--,e--)b-=a[d].offsetHeight;return e+1},findTopRow:function(a){for(var b=this.getDefaultNodes(),b=h(b[this.page],"div"),c=0,d=b.length,e=this.pageTop,f;c<d;c++)if(f=b[c].offsetHeight,e+=f,e>=a)return this.offset=f-(e-a),c+this.page*this.rowsPerPage;return-1},findScrollTop:function(a){var b=Math.floor(a/this.rowsPerPage),c=0,d;for(d=0;d<b;d++)c+=this.getPageHeight(d);this.pageTop=c;this.page=b;this.needPage(b,this.pageTop);d=this.getDefaultNodes();var e=h(d[b],"div"),
b=a-this.rowsPerPage*b;d=0;for(a=e.length;d<a&&d<b;d++)c+=e[d].offsetHeight;return c},dummy:0})});