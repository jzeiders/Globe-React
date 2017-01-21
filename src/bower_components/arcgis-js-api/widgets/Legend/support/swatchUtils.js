// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","dojo/Deferred","dojo/_base/lang","dojox/gfx/_base","../../../core/sniff","../../../core/screenUtils","../../../core/promiseUtils","../../../core/Error","../../../core/Logger","../../../core/urlUtils","../../../symbols/support/symbolUtils","../../../symbols/support/gfxUtils","../../../request"],function(e,t,a,r,i,s,h,l,o,p,n,c,u){var L="picture-fill-symbol",y="picture-marker-symbol",m="simple-fill-symbol",f="simple-line-symbol",d="simple-marker-symbol",b="text-symbol",g="point-symbol-3d",x="line-symbol-3d",w="polygon-symbol-3d",v="mesh-symbol-3d",M=e.toUrl("esri/images/Legend/legend3dsymboldefault.png"),k=e.toUrl("esri/symbols/patterns/"),S={size:22,maxSize:120,maxOutlineSize:80},z={line:[{type:"path",path:"M -15,0 L 15,0 E"}],fill:[{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"}],lineSymbol3DLayer:[{type:"path",path:"M -2,5 L 12,5 E"}],pathSymbol3DLayer:[{type:"path",path:"M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z"},{type:"circle",cx:-2,cy:10,r:5}],extrudeSymbol3DLayer:[{type:"path",path:"M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z"},{type:"path",path:"M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z"},{type:"path",path:"M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z"}],cone:[{type:"path",path:"M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z"}],invertedCone:[{type:"path",path:"M 0,7 L -8,-8 L 8,-8 Z"},{type:"path",path:"M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z"}],cube:[{type:"path",path:"M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z"},{type:"path",path:"M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z"},{type:"path",path:"M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z"}],cylinder:[{type:"path",path:"M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:8,ry:2}],diamond:[{type:"path",path:"M 0,-10 L 10,-1 L -1,1 L 0,-10 Z"},{type:"path",path:"M 0,-10 L -1,1 L -8,-1 L 0,-10 Z"},{type:"path",path:"M -1,1 L 0,10 L -8,-1 L -1,1 Z"},{type:"path",path:"M -1,0 L 0,10 L 10,-1 L -1,1 Z"}],tetrahedron:[{type:"path",path:"M 0,-10 L 10,7 L 0,0 L 0,-10 Z"},{type:"path",path:"M 0,-10 L 0,0 L -8,7 L 0,-10 Z"},{type:"path",path:"M 10,7 L 0,0 L -8,7 L 10,7 Z"}]},E=o.getLogger("esri.widgets.Legend.support.swatchUtils"),Z=function(e,t){return-1===e.type.indexOf("3d")?O(e):T(e,t)},O=function(e){var t=U(e),a={fill:D(e),stroke:t},i=e.constructor,o=i.defaultProps,p=null,n=t?t.width:0,c=0,u=0;switch(e.type){case d:var g=e.style,x=Math.min(s.pt2px(e.size||o.size),S.maxSize),w=.5*x,v=-w,M=+w,k=-w,E=+w;switch(c=x,u=x,g){case i.STYLE_CIRCLE:p={type:"circle",cx:0,cy:0,r:w};break;case i.STYLE_CROSS:p={type:"path",path:"M "+v+",0 L "+M+",0 M 0,"+k+" L 0,"+E+" E"};break;case i.STYLE_DIAMOND:p={type:"path",path:"M "+v+",0 L 0,"+k+" L "+M+",0 L 0,"+E+" L "+v+",0 Z"};break;case i.STYLE_SQUARE:p={type:"path",path:"M "+v+","+E+" L "+v+","+k+" L "+M+","+k+" L "+M+","+E+" L "+v+","+E+" Z"};break;case i.STYLE_X:p={type:"path",path:"M "+v+","+E+" L "+M+","+k+" M "+v+","+k+" L "+M+","+E+" E"};break;case i.STYLE_PATH:p={type:"path",path:e.path||""}}break;case f:p=z.line[0],u=Math.max(n,S.size),n=0;break;case L:case m:p=z.fill[0];break;case y:var Z=Math.min(s.pt2px(e.width),S.maxSize),O=Math.min(s.pt2px(e.height),S.maxSize);p={type:"image",x:-Math.round(Z/2),y:-Math.round(O/2),width:Z,height:O,src:e.source&&e.source.imageData?"data:"+e.source.contentType+";base64,"+e.source.imageData:e.url||""},c=Z,u=O;break;case b:var I=e.font,T=Math.min(s.pt2px(I.size),S.maxSize);c=T,u=T,p={type:"text",text:e.text,x:0,y:.25*r.normalizedLength(I?T:0),align:"middle",decoration:e.decoration||I&&I.decoration,rotated:e.rotated,kerning:e.kerning},a.font=I&&{size:T,style:I.style,variant:I.variant,decoration:I.decoration,weight:I.weight,family:I.family}}return p?(a.shape=p,h.resolve({swatch:[[a]],sizes:[(c||S.size)+n,(u||S.size)+n]})):h.reject(new l("swatchUtils: swatchInfo2D","symbol not supported."))},D=function(e){var t=null,i=e.style;if(e){var h=e.constructor;switch(e.type){case d:i!==h.STYLE_CROSS&&i!==h.STYLE_X&&(t=e.color);break;case m:i===h.STYLE_SOLID?t=e.color:i!==h.STYLE_NULL&&(t=a.mixin({},r.defaultPattern,{src:k+i+".png",width:10,height:10}));break;case L:t=a.mixin({},r.defaultPattern,{src:e.url,width:s.pt2px(e.width)*e.xscale,height:s.pt2px(e.height)*e.yscale,x:s.pt2px(e.xoffset),y:s.pt2px(e.yoffset)});break;case b:t=e.color}}return t},U=function(e){var t=null;if(e){var a=e.constructor,r=s.pt2px(e.width);switch(e.type){case m:case L:case d:t=U(e.outline);break;case f:e.style!==a.STYLE_NULL&&0!==r&&(t={color:e.color,style:I(e.style),width:Math.min(r,S.maxOutlineSize),cap:e.cap,join:e.join===a.JOIN_MITER?s.pt2px(e.miterLimit):e.join});break;default:t=null}}return t},I=function(){var e={};return function(t){if(e[t])return e[t];var a=t.replace(/-/g,"");return e[t]=a,a}}(),T=function(e,t){if(0===e.symbolLayers.length)return h.reject(new l("swatchUtils: swatchInfo3D","No symbolLayers in the symbol."));var a=null;switch(e.type){case g:a=P(e,t);break;case x:a=N(e,t);break;case w:case v:a=A(e,t)}return a?a.then(function(e){return e&&null!=e.swatch&&e.swatch.length?e:null}):h.reject(new l("swatchUtils: swatchInfo3D","symbol not supported."))},j=document.createElement("canvas"),_=document.createElement("canvas"),C=function(e,t,a){t=Math.ceil(t),a=Math.ceil(a),e.width=t,e.height=a,e.style.width=t+"px",e.style.height=a+"px";var r=e.getContext("2d");return r.clearRect(0,0,t,a),r},R=function(e,t,a){return B(e,t,a?!0:!1).then(function(r){var s=r.size,h=s?s.width:t,l=s?s.height:t;if(r.image&&a){var o=C(j,h,l),p=r.image.width,n=r.image.height;(i("edge")||i("ie"))&&/\.svg$/i.test(e)&&(p-=1,n-=1),o.drawImage(r.image,0,0,p,n,0,0,h,l),o.globalCompositeOperation="source-atop",o.rect(0,0,h,l),o.fillStyle=a.toCss(),o.fill();var c=C(_,h,l);c.drawImage(r.image,0,0,p,n,0,0,h,l),c.globalCompositeOperation="multiply",c.drawImage(j,0,0),e=_.toDataURL("image/png")}return{url:e,width:h,height:l}}).otherwise(function(){return{url:e,width:t,height:t}})},Y=function(e,t){var a=t&&t.resource,r=a&&a.href;return r&&"Object"!==t.type?h.resolve(r):e.thumbnail&&e.thumbnail.url?h.resolve(e.thumbnail.url):e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?n.fetchStyleSymbol(e.styleOrigin,{portal:e.styleOrigin.portal}).always(function(e){return e&&e.thumbnail&&e.thumbnail.url||M}):h.resolve(M)},P=function(e,t){var a=e.symbolLayers,r=[],i=0,l=0;return a.forEach(function(a){var o=a&&a.type,p="Icon"===o,n="Object"===o;if(p||n){var c=Q(a),u=c?c.width:0;if(a&&a.resource&&a.resource.href){var L=Y(e,a).then(function(e){return R(e,t||a.size,a.get("material.color"))}).then(function(e){var t=e.width,a=e.height;return i=Math.max(i,t+2*u),l=Math.max(l,a+2*u),[{shape:{type:"image",width:t,height:a,src:e.url}}]});r.unshift(L)}else{var y;y=t||a.size?Math.ceil(Math.min(s.pt2px(t||a.size),S.maxSize)):S.size;var m=a.get("resource.primitive");m||(m=p?"circle":"sphere"),i=Math.max(i,y+2*u),l=Math.max(l,y+2*u),r.unshift(h.resolve(F(a,m,y)))}}}),h.eachAlways(r).then(function(e){var t=[];return e.forEach(function(e){e.value?t.push(e.value):e.error&&E.warn("error while building swatchInfo!",e.error)}),{swatch:t,sizes:[i,l]}})},N=function(e,t){var a=e.symbolLayers,r=[],i=0,l=0;return a.forEach(function(e){var a=e&&e.type,h="Line"===a,o="Path"===a;if(h||o){var p=X(e,0),n=[];if(h)n.push({shape:z.lineSymbol3DLayer[0],stroke:p}),l=Math.max(l,p&&p.width||0),i=S.size;else{t=t&&s.pt2px(t)||S.size;var c=H(e,0),u=H(e,-.2),L=X(e,-.4),y=1;L.width=y,n.push({shape:z.pathSymbol3DLayer[0],fill:u,stroke:L}),n.push({shape:z.pathSymbol3DLayer[1],fill:c,stroke:L}),l=Math.max(l,t+y),i=l}r.push(n)}}),h.resolve({swatch:r,sizes:[i,l]})},A=function(e,t){var a=e.type,r=a===v,i=e.symbolLayers,l=[],o=0,p=0;return t=t&&s.pt2px(t)||S.size,i.forEach(function(e){var a=e.type,i="Fill"===a,s="Line"===a,h="Extrude"===e.type,n=[];if(!r||i){var c=z.fill[0];if(i){var u=Q(e),L=u&&u.width||0;o=Math.max(o,t+L),p=Math.max(p,t+L),n.push({shape:c,fill:H(e,0),stroke:u})}else if(s){var y=X(e,0),m=y&&y.width||0,f={stroke:y,shape:c};o=Math.max(o,S.size+m),p=Math.max(p,S.size+m),n.push(f)}else if(h){var d=X(e,-.4),b=H(e,0),g=H(e,-.2),x=q(t);d.width=1,n.push({shape:x[0],fill:g,stroke:d}),n.push({shape:x[1],fill:g,stroke:d}),n.push({shape:x[2],fill:b,stroke:d});var w=17,v=10+.5*t;o=Math.max(o,w+d.width),p=Math.max(p,v+d.width)}l.push(n)}}),h.resolve({swatch:l,sizes:[o,p]})},q=function(e){var t=.5*e,a="M -7,-5 L -2,0 L -2,"+t+" L -7,"+(t-4)+" L -7,-5 Z",r="M -2,0 L -2,"+t+" L 10,"+(t-10)+" L 10,-10 L -2,0 Z",i="M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z";return[{type:"path",path:a},{type:"path",path:r},{type:"path",path:i}]},F=function(e,t,a){var r,i,s,h=[],l=.5*a,o=-l,p=+l,n=-l,c=+l;switch(t){case"circle":h.push({shape:{type:"circle",cx:0,cy:0,r:l},fill:H(e,0),stroke:Q(e)});break;case"square":h.push({shape:{type:"path",path:"M "+o+","+c+" L "+o+","+n+" L "+p+","+n+" L "+p+","+c+" L "+o+","+c+" Z"},fill:H(e,0),stroke:Q(e)});break;case"cross":h.push({shape:{type:"path",path:"M "+o+",0 L "+p+",0 E"},stroke:J(e)}),h.push({shape:{type:"path",path:"M 0,"+n+" L 0,"+c+" E"},stroke:J(e)});break;case"x":h.push({shape:{type:"path",path:"M "+o+","+c+" L "+p+","+n+" E"},stroke:J(e)}),h.push({shape:{type:"path",path:"M "+o+","+n+" L "+p+","+c+" E"},stroke:J(e)});break;case"kite":h.push({shape:{type:"path",path:"M 0,"+n+" L "+p+",0 L 0,"+c+" L "+o+",0 L 0,"+o+" Z"},fill:H(e,0),stroke:Q(e)});break;case"cone":r=H(e,0),i=H(e,-.6),s=V(r,i),s.x1=-5,s.y1=0,s.x2=5,s.y2=0,h.push({shape:z.cone[0],fill:s});break;case"inverted-cone":r=H(e,0),i=H(e,-.6),s=V(r,i),s.x1=-5,s.y1=0,s.x2=5,s.y2=0,h.push({shape:z.invertedCone[0],fill:s}),h.push({shape:z.invertedCone[1],fill:r});break;case"cube":h.push({shape:z.cube[0],fill:H(e,0)}),h.push({shape:z.cube[1],fill:H(e,-.3)}),h.push({shape:z.cube[2],fill:H(e,-.5)});break;case"cylinder":r=H(e,0),i=H(e,-.6),s=V(r,i),s.x1=-5,s.y1=0,s.x2=5,s.y2=0,h.push({shape:z.cylinder[0],fill:s}),h.push({shape:z.cylinder[1],fill:H(e,0)});break;case"diamond":h.push({shape:z.diamond[0],fill:H(e,-.3)}),h.push({shape:z.diamond[1],fill:H(e,0)}),h.push({shape:z.diamond[2],fill:H(e,-.3)}),h.push({shape:z.diamond[3],fill:H(e,-.7)});break;case"sphere":r=H(e,0),i=H(e,-.6),h.push({shape:{type:"circle",cx:0,cy:0,r:l},fill:V(r,i)});break;case"tetrahedron":h.push({shape:z.tetrahedron[0],fill:H(e,-.3)}),h.push({shape:z.tetrahedron[1],fill:H(e,0)}),h.push({shape:z.tetrahedron[2],fill:H(e,-.6)})}return h},X=function(e,t){if(!e.material)return{};for(var a=e.material.color.toRgb(),r="rgba(",i=0;3>i;i++)r+=$(a[i],t)+",";r+=e.material.color.a+");";var h=e.size?s.pt2px(e.size):.75;return{color:r,width:Math.min(h,S.maxOutlineSize)}},H=function(e,t){if(!e.material||!e.material.color){var a=c.defaultThematicColor.r,r=$(a,t);return[r,r,r,100]}for(var i=e.material.color.toRgb(),s=0;3>s;s++)i[s]=$(i[s],t);return i.push(e.material.color.a),i},J=function(e){return e.outline?Q(e):{color:"rgba(0,0,0,1)",width:1.5}},Q=function(e){var t=e.outline,a=e.material&&e.material.color,r=a&&a.toRgba().toString();if(!t)return"Fill"===e.type&&"255,255,255,1"===r?{color:"#bdc3c7",width:.75}:null;var i=s.pt2px(t.size)||0,h=null!=t.color?t.color.toRgba():"255,255,255,1";return{color:"rgba("+h+")",width:Math.min(i,S.maxOutlineSize)}},V=function(e,t){return{type:"linear",x1:0,y1:0,x2:4,y2:4,colors:[{color:e,offset:0},{color:t,offset:1}]}},$=function(e,t){var a=.75;return Math.min(Math.max(e+255*t*a,0),255)},B=function(e,a,r){if(!e)return h.reject(new l("swatchUtils: imageDataSize","href not provided."));var i;if(p.isDataProtocol(e)){var o=new Image;if(o.src=e,o.complete)i=h.resolve({data:o});else{var n=new t;i=n.promise,o.onload=function(){n.resolve({data:o})},o.onerror=n.reject}}else r||(e+=(-1===e.indexOf("?")?"?":"&")+"legend=1"),i=u(e,{responseType:"image",allowImageDataAccess:r});return i.then(function(e){var t,i=e.data,h=i.width,l=i.height,o=h/l,p={};return"object"==typeof a&&a.maxSize?(t=s.pt2px(a.maxSize),a=Math.max(h,l)):(t=S.maxSize,a=a?s.pt2px(a):S.size),a=Math.min(a,t),1>=o?(p.height=a,p.width=Math.ceil(p.height*o)):(p.width=a,p.height=Math.ceil(p.width/o)),{image:r?i:null,size:p}}).otherwise(function(t){if(r)return B(e,a,!1);throw t})},G=function(e){var t=e&&e.symbolLayers;return t?t.some(function(e){var t=e&&e.type;return"Object"===t||"Path"===t||"Extrude"===t}):!1};return{getSwatchInfo:Z,isVolumetricSymbol:G}});