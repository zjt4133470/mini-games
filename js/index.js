// 轮播图
var mySwiper = new Swiper('.swiper-container', {
    loop: false, // 循环模式选项
    effect: 'fade',
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch: false,//禁止鼠标模拟
});

//挑战成功
function successful() {

    MIM.confirm("恭喜你，挑战成功", function () {
        $('.swiper-button-next').show(500);
    }, function () {
        MIM.prompt('Close the Game', false, 2000);
        setTimeout(function () {
            window.location.reload();
        }, 1000)
    }, "解锁下一关按钮", "关闭");
}

//定位页面
mySwiper.slideTo(0);
//开始
$(".cont_start_img").on('click', function () {
    mySwiper.slideTo(1);
});
$(".star").one('click', function () {
    MIM.prompt('你以为我会那么简单的开始吗？', false, 2000);
});
// 关卡
$('.pass_customs').click(function () {
    $('.pass_list').fadeIn()
});
$('.close').click(function () {
    $('.pass_list').fadeOut()
});
// 跳转关卡
$(".pass_list ul li").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    var that = $(this);
    MIM.confirm("是否跳转至此关卡?", function () {
        mySwiper.slideTo(that.index() + 1);
        $('.pass_list').fadeOut();
        that.addClass('pass_border').siblings().removeClass('pass_border')
    }, function () {
        MIM.prompt("跳转关卡失败", false, 2000);
    }, "确定", "取消")
});
//倒计时
var time = 30;

function countdownTime() {
    if (time == 31) {
        return;
    }
    var test1;
    if (time >= 1) {
        time -= 1;
        $('.times').html(time);
        if (time == 0) {
            time = 31;
            MIM.confirm("时间到，您失败了", function () {
                time = 30;
                countdownTime();
                $('.timeNumber').html(100);
            }, function () {
                MIM.prompt('Game Over', false, 2000);
                setTimeout(function () {
                    window.location.reload();
                }, 2000)
            }, "重来", "结束");
            return;
        }
        //点击后按钮变化
        test1 = setTimeout(function () {
            countdownTime();
            clearTimeout(test1);
        }, 1000);
    }
}

//点击绿色按钮(一次)
$(".green").one('click', function () {
    countdownTime();
});
$(".cont_cont1 button").on('click', function () {
    var dataType = $(this).attr('data-type');
    if (dataType == '2') {
        time = 31;
        MIM.confirm("很遗憾，您失败了", function () {
            time = 30;
            countdownTime();
            $('.timeNumber').html(100);
            $('.green').css('left', "300px");
            $('.orgin').css('left', "540px");
        }, function () {
            MIM.prompt('Game Over', false, 2000);
            setTimeout(function () {
                window.location.reload();
            }, 2000)
        }, "重来", "结束");
    }
});
$('.green').on("click", function () {
    var degree = $('.timeNumber').html();
    degree--;
    $('.timeNumber').html(degree);
    if (degree == 7) {
        $('.green').css('left', "540px");
        $('.orgin').css('left', "300px");
    } else if (degree == 6) {
        $('.green').css('left', "300px");
        $('.orgin').css('left', "540px");
    } else if (degree == 50) {
        $('.green').css('left', "540px");
        $('.orgin').css('left', "300px");
    } else if (degree == 40) {
        $('.green').css('left', "300px");
        $('.orgin').css('left', "540px");
    } else if (degree == 85) {
        $('.green').css('left', "540px");
        $('.orgin').css('left', "300px");
    } else if (degree == 83) {
        $('.green').css('left', "300px");
        $('.orgin').css('left', "540px");
    } else if (degree == 2) {
        $('.green').css('left', "540px");
        $('.orgin').css('left', "300px");
    } else if (degree == 0) {
        time = 31;
        $('.swiper-button-next').attr("pass_data", 2);
        successful();
    } else if (degree < 0) {
        degree = 0;
        $('.timeNumber').html(degree);
    }
});
//第一页刷新
$(".pass_i1").on("click", function () {
    time = 30;
    if (time < 0) {
        countdownTime();
    }
    $('.timeNumber').html(100);
    mySwiper.slideTo(1);
});
//解锁后下一关按钮隐藏
$('.swiper-button-next').on('click', function () {
    $('.swiper-button-next').hide(500);
});
//第二页点我
var number = 0;
$('.clickMe').click(function () {
    number++;
    if (number == 1) {
        MIM.prompt('点我没用啊', false, 2000);
    } else if (number == 2) {
        MIM.prompt('点我真没用啊', false, 2000);
    } else if (number == 3) {
        MIM.prompt('别点了真没用', false, 2000);
    } else if (number == 4) {
        MIM.prompt('。。。。。。', false, 2000);
    }
});
//第二页刷新
$(".pass_i2").on("click", function () {
    number = 0;
    mySwiper.slideTo(2);
});
//第二页过关
$(".menu").click(function () {
    successful();
    $('.swiper-button-next').attr("pass_data", 3);
});
//第三页刷新
$(".pass_i3").on("click", function () {
    mySwiper.slideTo(3);
    $('.passInput').val('');
});
//点击改变input内容
var str = "";
$(".cont_cont3 table td").on('click', function () {
    var str1 = $(this).html();
    str = str + str1;
    $('.passInput').val(str);
});
//第三页过关
$('.reachPass').on('click', function () {
    var inputStr = $('.passInput').val();
    if (inputStr == "") {
        MIM.prompt('没有输入密码', false, 2000);
    } else if (inputStr == "密码") {
        successful();
        $('.swiper-button-next').attr("pass_data", 4);
    } else {
        MIM.prompt('密码输入错误', false, 2000);
    }
});
//第三关帮助
$('.help').click(function () {
    MIM.prompt('不花金币的帮助不是好帮助', false, 2000);
});
//确定
$('.confirm').on('click', function () {
    var inputStr = $('.passInput').val();
    if (inputStr == "") {
        MIM.prompt('没有输入密码', false, 2000);
    } else if (inputStr == "密码") {
        MIM.prompt('我会那么简单吗？', false, 2000);
    } else {
        MIM.prompt('密码输入错误', false, 2000);
    }
});
//点击下一关
$(".swiper-button-next").click(function () {
    var r = $(this).attr('pass_data');
    if (r == 2) {
        $(".faint2").remove();
        localStorage.setItem("R2", 2);
    } else if (r == 3) {
        $(".faint3").remove();
        localStorage.setItem("R3", 3);
    }
});




