//当前所有的怪物
var Footmen = function() {};
Footmen.prototype.shout = function() {
    console.log("战争宣言:不是你死，就是我活");
}
var Archer = function() {};
Archer.prototype.shout = function() {
    console.log("战争宣言:我将百步穿杨");
}
var Rider = function() {};
Rider.prototype.shout = function() {
    console.log("战争宣言:我将百步穿杨");
}
// 兵营
var barracks = function() {}

barracks.prototype = {
    createSoldier: function(type) {
        //创建一个当前要创建的怪物
        var soldier = null;
        switch (type) {
            case '步兵':
                soldier = new Footmen();
                break;
            case '工兵':
                soldier = new Archer();
                break;
            case '骑兵':
                soldier = new Rider();
                break;
            default:
                soldier = new Footmen();
        }
        //创建出来以后 喊一嗓子
        soldier.shout();
    }
}


var factory = new barracks();
factory.createSoldier("步兵");
factory.createSoldier("步兵");
factory.createSoldier("工兵");
factory.createSoldier("步兵");
factory.createSoldier("骑兵");
