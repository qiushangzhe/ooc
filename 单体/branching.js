/*
    “分支技术”是一种用来
    把浏览器间的差异封装到
    在运行期间进行设置的
    动态方法中的技术
*/

var tools = function(){
    var instance = null;
    function tools_1(){
        var argument_1 = '我是tools1';
        return {
            getArgument:function(){
                return argument_1;
            },
            setArgument:function(_arg){
                argument_1 = _arg;
            }
        }
    }
    function tools_2(){
        var argument_2 = '我是tools2';
        return {
            getArgument:function(){
                return argument_2;
            },
            setArgument:function(_arg){
                argument_2 = _arg;
            }
        }
    }
    return {
        getInstance:function(){
            if(instance == null){
                //判断一下当前环境下到底要使用那种tools
                if(true){//这里写判断条件 比如 window.xxxx 是不是undefined之类的。或者xhr对象的实现啥的。
                    instance = tools_1();
                }else{
                    instance = tools_2();
                }
            }
            return instance;
        }
    }
}();

//这样直接用tool对象的时候就是已经判断过到底是tools1还是tools2的实例了。
console.log(tools.getInstance().getArgument())
