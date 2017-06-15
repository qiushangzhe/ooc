function extend(subClass,superClass){
    var F = function(){};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.construstor = subClass;
    subClass.superclass = superClass.prototype;
    if(superClass.prototype.construstor == Object.prototype.construstor){
        superClass.prototype.construstor = superClass;
    }
}


function Animal(name){
    this.name = name;
}

Animal.prototype.getName = function () {
    console.log(this.name);
};


function Dog(){
    Animal.superClass.construstor.call(this,name);
}

extend(Dog,Animal);

Dog.prototype.doAction = function(){
    console.log('汪');
}

console.dir(Dog);
