//基础的链式调用
(function(){
    function q(_string){
        this.string = _string;
    }
    q.prototype.addType1 = function () {
        this.string += ' 1';
        return this;
    };
    q.prototype.addType2 = function () {
        this.string += ' 2';
        return this;
    };
    q.prototype.get = function(){
        console.log(this.string);
    };
    window.q = function(_str){
        return new q(_str);
    }
})();

//在浏览器环境下可执行下面代码
q('base').addType1().addType2().get();//输出base 1 2
