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

define(["../../core/Accessor","../../core/Collection","../../core/Error","../../core/Evented","../../core/HandleRegistry","../../core/lang","../../core/promiseList","../../core/watchUtils","../../geometry/Extent","../../geometry/Point","../../geometry/SpatialReference","../../geometry/support/scaleUtils","../../Graphic","../../PopupTemplate","../../styles/basic","../../symbols/PictureMarkerSymbol","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../symbols/SimpleMarkerSymbol","../../symbols/TextSymbol","../../tasks/Locator","../../tasks/support/Query","dojo/_base/array","dojo/_base/lang","dojo/Deferred","dojo/has","dojo/i18n!./nls/Search","require"],function(e,t,r,s,i,a,n,o,l,u,c,h,d,g,f,p,m,v,y,_,x,S,b,w,R,F,E,I){function T(e,t,r,s){return"point"===r?new y({color:t,size:null!==s?s:e.size,outline:{color:e.outline.color,width:e.outline.width}}):"polyline"===r?new v({color:t,width:null!==s?s:e.width}):"polygon"===r?new m({color:t,outline:{color:e.outline.color,width:e.outline.width}}):void 0}function L(e,t){return e.hasOwnProperty(t)}var A="not-loaded",C="../../themes/base/images/search-symbol-32.svg",P="../../themes/base/images/search-symbol-32.png",O={locator:new x({url:"//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"}),singleLineFieldName:"SingleLine",outFields:["Addr_type","Match_addr","StAddr","City"],name:E.esriLocatorName,localSearchOptions:{minScale:3e5,distance:5e4},placeholder:E.placeholder,resultSymbol:new p({url:I.toUrl(F("trident")?P:C),size:24,width:24,height:24,xoffset:0,yoffset:0})},j=-1,G="_objectId",N=/https?:\/\/services.*\.arcgis\.com/i,D=e.createSubclass([s],{properties:{activeSource:{},activeSourceIndex:{},allPlaceholder:{},autoNavigate:{},autoSelect:{},currentSuggestion:{},defaultSource:{readOnly:!0},resultGraphicEnabled:{},resultGraphic:{},locationToAddressDistance:{},maxInputLength:{},maxResults:{},maxSuggestions:{},minSuggestCharacters:{},placeholder:{},popup:{dependsOn:["view.popup"],readOnly:!0},popupEnabled:{},popupTemplate:{type:g},results:{},scale:{dependsOn:["view.scale"],readOnly:!0},searchAllEnabled:{},selectedResult:{},popupOpenOnSelect:{},searchTerm:{},sources:{type:t},suggestionDelay:{},suggestions:{},suggestionsEnabled:{},view:{},zoomScale:{}},declaredClass:"esri.widgets.Search.SearchViewModel",constructor:function(){this._deferredSuggestions=[],this._handles=new i,this._manageSuggest=this._manageSuggest.bind(this)},getDefaults:function(){return w.mixin(this.inherited(arguments),{defaultSource:O,popupTemplate:{},sources:[O]})},initialize:function(){this._handles.add([o.init(this,"activeSourceIndex",function(e){this._updateActiveSource(),this._setPlaceholder(e)}.bind(this)),o.init(this,"allPlaceholder",function(){this._setPlaceholder(this.activeSourceIndex)}.bind(this)),o.init(this,"sources",function(){this._setDefaultActiveSourceIndex(),this._setPlaceholder(this.activeSourceIndex)}.bind(this)),o.init(this,"searchTerm",function(e){this.currentSuggestion&&this.currentSuggestion.text!==e&&(this.currentSuggestion=null)}.bind(this)),o.init(this,"searchAllEnabled",this._setDefaultActiveSourceIndex.bind(this))])},destroy:function(){this.clearGraphics(),this._viewReadyPromise&&this._viewReadyPromise.cancel(),this._handles.destroy(),this._handles=null},_i18n:E,_defaultSR:c.WGS84,activeSource:null,activeSourceIndex:0,allPlaceholder:E.allPlaceholder,autoNavigate:!0,autoSelect:!0,resultGraphicEnabled:!0,popupEnabled:!0,currentSuggestion:null,defaultSource:null,resultGraphic:null,locationToAddressDistance:1500,maxInputLength:128,maxResults:6,maxSuggestions:6,minSuggestCharacters:1,placeholder:"",popup:null,_popupGetter:function(){return this.get("view.popup")||null},popupTemplate:null,results:null,scale:null,_scaleGetter:function(){return this.get("view.scale")||null},searchAllEnabled:!0,selectedResult:null,popupOpenOnSelect:!0,searchTerm:"",sources:null,_sourcesSetter:function(e){e.forEach(function(e){e.name||(e.name=this._getSourceName(e))},this),this._set("sources",e)},suggestionDelay:150,suggestions:null,suggestionsEnabled:!0,view:null,zoomScale:1e3,clear:function(){this.set({searchTerm:"",results:null,suggestions:null,selectedResult:null,currentSuggestion:null}),this.clearGraphics(),this.emit("search-clear")},search:function(e){return this.emit("search-start"),this._viewReady().then(function(){return this._searchDeferred(e)}.bind(this)).then(function(e){var t=e.results;return this.results=t,this.emit("search-complete",e),this._selectFirstResult(t,e.activeSourceIndex),t}.bind(this))},suggest:function(e){e||(e=this.searchTerm),this.emit("suggest-start",{searchTerm:e}),this.cancelSuggest(),this._suggestionQueryTimer=setTimeout(function(){this._manageSuggest(e)}.bind(this),this.suggestionDelay)},cancelSuggest:function(){this._cancelDeferreds(),this._suggestionQueryTimer&&clearTimeout(this._suggestionQueryTimer)},select:function(e){var t,r=this._getDefaultSymbol(e),s=this.sources,i=this.activeSourceIndex,a=this.resultGraphicEnabled,n=this.autoNavigate,o=this.popupOpenOnSelect,l=this.popupEnabled,u=this.popupTemplate,c=e.feature.clone();if(this.selectedResult=e,i===j){var h=this._getSourceIndexOfResult(e);null!==h&&(t=s.getItemAt(h),i=h)}else t=s.getItemAt(i);if(t){var g=t.featureLayer;L(t,"resultSymbol")&&(r=t.resultSymbol),L(t,"resultGraphicEnabled")&&(a=t.resultGraphicEnabled),L(t,"autoNavigate")&&(n=t.autoNavigate),L(t,"popupOpenOnSelect")&&(o=t.popupOpenOnSelect),L(t,"popupEnabled")&&(l=t.popupEnabled),L(t,"popupTemplate")?u=t.popupTemplate:g&&g.popupTemplate&&(u=g.popupTemplate)}if(c){var f=this.resultGraphic,p=w.mixin({},c.attributes,this.getExtraSearchResultAttributes(e)),m=null;l&&(m=u),this._removeFromGraphics(f),f=new d({geometry:c.geometry,symbol:r,attributes:p,popupTemplate:m}),"text-symbol"===f.get("symbol.type")&&(f.symbol.text=e.name);var v=this.popup,y=this.view,_=new R;if(y&&n&&e&&L(e,"extent")){var x=e.extent;"3d"===y.type&&(x={target:e.extent,tilt:0}),y.goTo(x).always(_.resolve)}else _.resolve();_.then(function(){a&&this._addToGraphics(f),v&&l&&o&&v.open({features:[f],location:f.geometry})}.bind(this)),this.resultGraphic=f}this.emit("select-result",{result:e,source:t,sourceIndex:i})},clearGraphics:function(){this.view&&this.view.graphics.remove(this.resultGraphic),this.resultGraphic=null},getExtraSearchResultAttributes:function(e){},_manageSuggest:function(e){return this._viewReady().then(function(){return this._suggestDeferred(e)}.bind(this)).then(function(e){var t=null;return e&&(t=e.results),this.suggestions=t,this.emit("suggest-complete",e),t}.bind(this))},_addToGraphics:function(e){this.view&&this.view.graphics.push(e)},_removeFromGraphics:function(e){this.view&&this.view.graphics.remove(e)},_error:function(e){return new r(this.declaredClass,e)},_searchDeferred:function(e){var t,r=new R,s=this.searchTerm,i=this.activeSourceIndex;e&&L(e,"index")&&(i=e.index),this.clearGraphics();var a={magicKey:this.currentSuggestion?this.currentSuggestion.magicKey:null,text:s};return e?"string"==typeof e?(a.text=e,t=this._searchQueries(a)):t="object"==typeof e&&L(e,"magicKey")?this._searchQueries(e):"object"==typeof e&&L(e,"geometry")?this._searchQueries({geometry:e}):"object"==typeof e&&L(e,G)?this._searchQueries(e):"object"==typeof e&&"point"===e.type?this._searchQueries({point:e}):e instanceof Array&&2===e.length?this._searchQueries({latlon:e}):this._searchQueries(a):t=this._searchQueries(a),t.always(function(e){var t=this._formatResults(e,i,s);r.resolve(t)}.bind(this)),r.promise},_viewReady:function(){var e=new R;this._viewReadyPromise&&this._viewReadyPromise.cancel();var t=this.view;return t?this._viewReadyPromise=t.always(function(){e.resolve()}):e.resolve(),e.promise},_suggestDeferred:function(e){var t,r=new R;this._deferredSuggestions.push(r);var s=this.activeSourceIndex;return t=this._suggestQueries({text:e}),t.always(function(t){var i;if(t)for(var a=0;a<t.length;a++)t[a]&&(i=!0);if(i){var n=this._formatResults(t,s,e);r.resolve(n)}else r.resolve()}.bind(this)),r.promise},_getDefaultSymbol:function(e){var t,r,s,i=O.resultSymbol,a=this.get("view.map.basemap.id");return a||(a="topo"),e&&e.feature&&e.feature.geometry&&(s=e.feature.geometry.type),s&&(t=f.getSchemes({theme:"default",basemap:a,geometryType:s}),t&&(r=t.primaryScheme),r&&(r.color&&L(r,"opacity")&&(r.color.a=r.opacity),i=T(r,r.color,s,r.size))),i},_selectFirstResult:function(e,t){var r;this.autoSelect&&e&&(r=this._getFirstResult(e),r&&this.select(r))},_getSourceResults:function(e,t){return e&&e[t]&&e[t].results},_getSourceIndexOfResult:function(e){var t=this.results;if(t)for(var r=0;r<t.length;r++){var s=t[r].sourceIndex,i=this._getSourceResults(t,r);if(i)for(var a=0;a<i.length;a++)if(i[a]===e)return parseInt(s,10)}return null},_getFirstResult:function(e){if(e)for(var t=0;t<e.length;t++){var r=this._getSourceResults(e,t),s=r&&r[0];if(s)return s}return!1},_validField:function(e,t){return e.getField(t)},_validFields:function(e,t){return e&&t?t.every(function(t){return this._validField(e,t)},this):!1},_getCodedName:function(e,t){if(e&&e.length)for(var r=0,s=e.length;s>r;r++){var i=e[r];if(i.code===t)return i.name}},_getCodedValue:function(e,t,r){if(e&&e.length)for(var s=0,i=e.length;i>s;s++){var a=e[s],n=a.name,o=t;if(r||(n=n.toLowerCase(),o=o.toLowerCase()),n===o)return a.code}return!1},_whereClause:function(e,t,r,s){var i=null;if(e){var a="";if(N.test(t.url)&&this._containsNonLatinCharacter(e)&&(a="N"),r&&r.length)for(var n=0,o=r.length;o>n;n++){var l="",u=e.replace(/\'/g,"''"),c=r[n],h=t.getField(c),d=h.domain;if(d&&"codedValue"===d.type&&(u=this._getCodedValue(d.codedValues,u,s)),u!==!1){var g=h.type;if("string"===g||"date"===g)l=s?c+" = "+a+"'"+u+"'":"UPPER("+c+") LIKE "+a+"'%"+u.toUpperCase()+"%'";else if("oid"===g||"small-integer"===g||"integer"===g||"single"===g||"double"===g){var f=parseFloat(u);l=isNaN(f)?!1:c+" = "+f}else l=c+" = "+u;l&&(i?i+=" or ":i="",i+=l)}}}return i},_suggest:function(e){e||(e={index:this.activeSourceIndex,text:this.searchTerm});var t=new R,r=this.sources,s=e.index,i=r.getItemAt(s),a=i.featureLayer,n=this.suggestionsEnabled;L(i,"suggestionsEnabled")&&(n=i.suggestionsEnabled);var o,l=0;L(e,"text")&&e.text&&(o=w.trim(e.text),l=e.text.length);var u=i.minSuggestCharacters||this.minSuggestCharacters;if(n&&o&&l>=u){var c="";i.prefix&&(c+=i.prefix),c+=o,i.suffix&&(c+=i.suffix);var h=this._defaultSR;h=this.get("view.spatialReference");var d={};if(i.locator){if(i.categories&&(d.categories=i.categories),i.locator.outSpatialReference=h,this.view&&i.localSearchOptions&&L(i.localSearchOptions,"distance")&&L(i.localSearchOptions,"minScale")){var g=this.scale;(!i.localSearchOptions.minScale||g&&g<=parseFloat(i.localSearchOptions.minScale))&&(d.location=this.view.extent.center,d.distance=i.localSearchOptions.distance)}d.text=c,i.withinViewEnabled&&this.get("view.extent")&&(d.searchExtent=this.view.extent),i.searchExtent&&(d.searchExtent=i.searchExtent),d.maxSuggestions=i.maxSuggestions||this.maxSuggestions,i.sourceCountry&&(d.countryCode=i.sourceCountry),i.countryCode&&(d.countryCode=i.countryCode),i.locator.suggestLocations(d).then(function(e){t.resolve(e)},function(e){e||(e=this._error("Locator suggestLocations could not be performed.")),t.reject(e)}.bind(this))}else a?this._loadLayer(a).then(function(){if(this._supportsPagination(a)){var e=this._getDisplayField(i),r=i.searchFields||[e],n=[];i.suggestionTemplate?i.suggestionTemplate.replace(/(?:\{([^}]+)\})/g,function(e,t){n.push(t)}):n.push(e);var o=-1!==b.indexOf(n,a.objectIdField);o||n.push(a.objectIdField);var l=this._validField(a,e),u=this._validFields(a,n),d=this._validFields(a,r);if(l&&u&&d){var g=a.createQuery();L(i,"suggestQueryParams")&&w.mixin(g,i.suggestQueryParams),g.outSpatialReference=h,g.returnGeometry=!1,g.num=i.maxSuggestions||this.maxSuggestions,g.outFields=n,i.withinViewEnabled&&this.get("view.extent")&&(g.geometry=this.view.extent),i.searchExtent&&(g.geometry=i.searchExtent);var f=this._whereClause(c,a,r,!1);f?(g.where=f,a.queryFeatures(g).then(function(e){var r,i=e.features;i&&(r=this._hydrateResults(i,s,!0)),t.resolve(r)}.bind(this),function(e){e||(e=this._error("FeatureLayer queryFeatures errored with suggestions")),t.reject(e)}.bind(this))):t.resolve()}else t.reject(this._error("Invalid FeatureLayer field"))}else t.resolve()}.bind(this)):t.reject(this._error("Invalid source"))}else t.resolve();return t.promise},_loadLayer:function(e){var t=new R;return e&&e.loadStatus===A?e.load().then(t.resolve,t.reject):t.resolve(e),t.promise},_supportsPagination:function(e){return e&&e.get("advancedQueryCapabilities.supportsPagination")},_suggestQueries:function(e){var t=this.sources,r=this.activeSourceIndex,s=[];if(r===j)for(var i=0;i<t.length;i++)e.index=i,s.push(this._suggest(e));else e.index=r,s.push(this._suggest(e));return n(s)},_searchQueries:function(e){L(e,"index")||(e.index=this.activeSourceIndex);var t=this.sources,r=[];if(e.index===j)for(var s=0;s<t.length;s++)e.index=s,r.push(this._search(e));else r.push(this._search(e));return n(r)},_getPointFromGeometry:function(e){if(e&&e.type){var t=e.type;return"point"===t?e:"extent"===t?e.center:"polygon"===t?e.centroid:"multipoint"===t?e.getPoint(0):"polyline"===t?e.getPoint(0,0):e.extent.center}},_search:function(e){e||(e={text:this.searchTerm,magicKey:null,geometry:null,point:null,index:this.activeSourceIndex,latlon:null});var t,r,s=new R,i=e.index,a=this.sources.getItemAt(i);if(L(e,"text")&&e.text&&(r=w.trim(e.text)),a){var n=a.featureLayer,o="";a.prefix&&!e.magicKey&&(o+=a.prefix),o+=r,a.suffix&&!e.magicKey&&(o+=a.suffix);var l=this._defaultSR;if(l=this.get("view.spatialReference"),a.locator)if(L(e,"text")&&r){var c={};if(a.categories&&(c.categories=a.categories),l&&(a.locator.outSpatialReference=l),this.view&&a.localSearchOptions&&L(a.localSearchOptions,"distance")&&L(a.localSearchOptions,"minScale")){var d=this.scale;(!a.localSearchOptions.minScale||d&&d<=parseFloat(a.localSearchOptions.minScale))&&(c.location=this.view.extent.center,c.distance=a.localSearchOptions.distance)}c.address={},c.maxLocations=a.maxResults||this.maxResults,a.withinViewEnabled&&this.get("view.extent")&&(c.searchExtent=this.view.extent),a.searchExtent&&(c.searchExtent=a.searchExtent),a.sourceCountry&&(c.countryCode=a.sourceCountry),a.countryCode&&(c.countryCode=a.countryCode),e.magicKey&&(c.magicKey=e.magicKey),a.singleLineFieldName?c.address[a.singleLineFieldName]=o:c.address["Single Line Input"]=o,a.outFields&&(c.outFields=a.outFields),a.locator.addressToLocations(c).then(function(e){var t=this._hydrateResults(e,i,!1);s.resolve(t)}.bind(this),function(e){e||(e=this._error("Locator addressToLocations could not be performed")),s.reject(e)}.bind(this))}else if(e.geometry)t=this._getPointFromGeometry(e.geometry.geometry),t?this._reverseGeocodePoint(i,t).then(function(e){s.resolve(e)},function(e){s.reject(e)}):s.reject(this._error("Invalid point to reverse geocode"));else if(e.point)this._reverseGeocodePoint(i,e.point).then(function(e){s.resolve(e)},function(e){s.reject(e)});else if(e.latlon){var g=new u({longitude:e.latlon[0],latitude:e.latlon[1]});this._reverseGeocodePoint(i,g).then(function(e){s.resolve(e)},function(e){s.reject(e)})}else L(e,"text")&&!r?s.resolve([]):s.reject(this._error("Invalid query type for Locator"));else n?this._loadLayer(n).then(function(){var c=this._getDisplayField(a),d=a.searchFields||[c],g=this._validField(n,c),f=this._validFields(n,d);if(g&&f){var p=n.createQuery();if(L(a,"searchQueryParams")&&w.mixin(p,a.searchQueryParams),l){p.outSpatialReference=l;var m=h.getUnitValueForSR(l);m&&(p.maxAllowableOffset=m)}p.returnGeometry=!0,a.outFields&&(p.outFields=a.outFields);var v;L(e,G)||(this._supportsPagination(n)&&(p.num=a.maxResults||this.maxResults),a.withinViewEnabled&&this.get("view.extent")&&(p.geometry=this.view.extent),a.searchExtent&&(p.geometry=a.searchExtent),v=a.exactMatch);var y;if(L(e,"text")&&r){var _=this._whereClause(o,n,d,v);_?(p.where=_,y=!0):y=!1}else L(e,G)?(p.objectIds=[e[G]],y=!0):e.geometry?(p.geometry=e.geometry,y=!0):e.point?(p.geometry=e.point,y=!0):e.latlon?(t=new u({longitude:e.latlon[0],latitude:e.latlon[1]}),p.geometry=t,y=!0):L(e,"text")&&!r?(s.resolve([]),y=!1):(s.reject(this._error("Invalid query type for FeatureLayer")),y=!1);y?n.queryFeatures(p).then(function(e){var t,r=e.features;r&&(t=this._hydrateResults(r,i,!1)),s.resolve(t)}.bind(this),function(e){e||(e=this._error("FeatureLayer queryFeatures could not be performed")),s.reject(e)}.bind(this)):s.resolve()}else s.reject(this._error("Invalid FeatureLayer field"))}.bind(this)):s.reject(this._error("Invalid source"))}else s.reject(this._error("Source is undefined"));return s.promise},_isError:function(e){var t=e instanceof Error||L(e,"code")||L(e,"message");return t?!0:!1},_formatResults:function(e,t,s){var i,a={activeSourceIndex:t,searchTerm:s,numResults:0,numErrors:0,errors:null,results:null},n=this.sources,o=[],l=[];if(e)if(t===j)for(var u=0;u<e.length;u++)e[u]||(e[u]=[]),i=n.getItemAt(u),this._isError(e[u])&&(e[u]=new r(e[u])),e[u]instanceof r?(o.push({sourceIndex:u,source:i,error:e[u]}),a.numErrors++):(l.push({sourceIndex:u,source:i,results:e[u]}),a.numResults+=e[u].length);else e[0]||(e[0]=[]),i=n.getItemAt(t),this._isError(e[0])&&(e[0]=new r(e[0])),e[0]instanceof r?(o.push({sourceIndex:t,source:i,error:e[0]}),a.numErrors++):(l.push({sourceIndex:t,source:i,results:e[0]}),a.numResults+=e[0].length);return a.numErrors&&(a.errors=o),a.numResults&&(a.results=l),a},_reverseGeocodePoint:function(e,t){var r=new R,s=this.sources,i=s.getItemAt(e);if(t&&i){var a=i.locationToAddressDistance||this.locationToAddressDistance;i.locator.outSpatialReference=this._defaultSR,i.locator.outSpatialReference=this.get("view.spatialReference"),i.locator.locationToAddress(t,a).then(function(t){var s=this._hydrateResults([t],e,!1);r.resolve(s)}.bind(this),function(e){e||(e=this._error("Locator locationToAddress could not be performed")),r.reject(e)}.bind(this))}else r.reject(this._error("No point or source defined for reverse geocoding"));return r.promise},_cancelDeferreds:function(){this._deferredSuggestions.forEach(function(e){e.cancel(this.declaredClass+" cancelling request")},this),this._deferredSuggestions.length=0},_getFeatureLayerName:function(e){var t=e.featureLayer;if(t){var r=t.title,s=e.searchFields||[this._getDisplayField(e)];return s.forEach(function(e,s){r+=0===s?": ":", ";var i=t.getField(e);r+=i&&i.alias||e}),r}},_getSourceName:function(e){return this._getName(e)||this._getFeatureLayerName(e)||E.untitledSource},_getName:function(e){return e&&e.name},_getFirstStringField:function(e){if(e){var t=e.fields;if(t&&t.length)for(var r=0;r<t.length;r++){var s=t[r];if("string"===s.type)return s.name}}return""},_getDisplayField:function(e){return e.displayField||e.featureLayer.displayField||this._getFirstStringField(e.featureLayer)},_validExtent:function(e){return e&&e.xmin&&"NaN"!==e.xmin&&e.ymin&&"NaN"!==e.ymin&&e.xmax&&"NaN"!==e.xmax&&e.ymax&&"NaN"!==e.ymax},_hydrateResult:function(e,t,r){var s,i,n={},o=this._defaultSR,c=this.sources,g=c.getItemAt(t),f=this.get("view.map");if(o=this.get("view.spatialReference"),L(e,"text")&&L(e,"magicKey"))return e;if(e instanceof d)n.feature=e.clone(),i=n.feature.geometry,i&&(i.spatialReference=o);else if(L(e,"location")){var p=new u({x:e.location.x,y:e.location.y,spatialReference:o});s={},L(e,"attributes")&&(s=e.attributes),L(e,"score")&&(s.score=e.score),n.feature=new d({geometry:p,attributes:s})}else n.feature=null;if(L(e,"extent")&&this._validExtent(e.extent))n.extent=new l(e.extent),n.extent.spatialReference=o;else if(n.feature&&n.feature.geometry)switch(n.feature.geometry.type){case"extent":n.extent=n.feature.geometry;break;case"multipoint":n.extent=n.feature.geometry.extent;break;case"polygon":n.extent=n.feature.geometry.extent;break;case"polyline":n.extent=n.feature.geometry.extent;break;case"point":if(f){var m=this.zoomScale;g&&g.zoomScale&&(m=g.zoomScale),this.scale>m?n.extent=h.getExtentForScale(this.view,m).clone().centerAt(n.feature.geometry):n.extent=this.view.extent.clone().centerAt(n.feature.geometry)}else n.extent=new l({xmin:n.feature.geometry.x-.25,ymin:n.feature.geometry.y-.25,xmax:n.feature.geometry.x+.25,ymax:n.feature.geometry.y+.25})}else n.extent=null;if(g.featureLayer)if(g.suggestionTemplate&&r)n.name=a.substitute(e.attributes,g.suggestionTemplate);else if(g.searchTemplate)n.name=a.substitute(e.attributes,g.searchTemplate);else{var v=this._getDisplayField(g),y=g.featureLayer.getField(v),_=y.domain;if(v&&L(e,"attributes")&&L(e.attributes,v)){var x=e.attributes[v];_&&"codedValue"===_.type?n.name=this._getCodedName(_.codedValues,x):n.name=x}}else e.address&&g.searchTemplate?n.name=a.substitute(e.address,g.searchTemplate):L(e,"name")?n.name=e.name:L(e,"attributes")&&"object"==typeof e.attributes&&e.attributes.Match_addr?(n.name=e.attributes.Match_addr,e.attributes.Addr_type&&"POI"===e.attributes.Addr_type&&e.attributes.StAddr&&e.attributes.City&&(n.name+=" - "+e.attributes.StAddr+", "+e.attributes.City)):L(e,"address")&&"string"==typeof e.address?n.name=e.address:L(e,"address")&&"object"==typeof e.address&&L(e.address,"Address")?n.name=e.address.Address:n.feature&&n.feature.geometry&&(n.name=n.feature.geometry.x+","+n.feature.geometry.y);return n.name||(n.name=E.untitledResult),n},_hydrateResults:function(e,t,r){var s=[],i=e&&e.length;if(i)for(var a=0;i>a;a++){var n=this._hydrateResult(e[a],t,r);s.push(n)}return s},_containsNonLatinCharacter:function(e){for(var t=0;t<e.length;t++)if(e.charCodeAt(t)>255)return!0;return!1},_setPlaceholder:function(e){var t="",r=this.sources,s=r.getItemAt(e);e===j?t=this.allPlaceholder||E.allPlaceholder:s&&s.placeholder&&(t=s.placeholder),this.placeholder=t},_updateActiveSource:function(){var e=this.sources,t=this.activeSourceIndex,r=e&&e.getItemAt(t);this.activeSource=r||null},_setDefaultActiveSourceIndex:function(){var e=this.sources,t=e&&1===e.length,r=t||!this.searchAllEnabled;this.activeSourceIndex=r?0:j}});return D.ALL_INDEX=j,D.OBJECT_ID_FIELD=G,D});