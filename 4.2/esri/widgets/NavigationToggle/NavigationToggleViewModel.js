// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["../../core/Accessor","../../core/HandleRegistry","../../core/watchUtils"],function(a,b,c){return a.createSubclass({declaredClass:"esri.widgets.NavigationToggleViewModel",properties:{navigationMode:{},state:{dependsOn:["view.ready"],readOnly:!0},view:{}},constructor:function(){this._handles=new b;this.toggle=this.toggle.bind(this)},initialize:function(){this._handles.add(c.when(this,"view.inputManager",this._setNavigationMode.bind(this)))},destroy:function(){this._handles.destroy()},_handles:null,
state:"disabled",_stateGetter:function(){return this.get("view.ready")&&"3d"===this.view.type?"ready":"disabled"},navigationMode:"pan",view:null,toggle:function(){"disabled"!==this.state&&(this.navigationMode="pan"!==this.navigationMode?"pan":"rotate",this._setNavigationMode())},_setNavigationMode:function(){this.view.inputManager.primaryDragAction="pan"===this.navigationMode?"pan":"rotate"}})});