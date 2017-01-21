// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["dojo/_base/array","dojo/_base/lang","../Color"],function(m,p,e){function n(a,b){var c;if(a)switch(c={},c.color=new e(a.color),b){case "point":c.outline={color:new e(a.outline.color),width:a.outline.width};c.size=a.size;break;case "polyline":c.width=a.width;break;case "polygon":c.outline={color:new e(a.outline.color),width:a.outline.width}}return c}var g={"default":{name:"default",label:"Default",description:"Default theme for basic visualization of features.",basemapGroups:{light:"streets gray topo terrain national-geographic oceans osm".split(" "),
dark:["satellite","hybrid","dark-gray"]},pointSchemes:{light:{primary:{color:[77,77,77,1],outline:{color:[255,255,255,1],width:1},size:8},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,1],width:1},size:8},{color:[255,255,255,1],outline:{color:[51,51,51,1],width:1},size:8}]},dark:{primary:{color:[255,255,255,1],outline:{color:[26,26,26,1],width:1},size:8},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,1],width:1},size:8},{color:[26,26,26,1],outline:{color:[178,178,178,1],
width:1},size:8}]}},lineSchemes:{light:{primary:{color:[77,77,77,1],width:2},secondary:[{color:[226,119,40,1],width:2},{color:[255,255,255,1],width:2}]},dark:{primary:{color:[255,255,255,1],width:2},secondary:[{color:[226,119,40,1],width:2},{color:[26,26,26,1],width:2}]}},polygonSchemes:{light:{primary:{color:[227,139,79,0.8],outline:{color:[255,255,255,1],width:1}},secondary:[{color:[128,128,128,0.8],outline:{color:[255,255,255,1],width:1}},{color:[255,255,255,0.8],outline:{color:[128,128,128,1],
width:1}}]},dark:{primary:{color:[227,139,79,0.8],outline:{color:[51,51,51,1],width:1}},secondary:[{color:[178,178,178,0.8],outline:{color:[51,51,51,1],width:1}},{color:[26,26,26,0.8],outline:{color:[128,128,128,1],width:1}}]}}}},l={};(function(){var a,b,c,d,f,e,h,k;for(a in g)for(d in b=g[a],c=b.basemapGroups,f=l[a]={basemaps:[].concat(c.light).concat(c.dark),point:{},polyline:{},polygon:{}},c){e=c[d];for(h=0;h<e.length;h++)k=e[h],b.pointSchemes&&(f.point[k]=b.pointSchemes[d]),b.lineSchemes&&(f.polyline[k]=
b.lineSchemes[d]),b.polygonSchemes&&(f.polygon[k]=b.polygonSchemes[d])}})();return{getAvailableThemes:function(a){var b=[],c,d,f;for(c in g)d=g[c],f=l[c],a&&-1===m.indexOf(f.basemaps,a)||b.push({name:d.name,label:d.label,description:d.description,basemaps:f.basemaps.slice(0)});return b},getSchemes:function(a){var b=a.basemap,c=a.geometryType;a=l[a.theme];var d;(a=(a=a&&a[c])&&a[b])&&(d={primaryScheme:n(a.primary,c),secondarySchemes:m.map(a.secondary,function(a){return n(a,c)})});return d},cloneScheme:function(a){var b;
a&&(b=p.mixin({},a),b.color&&(b.color=new e(b.color)),b.outline&&(b.outline={color:b.outline.color&&new e(b.outline.color),width:b.outline.width}));return b}}});