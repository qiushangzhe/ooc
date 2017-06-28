//惰性实例化 需要的时候才实例化，如果已经实例化过，就不再实例化
var People = {};
People.Singleton = function(){
    var instance = null;
    function constructor(){
        var name = "邱上哲";
        return {
            getName:function(){
                return name;
            },
            setName:function(_name){
                name = _name;
            }
        }
    }
    return {
        getInstance : function(){
            if(instance == null){
                instance = constructor();
            }
            return instance;
        }
    }
}();
console.log(People.Singleton.getInstance().getName());//邱上哲
People.Singleton.getInstance().setName('路人')
console.log(People.Singleton.getInstance().getName());//路人

console.log(People.Singleton.instance);//undefined
console.log(People.Singleton.getInstance().name);//undefined
