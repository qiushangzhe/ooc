function extend(subClass,superClass){
    var F = function(){};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
}

function superClass(name){
    this.name = name;
}

superClass.prototype.getName = function () {
    console.log(this.name);
};


function subClass(){
    superClass.call(this,'子类');
}

extend(subClass,superClass);

var Test = new subClass();
console.log(Test);

// function girlDog(){
//     Dog.call(this);
//     this.sex = '女';
// }
//
// extend(girlDog,Dog);
// girlDog.prototype.girlSay = function(){
//     console.log('女汪');
// }
//
// var girl = new girlDog();
// console.log(girl);
