// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["dijit/form/Select","dojo/dom-class"],function(d,c){return d.createSubclass({baseClass:"esri-icon-select dijitSelect dijitValidationTextBox",declaredClass:"esri.dijit.SymbolStyler.IconSelect",_extraIconClass:null,_setValueAttr:function(a){this.inherited(arguments);var b=this.containerNode;c.remove(b,this._getAllIconClasses());c.add(b,this.get("selectedOptions").iconClass)},addIconOptions:function(a,b){b=b||"";a=a||[];var c=a.map(function(a){return{value:a,iconClass:b+" "+a}});this.addOption(c)},
_getMenuItemForOption:function(a){var b=this.inherited(arguments);b.set("iconClass",a.iconClass);return b},_getAllIconClasses:function(){return this.options.map(function(a){return a.iconClass})}})});