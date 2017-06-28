/*
    第一种实现私有化成员变量的方式
    下划线
*/

var People = {
    _name:'qiushangzhe',
    getName : function(){
        return this._name;
    },
    setName : function(name){
        this._name = name;
    }
}

/*
    但是实际上，用户依旧可以通过People._name 去改变这个私有变量。并没有很强势。
    第二种实现私有化成员变量的方式
    闭包
*/

var Student = {};
Student.Singleton = function(){
    var name = 'qiushangzhe';
    return {
        getName : function(){
            return name;
        },
        setName : function(name){
            name = name;
        }
    }
}();

console.log(Student.Singleton.name);//undefined
