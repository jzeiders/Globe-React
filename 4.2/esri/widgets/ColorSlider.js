// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/ColorSlider/templates/ColorSlider.html":'\x3cdiv class\x3d"${_css.container}"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_containerNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_titleNode"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_sliderNode"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_scaleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("./Widgette ./RendererSlider ./RendererSlider/sliderUtils ../core/numberUtils ../renderers/support/utils dijit/_TemplatedMixin dojo/_base/array dojo/_base/lang dojo/dom-style dojox/gfx dojo/text!./ColorSlider/templates/ColorSlider.html".split(" "),function(q,r,e,p,s,t,k,d,n,l,u){return q.createSubclass([t],{_rampNode:null,_sliderHeight:null,_colorRampSurface:null,_histogramSurface:null,_surfaceRect:null,_barsGroup:null,_updateTimer:null,_transparentBackgroundNode:null,_forceMinValue:null,_forceMaxValue:null,
_css:null,_defaultHeight:200,_handles:[0,4],_primaryHandleIndex:null,declaredClass:"esri.widget.ColorSlider",templateString:u,properties:{visualVariable:null,minValue:null,maxValue:null,histogram:null,statistics:null,zoomOptions:null,numHandles:2,syncedHandles:!1,labelsVisible:!0,ticksVisible:!0,handlesVisible:!0,histogramVisible:!0,statisticsVisible:!0,transparentBackgroundEnabled:!1,ratioLabelsVisible:null,histogramWidth:100,rampWidth:26,isDate:!1,values:null},constructor:function(a){void 0!==a.minValue&&
(this._forceMinValue=a.minValue);void 0!==a.maxValue&&(this._forceMaxValue=a.maxValue);this._css={container:"esri-color-info-slider",rampSurface:"esri-slider-ramp-surface"}},postCreate:function(){this.inherited(arguments);3===this.numHandles&&(this._handles=[0,2,4],this.syncedHandles&&(this._primaryHandleIndex=2));this._setUpDataDefaults()},startup:function(){this.inherited(arguments);this._slider=new r({type:"ColorSlider",values:this.values,isDate:this.isDate,minimum:this.zoomOptions?this.zoomOptions.minSliderValue:
this.minValue,maximum:this.zoomOptions?this.zoomOptions.maxSliderValue:this.maxValue,_minZoomLabel:this.zoomOptions?this.minValue:null,_maxZoomLabel:this.zoomOptions?this.maxValue:null,_isZoomed:this.zoomOptions?!0:!1,labelsVisible:this.labelsVisible,ticksVisible:this.ticksVisible,handlesVisible:this.handlesVisible,ratioLabelsVisible:this.ratioLabelsVisible,handles:this._handles,primaryHandleIndex:this._primaryHandleIndex},this._sliderNode);this._slider.startup();this._rampNode=this._slider._sliderAreaRight;
this._sliderHeight=n.get(this._rampNode,"height")||this._defaultHeight;this._valuesAutoAdjust();this._createSVGSurfaces();this._slider.on("slide",d.hitch(this,function(){this._valuesAutoAdjust();this._fillRamp()}));this._slider.on("data-change",d.hitch(this,function(a){this.values=a.values;this._valuesAutoAdjust();this._updateVisualVariable(this._slider.values);this._fillRamp();this.emit("data-change",{})}));this._slider.on("handle-value-change",d.hitch(this,function(a){this.values=a.values;this._valuesAutoAdjust();
this._updateVisualVariable(this._slider.values);this._fillRamp();this._updateRendererSlider();this.emit("handle-value-change",{})}));this._slider.on("data-value-change",d.hitch(this,function(a){this.set({minValue:a.min,maxValue:a.max});this._updateRendererSlider();this.emit("data-value-change",{})}));this._slider.on("stop",d.hitch(this,function(a){this.emit("handle-value-change",{})}));this._slider.on("zoom-out",d.hitch(this,function(a){this.zoomOptions=null}));this.statistics&&this.statisticsVisible&&
this._generateStatistics();this.histogramVisible&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram();this.watch("visualVariable, numHandles, statistics, histogram, zoomOptions, handlesVisible, labelsVisible, ticksVisible, ratioLabelsVisible",this._updateTimeout);this.watch("zoomOptions",this._zoomEventHandler);this.watch("histogramVisible",this._toggleHistogram);this.watch("transparentBackgroundEnabled",this._toggleTransparentBackground)},destroy:function(){this.inherited(arguments);
this._slider&&this._slider.destroy();this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy();this.countTooltips&&k.forEach(this.countTooltips,function(a){a.destroy()})},refresh:function(){this._updateTimeout()},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){var a=this.get("ratioLabelsVisible");"percent"!==a&&"percentTotal"!==a&&(this.ratioLabelsVisible=null);null!==this.zoomOptions&&!1!==this.zoomOptions?(this.toggleSliderBottom=
this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue,this._slider.set({minimum:this.zoomOptions.minSliderValue,maximum:this.zoomOptions.maxSliderValue,ratioLabelsVisible:this.ratioLabelsVisible,_minZoomLabel:this.minValue,_maxZoomLabel:this.maxValue,_isZoomed:!0})):this._slider.set({minimum:this.minValue,maximum:this.maxValue,ratioLabelsVisible:this.ratioLabelsVisible,_minZoomLabel:null,_maxZoomLabel:null,_isZoomed:!1});this.values=this._generateHandleValues(d.clone(this.visualVariable.stops));
this._slider.set({values:this.values,numHandles:this.numHandles});this._slider._reset();this._slider._updateRoundedLabels();this._slider._generateMoveables();this._clearRect();this._createSVGSurfaces();this.statistics&&this.statisticsVisible&&this._generateStatistics();this.histogramVisible&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram()},_generateHandleValues:function(a){k.forEach(a,d.hitch(this,function(a,b){if(1===b||3===b)a.hidden=!0;2===b&&2===this.numHandles&&
(a.hidden=!0)}));return a.slice()},_valuesAutoAdjust:function(){var a=this._slider.values,c=[],b,m,f,g,d,e,h;k.some(a,function(a,b){a.hidden||c.push(b)});for(e=0;e<c.length-1;e++){b=c[e];m=c[e+1];f=m-b;g=a[b].value;d=a[m].value;for(h=b+1;h<m;h++)a[h].value=g*(m-h)/f+d*(h-b)/f}},_zoomEventHandler:function(){this.emit("zoom",{zoomed:!!this.zoomOptions})},_setUpDataDefaults:function(){var a=this.visualVariable.stops;this.statistics&&!isNaN(this.statistics.min)&&!isNaN(this.statistics.max)?this.set({minValue:this.statistics.min,
maxValue:this.statistics.max}):this.set({minValue:0,maxValue:100});null!==this._forceMinValue&&(this.minValue=this._forceMinValue);null!==this._forceMaxValue&&(this.maxValue=this._forceMaxValue);null!==this.zoomOptions&&(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue);a[0].value===a[a.length-1].value&&0!==a[0].value&&(this.set({minValue:0,maxValue:2*a[0].value}),a[0].value=this.maxValue/5,a[a.length-1].value=
4*(this.maxValue/5));this.minValue===this.maxValue&&(0===this.minValue?this.maxValue=100:null===this.minValue?this.set({minValue:0,maxValue:100}):this.set({minValue:0,maxValue:2*this.minValue}));this.values=this._generateHandleValues(d.clone(a))},_createSVGSurfaces:function(){this._colorRampSurface=l.createSurface(this._rampNode,this.rampWidth-2,this._sliderHeight);this._colorRampSurface.rawNode.setAttribute("class",this._css.rampSurface);this._surfaceRect=this._colorRampSurface.createRect({width:this.rampWidth,
height:this._sliderHeight});this._transparentBackgroundNode=e.generateTransparentBackground(this._colorRampSurface,this.rampWidth-2,this._sliderHeight-2,this.transparentBackgroundEnabled);this._histogramSurface=e.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth);this._fillRamp();null!==this.zoomOptions&&(this.toggleSliderBottom&&this.toggleSliderTop?(this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(l.matrix.translate(0,
5)),this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(l.matrix.translate(0,195))):this.toggleSliderBottom?this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(l.matrix.translate(0,195)):this.toggleSliderTop&&this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(l.matrix.translate(0,5)))},_fillRamp:function(){var a=
this._slider.minimum,c=this._slider.maximum,b=this._slider.values.slice();k.forEach(b,function(b){b.offset=(c-b.value)/(c-a)});b.reverse();null!==this.zoomOptions?this.toggleSliderBottom&&this.toggleSliderTop?this._surfaceRect.setFill({type:"linear",x1:0,y1:10,x2:0,y2:this._sliderHeight-10,colors:b}):this.toggleSliderBottom?this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight-20,colors:b}):this.toggleSliderTop&&this._surfaceRect.setFill({type:"linear",x1:0,y1:20,x2:0,y2:this._sliderHeight,
colors:b}):this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight,colors:b})},_clearRect:function(){this._colorRampSurface.destroy();this._histogramSurface.destroy()},_toggleTransparentBackground:function(){this.transparentBackgroundEnabled?this._transparentBackgroundNode.setFill(e.getTransparentFill()):this._transparentBackgroundNode.setFill(null)},_updateVisualVariable:function(a){var c=this.visualVariable.stops;k.forEach(c,d.hitch(this,function(b,c){b.value=a[c].value}));
s.updateColorStops({stops:c,changes:a,isDate:this.isDate})},_showHistogram:function(){this.histogram||this.zoomOptions&&this.zoomOptions.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.histogramVisible?(n.set(this._barsGroup.rawNode,"display","inline-block"),this._showHistogram()):n.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){var a=this.zoomOptions&&this.zoomOptions.histogram?this.zoomOptions.histogram:
this.histogram;this._barsGroup=e.generateHistogram(this._histogramSurface,a,this.histogramWidth,this.rampWidth,this.isLeftToRight());this.countTooltips=e.generateCountTooltips(a,this._barsGroup)},_generateStatistics:function(){if(!(2>this.statistics.count||isNaN(this.statistics.avg)||isNaN(this.maxValue))){var a=this.statistics,c=this._slider,b=this.zoomOptions||null,d=e.getPrecision(this.maxValue),f,g;a.min===a.max&&a.min===a.avg?(f=0,g=2*a.avg):(f=a.min,g=a.max);if(f!==c.minimum||g!==c.maximum)f=
c.minimum,g=c.maximum;b&&(f=b.minSliderValue,g=b.maxSliderValue);c=this._sliderHeight*(g-a.avg)/(g-f);a=this.get("ratioLabelsVisible")?p.round([this._slider._getRatioFromValue(a.avg),f,g])[0]:p.round([a.avg,g,f])[0];this._avgHandleObjs=e.generateAvgLine(this._histogramSurface,a,c,d,this.isLeftToRight(),this.isDate,this.get("ratioLabelsVisible"))}}})});