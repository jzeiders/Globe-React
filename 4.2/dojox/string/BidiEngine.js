//>>built
define(["dojo/_base/lang","dojo/_base/declare","dojo/Stateful"],function(J,c,e){function z(a,b,c,d,e){var k=a;void 0===b&&(b=e.defInFormat);void 0===c&&(c=e.defOutFormat);void 0===d&&(d=e.defSwap);if(b!==c){var f,h=b.substring(0,1);f=b.substring(1,4);var g=c.substring(0,1),m=c.substring(1,4);"C"===f.charAt(0)&&(f=D(k),f="ltr"===f||"rtl"===f?f.toUpperCase():"L"===b.charAt(2)?"LTR":"RTL",b=h+f);"C"===m.charAt(0)&&(f=D(k),"rtl"===f?m="RTL":"ltr"===f?(k=k.split(""),k.reverse(),f=D(k.join("")),m=f.toUpperCase()):
m="L"===c.charAt(2)?"LTR":"RTL",c=g+m)}if(b===c)return a;g=b.substring(0,1);k=b.substring(1,4);h=c.substring(0,1);m=c.substring(1,4);e.inFormat=b;e.outFormat=c;e.swap=d;if("L"===g&&"VLTR"===c){if("LTR"===k)return e.dir=w,u(a,e);if("RTL"===k)return e.dir=A,u(a,e)}if("V"===g&&"V"===h)return e.dir="RTL"===k?A:w,K(a,e);if("L"===g&&"VRTL"===c)return e.dir="LTR"===k?w:A,a=u(a,e),K(a);if("VLTR"===b&&"LLTR"===c)return e.dir=w,u(a,e);if("V"===g&&"L"===h&&k!==m)return a=K(a),"RTL"===k?z(a,"LLTR","VLTR",d,e):
z(a,"LRTL","VRTL",d,e);if("VRTL"===b&&"LRTL"===c)return z(a,"LRTL","VRTL",d,e);if("L"===g&&"L"===h)return b=e.swap,e.swap=b.substr(0,1)+"N","RTL"===k?(e.dir=A,a=u(a,e),e.swap="N"+b.substr(1,2),e.dir=w,a=u(a,e)):(e.dir=w,a=u(a,e),e.swap="N"+b.substr(1,2),a=z(a,"VLTR","LRTL",e.swap,e)),a}function D(a){return(a=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(a))?"z">=a[0]?"ltr":"rtl":""}function u(a,b){var c=a.split(""),d=[];N(c,d,b);if(!(0===b.hiLevel||b.swap.substr(0,
1)===b.swap.substr(1,2)))for(var e=0;e<c.length;e++)if(1===d[e]){var k=c,f=e,h;b:{h=c[e];for(var g=void 0,m=0,p=E.length-1;m<=p;)if(g=Math.floor((m+p)/2),h<E[g][0])p=g-1;else if(h>E[g][0])m=g+1;else{h=E[g][1];break b}}k[f]=h}O(2,c,d,b);O(1,c,d,b);F=d;return c.join("")}function N(a,b,c){var d=a.length,e=c.dir?da:ea,k=null,f=null,g=null,k=0,f=f=null,h=-1,m=f=null,p=[],P=[];c.hiLevel=c.dir;c.lastArabic=!1;c.hasUbatAl=!1;c.hasUbatB=!1;c.hasUbatS=!1;for(f=0;f<d;f++){var m=p,g=f,n=a[f].charCodeAt(0),l=
fa[n>>8];m[g]=l<t?l:ga[l-t][n&255]}for(m=0;m<d;m++){P[m]=f=ha(a,p,P,m,c);k=e[k][f];f=k&240;k&=15;b[m]=g=e[k][ia];if(0<f){if(16===f)for(f=h;f<m;f++)b[f]=1;h=-1}if(f=e[k][ja])-1===h&&(h=m);else if(-1<h){for(f=h;f<m;f++)b[f]=g;h=-1}p[m]===G&&(b[m]=0);c.hiLevel|=g}if(c.hasUbatS)for(a=0;a<d;a++)if(p[a]===Q){b[a]=c.dir;for(e=a-1;0<=e;e--)if(p[e]===R)b[e]=c.dir;else break}}function K(a,b){var c=a.split("");if(b){var d=[];N(c,d,b);F=d}c.reverse();s.reverse();return c.join("")}function S(a){for(var b=0;b<
T.length;b++)if(a>=T[b]&&a<=ka[b])return!0;return!1}function U(a,b,c,d){for(;b*c<d&&B(a[b]);)b+=c;return b*c<d&&S(a[b])?!0:!1}function O(a,b,c,d){if(!(d.hiLevel<a))if(1===a&&d.dir===A&&!d.hasUbatB)b.reverse(),s.reverse();else{d=b.length;for(var e=0,k,f,h;e<d;){if(c[e]>=a){for(k=e+1;k<d&&c[k]>=a;)k++;for(f=k-1;e<f;e++,f--)h=b[e],b[e]=b[f],b[f]=h,h=s[e],s[e]=s[f],s[f]=h;e=k}e++}}}function ha(a,b,c,d,e){return{UBAT_L:function(){e.lastArabic=!1;return V},UBAT_R:function(){e.lastArabic=!1;return C},UBAT_ON:function(){return l},
UBAT_AN:function(){return x},UBAT_EN:function(){return e.lastArabic?x:r},UBAT_AL:function(){e.lastArabic=!0;e.hasUbatAl=!0;return C},UBAT_WS:function(){return l},UBAT_CS:function(){var a,f;if(1>d||d+1>=b.length||(a=c[d-1])!==r&&a!==x||(f=b[d+1])!==r&&f!==x)return l;e.lastArabic&&(f=x);return f===a?f:l},UBAT_ES:function(){return(0<d?c[d-1]:G)===r&&d+1<b.length&&b[d+1]===r?r:l},UBAT_ET:function(){if(0<d&&c[d-1]===r)return r;if(e.lastArabic)return l;for(var a=d+1,f=b.length;a<f&&b[a]===W;)a++;return a<
f&&b[a]===r?r:l},UBAT_NSM:function(){if("VLTR"===e.inFormat){for(var k=b.length,f=d+1;f<k&&b[f]===X;)f++;if(f<k&&(k=a[d],f=b[f],(1425<=k&&2303>=k||64286===k)&&(f===C||f===Y)))return C}return 1>d||b[d-1]===G?l:c[d-1]},UBAT_B:function(){e.lastArabic=!0;e.hasUbatB=!0;return e.dir},UBAT_S:function(){e.hasUbatS=!0;return l},UBAT_LRE:function(){e.lastArabic=!1;return l},UBAT_RLE:function(){e.lastArabic=!1;return l},UBAT_LRO:function(){e.lastArabic=!1;return l},UBAT_RLO:function(){e.lastArabic=!1;return l},
UBAT_PDF:function(){e.lastArabic=!1;return l},UBAT_BN:function(){return l}}[la[b[d]]]()}function L(a,b){for(var c=0;c<H.length;c++)if(a===H[c])return b[c];return a}function B(a){return"\u064b"<=a&&"\u0655">=a?!0:!1}function Z(a){if("L"===a)return"LTR";if("R"===a)return"RTL";if("C"===a)return"CLR";if("D"===a)return"CRL"}function $(a,b){for(var c=0;c<y.length;c++)if(a===y[c])return b[c];return a}function aa(a,b,c,d){for(var e=0;e<a.length;e++)if(a[e]>b||!c&&a[e]===b)a[e]+=d}J.getObject("string",!0,
dojox);J=c("dojox.string.BidiEngine",e,{inputFormat:"ILYNN",outputFormat:"VLNNN",sourceToTarget:[],targetToSource:[],levels:[],bidiTransform:function(a,b,c){this.sourceToTarget=[];this.targetToSource=[];if(!a)return"";var d=this.sourceToTarget,e=this.targetToSource,k=a.length;s=[];F=[];for(var f=0;f<k;f++)d[f]=f,e[f]=f,s[f]=f;if(!this.checkParameters(b,c))return a;b=this.inputFormat;c=this.outputFormat;var d=a,d=ma,f=Z(b.charAt(1)),e=Z(c.charAt(1)),h="I"===b.charAt(0)?"L":b.charAt(0),k="I"===c.charAt(0)?
"L":c.charAt(0),f=h+f,e=k+e,k=b.charAt(2)+c.charAt(2);d.defInFormat=f;d.defOutFormat=e;d.defSwap=k;a=z(a,f,e,k,d);d=!1;if("R"===c.charAt(1))d=!0;else if("C"===c.charAt(1)||"D"===c.charAt(1))d=this.checkContextual(a);e=this.sourceToTarget=s;k=Array(e.length);for(f=0;f<e.length;f++)k[e[f]]=f;I=this.targetToSource=k;if(b.charAt(3)===c.charAt(3))d=a;else if("S"===c.charAt(3))if(b=d,c=!0,0===a.length)d=void 0;else{void 0===b&&(b=!0);void 0===c&&(c=!0);a=String(a);a=a.split("");var g=0,e=1,d=a.length;b||
(g=a.length-1,e=-1,d=1);for(var k=d,f=c,m=0,d=[],h=0;g*e<k;g+=e)if(S(a[g])||B(a[g])){var p;if(p="\u0644"===a[g])b:{for(var l=a,n=g+e,q=e,r=k;n*q<r&&B(l[n]);)n+=q;p=" ";if(n*q<r){p=l[n];for(l=0;l<y.length;l++)if(y[l]===p){p=!0;break b}}p=!1}if(p){a[g]=0===m?$(a[g+e],na):$(a[g+e],oa);g+=e;m=a;p=g;l=e;for(n=k;p*l<n&&B(m[p]);)p+=l;p*l<n&&(m[p]=" ");f&&(d[h]=g,h++);m=0}else{p=a[g];if(1===m){l=a;n=g;if(U(a,g+e,e,k))b:{q=a[g];for(r=0;r<H.length;r++)if(q===H[r]){q=pa[r];break b}}else q=L(a[g],qa);l[n]=q}else!0===
U(a,g+e,e,k)?a[g]=L(a[g],ra):a[g]=L(a[g],sa);B(p)||(m=1);b:{for(l=0;l<ba.length;l++)if(ba[l]===p){p=!0;break b}p=!1}!0===p&&(m=0)}}else m=0;e="";for(k=0;k<a.length;k++){if(f=c){b:{for(f=0;f<d.length;f++)if(d[f]===k)break b;f=-1}f=-1<f}f?(aa(I,k,!b,-1),s.splice(k,1)):e+=a[k]}d=e}else if(b=a,c=d,a=!0,0===b.length)d=void 0;else{void 0===a&&(a=!0);void 0===c&&(c=!0);b=String(b);d="";e=[];e=b.split("");for(k=0;k<b.length;k++)f=!1,"\ufe70"<=e[k]&&"\ufeff">e[k]?(h=b.charCodeAt(k),"\ufef5"<=e[k]&&"\ufefc">=
e[k]?(c?(0<k&&a&&" "===e[k-1]?d=d.substring(0,d.length-1)+"\u0644":(d+="\u0644",f=!0),d+=y[(h-65269)/2]):(d+=y[(h-65269)/2],d+="\u0644",k+1<b.length&&a&&" "===e[k+1]?k++:f=!0),f&&(aa(I,k,!0,1),s.splice(k,0,s[k]))):d+=ta[h-65136]):d+=e[k]}this.sourceToTarget=s;this.targetToSource=I;this.levels=F;return d},_inputFormatSetter:function(a){if(!ca.test(a))throw Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=a},_outputFormatSetter:function(a){if(!ca.test(a))throw Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
this.outputFormat=a},checkParameters:function(a,b){a?this.set("inputFormat",a):a=this.inputFormat;b?this.set("outputFormat",b):b=this.outputFormat;return a===b?!1:!0},checkContextual:function(a){a=D(a);if("ltr"!==a&&"rtl"!==a){try{a=document.dir.toLowerCase()}catch(b){}"ltr"!==a&&"rtl"!==a&&(a="ltr")}return a},hasBidiChar:function(a){return ua.test(a)}});var s=[],I=[],F=[],ma={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,
hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1},ia=5,ja=6,w=0,A=1,ca=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,ua=/[\u0591-\u06ff\ufb1d-\ufefc]/,E=[["(",")"],[")","("],["\x3c","\x3e"],["\x3e","\x3c"],["[","]"],["]","["],["{","}"],["}","{"],["\u00ab","\u00bb"],["\u00bb","\u00ab"],["\u2039","\u203a"],["\u203a","\u2039"],["\u207d","\u207e"],["\u207e","\u207d"],["\u208d","\u208e"],["\u208e","\u208d"],["\u2264","\u2265"],["\u2265","\u2264"],["\u2329","\u232a"],["\u232a","\u2329"],["\ufe59","\ufe5a"],["\ufe5a",
"\ufe59"],["\ufe5b","\ufe5c"],["\ufe5c","\ufe5b"],["\ufe5d","\ufe5e"],["\ufe5e","\ufe5d"],["\ufe64","\ufe65"],["\ufe65","\ufe64"]],y=["\u0622","\u0623","\u0625","\u0627"],na=["\ufef5","\ufef7","\ufef9","\ufefb"],oa=["\ufef6","\ufef8","\ufefa","\ufefc"],H="\u0627\u0628\u062a\u062b\u062c\u062d\u062e\u062f\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063a\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u064a\u0625\u0623\u0622\u0629\u0649\u0644\u0645\u0646\u0647\u0648\u064a\u0625\u0623\u0622\u0629\u0649\u06cc\u0626\u0624".split(""),
sa="\ufe8d\ufe8f\ufe95\ufe99\ufe9d\ufea1\ufea5\ufea9\ufeab\ufead\ufeaf\ufeb1\ufeb5\ufeb9\ufebd\ufec1\ufec5\ufec9\ufecd\ufed1\ufed5\ufed9\ufedd\ufee1\ufee5\ufee9\ufeed\ufef1\ufe87\ufe83\ufe81\ufe93\ufeef\ufbfc\ufe89\ufe85\ufe70\ufe72\ufe74\ufe76\ufe78\ufe7a\ufe7c\ufe7e\ufe80\ufe89\ufe85".split(""),qa="\ufe8e\ufe90\ufe96\ufe9a\ufe9e\ufea2\ufea6\ufeaa\ufeac\ufeae\ufeb0\ufeb2\ufeb6\ufeba\ufebe\ufec2\ufec6\ufeca\ufece\ufed2\ufed6\ufeda\ufede\ufee2\ufee6\ufeea\ufeee\ufef2\ufe88\ufe84\ufe82\ufe94\ufef0\ufbfd\ufe8a\ufe86\ufe70\ufe72\ufe74\ufe76\ufe78\ufe7a\ufe7c\ufe7e\ufe80\ufe8a\ufe86".split(""),
pa="\ufe8e\ufe92\ufe98\ufe9c\ufea0\ufea4\ufea8\ufeaa\ufeac\ufeae\ufeb0\ufeb4\ufeb8\ufebc\ufec0\ufec4\ufec8\ufecc\ufed0\ufed4\ufed8\ufedc\ufee0\ufee4\ufee8\ufeec\ufeee\ufef4\ufe88\ufe84\ufe82\ufe94\ufef0\ufbff\ufe8c\ufe86\ufe71\ufe72\ufe74\ufe77\ufe79\ufe7b\ufe7d\ufe7f\ufe80\ufe8c\ufe86".split(""),ra="\ufe8d\ufe91\ufe97\ufe9b\ufe9f\ufea3\ufea7\ufea9\ufeab\ufead\ufeaf\ufeb3\ufeb7\ufebb\ufebf\ufec3\ufec7\ufecb\ufecf\ufed3\ufed7\ufedb\ufedf\ufee3\ufee7\ufeeb\ufeed\ufef3\ufe87\ufe83\ufe81\ufe93\ufeef\ufbfe\ufe8b\ufe85\ufe70\ufe72\ufe74\ufe76\ufe78\ufe7a\ufe7c\ufe7e\ufe80\ufe8b\ufe85".split(""),
ba="\u0621\u0622\u0623\u0624\u0625\u0627\u0629\u062f\u0630\u0631\u0632\u0648\u0649".split(""),ta="\u064b\u064b\u064c\u061f\u064d\u061f\u064e\u064e\u064f\u064f\u0650\u0650\u0651\u0651\u0652\u0652\u0621\u0622\u0622\u0623\u0623\u0624\u0624\u0625\u0625\u0626\u0626\u0626\u0626\u0627\u0627\u0628\u0628\u0628\u0628\u0629\u0629\u062a\u062a\u062a\u062a\u062b\u062b\u062b\u062b\u062c\u062c\u062c\u062c\u062d\u062d\u062d\u062d\u062e\u062e\u062e\u062e\u062f\u062f\u0630\u0630\u0631\u0631\u0632\u0632\u0633\u0633\u0633\u0633\u0634\u0634\u0634\u0634\u0635\u0635\u0635\u0635\u0636\u0636\u0636\u0636\u0637\u0637\u0637\u0637\u0638\u0638\u0638\u0638\u0639\u0639\u0639\u0639\u063a\u063a\u063a\u063a\u0641\u0641\u0641\u0641\u0642\u0642\u0642\u0642\u0643\u0643\u0643\u0643\u0644\u0644\u0644\u0644\u0645\u0645\u0645\u0645\u0646\u0646\u0646\u0646\u0647\u0647\u0647\u0647\u0648\u0648\u0649\u0649\u064a\u064a\u064a\u064a\ufef5\ufef6\ufef7\ufef8\ufef9\ufefa\ufefb\ufefc\u061f\u061f\u061f".split(""),
T=["\u0621","\u0641"],ka=["\u063a","\u064a"],ea=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],da=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],V=0,C=1,r=2,x=3,l=4,G=5,Q=6,Y=7,R=8,W=11,X=12,la="UBAT_L UBAT_R UBAT_EN UBAT_AN UBAT_ON UBAT_B UBAT_S UBAT_AL UBAT_WS UBAT_CS UBAT_ES UBAT_ET UBAT_NSM UBAT_LRE UBAT_RLE UBAT_PDF UBAT_LRO UBAT_RLO UBAT_BN".split(" "),t=100;c=V;e=C;var g=r,n=x,a=l,v=G,M=Q,b=Y,q=R,h=W,d=X,fa=[t+0,c,c,
c,c,t+1,t+2,t+3,e,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,t+4,a,a,a,c,a,c,a,c,a,a,a,c,c,a,a,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,a,a,c,c,a,a,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,
c,t+5,b,b,t+6,t+7],ga=[[18,18,18,18,18,18,18,18,18,M,v,M,q,v,18,18,18,18,18,18,18,18,18,18,18,18,18,18,v,v,v,M,q,a,a,h,h,h,a,a,a,a,a,10,9,10,9,9,g,g,g,g,g,g,g,g,g,g,9,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,18,18,18,18,18,18,v,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,9,a,h,h,h,h,a,a,a,a,c,a,a,18,a,a,h,h,g,g,a,c,a,a,a,g,c,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,
c,c,c,c,c,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,c,c,c,c,c,c,c,c],[c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,c,c,c,c,c,c,c,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,c,a,a,a,a,a,a,a,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,e,d,e,d,d,e,d,d,e,d,a,a,a,a,
a,a,a,a,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,a,a,a,a,a,e,e,e,e,e,a,a,a,a,a,a,a,a,a,a,a],[n,n,n,n,a,a,a,a,b,h,h,b,9,b,a,a,d,d,d,d,d,d,d,d,d,d,d,b,a,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,n,n,n,n,n,n,n,n,n,n,h,n,n,b,b,b,d,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,
b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,n,a,d,d,d,d,d,d,b,b,d,d,a,d,d,d,d,b,b,g,g,g,g,g,g,g,g,g,g,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,a,b,b,d,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,a,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,d,d,d,d,b,a,a,a,a,a,a,a,a,a,a,a,a,a,a,
e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,d,d,d,d,d,d,d,d,d,e,e,a,a,a,a,e,a,a,a,a,a],[q,q,q,q,q,q,q,q,q,q,q,18,18,18,c,e,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,q,v,13,14,15,16,17,9,h,h,h,h,h,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,9,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,q,18,18,18,18,18,a,a,a,a,a,18,18,18,18,18,18,g,c,a,a,g,g,g,g,g,g,10,10,a,a,a,c,g,g,g,g,g,g,g,g,g,g,10,10,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,h,h,h,h,h,h,h,h,h,h,h,h,h,h,
h,h,h,h,h,h,h,h,h,h,h,h,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],[c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,a,c,c,c,c,c,a,a,a,a,a,e,d,e,e,e,e,e,e,e,e,e,e,10,e,e,e,e,e,e,e,e,e,e,e,e,e,a,e,e,e,e,e,a,e,a,e,e,a,e,e,a,e,e,e,e,e,e,e,e,e,e,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,
b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,d,d,d,d,d,d,d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,9,a,9,a,a,9,a,a,a,a,a,a,a,a,a,h,a,a,10,10,a,a,a,a,a,h,h,a,a,a,a,a,b,b,b,b,b,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,
b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,a,a,18],[a,a,a,h,h,h,a,a,a,a,a,10,9,10,9,9,g,g,g,g,g,g,g,g,g,g,9,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,
c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,c,c,c,c,c,c,a,a,c,c,c,c,c,c,a,a,c,c,c,c,c,c,a,a,c,c,c,a,a,a,h,h,a,a,a,h,h,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a]];return J});