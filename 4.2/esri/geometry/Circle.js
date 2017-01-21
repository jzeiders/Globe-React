// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("../core/lang ./Point ./Polygon ./support/geodesicUtils ./support/webMercatorUtils ./support/WKIDUnitConversion dojo/_base/lang".split(" "),function(l,q,k,r,m,h,s){var n={centimeters:0.01,decimeters:0.1,feet:0.3048,inches:0.0254,kilometers:1E3,meters:1,miles:1609.34,millimeters:0.001,"nautical-miles":1852,yards:0.9144,"decimal-degrees":111320},p=k.createSubclass({declaredClass:"esri.geometry.Circle",normalizeCtorArgs:function(a,f){var b;if(a&&a.center)b=a;else{if(a&&a.rings)return this.inherited(arguments);
b={center:a}}return s.mixin(this.inherited(arguments,[]),b,f)},initialize:function(){var a=this.center,f=this.numberOfPoints;this.hasZ=a&&a.hasZ;if(0===this.rings.length&&a){var b=this.radius*n[this.radiusUnit],c=a.spatialReference,d="geographic";if(c.isWebMercator)d="webMercator";else if(l.isDefined(h[c.wkid])||c.wkt&&0===c.wkt.indexOf("PROJCS"))d="projected";if(this.geodesic){var e;switch(d){case "webMercator":e=m.webMercatorToGeographic(a);break;case "projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");
break;case "geographic":e=a}a=this._createGeodesicCircle(e,b,f);"webMercator"===d&&(a=m.geographicToWebMercator(a))}else{var g;"webMercator"===d||"projected"===d?g=b/this._convert2Meters(1,a.spatialReference):"geographic"===d&&(g=b/n["decimal-degrees"]);a=this._createPlanarCircle(a,g,f)}this.spatialReference=a.spatialReference;this.addRing(a.rings[0])}},properties:{center:{value:null,type:q},geodesic:!1,numberOfPoints:60,radius:1E3,radiusUnit:"meters"},clone:function(){return new p({rings:this.rings,
hasZ:this.hasZ,hasM:this.hasM,spatialReference:this.spatialReference})},_createGeodesicCircle:function(a,f,b){for(var c=0,d=Math.PI/180,e=[],g;c<2*Math.PI;)g=r._directGeodeticSolver(a.y*d,a.x*d,-c,f),g=g.toArray(),this.hasZ&&g.push(a.z),e.push(g),c+=Math.PI/(b/2);e.push(e[0]);return new k(e)},_createPlanarCircle:function(a,f,b){for(var c=0,d=[],e,g;c<2*Math.PI;)e=a.x+Math.cos(-c)*f,g=a.y+Math.sin(-c)*f,e=[e,g],this.hasZ&&e.push(a.z),d.push(e),c+=Math.PI/(b/2);d.push(d[0]);return new k({spatialReference:a.spatialReference,
rings:[d]})},_convert2Meters:function(a,f){var b;if(l.isDefined(h[f.wkid]))b=h.values[h[f.wkid]];else{b=f.wkt;var c=b.lastIndexOf(",")+1,d=b.lastIndexOf("]]");b=parseFloat(b.substring(c,d))}return a*b}});return p});