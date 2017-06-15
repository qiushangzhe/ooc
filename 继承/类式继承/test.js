function Obj01 (){
    this.name = '我是1号';
}

function Obj02(){
    this.name = '我是2号'
}

var human = function (){
    this.qiushangzhe = 'human';
}

var p = function(){};

human.call(p);
