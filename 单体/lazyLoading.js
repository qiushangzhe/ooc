var People = {};
People.Singleton = function(){
    var instance = null;
    var name = "邱上哲";
    function constructor(){
        this.getName = function(){
            return name;
        }
        this.setName = function(name){
            name = name;
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

console.log(People.Singleton.getInstance());
