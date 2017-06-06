var Interface = function(name, methods) {
    if (arguments.length != 2) {
        throw new Error("定义的是传俩参，实际传了"+arguments.length+"个:-)");
    }
    this.name = name;
    this.methods = [];
    for (var i = 0, length = methods.length; i < length; i++) {
        if(typeof methods[i] !== 'string'){
            throw new Error('methods里面的项目不可以为string以外的东西,你瞅瞅你传了个啥进来->'+methods[i]);
        }
        this.methods.push(methods[i]);
    }
}

Interface.ensureImplement = function (object) {
    if(arguments.length<2){
        throw new Error("至少传俩参数");
    }
    for (var i = 1,len = arguments.length; i < len; i++) {
        var _interface = arguments[i];
        if(_interface.constructor !== Interface){
            throw new Error('第二个参数得是接口对象');
        }
        for(var j=0;j<_interface.methods.length;j++){
            var method = _interface.methods[j];
            if(!object[method] || typeof object[method] !== 'function'){
                throw new Error('检测到问题，没实现'+_interface.name+'接口的'+method+'方法');
            }
        }

    }
};
var manInterface = new Interface('manInterface',['setName','getName']);
var man = function (name){
    this._name = name;
}
man.setName = function(name){
    this._name = name;
}
man.getName = function(){
    return this._name;
}

Interface.ensureImplement(man,manInterface);
