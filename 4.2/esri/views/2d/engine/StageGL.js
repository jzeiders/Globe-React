// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/2d/engine/webgl/stencil.vs.glsl":"attribute vec2 a_pos;\r\n\r\nvoid main() {\r\n  gl_Position \x3d vec4(a_pos, 0.0, 1.0);\r\n}\r\n","url:esri/views/2d/engine/webgl/stencil.fs.glsl":"void main() {\r\n  gl_FragColor \x3d vec4(1.0, 1.0, 1.0, 1.0);\r\n}\r\n"}});
define("require exports ../../../core/tsSupport/extendsHelper ./../math/vec2 ./../math/mat2d dojo/text!./webgl/stencil.vs.glsl dojo/text!./webgl/stencil.fs.glsl ./webgl/BitBlitRenderer ../../support/screenshotUtils ../../../core/promiseUtils ../math/common ./Container ../../webgl/RenderingContext ../../webgl/FramebufferObject ../../webgl/webgl-utils ../../webgl/Program ../../webgl/VertexArrayObject ../../webgl/BufferObject".split(" "),function(N,O,A,l,w,B,C,D,E,F,G,H,I,x,J,K,L,y){function z(l){return{budget:l.budget,
state:l.state,devicePixelRatio:l.devicePixelRatio,stationary:l.stationary}}var M={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"};return function(v){function f(){v.apply(this,arguments);this._clipData=new Float32Array(8);this._upperLeft=l.create();this._upperRight=l.create();this._lowerLeft=l.create();this._lowerRight=l.create();this._mat2=w.create();this._clipRendererInitialized=!1}A(f,v);f.prototype.createElement=function(){var b=document.createElement("canvas");b.setAttribute("class","esri-display-object");
return b};f.prototype.setElement=function(b){this.element=b};f.prototype.attach=function(b){this._resizeCanvas(b);var d=J.setupWebGL(this.element,{alpha:!0,antialias:!1,depth:!0,stencil:!0});this._renderingContext=new I(d[0]);this.attached=!0;this._cachedRenderParams=z(b);return v.prototype.attach.call(this,b)};f.prototype.detach=function(b){v.prototype.detach.call(this,b);this._cachedRenderParams=this._renderingContext=null};f.prototype.beforeRenderChildren=function(b,d){var a=b.state;if(!a.spatialReference||
!(a.spatialReference._isWrappable?a.spatialReference._isWrappable():a.spatialReference.isWrappable))this._clipFrame=!1;else{var e=a.width,c=a.height,f=a.rotation,k=this._renderingContext,e=e*b.devicePixelRatio,c=c*b.devicePixelRatio,m=G.toRadian(f),g=Math.abs(Math.cos(m)),t=Math.abs(Math.sin(m)),p=Math.round(e*g+c*t),h=Math.round(a.worldScreenWidth);if(p<=h)this._clipFrame=!1;else{if(!this._clipFBO||this._clipFBO.width!==e||this._clipFBO.height!==c)this._clipFBO=new x(k,{colorTarget:0,depthStencilTarget:3,
width:e,height:c});var q=0.5*e,u=0.5*c,p=1/e,a=1/c,h=0.5*h*b.devicePixelRatio,r=0.5*(e*t+c*g),e=this._upperLeft,g=this._upperRight,t=this._lowerLeft,n=this._lowerRight;l.set(e,-h,-r);l.set(g,h,-r);l.set(t,-h,r);l.set(n,h,r);w.identity(this._mat2);w.translate(this._mat2,this._mat2,[q,u]);0!==f&&w.rotate(this._mat2,this._mat2,m);l.transformMat2d(e,e,this._mat2);l.transformMat2d(g,g,this._mat2);l.transformMat2d(t,t,this._mat2);l.transformMat2d(n,n,this._mat2);f=this._clipData;f.set([2*t[0]*p-1,2*(c-
t[1])*a-1,2*n[0]*p-1,2*(c-n[1])*a-1,2*e[0]*p-1,2*(c-e[1])*a-1,2*g[0]*p-1,2*(c-g[1])*a-1]);this._clipRendererInitialized||this._initializeClipRenderer(k);this._clipVBO.setData(f);k.bindFramebuffer(this._clipFBO);k.setDepthWriteEnabled(!0);k.setStencilWriteMask(255);k.setClearColor(0,0,0,0);k.setClearDepth(1);k.setClearStencil(0);k.clear(k.gl.COLOR_BUFFER_BIT|k.gl.DEPTH_BUFFER_BIT|k.gl.STENCIL_BUFFER_BIT);this._clipFrame=!0}}};f.prototype.afterRenderChildren=function(b,d){if(this._clipFrame&&this._clipRendererInitialized){var a=
this._renderingContext;a.bindFramebuffer();a.bindVAO(this._clipVAO);a.bindProgram(this._clipStencilProgram);a.setDepthWriteEnabled(!1);a.setDepthTestEnabled(!1);a.setStencilTestEnabled(!0);a.setBlendingEnabled(!1);a.setColorMask(!1,!1,!1,!1);a.setStencilOp(7680,7680,7681);a.setStencilWriteMask(255);a.setStencilFunction(519,1,255);a.drawElements(4,6,5123,0);a.bindVAO();a.setColorMask(!0,!0,!0,!0);a.setBlendingEnabled(!0);a.setStencilWriteMask(255);a.setStencilFunction(514,1,255);this._blitRenderer.render(a,
this._clipFBO.colorTexture,9728,1);a.setStencilTestEnabled(!1)}};f.prototype.render=function(b){var d=this.element.style;this.visible?(d.display="block",d.opacity=""+this.opacity,this._resizeCanvas(b),v.prototype.render.call(this,b),this._cachedRenderParams=z(b)):d.display="none"};f.prototype.takeScreenshot=function(b){var d=this._cachedRenderParams.devicePixelRatio,a=d*this._cachedRenderParams.state.width,e=d*this._cachedRenderParams.state.height,c=0,f=0,k=a,m=e,g=a,l=e;if(g=b.area)c=d*g.x,f=d*g.y,
k=d*g.width,m=d*g.height;void 0!==b.width&&void 0!==b.height?(g=b.width/b.height,m*g<k?(g*=m,c+=Math.floor((k-g)/2),k=Math.floor(g)):(g=k/g,f+=Math.floor((m-g)/2),m=Math.floor(g)),g=b.width,l=b.height):(g=k,l=m);d=document.createElement("canvas");d.width=g;d.height=l;var p=d.getContext("2d"),h=new Uint8Array(4*k*m),q=this._renderingContext,u=x.create(q,{colorTarget:1,depthStencilTarget:3,width:a,height:e});q.bindFramebuffer(u);q.setViewport(0,0,a,e);this._cachedRenderParams.budget&&this._cachedRenderParams.budget.reset(Number.MAX_VALUE);
var r=this._cachedRenderParams,n=this._renderingContext.gl;this._renderingContext.setClearColor(1,1,1,1);this._renderingContext.setClearDepth(1);this._renderingContext.setClearStencil(0);this._renderingContext.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT|n.STENCIL_BUFFER_BIT);r.context=this._renderingContext;this.renderChildren(r);u.readPixels(c,e-(f+m),k,m,6408,5121,h);q.bindFramebuffer();q=p.getImageData(0,0,g,l);if(0!==c||0!==f||k!==a||m!==e||g!==a||l!==e)E.resampleHermite(h,k,m,q.data,g,l,!0);
else{for(var a=m-1,e=0,k=4*k,s=n=r=u=m=f=c=void 0;e<a;){n=e*k;s=a*k;for(c=0;c<k;c+=4)f=h[n+c],m=h[n+c+1],u=h[n+c+2],r=h[n+c+3],h[n+c]=h[s+c],h[n+c+1]=h[s+c+1],h[n+c+2]=h[s+c+2],h[n+c+3]=h[s+c+3],h[s+c]=f,h[s+c+1]=m,h[s+c+2]=u,h[s+c+3]=r;e++;a--}k=q.data;a=0;for(e=h.length;a<e;a++)k[a]=h[a]}p.putImageData(q,0,0);p=M[b.format?b.format.toLowerCase():"png"];h=1;void 0!==b.quality&&(h=b.quality/100);b=d.toDataURL(p,h);return F.resolve({dataURL:b,x:0,y:0,width:g,height:l})};f.prototype.prepareChildrenRenderParameters=
function(b){if(!this.attached||!this._renderingContext)return null;var d=this._renderingContext,a=d.gl;d.setDepthWriteEnabled(!0);d.setStencilWriteMask(255);d.setClearColor(0,0,0,0);d.setClearDepth(1);d.setClearStencil(0);d.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);d.setViewport(0,0,this.element.width,this.element.height);d.setDepthWriteEnabled(!1);b.context=d;return b};f.prototype.attachChild=function(b,d){return b.attach(d)};f.prototype.detachChild=function(b,d){return b.detach(d)};
f.prototype.renderChild=function(b,d){return b.render(d)};f.prototype._resizeCanvas=function(b){var d=this.element,a=d.style,e=b.state,c=b.devicePixelRatio;b=e.width*c;c*=e.height;if(d.width!==b||d.height!==c)d.width=b,d.height=c,a.width=e.width+"px",a.height=e.height+"px"};f.prototype._initializeClipRenderer=function(b){if(this._clipRendererInitialized)return!0;this._blitRenderer=new D;var d={a_pos:0},a=new K(b,B,C,d);if(!a)return!1;var e=y.createVertex(b,35040,32),c=new Uint16Array([0,1,2,2,1,3]),
c=y.createIndex(b,35044,c);b=new L(b,d,{geometry:[{name:"a_pos",count:2,type:5126,offset:0,stride:8,normalized:!1,divisor:0}]},{geometry:e},c);this._clipStencilProgram=a;this._clipVBO=e;this._clipVAO=b;return this._clipRendererInitialized=!0};return f}(H)});