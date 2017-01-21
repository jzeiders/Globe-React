// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/Error"],function(C,p,k){function u(c,b,a){return{identifier:String.fromCharCode.apply(null,new Uint8Array(c,a+m.identifierOffset,m.identifierLength)),version:b.getUint16(a+m.versionOffset,f),checksum:b.getUint32(a+m.checksumOffset,f)}}function r(c,b,a){var d=[];b=q(c,b,d);for(var e=[],g=0;g<d.length;g++){e.length=0;b=q(c,b,e);for(var f=0;f<e.length;f++)a.push(e[f]+d[g])}return b}function q(c,b,a){var d=new DataView(c,b),e=d.getUint8(0),g=e&31,l=!!(e&32),
h=(e&192)>>6,e=0;if(0===h)e=d.getUint32(1,f),b+=5;else if(1===h)e=d.getUint16(1,f),b+=3;else if(2===h)e=d.getUint8(1),b+=2;else throw new k("lepcc-decode-error","Bad count type");if(l)throw new k("lepcc-decode-error","LUT not implemented");d=Math.ceil(e*g/8);c=new Uint8Array(c,b,d);for(var h=l=d=0,n=-1>>>32-g,m=0;m<e;m++){for(;l<g;)d|=c[h]<<l,l+=8,h+=1;a[m]=d&n;d>>>=g;l-=g;32<l+g&&(d|=c[h-1]>>8-l)}return b+h}var f=!0,m={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};
p.decodeXYZ=function(c){var b=new DataView(c,0),a=0,d=u(c,b,a),e=d.identifier,d=d.version,a=a+m.byteCount;if("LEPCC     "!==e)throw new k("lepcc-decode-error","Bad identifier");if(1<d)throw new k("lepcc-decode-error","Unknown version");var g=b.getUint32(a+0,f),l=b.getUint32(a+4,f),e=b.getFloat64(a+8,f),d=b.getFloat64(a+16,f),h=b.getFloat64(a+24,f),n=b.getFloat64(a+32,f),p=b.getFloat64(a+40,f),q=b.getFloat64(a+48,f),w=b.getFloat64(a+56,f),x=b.getFloat64(a+64,f),y=b.getFloat64(a+72,f),s=b.getUint32(a+
80,f);b.getUint32(a+84,f);a+=88;if(l*Math.pow(2,32)+g!==c.byteLength)throw new k("lepcc-decode-error","Bad size");var b=new Float64Array(3*s),g=[],l=[],s=[],z=[],a=r(c,a,g),a=r(c,a,l),a=r(c,a,s),a=r(c,a,z);if(a!==c.byteLength)throw new k("lepcc-decode-error","Bad length");for(var t=a=c=0;t<g.length;t++)for(var a=a+g[t],v=0,A=0;A<l[t];A++){var v=v+s[c],B=z[c];b[3*c]=Math.min(n,e+2*w*v);b[3*c+1]=Math.min(p,d+2*x*a);b[3*c+2]=Math.min(q,h+2*y*B);c++}return{errorX:w,errorY:x,errorZ:y,result:b}};p.decodeRGB=
function(c){var b=new DataView(c,0),a=0,d=u(c,b,a),e=d.identifier,d=d.version,a=a+m.byteCount;if("ClusterRGB"!==e)throw new k("lepcc-decode-error","Bad identifier");if(1<d)throw new k("lepcc-decode-error","Unknown version");var g=b.getUint32(a+0,f),l=b.getUint32(a+4,f),e=b.getUint32(a+8,f),d=b.getUint16(a+12,f),h=b.getUint8(a+14),n=b.getUint8(a+15),a=a+16;if(l*Math.pow(2,32)+g!==c.byteLength)throw new k("lepcc-decode-error","Bad size");if((2===h||1===h)&&0===n){if(3*d+e+a!==c.byteLength||256<d)throw new k("lepcc-decode-error",
"Bad count");b=new Uint8Array(c,a,3*d);d=new Uint8Array(c,a+3*d,e);a=new Uint8Array(3*e);for(c=0;c<e;c++)g=d[c],a[3*c]=b[3*g],a[3*c+1]=b[3*g+1],a[3*c+2]=b[3*g+2];return a}if(0===h&&0===n){if(3*e+a!==c.byteLength||0!==d)throw new k("lepcc-decode-error","Bad count");return(new Uint8Array(c,a)).slice()}if(2>=h&&1===n){if(a+3!==c.byteLength||1!==d)throw new k("lepcc-decode-error","Bad count");d=b.getUint8(a);g=b.getUint8(a+1);b=b.getUint8(a+2);a=new Uint8Array(3*e);for(c=0;c<e;c++)a[3*c]=d,a[3*c+1]=g,
a[3*c+2]=b;return a}throw new k("lepcc-decode-error","Bad method "+h+","+n);};p.decodeIntensity=function(c){var b=new DataView(c,0),a=0,d=u(c,b,a),e=d.identifier,d=d.version,a=a+m.byteCount;if("Intensity "!==e)throw new k("lepcc-decode-error","Bad identifier");if(1<d)throw new k("lepcc-decode-error","Unknown version");var g=b.getUint32(a+0,f),l=b.getUint32(a+4,f),e=b.getUint32(a+8,f),d=b.getUint16(a+12,f),h=b.getUint8(a+14);b.getUint8(a+15);a+=16;if(l*Math.pow(2,32)+g!==c.byteLength)throw new k("lepcc-decode-error",
"Bad size");b=new Uint16Array(e);if(8===h){if(e+a!==c.byteLength)throw new k("lepcc-decode-error","Bad size");h=new Uint8Array(c,a,e)}else if(16===h){if(2*e+a!==c.byteLength)throw new k("lepcc-decode-error","Bad size");h=new Uint16Array(c,a,e)}else if(h=[],q(c,a,h)!==c.byteLength)throw new k("lepcc-decode-error","Bad size");for(c=0;c<e;c++)b[c]=h[c]*d;return b}});