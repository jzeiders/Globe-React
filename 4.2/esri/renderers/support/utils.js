// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/array dojo/date/locale ../../Color ../../core/numberUtils dojo/i18n!../nls/smartMapping dojo/i18n!dojo/cldr/nls/gregorian".split(" "),function(c,g,p,q,l,u,v){function w(a){return a&&g.map(a,function(b){return new q(b)})}function t(a,b,e){var f="";0===b?f=m.lt+" ":b===e&&(f=m.gt+" ");return f+a}var h={},m={lte:"\x3c\x3d",gte:"\x3e\x3d",lt:"\x3c",gt:"\x3e",pct:"%"},x={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},y={millisecond:{dateOptions:{formatLength:"long"},
timeOptions:{formatLength:"medium"}},second:{dateOptions:{formatLength:"long"},timeOptions:{formatLength:"medium"}},minute:{dateOptions:{formatLength:"long"},timeOptions:{formatLength:"short"}},hour:{dateOptions:{formatLength:"long"},timeOptions:{formatLength:"short"}},day:{selector:"date",dateOptions:{formatLength:"long"}},month:{selector:"date",dateOptions:{formatLength:"long"}},year:{selector:"date",dateOptions:{selector:"year"}}},z={formatLength:"short",fullYear:!0},A={formatLength:"short"};c.mixin(h,
{timelineDateFormatOptions:{selector:"date",dateOptions:{formatLength:"short",fullYear:!0}},formatDate:function(a,b){var e,f=[];null!=a&&!(a instanceof Date)&&(a=new Date(a));b=b||{};b=c.mixin({},b);var d=b.selector?b.selector.toLowerCase():null;e=!d||-1<d.indexOf("time");d=!d||-1<d.indexOf("date");e&&(b.timeOptions=b.timeOptions||A,b.timeOptions&&(b.timeOptions=c.mixin({},b.timeOptions),b.timeOptions.selector=b.timeOptions.selector||"time",f.push(b.timeOptions)));d&&(b.dateOptions=b.dateOptions||
z,b.dateOptions&&(b.dateOptions=c.mixin({},b.dateOptions),b.dateOptions.selector=b.dateOptions.selector||"date",f.push(b.dateOptions)));f&&f.length?(f=g.map(f,function(b){return p.format(a,b)}),e=1==f.length?f[0]:v["dateTimeFormat-medium"].replace(/\'/g,"").replace(/\{(\d+)\}/g,function(b,a){return f[a]})):e=p.format(a);return e},createColorStops:function(a){var b=a.values,e=a.colors,f=a.labelIndexes,d=a.isDate,k=a.dateFormatOptions;a=[];return a=g.map(b,function(a,s){var n=null;if(!f||-1<g.indexOf(f,
s)){var c;(c=d?h.formatDate(a,k):l.format(a))&&(n=t(c,s,b.length-1))}return{value:a,color:e[s],label:n}})},updateColorStops:function(a){var b=a.stops,e=a.changes,f=a.isDate,d=a.dateFormatOptions,k=[],r,c=g.map(b,function(a){return a.value});g.forEach(e,function(a){k.push(a.index);c[a.index]=a.value});r=l.round(c,{indexes:k});g.forEach(b,function(a,e){a.value=c[e];if(null!=a.label){var k,g=null;(k=f?h.formatDate(r[e],d):l.format(r[e]))&&(g=t(k,e,b.length-1));a.label=g}})},createClassBreakLabel:function(a){var b=
a.minValue,e=a.maxValue,f=a.isFirstBreak?"":m.gt+" ";a="percent-of-total"===a.normalizationType?m.pct:"";b=null==b?"":l.format(b);e=null==e?"":l.format(e);return f+b+a+" "+u.minToMax+" "+e+a},setLabelsForClassBreaks:function(a){var b=a.classBreaks,e=a.classificationMethod,f=a.normalizationType,d=[];b&&b.length&&("standard-deviation"===e?console.log("setLabelsForClassBreaks: cannot set labels for class breaks generated using 'standard-deviation' method."):a.round?(d.push(b[0].minValue),g.forEach(b,
function(a){d.push(a.maxValue)}),d=l.round(d),g.forEach(b,function(a,b){a.label=h.createClassBreakLabel({minValue:0===b?d[0]:d[b],maxValue:d[b+1],isFirstBreak:0===b,normalizationType:f})})):g.forEach(b,function(a,b){a.label=h.createClassBreakLabel({minValue:a.minValue,maxValue:a.maxValue,isFirstBreak:0===b,normalizationType:f})}))},updateClassBreak:function(a){var b=a.classBreaks,e=a.normalizationType,f=a.change,d=f.index,f=f.value,k=-1,c=-1,g=b.length;"standard-deviation"===a.classificationMethod?
console.log("updateClassBreak: cannot update labels for class breaks generated using 'standard-deviation' method."):(0===d?k=d:d===g?c=d-1:(c=d-1,k=d),-1<k&&k<g&&(a=b[k],a.minValue=f,a.label=h.createClassBreakLabel({minValue:a.minValue,maxValue:a.maxValue,isFirstBreak:0===k,normalizationType:e})),-1<c&&c<g&&(a=b[c],a.maxValue=f,a.label=h.createClassBreakLabel({minValue:a.minValue,maxValue:a.maxValue,isFirstBreak:0===c,normalizationType:e})))},calculateDateFormatInterval:function(a){var b,e,f=a.length,
d,c,h,l,n,m,p=Infinity,q;a=g.map(a,function(a){return new Date(a)});for(b=0;b<f-1;b++){d=a[b];h=[];n=Infinity;m="";for(e=b+1;e<f;e++)c=a[e],c=d.getFullYear()!==c.getFullYear()&&"year"||d.getMonth()!==c.getMonth()&&"month"||d.getDate()!==c.getDate()&&"day"||d.getHours()!==c.getHours()&&"hour"||d.getMinutes()!==c.getMinutes()&&"minute"||d.getSeconds()!==c.getSeconds()&&"second"||"millisecond",l=x[c],l<n&&(n=l,m=c),h.push(c);n<p&&(p=n,q=m)}return q},createUniqueValueLabel:function(a){var b=a.value,e=
a.fieldInfo,c=a.domain;a=a.dateFormatInterval;var d=String(b);(c=c&&c.codedValues?c.getName(b):null)?d=c:"number"===typeof b&&(d=e&&"esriFieldTypeDate"===e.type?h.formatDate(b,a&&y[a]):l.format(b));return d},cloneColorVariable:function(a){var b;a&&(b=c.mixin({},a),b.colors=w(b.colors),b.stops=b.stops&&g.map(b.stops,function(a){a=c.mixin({},a);a.color&&(a.color=new q(a.color));return a}),b.legendOptions&&(b.legendOptions=c.mixin({},b.legendOptions)));return b},cloneOpacityVariable:function(a){var b;
if(a){b=c.mixin({},a);if(a=b.opacityValues)b.opacityValues=a.slice(0);if(a=b.stops)b.stops=g.map(a,function(a){return c.mixin({},a)});if(a=b.legendOptions)b.legendOptions=c.mixin({},a)}return b},cloneSizeVariable:function(a){var b;if(a){b=c.mixin({},a);b.stops&&(b.stops=g.map(b.stops,function(a){return c.mixin({},a)}));if((a=b.minSize)&&"object"===typeof a)b.minSize=h.cloneSizeVariable(a);if((a=b.maxSize)&&"object"===typeof a)b.maxSize=h.cloneSizeVariable(a);if(a=b.legendOptions)if(b.legendOptions=
c.mixin({},a),a=a.customValues)b.legendOptions.customValues=a.slice(0)}return b}});return h});