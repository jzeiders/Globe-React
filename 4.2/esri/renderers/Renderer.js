// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("../core/declare ../core/Accessor ../core/JSONSupport ../core/kebabDictionary ../core/screenUtils ../core/lang ../core/Error dojo/_base/lang ../Color ./support/arcadeUtils".split(" "),function(J,K,L,t,A,s,y,p,l,u){var r=t({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),E=t({widthAndDepth:"width-and-depth"}),F=t({classedSize:"classed-size",classedColor:"classed-color",univariateColorSize:"univariate-color-size"}),G=t({esriClassifyEqualInterval:"equal-interval",
esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),H=t({percentTotal:"percent-of-total"}),B=Math.PI;return J([K,L],{declaredClass:"esri.renderer.Renderer",properties:{authoringInfo:{value:null,json:{read:function(a,b){a&&(a=s.clone(a),a.type&&(a.type=F.fromJSON(a.type)),a.classificationMethod&&(a.classificationMethod=G.fromJSON(a.classificationMethod)),a.visualVariables&&a.visualVariables.forEach(function(a){a.type&&
(a.type=r.fromJSON(a.type));a.style&&(a.style=H.fromJSON(a.style))}));return a},write:function(a,b){a&&(a=s.clone(a),a.type&&(a.type=F.toJSON(a.type)),a.classificationMethod&&(a.classificationMethod=G.toJSON(a.classificationMethod)),a.visualVariables&&a.visualVariables.forEach(function(a){a.type&&(a.type=r.toJSON(a.type));a.style&&(a.style=H.toJSON(a.style))}));b.authoringInfo=a}}},requiredFields:{dependsOn:["visualVariables"],get:function(){var a=Object.create(null);this.collectRequiredFields(a);
return Object.keys(a)}},type:{readOnly:!0,json:{readable:!1,writeAlways:!0}},visualVariables:{json:{readFrom:["visualVariables","rotationType","rotationExpression"],read:function(a,b){return this._readVariables(a,b)},write:function(a,b,c){var d=[];a.forEach(function(a,b){"size"===a.type?d.push(this._writeSizeInfo(a,c,b)):"color"===a.type?d.push(this._writeColorInfo(a,c,b)):"opacity"===a.type?d.push(this._writeOpacityInfo(a,c,b)):"rotation"===a.type&&d.push(this._writeRotationInfo(a,c,b))},this);b.visualVariables=
d}}}},constructor:function(){this._cache={}},_rotationRE:/^\[([^\]]+)\]$/i,_meterIn:{inches:39.3701,feet:3.28084,yards:1.09361,miles:6.21371E-4,"nautical-miles":5.39957E-4,millimeters:1E3,centimeters:100,decimeters:10,meters:1,kilometers:0.001,"decimal-degrees":180/20015077},_viewScaleRE:/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,_visualVariablesSetter:function(a){var b=this._cache;this.visualVariables&&this.visualVariables.forEach(function(a,d){b.hasOwnProperty(d)&&(b[d]=null)},this);a&&a.some(function(a){return!!a.target})&&
a.sort(function(a,b){return a.target===b.target?0:a.target?1:-1});a&&a.forEach(function(a,d){"color"===a.type?b[d]=this._processColorInfo(a):"opacity"===a.type?b[d]=this._processOpacityInfo(a):"size"===a.type?b[d]=this._processSizeInfo(a):"rotation"===a.type&&(b[d]=this._processRotationInfo(a))},this);this._set("visualVariables",a)},getSymbol:function(a,b){},getVisualVariableValues:function(a,b){var c=this.visualVariables,d;c&&(d=c.map(function(c){var d,f=c.type,k=f+"Info";b=p.mixin({},b);b[k]=c;
switch(f){case "size":d=this.getSize(a,b);break;case "color":d=this.getColor(a,b);break;case "opacity":d=this.getOpacity(a,b);break;case "rotation":d=this.getRotationAngle(a,b)}return{variable:c,value:d}},this).filter(function(a){return null!=a.value},this));return d},hasVisualVariables:function(a,b){return a?!!this.getVisualVariablesForType(a,b):!(!this.getVisualVariablesForType("size",b)&&!this.getVisualVariablesForType("color",b)&&!this.getVisualVariablesForType("opacity",b)&&!this.getVisualVariablesForType("rotation",
b))},getVisualVariablesForType:function(a,b){var c=this.visualVariables,d;c&&(d=c.filter(function(c){return c.type===a&&("string"===typeof b?c.target===b:!1===b?!c.target:!0)}))&&0===d.length&&(d=void 0);return d},getSize:function(a,b){var c=this._getVarInfo(b&&b.sizeInfo,"size"),d=c.variable,c=this._cache[c.cacheKey],e=null;if(d)var n=d.minSize,e=d.maxSize,n="object"===typeof n&&n?this._getSize(a,n,c&&c.minSize,b):n,e="object"===typeof e&&e?this._getSize(a,e,c&&c.maxSize,b):e,e=this._getSize(a,d,
c&&c.root,b,[n,e]);return e},getSizeRangeAtScale:function(a,b){var c,d=this._getVarInfo(a,"size"),e=this._cache[d.cacheKey],n={scale:b};if((a=d.variable)&&b){var f=a.minSize,d=a.maxSize,f="object"===typeof f&&f?this._getSize({},f,e&&e.minSize,n):f,e="object"===typeof d&&d?this._getSize({},d,e&&e.maxSize,n):d;if(null!=f||null!=e)c={minSize:f,maxSize:e}}return c},getColor:function(a,b){var c=this._getVarInfo(b&&b.colorInfo,"color");return this._getColorComponent(a,c.variable,this._cache[c.cacheKey],
b)},getOpacity:function(a,b){var c=this._getVarInfo(b&&b.opacityInfo,"opacity");return this._getColorComponent(a,c.variable,this._cache[c.cacheKey],b,!0)},getRotationAngle:function(a,b){var c=this._getVarInfo(b&&b.rotationInfo,"rotation"),d=c.variable,e=this._cache[c.cacheKey],c="arithmetic"===d.rotationType,d=d.field,e=e&&e.compiledFunc,n=a.attributes,f=0;if(d||e)e?f=u.executeFunction(e,u.createExecContext(a,u.getView(b))):p.isFunction(d)?f=d.apply(this,arguments):n&&(f=n[d]||0),f="number"===typeof f&&
!isNaN(f)?(f+(c?-90:0))*(c?-1:1):null;return f},collectRequiredFields:function(a){var b=[];this.visualVariables&&(b=b.concat(this.visualVariables));b.forEach(function(b){b&&b.field&&(a[b.field]=!0);b&&b.normalizationField&&(a[b.normalizationField]=!0)})},_getVarInfo:function(a,b){var c;a&&a.type===b&&this.visualVariables?(c=this.visualVariables.indexOf(a),a=this.visualVariables[c]):this.visualVariables&&(a=(c=this.getVisualVariablesForType(b))&&c[0],c=this.visualVariables.indexOf(a));return{variable:a,
cacheKey:c}},_readSizeInfo:function(a){a.axis&&(a.axis=E.fromJSON(a.axis));return a},_readColorInfo:function(a){a&&(a.colors&&a.colors.forEach(function(b,c){p.isArray(b)?a.colors[c]=l.fromJSON(b):a.colors[c]=new l(b)}),a.stops&&a.stops.forEach(function(b,c){b.color&&p.isArray(b.color)?a.stops[c].color=l.fromJSON(b.color):b.color&&(a.stops[c].color=new l(b.color))}));return a},_readOpacityInfo:function(a){var b;a&&(b=p.mixin({},a),b.transparencyValues&&(b.opacityValues=b.transparencyValues.map(function(a){return 1-
a/100}),delete b.transparencyValues),b.stops&&(b.stops=b.stops.map(function(a){a=p.mixin({},a);a.opacity=1-a.transparency/100;delete a.transparency;return a})));return b},_readVariables:function(a,b){a&&(a=a.map(function(a){a=s.clone(a);a.type=r.fromJSON(a.type);"size"===a.type?a=this._readSizeInfo(a):"color"===a.type?a=this._readColorInfo(a):"opacity"===a.type&&(a=this._readOpacityInfo(a));return a},this));var c=b.rotationType,d=b.rotationExpression;if(d&&(c={type:"rotation",rotationType:c},(d=d.match(this._rotationRE))&&
d[1]))c.field=d[1],a||(a=[]),a.push(c);return a},_createCache:function(a){var b=a&&a.valueExpression,c=u.createSyntaxTree(b),c=u.createFunction(c),d=!(!a||!a.expression)||this._viewScaleRE.test(b);return{ipData:this._interpolateData(a),hasExpr:!!b,compiledFunc:c,isScaleDriven:d}},_processColorInfo:function(a){a&&(a.colors&&a.colors.forEach(function(b,c){b instanceof l||(a.colors[c]=new l(b))}),a.stops&&a.stops.forEach(function(b,c){b.color&&!(b.color instanceof l)&&(a.stops[c].color=new l(b.color))}),
this._sortStops(a.stops));return this._createCache(a)},_processOpacityInfo:function(a){this._sortStops(a&&a.stops);return this._createCache(a)},_processSizeInfo:function(a){a.stops&&Array.isArray(a.stops)?a.stops=this._processSizeInfoStops(a.stops):(a.minSize=a.minSize&&this._processSizeInfoSize(a.minSize),a.maxSize=a.maxSize&&this._processSizeInfoSize(a.maxSize));return{root:this._createCache(a),minSize:this._createCache(a.minSize),maxSize:this._createCache(a.maxSize)}},_processSizeInfoSize:function(a){"object"===
typeof a?a.stops=this._processSizeInfoStops(a.stops):a=A.toPt(a);return a},_processSizeInfoStops:function(a){a&&Array.isArray(a)&&(a.forEach(function(a){a.size=A.toPt(a.size)}),this._sortStops(a));return a},_sortStops:function(a){a&&Array.isArray(a)&&a.sort(function(a,c){return a.value-c.value})},_processRotationInfo:function(a){return this._createCache(a)},_getSize:function(a,b,c,d,e){var n=a.attributes,f=b.field,k=b.stops,g=0,I=c&&c.hasExpr,l=c&&c.compiledFunc,s=c&&c.ipData,r=c&&c.isScaleDriven,
v="number"===typeof a,h=v?a:null;if(f||r||I){var x=d&&d.scale,m=e?e[0]:b.minSize,q=e?e[1]:b.maxSize,w=b.minDataValue,t=b.maxDataValue,y=b.valueUnit||"unknown",D=b.valueRepresentation,g=b.scaleBy,A=b.normalizationField,C=n?parseFloat(n[A]):void 0,z=d&&d.shape;r?h=null==x?this._getAverageValue(b):x:"number"!==typeof h&&(I?h=u.executeFunction(l,u.createExecContext(a,u.getView(d))):p.isFunction(f)?h=f.apply(this,arguments):n&&(h=n[f]));if(null==h||A&&!v&&(isNaN(C)||0===C))return null;!isNaN(C)&&!v&&(h/=
C);if(k)q=this._lookupData(h,s),h=q[0],m=q[1],h===m?g=k[h].size:(h=k[h].size,k=k[m].size,g=h+(k-h)*q[2]);else if(null!=m&&null!=q&&null!=w&&null!=t)h<=w?g=m:h>=t?g=q:(k=(h-w)/(t-w),"area"===g&&z?(m=(h="circle"===z)?B*Math.pow(m/2,2):m*m,q=h?B*Math.pow(q/2,2):q*q,k=m+k*(q-m),g=h?2*Math.sqrt(k/B):Math.sqrt(k)):g=m+k*(q-m));else if("unknown"===y)null!=m&&null!=w?(m&&w?(k=h/w,g="circle"===z?2*Math.sqrt(k*Math.pow(m/2,2)):"square"===z||"diamond"===z||"image"===z?Math.sqrt(k*Math.pow(m,2)):k*m):g=h+(m||
w),g=g<m?m:g,null!=q&&g>q&&(g=q)):g=h;else{k=(d&&d.resolution?d.resolution:1)*this._meterIn[y];if("area"===D)g=Math.sqrt(h/B)/k,g*=2;else if(g=h/k,"radius"===D||"distance"===D)g*=2;null!=m&&g<m&&(g=m);null!=q&&g>q&&(g=q)}}else b&&(g=k&&k[0]&&k[0].size,null==g&&(g=b.minSize));return g=isNaN(g)?0:g},_getAverageValue:function(a){var b=a.stops,c;b?(c=b[0].value,a=b[b.length-1].value):(c=a.minDataValue||0,a=a.maxDataValue||0);return(c+a)/2},_getColorComponent:function(a,b,c,d,e,n){var f=a.attributes,k=
b&&b.field,g="number"===typeof a,l=g?a:null,r=c&&c.hasExpr,t=c&&c.compiledFunc,s=c&&c.ipData,v;if(k||r){var h=b.normalizationField,x=f?parseFloat(f[h]):void 0;"number"!==typeof l&&(r?l=u.executeFunction(t,u.createExecContext(a,u.getView(d))):p.isFunction(k)?l=k.apply(this,arguments):f&&(l=f[k]));if(null!=l&&(!h||g||!isNaN(x)&&0!==x))!isNaN(x)&&!g&&(l/=x),v=e?this._getOpacity(l,b,s):this._getColor(l,b,s)}else b&&(f=b.stops,e?(v=f&&f[0]&&f[0].opacity,null==v&&(v=b.opacityValues&&b.opacityValues[0])):
v=f&&f[0]&&f[0].color||b.colors&&b.colors[0]);n&&(n.data=l,n.value=v);return n||v},_interpolateData:function(a){var b;if(a)if(a.colors||a.opacityValues){var c=(a.colors||a.opacityValues).length,d=a.minDataValue,e=(a.maxDataValue-d)/(c-1);b=[];for(a=0;a<c;a++)b[a]=d+a*e}else a.stops&&(b=a.stops.map(function(a){return a.value}));return b},_getOpacity:function(a,b,c){a=this._lookupData(a,c);var d;b=b||this.opacityInfo;a&&(c=a[0],d=a[1],c===d?d=this._getOpacValue(b,c):(c=this._getOpacValue(b,c),b=this._getOpacValue(b,
d),d=c+(b-c)*a[2]));return d},_getOpacValue:function(a,b){return a.opacityValues?a.opacityValues[b]:a.stops[b].opacity},_getColor:function(a,b,c){a=this._lookupData(a,c);var d;b=b||this.colorInfo;a&&(d=a[0],c=a[1],d=d===c?this._getColorObj(b,d):l.blendColors(this._getColorObj(b,d),this._getColorObj(b,c),a[2]),d=new l(d));return d},_getColorObj:function(a,b){return a.colors?a.colors[b]:a.stops[b].color},_lookupData:function(a,b){var c;if(b){var d=0,e=b.length-1;b.some(function(b,c){if(a<b)return e=
c,!0;d=c;return!1});c=[d,e,(a-b[d])/(b[e]-b[d])]}return c},_processForContext:function(a,b,c){b&&"web-scene"===b.origin?(b.messages&&(a.expression&&b.messages.push(new y("property:unsupported",a.type+"VisualVariable.expression is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:c+".expression",context:b})),a.valueExpression&&b.messages.push(new y("property:unsupported",a.type+"VisualVariable.valueExpression is not supported in Web Scene. Please remove this property to save the Web Scene.",
{instance:this,propertyName:c+".valueExpression",context:b})),a.valueExpressionTitle&&b.messages.push(new y("property:unsupported",a.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:c+".valueExpressionTitle",context:b}))),delete a.expression,delete a.valueExpression,delete a.valueExpressionTitle):"size"===a.type&&this._convertExpressionToArcade(a)},_writeRotationInfo:function(a,b,c){a&&(a=p.mixin({},
a),this._processForContext(a,b,"visualVariables["+c+"]"),a.type=r.toJSON(a.type),a=s.fixJson(a,!0));return a},_convertExpressionToArcade:function(a){a&&a.expression&&(a.valueExpression="$view.scale")},_writeSizeInfo:function(a,b,c){if(a){a=p.mixin({},a);this._processForContext(a,b,"string"===typeof c?c:"visualVariables["+c+"]");var d=a.minSize,e=a.maxSize;d&&(a.minSize="number"===typeof d?d:this._writeSizeInfo(d,b,"visualVariables["+c+"].minSize"));e&&(a.maxSize="number"===typeof e?e:this._writeSizeInfo(e,
b,"visualVariables["+c+"].maxSize"));b=a.legendOptions;c=a.axis;a.type=r.toJSON(a.type);c&&(a.axis=E.toJSON(c));if(b&&(a.legendOptions=p.mixin({},b),b=b.customValues))a.legendOptions.customValues=b.slice(0);a.stops&&(a.stops=a.stops.map(function(a){a=p.mixin({},a);null===a.label&&delete a.label;return a}));a=s.fixJson(a,!0)}return a},_writeColorInfo:function(a,b,c){a&&(a=p.mixin({},a),this._processForContext(a,b,"visualVariables["+c+"]"),a.type=r.toJSON(a.type),a.colors&&(a.colors=a.colors.map(function(a){return l.toJSON(a)})),
a.stops&&(a.stops=a.stops.map(function(a){a=p.mixin({},a);a.color&&(a.color=l.toJSON(a.color));null===a.label&&delete a.label;return a})),a.legendOptions&&(a.legendOptions=p.mixin({},a.legendOptions)),a=s.fixJson(a,!0));return a},_writeOpacityInfo:function(a,b,c){var d;a&&(d=p.mixin({},a),this._processForContext(d,b,"visualVariables["+c+"]"),d.type=r.toJSON(d.type),d.opacityValues&&(d.transparencyValues=d.opacityValues.map(function(a){return 100*(1-a)}),delete d.opacityValues),d.stops&&(d.stops=d.stops.map(function(a){a=
p.mixin({},a);a.transparency=100*(1-a.opacity);delete a.opacity;null===a.label&&delete a.label;return a})),d.legendOptions&&(d.legendOptions=p.mixin({},d.legendOptions)),d=s.fixJson(d,!0));return d}})});