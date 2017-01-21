// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["../../core/Accessoire","../../core/declare","../../core/kebabDictionary","../../core/lang","../../geometry/support/graphicsUtils"],function(f,g,d,h,e){var k=d({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),
l=d({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"}),m=d({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"});
return g(f,{declaredClass:"esri.tasks.support.ClosestFacilityParameters",accumulateAttributes:null,attributeParameterValues:null,defaultCutoff:null,defaultTargetFacilityCount:null,directionsLanguage:null,directionsLengthUnits:null,directionsOutputType:null,directionsStyleName:null,directionsTimeAttribute:null,doNotLocateOnRestrictedElements:!0,facilities:null,impedanceAttribute:null,incidents:null,outputGeometryPrecision:null,outputGeometryPrecisionUnits:null,outputLines:null,outSpatialReference:null,
pointBarriers:null,polygonBarriers:null,polylineBarriers:null,restrictionAttributes:null,restrictUTurns:null,returnDirections:!1,returnFacilities:!1,returnIncidents:!1,returnPointBarriers:!1,returnPolygonBarriers:!1,returnPolylineBarriers:!1,returnRoutes:!0,travelDirection:null,useHierarchy:!1,timeOfDay:null,timeOfDayUsage:null,toJSON:function(c){var b={returnDirections:this.returnDirections,returnFacilities:this.returnFacilities,returnIncidents:this.returnIncidents,returnBarriers:this.returnPointBarriers,
returnPolygonBarriers:this.returnPolygonBarriers,returnPolylineBarriers:this.returnPolylineBarriers,returnCFRoutes:this.returnRoutes,useHierarchy:this.useHierarchy,attributeParameterValues:this.attributeParameterValues&&JSON.stringify(this.attributeParameterValues),defaultCutoff:this.defaultCutoff,defaultTargetFacilityCount:this.defaultTargetFacilityCount,directionsLanguage:this.directionsLanguage,directionsLengthUnits:k.toJSON(this.directionsLengthUnits),directionsTimeAttributeName:this.directionsTimeAttribute,
impedanceAttributeName:this.impedanceAttribute,outputGeometryPrecision:this.outputGeometryPrecision,outputGeometryPrecisionUnits:m.toJSON(this.outputGeometryPrecisionUnits),outputLines:this.outputLines,outSR:this.outSpatialReference?this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()):null,restrictionAttributeNames:this.restrictionAttributes?this.restrictionAttributes.join(","):null,restrictUTurns:l.toJSON(this.restrictUTurns),accumulateAttributeNames:this.accumulateAttributes?
this.accumulateAttributes.join(","):null,travelDirection:this.travelDirection,timeOfDay:this.timeOfDay&&this.timeOfDay.getTime(),directionsStyleName:this.directionsStyleName};if(this.directionsOutputType)switch(this.directionsOutputType.toLowerCase()){case "complete":b.directionsOutputType="esriDOTComplete";break;case "complete-no-events":b.directionsOutputType="esriDOTCompleteNoEvents";break;case "instructions-only":b.directionsOutputType="esriDOTInstructionsOnly";break;case "standard":b.directionsOutputType=
"esriDOTStandard";break;case "summary-only":b.directionsOutputType="esriDOTSummaryOnly";break;default:b.directionsOutputType=this.directionsOutputType}if(this.timeOfDayUsage){var a;switch(this.timeOfDayUsage.toLowerCase()){case "start":a="esriNATimeOfDayUseAsStartTime";break;case "end":a="esriNATimeOfDayUseAsEndTime";break;default:a=this.timeOfDayUsage}b.timeOfDayUsage=a}a=this.incidents;"esri.tasks.support.FeatureSet"===a.declaredClass&&0<a.features.length?b.incidents=JSON.stringify({type:"features",
features:e._encodeGraphics(a.features,c&&c["incidents.features"]),doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements}):"esri.tasks.support.DataLayer"===a.declaredClass?b.incidents=a:"esri.tasks.support.DataFile"===a.declaredClass&&(b.incidents=JSON.stringify({type:"features",url:a.url,doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements}));a=this.facilities;"esri.tasks.support.FeatureSet"===a.declaredClass&&0<a.features.length?b.facilities=JSON.stringify({type:"features",
features:e._encodeGraphics(a.features,c&&c["facilities.features"]),doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements}):"esri.tasks.support.DataLayer"===a.declaredClass?b.facilities=a:"esri.tasks.support.DataFile"===a.declaredClass&&(b.facilities=JSON.stringify({type:"features",url:a.url,doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements}));a=function(a,b){return!a?null:"esri.tasks.support.FeatureSet"===a.declaredClass?0<a.features.length?JSON.stringify({type:"features",
features:e._encodeGraphics(a.features,c&&c[b])}):null:"esri.tasks.support.DataLayer"===a.declaredClass?a:"esri.tasks.support.DataFile"===a.declaredClass?JSON.stringify({type:"features",url:a.url}):JSON.stringify(a)};this.pointBarriers&&(b.barriers=a(this.pointBarriers,"pointBarriers.features"));this.polygonBarriers&&(b.polygonBarriers=a(this.polygonBarriers,"polygonBarriers.features"));this.polylineBarriers&&(b.polylineBarriers=a(this.polylineBarriers,"polylineBarriers.features"));return h.filter(b,
function(a){if(null!==a)return!0})}})});