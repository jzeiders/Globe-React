// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports ./utils ./extensions/serializableProperty ./get dojo/_base/lang".split(" "),function(D,c,B,u,v,C){function r(x,a,f){void 0===f&&(f=y);for(var d=B.getProperties(x),z=d.metadatas,s={},h=0,m=Object.getOwnPropertyNames(a);h<m.length;h++){var k=s,n=z,p=m[h],l=a,c=f,q=n[p],g=u.originSpecificReadPropertyDefinition(q,c);q&&((!g||void 0===g.readable||g.readable)&&!(g&&null!=g.readFrom))&&(k[p]=!0);q=0;for(g=Object.getOwnPropertyNames(n);q<g.length;q++){var r=g[q],e;a:{var b=u.originSpecificReadPropertyDefinition(n[r],
c);e=p;var A=l;if(b=b&&(!b||void 0===b.readable||b.readable)&&b.readFrom)if("string"===typeof b){if(b===e||-1<b.indexOf(".")&&0===b.indexOf(e)&&v.exists(b,A)){e=!0;break a}}else for(var w=0;w<b.length;w++){var t=b[w];if(t===e||-1<t.indexOf(".")&&0===t.indexOf(e)&&v.exists(t,A)){e=!0;break a}}e=!1}e&&(k[r]=!0)}}d.setDefaultOrigin(f.origin);h=0;for(s=Object.getOwnPropertyNames(s);h<s.length;h++)m=s[h],n=(k=u.originSpecificReadPropertyDefinition(z[m],f))&&k.read,p=k&&k.readFrom,l=a[m],p&&"string"===
typeof p&&(l=v.valueOf(a,k.readFrom)),n&&(l=n.call(x,l,a,f)),void 0!==l&&d.set(m,l);d.setDefaultOrigin("user")}var y={origin:"service"};c.read=r;c.readLoadable=function(c,a,f,d){void 0===d&&(d=y);a=C.mixin({},d,{messages:[]});f(a);a.messages.forEach(function(a){"warning"===a.type&&!c.loaded?c.loadWarnings.push(a):d&&d.messages.push(a)})};Object.defineProperty(c,"__esModule",{value:!0});c.default=r});