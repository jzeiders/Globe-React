//>>built
define(["dojo/_base/lang","dojo/_base/Color","dojo/_base/declare","dojox/gfx/_base","./_base"],function(q,m,n,p,l){var a=l.lighting={black:function(){return{r:0,g:0,b:0,a:1}},white:function(){return{r:1,g:1,b:1,a:1}},toStdColor:function(b){b=p.normalizeColor(b);return{r:b.r/255,g:b.g/255,b:b.b/255,a:b.a}},fromStdColor:function(b){return new m([Math.round(255*b.r),Math.round(255*b.g),Math.round(255*b.b),b.a])},scaleColor:function(b,a){return{r:b*a.r,g:b*a.g,b:b*a.b,a:b*a.a}},addColor:function(b,a){return{r:b.r+
a.r,g:b.g+a.g,b:b.b+a.b,a:b.a+a.a}},multiplyColor:function(b,a){return{r:b.r*a.r,g:b.g*a.g,b:b.b*a.b,a:b.a*a.a}},saturateColor:function(a){return{r:0>a.r?0:1<a.r?1:a.r,g:0>a.g?0:1<a.g?1:a.g,b:0>a.b?0:1<a.b?1:a.b,a:0>a.a?0:1<a.a?1:a.a}},mixColor:function(b,c,d){return a.addColor(a.scaleColor(d,b),a.scaleColor(1-d,c))},diff2Color:function(a,c){var d=a.r-c.r,e=a.g-c.g,f=a.b-c.b,g=a.a-c.a;return d*d+e*e+f*f+g*g},length2Color:function(a){return a.r*a.r+a.g*a.g+a.b*a.b+a.a*a.a},dot:function(a,c){return a.x*
c.x+a.y*c.y+a.z*c.z},scale:function(a,c){return{x:a*c.x,y:a*c.y,z:a*c.z}},add:function(a,c){return{x:a.x+c.x,y:a.y+c.y,z:a.z+c.z}},saturate:function(a){return Math.min(Math.max(a,0),1)},length:function(a){return Math.sqrt(l.lighting.dot(a,a))},normalize:function(b){return a.scale(1/a.length(b),b)},faceforward:function(a,c){var d=l.lighting,e=0>d.dot(c,a)?1:-1;return d.scale(e,a)},reflect:function(a,c){var d=l.lighting;return d.add(a,d.scale(-2*d.dot(a,c),c))},diffuse:function(b,c){for(var d=a.black(),
e=0;e<c.length;++e)var f=c[e],g=a.dot(a.normalize(f.direction),b),d=a.addColor(d,a.scaleColor(g,f.color));return a.saturateColor(d)},specular:function(b,c,d,e){for(var f=a.black(),g=0;g<e.length;++g)var h=e[g],k=a.normalize(a.add(a.normalize(h.direction),c)),k=Math.pow(Math.max(0,a.dot(b,k)),1/d),f=a.addColor(f,a.scaleColor(k,h.color));return a.saturateColor(f)},phong:function(b,c,d,e){b=a.normalize(b);for(var f=a.black(),g=0;g<e.length;++g)var h=e[g],k=a.reflect(a.scale(-1,a.normalize(c)),b),k=Math.pow(Math.max(0,
a.dot(k,a.normalize(h.direction))),d),f=a.addColor(f,a.scaleColor(k,h.color));return a.saturateColor(f)}};n("dojox.gfx3d.lighting.Model",null,{constructor:function(b,c,d,e){this.incident=a.normalize(b);this.lights=[];for(b=0;b<c.length;++b){var f=c[b];this.lights.push({direction:a.normalize(f.direction),color:a.toStdColor(f.color)})}this.ambient=a.toStdColor(d.color?d.color:"white");this.ambient=a.scaleColor(d.intensity,this.ambient);this.ambient=a.scaleColor(this.ambient.a,this.ambient);this.ambient.a=
1;this.specular=a.toStdColor(e?e:"white");this.specular=a.scaleColor(this.specular.a,this.specular);this.specular.a=1;this.npr_cool={r:0,g:0,b:0.4,a:1};this.npr_warm={r:0.4,g:0.4,b:0.2,a:1};this.npr_alpha=0.2;this.npr_scale=this.npr_beta=0.6},constant:function(b,c,d){d=a.toStdColor(d);b=d.a;d=a.scaleColor(b,d);d.a=b;return a.fromStdColor(a.saturateColor(d))},matte:function(b,c,d){"string"==typeof c&&(c=a.finish[c]);d=a.toStdColor(d);b=a.faceforward(a.normalize(b),this.incident);var e=a.scaleColor(c.Ka,
this.ambient),f=a.saturate(-4*a.dot(b,this.incident));b=a.scaleColor(f*c.Kd,a.diffuse(b,this.lights));e=a.scaleColor(d.a,a.multiplyColor(d,a.addColor(e,b)));e.a=d.a;return a.fromStdColor(a.saturateColor(e))},metal:function(b,c,d){"string"==typeof c&&(c=a.finish[c]);d=a.toStdColor(d);b=a.faceforward(a.normalize(b),this.incident);var e=a.scale(-1,this.incident),f;f=a.scaleColor(c.Ka,this.ambient);var g=a.saturate(-4*a.dot(b,this.incident));b="phong"in c?a.scaleColor(g*c.Ks*c.phong,a.phong(b,e,c.phong_size,
this.lights)):a.scaleColor(g*c.Ks,a.specular(b,e,c.roughness,this.lights));f=a.scaleColor(d.a,a.addColor(a.multiplyColor(d,f),a.multiplyColor(this.specular,b)));f.a=d.a;return a.fromStdColor(a.saturateColor(f))},plastic:function(b,c,d){"string"==typeof c&&(c=a.finish[c]);d=a.toStdColor(d);b=a.faceforward(a.normalize(b),this.incident);var e=a.scale(-1,this.incident),f;f=a.scaleColor(c.Ka,this.ambient);var g=a.saturate(-4*a.dot(b,this.incident)),h=a.scaleColor(g*c.Kd,a.diffuse(b,this.lights));b="phong"in
c?a.scaleColor(g*c.Ks*c.phong,a.phong(b,e,c.phong_size,this.lights)):a.scaleColor(g*c.Ks,a.specular(b,e,c.roughness,this.lights));f=a.scaleColor(d.a,a.addColor(a.multiplyColor(d,a.addColor(f,h)),a.multiplyColor(this.specular,b)));f.a=d.a;return a.fromStdColor(a.saturateColor(f))},npr:function(b,c,d){"string"==typeof c&&(c=a.finish[c]);d=a.toStdColor(d);b=a.faceforward(a.normalize(b),this.incident);var e=a.scaleColor(c.Ka,this.ambient),f=a.saturate(-4*a.dot(b,this.incident));c=a.scaleColor(f*c.Kd,
a.diffuse(b,this.lights));e=a.scaleColor(d.a,a.multiplyColor(d,a.addColor(e,c)));c=a.addColor(this.npr_cool,a.scaleColor(this.npr_alpha,e));f=a.addColor(this.npr_warm,a.scaleColor(this.npr_beta,e));b=(1+a.dot(this.incident,b))/2;e=a.scaleColor(this.npr_scale,a.addColor(e,a.mixColor(c,f,b)));e.a=d.a;return a.fromStdColor(a.saturateColor(e))}});l.lighting.finish={defaults:{Ka:0.1,Kd:0.6,Ks:0,roughness:0.05},dull:{Ka:0.1,Kd:0.6,Ks:0.5,roughness:0.15},shiny:{Ka:0.1,Kd:0.6,Ks:1,roughness:0.001},glossy:{Ka:0.1,
Kd:0.6,Ks:1,roughness:1E-4},phong_dull:{Ka:0.1,Kd:0.6,Ks:0.5,phong:0.5,phong_size:1},phong_shiny:{Ka:0.1,Kd:0.6,Ks:1,phong:1,phong_size:200},phong_glossy:{Ka:0.1,Kd:0.6,Ks:1,phong:1,phong_size:300},luminous:{Ka:1,Kd:0,Ks:0,roughness:0.05},metalA:{Ka:0.35,Kd:0.3,Ks:0.8,roughness:0.05},metalB:{Ka:0.3,Kd:0.4,Ks:0.7,roughness:1/60},metalC:{Ka:0.25,Kd:0.5,Ks:0.8,roughness:0.0125},metalD:{Ka:0.15,Kd:0.6,Ks:0.8,roughness:0.01},metalE:{Ka:0.1,Kd:0.7,Ks:0.8,roughness:1/120}};return a});