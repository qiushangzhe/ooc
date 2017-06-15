// var people = function(name,age){
//     if(name == undefined){
//         throw new Error('name 是必须传入的参数');
//     }
//     this.name = name;
//     this.age = age || 'age is none';
// }
//
// people.prototype.introduce = function () {
//     console.log('我的名字是'+this.name+'我今年'+this.age+'岁了');
// };
//
// var qiu = new people('邱上哲',24);
// qiu.introduce();



function test(){
    var a = 10;
    var fun = function(){
        a = a + 1;
        return a;
    }
    return fun;
}
var get = test();
console.log(get());
console.log(get());
console.log(get());

var get2 = test();
console.log(get2());
