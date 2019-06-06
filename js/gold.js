$(function () {
    var gold_first = localStorage.getItem('gold');
    gold_first = (gold_first == '' || gold_first == null || typeof (gold_first) == 'undefined') ? "100" : gold_first;
    $('.gold').html(gold_first);
    localStorage.setItem("gold", gold_first);
    var gold_out = localStorage.getItem('gold');
    //提示
    $('.swiper-slide .hint').on('click', function () {
        gold_out = parseInt(gold_out) - 20;
        if (gold_out < 0) {
            gold_out = 0;
            MIM.prompt('您的金币不足，请先获取金币', false, 2000);
        } else {
            var hintType = $(this).attr('hintType');
            if (hintType == 1) {
                //如果是第一页
                MIM.confirm("为2,6,7,40,50,83,85时候按钮互换位置", function () {
                }, function () {
                }, "ok", "close");
            } else if (hintType == 2) {
                //如果是第二页
                MIM.confirm("页面上有个MENU，试着点点看", function () {
                }, function () {
                }, "ok", "close");
            } else if (hintType == 3) {
                MIM.confirm("页面上有个红色的字，试着点点看", function () {
                }, function () {
                }, "ok", "close");
            }
        }
        localStorage.setItem("gold", gold_out);
        $('.gold').html(gold_out);
    });
//  跳过
    $('.swiper-slide .skip').on('click', function () {
        gold_out = parseInt(gold_out) - 100;
        if (gold_out < 0) {
            gold_out = 0;
            MIM.prompt('您的金币不足，请先获取金币', false, 2000);
        } else {
            successful();
            var r = parseInt($('.swiper-button-next').attr("pass_data"));
            $('.swiper-button-next').attr("pass_data", r + 1);
        }
        localStorage.setItem("gold", gold_out);
        $('.gold').html(gold_out);
    });

//  选择购买关卡
    $('.pass_list .faint').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var that = $(this);
        if (gold_out >= 100) {
            MIM.confirm("确定购买此关卡吗(100金币)?", function () {
                that.remove();
                gold_out = parseInt(gold_out) - 100;
                localStorage.setItem("gold", gold_out);
                $('.gold').html(gold_out);
                var s = that.attr('faint_number');
                localStorage.setItem("R" + s, s)
            }, function () {
                MIM.prompt("解锁新关卡失败", false, 2000);
            }, "确定", "取消")
        } else {
            MIM.prompt('您的金币不足以解锁新关卡', false, 2000);
        }
    });

    //首次过关增加金币
    function addGold() {
        var golds = localStorage.getItem('gold');
        var goldAdd = parseInt(golds) + 20;
        localStorage.setItem("gold", goldAdd);
        $('.gold').html(goldAdd);
    }

});
