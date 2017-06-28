/*
    base Singleton
    最简单的单体模式就是一个对象字面量
    他把一批有一定关联的方法和属性组织在一起
*/

var People = {
    name : 'qiushangzhe',
    age : 18,
    say:function(){
        console.log('大家好');
    },
    saySomething:function(say){
        console.log(say);
    }
}

/*
    违背了面向对象的原则
    类可以被拓展，但是不可以被修改
*/
