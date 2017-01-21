// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["./TileAgentBase","./TerrainConst","./UpsampleInfo","../../../core/ObjectPool"],function(k,m,e,n){var a=function(){k.apply(this,arguments)};a.prototype=new k;a.prototype.constructor=a;a.prototype.dataArrived=function(b){b!==this.tile?this._setUpsamplingTile(b):this.updateGeometry();this._dataRequested=null;this._requestNext()};a.prototype.updateGeometry=function(){this._tileLayerInfo.pendingUpdates|=m.TileUpdateTypes.UPDATE_GEOMETRY;this.tile.updateGeometry()};a.prototype._findAncestorWithData=
function(){for(var b=this.layerClass,a=this.layerIdx,d=this.tile,f=d.vlevel,g;d&&(!d.layerInfo[b][a].data||!(g=d,f-d.lij[0]>=m.ELEVATION_DESIRED_RESOLUTION_LEVEL));)d=d.parent;return g?(b=e.Pool.acquire(),b.init(g,0,0,1),b):null};a.prototype._findNextDownload=function(){var b,a=this.layerIdx,d=this.layerClass,f=this.tile.parentSurface.layerViewByIndex(a,d),g=f.minDataLevel,f=f.maxDataLevel,e=m.ELEVATION_DESIRED_RESOLUTION_LEVEL-(this.tile.vlevel-this.tile.lij[0]),k=4+e;if(this._tileLayerInfo.data||
this.tile.lij[0]<g)b=null;else{for(var c=this.tile,p=c.lij[0],q=0,n=this._tileLayerInfo.upsampleFromTile?this._tileLayerInfo.upsampleFromTile.tile.lij[0]:-1,l=this.tile.parentSurface,h=l.getTilemapTile(c),l=l.tilemapStats,r=!1;c&&q<=k&&c.lij[0]>=g;){if(c.layerInfo[this.layerClass][this.layerIdx].data&&p-c.lij[0]>=e){c.lij[0]>n&&this._setUpsamplingTile(c);break}h&&!h.tileDataAvailable(c,a,d)?(r=!0,b=null):c.lij[0]<=f&&(b=c);c=c.parent;h=h?h.parent:null;q++}b&&(p-b.lij[0]<e&&this._tileLayerInfo.upsampleFromTile)&&
(b=null);!b&&r&&l.tilesNotPresent++}return b};a.prototype._setUpsamplingTile=function(b){this._tileLayerInfo.upsampleFromTile&&e.Pool.release(this._tileLayerInfo.upsampleFromTile);var a=e.Pool.acquire();a.init(b,0,0,1);this._tileLayerInfo.upsampleFromTile=a;this.updateGeometry()};a.Pool=new n(a,function(){},!1);return a});