function clone(obj){
    var f = function(){};
    f.prototype = obj;
    return new f();
}
var fatherObj = {
    name : '爸爸',
    goods : {
        tobacco : 10,
        watch : 1
    },
    getName : function (){
        return this.name;
    },
    getGoods : function(){
        var goodsList = '';
        for(var i in this.goods){
            goodsList = goodsList + i + this.goods[i] + '个';
        }
        return goodsList;
    }
}

var childObj = clone(fatherObj);
childObj.name = '儿子';
// childObj.goods.tobacco = 0;
// console.log(fatherObj.getName());//爸爸
// console.log(fatherObj.getGoods());//tobacco0个watch1个
// console.log(childObj.getName());//儿子
// console.log(childObj.getGoods());//tobacco0个watch1个
//这种不对。改变了child的goods却对father的goods造成了影响


childObj.goods = {};
childObj.goods.tobacco = 0;
childObj.goods.watch = 1;

console.log(fatherObj.getName());//爸爸
console.log(fatherObj.getGoods());//tobacco10个watch1个
console.log(childObj.getName());//儿子
console.log(childObj.getGoods());//tobacco0个watch1个
// 这样才是真正的继承
