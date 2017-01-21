// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("./Widgette dojo/_base/lang dojo/date/locale dojo/sniff dojo/keys ../renderers/support/utils dijit/form/_DateTimeTextBox dijit/form/ValidationTextBox".split(" "),function(p,k,l,s,q,m,n,r){return p.createSubclass([r],{declaredClass:"esri.dijit.DateTimeTextBox",properties:{visible:!0,value:null,date:null},_timeSeparator:", ",_dateFormatOptions:{dateOptions:{formatLength:"short",selector:"date",fullYear:!0},timeOptions:{formatLength:"short",selector:"time"}},constructor:function(a,b){this._getValidDateTimeRE=
k.hitch(this,this._getValidDateTimeRE);this.set("pattern",this._getValidDateTimeRE);this.set("invalidMessage",this._getInvalidMessage())},postCreate:function(){this.inherited(arguments);this.set("value",this.date);this.own(this.watch("date",k.hitch(this,this._dateChangeHandler)),this.on("change",k.hitch(this,this._valueChangeHandler)),this.on("keydown",k.hitch(this,this._keydownHandler)))},format:function(a){return this._formatDate(a)},parse:function(a,b){var c=this._parseDateString(a,b);return c.isValid?
new Date(c.value):void 0},compare:n.prototype.compare,_isInvalidDate:n.prototype._isInvalidDate,_dateChangeHandler:function(a,b,c){this.date!==this.value&&this.set("value",c)},_valueChangeHandler:function(a){this.isValid()&&this.set("date",a)},_keydownHandler:function(a){a.keyCode===q.ENTER&&this._commitValueToDate()},_commitValueToDate:function(){var a=this._parseDateString(this.textbox.value);a.isValid&&this.set("value",new Date(a.value))},_formatDate:function(a){var b="";a instanceof Date&&(a=
a.getTime());"number"===typeof a&&!isNaN(a)&&(b=m.formatDate(a,{selector:"date",dateOptions:this._dateFormatOptions.dateOptions}),a=m.formatDate(a,{selector:"time",timeOptions:this._dateFormatOptions.timeOptions}),b=this._mergeDateTime(b,a));return b},_parseDateString:function(a,b){b=b||{};var c=(a||"").split(this._timeSeparator),e=c[1],d=l.parse(c[0],this._dateFormatOptions.dateOptions),c=l.parse(e,this._dateFormatOptions.timeOptions),f=!1,g=b.min,h=b.max,d=d&&d.getTime();"number"===typeof d&&!isNaN(d)?
c?(e=c&&c.getTime(),"number"===typeof e&&!isNaN(e)&&(e-=6E4*c.getTimezoneOffset(),d+=e,f=!0)):f=!e:d=null;f&&(g=g&&g.getTime(),h=h&&h.getTime(),"number"===typeof g&&!isNaN(g)&&d<g&&(f=!1),"number"===typeof h&&!isNaN(h)&&d>h&&(f=!1));return{isValid:f,value:d}},_getValidDateTimeRE:function(){var a=l.regexp(this._dateFormatOptions.dateOptions),b=l.regexp(this._dateFormatOptions.timeOptions);return a+"(,\\s"+b+")?"},_getInvalidMessage:function(){return this._formatDate(new Date(0))},_mergeDateTime:function(a,
b){return a+(b?this._timeSeparator+b:"")}})});