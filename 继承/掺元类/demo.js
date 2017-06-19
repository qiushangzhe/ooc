function augment(receiving,giving){
    for(methodname in giving.prototype){
        if(!receiving.prototype[methodname]){
            receiving.prototype[methodname] = giving.prototype[methodname];
        }
    }
}


var funny = function(){};
funny.prototype.addFuck = function(){
    return this.name += '---fuck (这里是后加的)';
}



var people = function(name){
    this.name = name;
}

people.prototype.getName = function(){
    return this.name;
}
augment(people,funny);
var qiushangzhe = new people('邱上哲');//邱上哲
console.log(qiushangzhe.getName());
qiushangzhe.addFuck();
console.log(qiushangzhe.getName());//邱上哲---fuck (这里是后加的)


//这个funny就是掺元类
