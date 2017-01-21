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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dgrid/OnDemandGrid","./ColorRampSelector","dijit/TitlePane","../core/accessorSupport/decorators","./Widget","./RasterSymbologyEditor/RasterSymbologyEditorViewModel","dojo/dom-construct","dojo/store/Memory","dijit/form/FilteringSelect","dijit/form/NumberTextBox","dijit/form/CheckBox","dijit/form/NumberSpinner","./support/widget","dojo/i18n!./RasterSymbologyEditor/nls/RasterSymbologyEditor"],function(e,t,a,n,o,l,i,r,s,c,p,d,u,h,m,y,_,b){var S={base:"esri-raster-symbology-editor",filteringSelect:"esri-raster-symbology-editor__filtering-select",stretchColorSchemeRow:"esri-raster-symbology-editor__stretch-color-ramp-row",percentClipOptionsRow:"esri-raster-symbology-editor__percent-clip-row",stdDeviationOptionsRow:"esri-raster-symbology-editor__std-deviation-row",stretchOptionsBlock:"esri-raster-symbology-editor__stretch-options",stretchGammaBlock:"esri-raster-symbology-editor__stretch-gamma-row",stretchDraBlock:"esri-raster-symbology-editor__stretch-dra-row",displayHidden:"esri-raster-symbology-editor--hidden",displayBlock:"esri-raster-symbology-editor--block",table:"esri-raster-symbology-editor__table",thumbnailImage:"esri-raster-symbology-editor__thumbnail-image",bandCombinationPresetNaturalColorImg:"esri-raster-symbology-editor__band-combination-natural-color-img",bandCombinationPresetLanduseImg:"esri-raster-symbology-editor__band-combination-landuse-img",bandCombinationPresetLandWaterImg:"esri-raster-symbology-editor__band-combination-land-water-img",bandCombinationPresetVegetationImg:"esri-raster-symbology-editor__band-combination-vegetation-img",bandCombinationPresetShallowBathymetricImg:"esri-raster-symbology-editor__band-combination-bathymetric-img",bandCombinationPresetColorInfraredImg:"esri-raster-symbology-editor__band-combination-color-infrared-img",minMaxStretchTypeImg:"esri-raster-symbology-editor__stretch-type-min-max-img",noneStretchTypeImg:"esri-raster-symbology-editor__stretch-type-none-img",standardDeviationStretchTypeImg:"esri-raster-symbology-editor__stretch-type-standard-deviation-img",percentClipStretchTypeImg:"esri-raster-symbology-editor__stretch-type-percent-clip-img",rgbSymbologyTypeImg:"esri-raster-symbology-editor__symbology-type-rgb-img",stretchSymbologyTypeImg:"esri-raster-symbology-editor__symbology-type-stretch-img",uniqueValueSymbologyTypeImg:"esri-raster-symbology-editor__symbology-type-unique-value-img",menuItemTd:"esri-raster-symbology-editor__menu-item-td",dgridSymbolCell:"esri-raster-symbology-editor__dgrid-symbol-cell",menuItemText:"esri-raster-symbology-editor__menu-item-text",checkbox:"esri-raster-symbology-editor__checkbox"},g=function(e){function t(){e.apply(this,arguments),this.layer=null,this.defaultParams=null,this.viewModel=new c,this._components=[],this._symbologySelect=null,this._colorSchemeTitlePane=null,this._noDataTitlePane=null,this._bandSelect=null,this._stretchColorRampSelect=null,this._noDataInput=null,this._stretchTypeSelect=null,this._stretchTitlePane=null,this.stretchType=0,this.symbologyType="",this._minPercentInput=null,this._maxPercentInput=null,this._gammaInput=null,this._standardDeviationsInput=null,this._stretchStatisticsCheckBox=null,this._supportsBandPresets=!1,this._bandCombinationTitlePane=null,this._bandCombinationPresetSelect=null,this._redBandSelect=null,this._greenBandSelect=null,this._blueBandSelect=null,this._uniqueValueFieldSelect=null,this._uniqueValueColorSchemeSelect=null,this._uniqueValueNoDataInput=null,this._uniqueValuesGrid=null,this._uniqueValuesSymbolData=null,this._showLoadingGif=!1}return a(t,e),t.prototype.postInitialize=function(e){this.defaultParams=this.viewModel.getDefaultRenderParameters(),this._createUIComponents()},t.prototype.destroy=function(){this._components.forEach(function(e){e&&(e.destroy(),e=null)})},t.prototype.render=function(){var e=this.symbologyType,t=this.stretchType,a=this.viewModel.isStretchColorRampApplicable(t),n="stretch",o="rgb",l="uniqueValue",i=6,r=0,s=3,c=_.jsxFactory.createElement("div",null,_.jsxFactory.createElement("div",{afterCreate:this._placeSymbologySelect,bind:this})),p=_.jsxFactory.createElement("div",{classes:(v={},v[S.displayBlock]=e===n,v[S.displayHidden]=e!==n,v)},_.jsxFactory.createElement("div",{afterCreate:this._createColorSchemeTitlePane,bind:this},_.jsxFactory.createElement("table",{"class":S.table},_.jsxFactory.createElement("tr",null,_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("label",null,b.bandSelectionLabel)),_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("div",{afterCreate:this._placeBandSelect,bind:this}))),_.jsxFactory.createElement("tr",{classes:(C={},C[S.stretchColorSchemeRow]=a,C[S.displayHidden]=!a,C)},_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("label",null,b.colorSchemeLabel)),_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("div",{afterCreate:this._placeColorRampSelect,bind:this})))))),d=_.jsxFactory.createElement("div",{classes:(x={},x[S.displayBlock]=e===n||e===o,x[S.displayHidden]=e!==n,x)},_.jsxFactory.createElement("div",{afterCreate:this._createNoDataTitlePane,bind:this},_.jsxFactory.createElement("table",{"class":S.table},_.jsxFactory.createElement("tr",null,_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("label",null,b.noDataLabel)),_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("div",{afterCreate:this._placeNoDataInput,bind:this})))))),u=_.jsxFactory.createElement("div",{afterCreate:this._placeStretchTypeSelect,bind:this}),h=_.jsxFactory.createElement("tr",{classes:(F={},F[S.percentClipOptionsRow]=t===i,F[S.displayHidden]=t!==i,F)},_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("label",null,b.minLabel)),_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("div",{afterCreate:this._placeMinPercentInput,bind:this})),_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("label",null,b.maxLabel)),_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("div",{afterCreate:this._placeMaxPercentInput,bind:this}))),m=_.jsxFactory.createElement("tr",{classes:(E={},E[S.stdDeviationOptionsRow]=t===s,E[S.displayHidden]=t!==s,E)},_.jsxFactory.createElement("td",{colSpan:2},_.jsxFactory.createElement("label",null,b.nStdDeviationsLabel)),_.jsxFactory.createElement("td",{colSpan:2},_.jsxFactory.createElement("div",{afterCreate:this._placeStandardDeviationsInput,bind:this}))),y=_.jsxFactory.createElement("div",{classes:(I={},I[S.displayBlock]=e===n||e===o,I[S.displayHidden]=e!==n,I)},_.jsxFactory.createElement("div",{afterCreate:this._createStretchTitlePane,bind:this},_.jsxFactory.createElement("table",{"class":S.table},_.jsxFactory.createElement("tr",{"class":S.stretchOptionsBlock},_.jsxFactory.createElement("td",{colSpan:2},_.jsxFactory.createElement("label",null,b.stretchTypeLabel)),_.jsxFactory.createElement("td",{colSpan:2},u)),h,m,_.jsxFactory.createElement("tr",{classes:(T={},T[S.stretchGammaBlock]=t!==r,T[S.displayHidden]=t===r,T)},_.jsxFactory.createElement("td",{colSpan:2},_.jsxFactory.createElement("label",null,b.gammaLabel)),_.jsxFactory.createElement("td",{colSpan:2},_.jsxFactory.createElement("div",{afterCreate:this._placeGammaInput,bind:this}))),_.jsxFactory.createElement("tr",{classes:(B={},B[S.stretchDraBlock]=t!==r,B[S.displayHidden]=t===r,B)},_.jsxFactory.createElement("td",{colSpan:4},_.jsxFactory.createElement("div",{"class":S.checkbox,afterCreate:this._placeStretchStatisticsCheckbox,bind:this}),_.jsxFactory.createElement("label",null,b.draStatisticsTitle)))))),g=_.jsxFactory.createElement("div",{classes:(P={},P[S.displayBlock]=e===o,P[S.displayHidden]=e!==o,P)},_.jsxFactory.createElement("div",{afterCreate:this._createBandCombinationTitlePane,bind:this},_.jsxFactory.createElement("table",{"class":S.table},_.jsxFactory.createElement("tr",{classes:(j={},j[S.stdDeviationOptionsRow]=this._supportsBandPresets,j[S.displayHidden]=!this._supportsBandPresets,j)},_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("label",null,b.bandCombinationPresetLabel)),_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("div",{afterCreate:this._placeBandCombinationPresetSelect,bind:this}))),_.jsxFactory.createElement("tr",null,_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("label",null,b.redBandTitle)),_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("div",{afterCreate:this._placeRedBandSelect,bind:this}))),_.jsxFactory.createElement("tr",null,_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("label",null,b.greenBandTitle)),_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("div",{afterCreate:this._placeGreenBandSelect,bind:this}))),_.jsxFactory.createElement("tr",null,_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("label",null,b.blueBandTitle)),_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("div",{afterCreate:this._placeBlueBandSelect,bind:this})))))),f=_.jsxFactory.createElement("div",{classes:(V={},V[S.displayBlock]=e===l,V[S.displayHidden]=e!==l,V)},_.jsxFactory.createElement("div",null,_.jsxFactory.createElement("table",{"class":S.table},_.jsxFactory.createElement("tr",null,_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("label",null,b.valueFieldTitle)),_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("div",{afterCreate:this._placeUniqueValueFieldSelect,bind:this}))),_.jsxFactory.createElement("tr",null,_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("label",null,b.colorSchemeLabel)),_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("div",{afterCreate:this._placeUniqueValueColorSchemeSelect,bind:this}))),_.jsxFactory.createElement("tr",null,_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("label",null,b.noDataLabel)),_.jsxFactory.createElement("td",null,_.jsxFactory.createElement("div",{afterCreate:this._placeUniqueValueNoDataInput,bind:this})))),_.jsxFactory.createElement("div",{afterCreate:this._placeUniqueValuesGrid,bind:this})));return _.jsxFactory.createElement("div",null,c,p,g,d,y,f);var v,C,x,F,E,I,T,B,P,j,V},t.prototype._createUIComponents=function(){this._createSymbologySelect(),this._createStretchStatisticsCheckbox(),this._createBandSelect(),this._createStretchTypeSelect(),this._createColorRampSelect(),this._createBandCombinationPresetSelect(),this._createRedBandSelect(),this._createGreenBandSelect(),this._createBlueBandSelect(),this._createNoDataInput(),this._createMinPercentInput(),this._createMaxPercentInput(),this._createStandardDeviationsInput(),this._createGammaInput(),this._createUniqueValueFieldSelect(),this._createUniqueValueColorSchemeSelect(),this._createUniqueValueNoDataInput(),this._createUniqueValuesGrid()},t.prototype._createSymbologySelect=function(){var e=this;this._symbologySelect=new u({store:this._getSymbologyStore(),"class":S.filteringSelect,labelAttr:"label",labelType:"html",onChange:function(t){e._updateSymbologyType(t)},value:this.defaultParams.symbologyType}),this._components.push(this._symbologySelect),this._symbologySelect.startup()},t.prototype._createStretchStatisticsCheckbox=function(){var e=this;this._stretchStatisticsCheckBox=new m({onChange:function(){e._updateSymbology()}}),this._components.push(this._stretchStatisticsCheckBox),this._stretchStatisticsCheckBox.startup()},t.prototype._createColorSchemeTitlePane=function(e){this._colorSchemeTitlePane=new i({title:b.colorRampTitle},e),this._components.push(this._colorSchemeTitlePane),this._colorSchemeTitlePane.startup()},t.prototype._createNoDataTitlePane=function(e){this._noDataTitlePane=new i({title:b.backgroundTitle},e),this._components.push(this._noDataTitlePane),this._noDataTitlePane.startup()},t.prototype._createStretchTitlePane=function(e){this._stretchTitlePane=new i({title:b.stretchTitle},e),this._components.push(this._stretchTitlePane),this._stretchTitlePane.startup()},t.prototype._createBandCombinationTitlePane=function(e){this._bandCombinationTitlePane=new i({title:b.bandCombinationTitle},e),this._components.push(this._bandCombinationTitlePane),this._bandCombinationTitlePane.startup()},t.prototype._createBandSelect=function(){var e=this;this._bandSelect=new u({"class":S.filteringSelect,onChange:function(){e._updateSymbology()}}),this._components.push(this._bandSelect),this._bandSelect.startup(),this._populateBandSelect()},t.prototype._createStretchTypeSelect=function(){var e=this;this._stretchTypeSelect=new u({"class":S.filteringSelect,onChange:function(t){e._onStretchTypeChange(t)},labelAttr:"label",labelType:"html"}),this._components.push(this._stretchTypeSelect),this._stretchTypeSelect.startup(),this._populateStretchTypeSelect()},t.prototype._createColorRampSelect=function(){var e=this;this._stretchColorRampSelect=new l({"class":S.filteringSelect,maxHeight:300}),this._components.push(this._stretchColorRampSelect),this._stretchColorRampSelect.on("change",function(){e._updateSymbology()}),this._stretchColorRampSelect.startup()},t.prototype._createBandCombinationPresetSelect=function(){var e=this;this._bandCombinationPresetSelect=new u({"class":S.filteringSelect,onChange:function(t){e._updateBandCombination(t)},labelType:"html",labelAttr:"label",maxHeight:350}),this._components.push(this._bandCombinationPresetSelect),this._bandCombinationPresetSelect.startup()},t.prototype._createRedBandSelect=function(){var e=this;this._redBandSelect=new u({"class":S.filteringSelect,onChange:function(){e._bandCombinationChanged()}}),this._components.push(this._redBandSelect),this._redBandSelect.startup(),this._populateBandLists()},t.prototype._createGreenBandSelect=function(){var e=this;this._greenBandSelect=new u({"class":S.filteringSelect,onChange:function(){e._bandCombinationChanged()}}),this._components.push(this._greenBandSelect),this._greenBandSelect.startup(),this._populateBandLists()},t.prototype._createBlueBandSelect=function(){var e=this;this._blueBandSelect=new u({"class":S.filteringSelect,onChange:function(){e._bandCombinationChanged()}}),this._components.push(this._blueBandSelect),this._blueBandSelect.startup(),this._populateBandLists()},t.prototype._createNoDataInput=function(){var e=this;this._noDataInput=new h({"class":S.filteringSelect,onChange:function(){e._updateSymbology()}}),this._components.push(this._noDataInput),this._noDataInput.startup()},t.prototype._createMinPercentInput=function(){var e=this;this._minPercentInput=new h({"class":S.filteringSelect,onChange:function(){e._updateSymbology()},value:this.defaultParams.minPercent}),this._components.push(this._minPercentInput),this._minPercentInput.startup()},t.prototype._createMaxPercentInput=function(){var e=this;this._maxPercentInput=new h({"class":S.filteringSelect,onChange:function(){e._updateSymbology()},value:this.defaultParams.maxPercent}),this._components.push(this._maxPercentInput),this._maxPercentInput.startup()},t.prototype._createStandardDeviationsInput=function(){var e=this;this._standardDeviationsInput=new h({"class":S.filteringSelect,onChange:function(){e._updateSymbology()},value:this.defaultParams.numberOfStandardDeviations}),this._components.push(this._standardDeviationsInput),this._standardDeviationsInput.startup()},t.prototype._createGammaInput=function(){var e=this;this._gammaInput=new y({"class":S.filteringSelect,onChange:function(){e._updateSymbology()},value:this.defaultParams.gamma,smallDelta:.1}),this._components.push(this._gammaInput),this._gammaInput.startup()},t.prototype._createUniqueValueFieldSelect=function(){var e=this;this._uniqueValueFieldSelect=new u({"class":S.filteringSelect,onChange:function(){e._updateUniqueValueGrid()}}),this._components.push(this._uniqueValueFieldSelect),this._populateUniqueValueFieldSelect()},t.prototype._createUniqueValueColorSchemeSelect=function(){var e=this;this._uniqueValueColorSchemeSelect=new l({"class":S.filteringSelect,maxHeight:300}),this._components.push(this._uniqueValueColorSchemeSelect),this._uniqueValueColorSchemeSelect.on("change",function(){e._updateUniqueValueGrid()}),this._uniqueValueColorSchemeSelect.startup()},t.prototype._createUniqueValueNoDataInput=function(){var e=this;this._uniqueValueNoDataInput=new h({"class":S.filteringSelect,onChange:function(){e._updateSymbology()}}),this.defaultParams.uniqueValuesColorRamp&&(this.defaultParams.uniqueValuesColorRamp.name=b.uniqueValuesColorRampTitle,this._uniqueValueColorSchemeSelect.addColorRamp(this.defaultParams.uniqueValuesColorRamp,!0)),this._components.push(this._uniqueValueNoDataInput),this._uniqueValueNoDataInput.startup()},t.prototype._createUniqueValuesGrid=function(){this._uniqueValuesGrid=new o({columns:[{field:"esriRasterSymbologyEditorUniqueValueSymbol",renderCell:function(e,t,a){a.innerHTML="<div class = "+S.dgridSymbolCell+' \n          style = "background: rgb( '+e.esriRasterSymbologyEditorUniqueValueSymbol.r+", \n          "+e.esriRasterSymbologyEditorUniqueValueSymbol.g+", \n          "+e.esriRasterSymbologyEditorUniqueValueSymbol.b+'");></div>'},label:b.symbolLabel},{field:"esriRasterSymbologyEditorUniqueValueValue",label:b.valueLabel}]}),this._components.push(this._uniqueValuesGrid),this._uniqueValuesGrid.startup()},t.prototype._placeSymbologySelect=function(e){this._symbologySelect&&p.place(this._symbologySelect.domNode,e)},t.prototype._placeStretchStatisticsCheckbox=function(e){this._stretchStatisticsCheckBox&&p.place(this._stretchStatisticsCheckBox.domNode,e)},t.prototype._placeBandSelect=function(e){this._bandSelect&&p.place(this._bandSelect.domNode,e)},t.prototype._placeStretchTypeSelect=function(e){this._stretchTypeSelect&&p.place(this._stretchTypeSelect.domNode,e)},t.prototype._placeColorRampSelect=function(e){this._stretchColorRampSelect&&p.place(this._stretchColorRampSelect.domNode,e)},t.prototype._placeBandCombinationPresetSelect=function(e){this._bandCombinationPresetSelect&&p.place(this._bandCombinationPresetSelect.domNode,e)},t.prototype._placeRedBandSelect=function(e){this._redBandSelect&&p.place(this._redBandSelect.domNode,e)},t.prototype._placeGreenBandSelect=function(e){this._colorSchemeTitlePane&&p.place(this._greenBandSelect.domNode,e)},t.prototype._placeBlueBandSelect=function(e){this._blueBandSelect&&p.place(this._blueBandSelect.domNode,e)},t.prototype._placeNoDataInput=function(e){this._noDataInput&&p.place(this._noDataInput.domNode,e)},t.prototype._placeMinPercentInput=function(e){this._minPercentInput&&p.place(this._minPercentInput.domNode,e)},t.prototype._placeMaxPercentInput=function(e){this._maxPercentInput&&p.place(this._maxPercentInput.domNode,e)},t.prototype._placeStandardDeviationsInput=function(e){this._standardDeviationsInput&&p.place(this._standardDeviationsInput.domNode,e)},t.prototype._placeGammaInput=function(e){this._gammaInput&&p.place(this._gammaInput.domNode,e)},t.prototype._placeUniqueValueFieldSelect=function(e){this._uniqueValueFieldSelect&&p.place(this._uniqueValueFieldSelect.domNode,e)},t.prototype._placeUniqueValueColorSchemeSelect=function(e){this._uniqueValueColorSchemeSelect&&p.place(this._uniqueValueColorSchemeSelect.domNode,e)},t.prototype._placeUniqueValueNoDataInput=function(e){this._uniqueValueNoDataInput&&p.place(this._uniqueValueNoDataInput.domNode,e)},t.prototype._placeUniqueValuesGrid=function(e){this._uniqueValuesGrid&&p.place(this._uniqueValuesGrid.domNode,e)},t.prototype._bandCombinationChanged=function(){this._redBandSelect&&this._redBandSelect.validate()&&this._greenBandSelect&&this._greenBandSelect.validate()&&this._blueBandSelect&&this._blueBandSelect.validate()&&this._updateSymbology()},t.prototype._updateBandCombination=function(e){if("custom"===e)return this._redBandSelect.set("disabled",!1),this._greenBandSelect.set("disabled",!1),void this._blueBandSelect.set("disabled",!1);var t,a=this._bandCombinationPresetSelect.store.data;a.some(function(a){e===a.id&&(t=a.combination)}),t&&(this._redBandSelect.set({value:t[0]-1,disabled:!0}),this._greenBandSelect.set({value:t[1]-1,disabled:!0}),this._blueBandSelect.set({value:t[2]-1,disabled:!0}),this._updateSymbology())},t.prototype._updateSymbologyType=function(e){this.symbologyType=e,this._updateSymbology()},t.prototype._updateUniqueValueGrid=function(){var e=this.viewModel.getUniqueValueGridData(this._uniqueValueColorSchemeSelect.colorRamp,this._uniqueValueFieldSelect.value);this._uniqueValuesGrid.refresh(),this._uniqueValuesGrid.renderArray(e),this._uniqueValuesSymbolData=e,this._updateSymbology()},t.prototype._populateUniqueValueFieldSelect=function(){var e=this.viewModel.getUniqueValueFields(),t=new d({data:e,idProperty:"name"});this._uniqueValueFieldSelect.set({store:t,labelAttr:"alias",value:this.defaultParams.uniqueValuesField})},t.prototype._populateStretchTypeSelect=function(){var e,t,a,n=this.viewModel.stretchTypes;n.forEach(function(n){e=b[n.name+"StretchTypeDescription"]||b[n.name+"TypeDescription"],a=S[n.name+"StretchTypeImg"],t=b[n.name+"StretchTitle"],n.label="<html><body><section>\n        <h4>"+t+"</h4>\n        <table><tr>\n          <td class="+S.menuItemTd+'>\n            <img class="'+a+" "+S.thumbnailImage+'" />\n          </td>\n          <td class='+S.menuItemTd+">\n            <p class="+S.menuItemText+"><i>"+e+"</i></p>\n          </td>\n          </tr></table>\n        </section></body></html>",n.name=t}),this._stretchTypeSelect.set({store:new d({data:n}),value:this.defaultParams.stretchType,labelAttr:"label",labelType:"html"})},t.prototype._populateBandSelect=function(){var e,t=this;this.viewModel.getBandData().then(function(a){e=new d({data:a.lists[0],idProperty:"index"}),t._bandSelect.set("store",e),1===a.lists[0].length&&t._bandSelect.set({value:a.lists[0][0].index,disabled:!0})})},t.prototype._populateBandLists=function(){var e=this;if(this._redBandSelect&&this._greenBandSelect&&this._blueBandSelect&&this._bandCombinationPresetSelect){var t,a,n,o,l,i,r,s=[this._redBandSelect,this._greenBandSelect,this._blueBandSelect],c=[];this.viewModel.getBandData().then(function(p){p.lists.forEach(function(e,t){e.some(function(e){return e.selected?(a=e.index,!0):void 0}),n=new d({data:e,idProperty:"index"}),s[t].set({store:n,value:a})}),p.presets&&p.presets.length?(e._supportsBandPresets=!0,p.presets.forEach(function(e,a){t=Object.keys(e)[0],l=b["bandComboName"+t],i=b["bandComboDesc"+t],r=S["bandCombinationPreset"+t+"Img"],c.push({name:b["bandComboName"+t],label:"<html><body><section>\n              <h4>"+l+"</h4>\n              <table><tr>\n                <td class="+S.menuItemTd+'>\n                  <img class= "'+r+" "+S.thumbnailImage+'" />\n                </td>\n                <td class='+S.menuItemTd+">\n                  <p class="+S.menuItemText+"><i>"+i+"</i></p>\n                </td>\n              </tr></table>\n            </section></body></html>",combination:e[t],id:t})}),c.push({name:b.bandComboNameCustom,combination:null,id:"custom",label:"<html><body><section>\n            <h4> "+b.bandComboNameCustom+":</h4>\n            <table cellspacing='5'>\n              <tr>\n                <td class="+S.menuItemTd+">\n                  <p class="+S.menuItemText+"><i>"+b.bandComboNameCustom+"</i></p>\n                </td>\n              </tr>\n            </table>\n          </section></body></html>"}),o=new d({data:c}),e._bandCombinationPresetSelect.set({store:o,value:"custom"})):e._supportsBandPresets=!1,e.scheduleRender()})}},t.prototype._onStretchTypeChange=function(e){var t;this.viewModel.stretchTypes.forEach(function(a){a.id===e&&(t=a.filterType)}),this.stretchType=t,this._updateSymbology()},t.prototype._updateSymbology=function(){if(this._symbologySelect&&this._stretchTypeSelect&&this._stretchColorRampSelect&&this._noDataInput&&this._minPercentInput&&this._maxPercentInput&&this._stretchTypeSelect&&this._gammaInput&&this._standardDeviationsInput){var e=this._getProperties();this.viewModel.updateRendering(e)}},t.prototype._getProperties=function(){var e={};return e.symbologyType=this._symbologySelect.value,e.stretchType=this.stretchType,e.minPercent=this._minPercentInput.value,e.maxPercent=this._maxPercentInput.value,e.numberOfStandardDeviations=this._standardDeviationsInput.value,"uniqueValue"===this.symbologyType?e.noData=this._uniqueValueNoDataInput.value:e.noData=this._noDataInput.value,e.gamma=this._gammaInput.value,e.colorRampName=this._stretchColorRampSelect.colorRampName,e.dra=this._stretchStatisticsCheckBox.checked,e.selectedBand=this._bandSelect.value,e.bandIds=[this._redBandSelect.value,this._greenBandSelect.value,this._blueBandSelect.value],e.uniqueValuesColorRamp=this._uniqueValueColorSchemeSelect.colorRamp,e.uniqueValuesSymbolData=this._uniqueValuesSymbolData,e},t.prototype._getSymbologyStore=function(){var e,t,a,n=this.viewModel.getSymbologyTypes(),o=[];return n.forEach(function(n){e=b[n+"Title"],t=b[n+"Description"]||b[n+"Title"],a=S[n+"SymbologyTypeImg"],o.push({id:n,name:e,label:"<html><body><section>\n          <h4>"+e+"</h4>\n          <table><tr>\n            <td class="+S.menuItemTd+"><img class= "+a+" /></td>\n            <td class="+S.menuItemTd+">\n              <p class="+S.menuItemText+"><i>"+t+"</i></p>\n            </td>\n          </tr></table>\n        </section></body></html>"})},this),new d({data:o})},n([r.property(),_.renderable()],t.prototype,"layer",void 0),n([r.property()],t.prototype,"defaultParams",void 0),n([r.property({type:c})],t.prototype,"viewModel",void 0),n([r.property()],t.prototype,"_components",void 0),n([r.property()],t.prototype,"_symbologySelect",void 0),n([r.property()],t.prototype,"_colorSchemeTitlePane",void 0),n([r.property()],t.prototype,"_noDataTitlePane",void 0),n([r.property()],t.prototype,"_bandSelect",void 0),n([r.property()],t.prototype,"_stretchColorRampSelect",void 0),n([r.property()],t.prototype,"_noDataInput",void 0),n([r.property()],t.prototype,"_stretchTypeSelect",void 0),n([r.property()],t.prototype,"_stretchTitlePane",void 0),n([r.property(),_.renderable()],t.prototype,"stretchType",void 0),n([r.property(),_.renderable()],t.prototype,"symbologyType",void 0),n([r.property()],t.prototype,"_minPercentInput",void 0),n([r.property()],t.prototype,"_maxPercentInput",void 0),n([r.property()],t.prototype,"_gammaInput",void 0),n([r.property()],t.prototype,"_standardDeviationsInput",void 0),n([r.property()],t.prototype,"_stretchStatisticsCheckBox",void 0),n([r.property()],t.prototype,"_supportsBandPresets",void 0),n([r.property()],t.prototype,"_bandCombinationTitlePane",void 0),n([r.property()],t.prototype,"_bandCombinationPresetSelect",void 0),n([r.property()],t.prototype,"_redBandSelect",void 0),n([r.property()],t.prototype,"_greenBandSelect",void 0),n([r.property()],t.prototype,"_blueBandSelect",void 0),n([r.property()],t.prototype,"_uniqueValueFieldSelect",void 0),n([r.property()],t.prototype,"_uniqueValueColorSchemeSelect",void 0),n([r.property()],t.prototype,"_uniqueValueNoDataInput",void 0),n([r.property()],t.prototype,"_uniqueValuesGrid",void 0),n([r.property()],t.prototype,"_uniqueValuesSymbolData",void 0),n([r.property(),_.renderable()],t.prototype,"_showLoadingGif",void 0),t=n([r.subclass("esri.widgets.RasterSymbologyEditor")],t)}(r.declared(s));return g});