//实现继承。
function animal (name){
    this.name = name;
}

animal.prototype.getName = function () {
    console.log(this.name);
};



function dog(){
    animal.call(this,'狗');
}
dog.prototype = new animal();
dog.prototype.contrustor = animal;

dog.prototype.doAction = function(){
    console.log('汪汪叫');
}


var buffer = new dog();
buffer.doAction();//汪汪叫
buffer.getName();//狗

console.dir(buffer);
