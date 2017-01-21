// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
(function(q,A){"function"===typeof define&&define.amd?define(["exports"],A):"object"===typeof exports&&"string"!==typeof exports.nodeName?A(exports):A(q.maquette={})})(this,function(q){var A=[],y=function(b,a){var c={};Object.keys(b).forEach(function(a){c[a]=b[a]});a&&Object.keys(a).forEach(function(b){c[b]=a[b]});return c},D=function(b,a){return b.vnodeSelector!==a.vnodeSelector?!1:b.properties&&a.properties?b.properties.key!==a.properties.key?!1:b.properties.bind===a.properties.bind:!b.properties&&
!a.properties},F=function(b){return{vnodeSelector:"",properties:void 0,children:void 0,text:b.toString(),domNode:null}},G=function(b,a,c){for(var d=0,g=a.length;d<g;d++){var h=a[d];Array.isArray(h)?G(b,h,c):null!==h&&void 0!==h&&(h.hasOwnProperty("vnodeSelector")||(h=F(h)),c.push(h))}},H=function(){throw Error("Provide a transitions object to the projectionOptions to do animations");},x={namespace:void 0,eventHandlerInterceptor:void 0,styleApplyer:function(b,a,c){b.style[a]=c},transitions:{enter:H,
exit:H}},I=function(b){if("string"!==typeof b)throw Error("Style values must be strings");},L=function(b,a,c){if(a)for(var d=c.eventHandlerInterceptor,g=Object.keys(a),h=g.length,f=0;f<h;f++){var e=g[f],k=a[e];if("className"===e)throw Error('Property "className" is not supported, use "class".');if("class"===e)k.split(/\s+/).forEach(function(a){return b.classList.add(a)});else if("classes"===e)for(var n=Object.keys(k),w=n.length,e=0;e<w;e++){var t=n[e];k[t]&&b.classList.add(t)}else if("styles"===e){n=
Object.keys(k);w=n.length;for(e=0;e<w;e++){var t=n[e],m=k[t];m&&(I(m),c.styleApplyer(b,t,m))}}else if("key"!==e&&!(null===k||void 0===k))n=typeof k,"function"===n?0===e.lastIndexOf("on",0)&&(d&&(k=d(e,k,b,a)),"oninput"===e&&function(){var a=k;k=function(b){b.target["oninput-value"]=b.target.value;a.apply(this,[b])}}(),b[e]=k):"string"===n&&"value"!==e&&"innerHTML"!==e?"http://www.w3.org/2000/svg"===c.namespace&&"href"===e?b.setAttributeNS("http://www.w3.org/1999/xlink",e,k):b.setAttribute(e,k):b[e]=
k}},J=function(b,a){var c=b.domNode;if(b.properties){var d=b.properties.exitAnimation;if(d){c.style.pointerEvents="none";var g=function(){c.parentNode&&c.parentNode.removeChild(c)};"function"===typeof d?d(c,g,b.properties):a.exit(b.domNode,b.properties,d,g);return}}c.parentNode&&c.parentNode.removeChild(c)},E=function(b,a,c,d){var g=b[a];if(""!==g.vnodeSelector){var h=g.properties;if(!h||!(void 0===h.key?h.bind:h.key))for(h=0;h<b.length;h++)if(h!==a&&D(b[h],g)){if("added"===d)throw Error(c.vnodeSelector+
" had a "+g.vnodeSelector+" child added, but there is now more than one. You must add unique key properties to make them distinguishable.");throw Error(c.vnodeSelector+" had a "+g.vnodeSelector+" child removed, but there were more than one. You must add unique key properties to make them distinguishable.");}}},z,C,K=function(b,a,c){var d=a.children;if(d)for(var g=0;g<d.length;g++)z(d[g],b,void 0,c);a.text&&(b.textContent=a.text);L(b,a.properties,c);a.properties&&a.properties.afterCreate&&a.properties.afterCreate.apply(a.properties.bind||
a.properties,[b,c,a.vnodeSelector,a.properties,a.children])};z=function(b,a,c,d){var g,h,f,e=0,k=b.vnodeSelector;if(""===k)g=b.domNode=document.createTextNode(b.text),void 0!==c?a.insertBefore(g,c):a.appendChild(g);else{for(h=0;h<=k.length;++h)if(f=k.charAt(h),h===k.length||"."===f||"#"===f)f=k.charAt(e-1),e=k.slice(e,h),"."===f?g.classList.add(e):"#"===f?g.id=e:("svg"===e&&(d=y(d,{namespace:"http://www.w3.org/2000/svg"})),void 0!==d.namespace?g=b.domNode=document.createElementNS(d.namespace,e):(g=
b.domNode=document.createElement(e),"input"===e&&(b.properties&&void 0!==b.properties.type)&&g.setAttribute("type",b.properties.type)),void 0!==c?a.insertBefore(g,c):a.appendChild(g)),e=h+1;K(g,b,d)}};C=function(b,a,c){var d=b.domNode,g=!1;if(b===a)return!1;var h=!1;if(""===a.vnodeSelector){if(a.text!==b.text)return b=document.createTextNode(a.text),d.parentNode.replaceChild(b,d),a.domNode=b,!0}else{0===a.vnodeSelector.lastIndexOf("svg",0)&&(c=y(c,{namespace:"http://www.w3.org/2000/svg"}));b.text!==
a.text&&(h=!0,void 0===a.text?d.removeChild(d.firstChild):d.textContent=a.text);var f;f=b.children;var e=a.children,k=c;if(f===e)f=!1;else{f=f||A;for(var e=e||A,n=f.length,w=e.length,t=k.transitions,m=0,p=0,s=!1;p<w;){var r=m<n?f[m]:void 0,l=e[p];if(void 0!==r&&D(r,l))s=C(r,l,k)||s,m++;else{b:{var r=f,u=l;if(""!==u.vnodeSelector)for(var v=m+1;v<r.length;v++)if(D(r[v],u)){r=v;break b}r=-1}if(0<=r){for(;m<r;m++)J(f[m],t),E(f,m,a,"removed");s=C(f[r],l,k)||s;m=r+1}else z(l,d,m<n?f[m].domNode:void 0,k),
r=t,l.properties&&(u=l.properties.enterAnimation)&&("function"===typeof u?u(l.domNode,l.properties):r.enter(l.domNode,l.properties,u)),E(e,p,a,"added")}p++}if(n>m)for(;m<n;m++)J(f[m],t),E(f,m,a,"removed");f=s}h=f||h;f=b.properties;e=a.properties;k=c;if(e){s=!1;n=Object.keys(e);w=n.length;for(t=0;t<w;t++)if(l=n[t],p=e[l],m=f[l],"class"===l){if(m!==p)throw Error('"class" property may not be updated. Use the "classes" property for conditional css classes.');}else if("classes"===l){r=d.classList;u=Object.keys(p);
v=u.length;for(l=0;l<v;l++){var q=u[l],x=!!p[q];x!==!!m[q]&&(s=!0,x?r.add(q):r.remove(q))}}else if("styles"===l){r=Object.keys(p);u=r.length;for(l=0;l<u;l++)v=r[l],q=p[v],q!==m[v]&&(s=!0,q?(I(q),k.styleApplyer(d,v,q)):k.styleApplyer(d,v,""))}else if(!p&&"string"===typeof m&&(p=""),"value"===l)d[l]!==p&&d["oninput-value"]!==p&&(d[l]=p,d["oninput-value"]=void 0),p!==m&&(s=!0);else if(p!==m){s=typeof p;if("function"===s)throw Error("Functions may not be updated on subsequent renders (property: "+l+"). Hint: declare event handler functions outside the render() function.");
"string"===s&&"innerHTML"!==l?"http://www.w3.org/2000/svg"===k.namespace&&"href"===l?d.setAttributeNS("http://www.w3.org/1999/xlink",l,p):d.setAttribute(l,p):d[l]!==p&&(d[l]=p);s=!0}f=s}else f=void 0;h=f||h;a.properties&&a.properties.afterUpdate&&a.properties.afterUpdate.apply(a.properties.bind||a.properties,[d,c,a.vnodeSelector,a.properties,a.children])}h&&(a.properties&&a.properties.updateAnimation)&&a.properties.updateAnimation(d,a.properties,b.properties);a.domNode=b.domNode;return g};var B=function(b,
a){return{update:function(c){if(b.vnodeSelector!==c.vnodeSelector)throw Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");C(b,c,a);b=c},domNode:b.domNode}};q.h=function(b){var a=arguments[1];if("string"!==typeof b)throw Error();var c=1;a&&!a.hasOwnProperty("vnodeSelector")&&!Array.isArray(a)&&"object"===typeof a?c=2:a=void 0;var d=void 0,g=void 0,h=arguments.length;if(h===c+1){var f=arguments[c];"string"===typeof f?d=
f:void 0!==f&&(null!==f&&1===f.length&&"string"===typeof f[0])&&(d=f[0])}if(void 0===d)for(g=[];c<h;c++)f=arguments[c],null===f||void 0===f||(Array.isArray(f)?G(b,f,g):f.hasOwnProperty("vnodeSelector")?g.push(f):g.push(F(f)));return{vnodeSelector:b,properties:a,children:g,text:""===d?void 0:d,domNode:null}};q.dom={create:function(b,a){a=y(x,a);z(b,document.createElement("div"),void 0,a);return B(b,a)},append:function(b,a,c){c=y(x,c);z(a,b,void 0,c);return B(a,c)},insertBefore:function(b,a,c){c=y(x,
c);z(a,b.parentNode,b,c);return B(a,c)},merge:function(b,a,c){c=y(x,c);a.domNode=b;K(b,a,c);return B(a,c)}};q.createCache=function(){var b=void 0,a=void 0;return{invalidate:function(){b=a=void 0},result:function(c,d){if(b)for(var g=0;g<c.length;g++)b[g]!==c[g]&&(a=void 0);a||(a=d(),b=c);return a}}};q.createMapping=function(b,a,c){var d=[],g=[];return{results:g,map:function(h){for(var f=h.map(b),e=g.slice(),k=0,n=0;n<h.length;n++){var w=h[n],q=f[n];if(q===d[k])g[n]=e[k],c(w,e[k],n),k++;else{for(var m=
!1,p=1;p<d.length+1;p++){var s=(k+p)%d.length;if(d[s]===q){g[n]=e[s];c(h[n],e[s],n);k=s+1;m=!0;break}}m||(g[n]=a(w,n))}}g.length=h.length;d=f}}};q.createProjector=function(b){var a,c=y(x,b);c.eventHandlerInterceptor=function(b,c,d,e){return function(){a.scheduleRender();return c.apply(e.bind||this,arguments)}};var d=!0,g,h=!1,f=[],e=[],k=function(){g=void 0;if(d){d=!1;for(var a=0;a<f.length;a++){var b=e[a]();f[a].update(b)}d=!0}};return a={renderNow:k,scheduleRender:function(){!g&&!h&&(g=requestAnimationFrame(k))},
stop:function(){g&&(cancelAnimationFrame(g),g=void 0);h=!0},resume:function(){h=!1;d=!0;a.scheduleRender()},append:function(a,b){f.push(q.dom.append(a,b(),c));e.push(b)},insertBefore:function(a,b){f.push(q.dom.insertBefore(a,b(),c));e.push(b)},merge:function(a,b){f.push(q.dom.merge(a,b(),c));e.push(b)},replace:function(a,b){var d=b();z(d,a.parentNode,a,c);a.parentNode.removeChild(a);f.push(B(d,c));e.push(b)},detach:function(a){for(var b=0;b<e.length;b++)if(e[b]===a)return e.splice(b,1),f.splice(b,
1)[0];throw Error("renderMaquetteFunction was not found");}}}});