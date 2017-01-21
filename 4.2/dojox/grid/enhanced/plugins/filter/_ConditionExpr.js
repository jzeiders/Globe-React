//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array"],function(b,e,g){var d=b("dojox.grid.enhanced.plugins.filter._ConditionExpr",null,{_name:"expr",applyRow:function(a,c){throw Error("_ConditionExpr.applyRow: unimplemented interface");},toObject:function(){return{}},getName:function(){return this._name}}),h=b("dojox.grid.enhanced.plugins.filter._DataExpr",d,{_name:"data",constructor:function(a,c,b){this._convertArgs=b||{};e.isFunction(this._convertArgs.convert)&&(this._convertData=e.hitch(this._convertArgs.scope,
this._convertArgs.convert));c?this._colArg=a:this._value=this._convertData(a,this._convertArgs)},getValue:function(){return this._value},applyRow:function(a,c){return"undefined"==typeof this._colArg?this:new (e.getObject(this.declaredClass))(this._convertData(c(a,this._colArg),this._convertArgs))},_convertData:function(a){return a},toObject:function(){return{op:this.getName(),data:void 0===this._colArg?this._value:this._colArg,isCol:void 0!==this._colArg}}}),f=b("dojox.grid.enhanced.plugins.filter._OperatorExpr",
d,{_name:"operator",constructor:function(){if(e.isArray(arguments[0]))this._operands=arguments[0];else{this._operands=[];for(var a=0;a<arguments.length;++a)this._operands.push(arguments[a])}},toObject:function(){return{op:this.getName(),data:g.map(this._operands,function(a){return a.toObject()})}}}),k=b("dojox.grid.enhanced.plugins.filter._UniOpExpr",f,{_name:"uniOperator",applyRow:function(a,c){if(!(this._operands[0]instanceof d))throw Error("_UniOpExpr: operand is not expression.");return this._calculate(this._operands[0],
a,c)},_calculate:function(a,c,b){throw Error("_UniOpExpr._calculate: unimplemented interface");}});b=b("dojox.grid.enhanced.plugins.filter._BiOpExpr",f,{_name:"biOperator",applyRow:function(a,b){if(this._operands[0]instanceof d){if(!(this._operands[1]instanceof d))throw Error("_BiOpExpr: right operand is not expression.");}else throw Error("_BiOpExpr: left operand is not expression.");return this._calculate(this._operands[0],this._operands[1],a,b)},_calculate:function(a,b,d,e){throw Error("_BiOpExpr._calculate: unimplemented interface");
}});return{_ConditionExpr:d,_DataExpr:h,_OperatorExpr:f,_UniOpExpr:k,_BiOpExpr:b}});