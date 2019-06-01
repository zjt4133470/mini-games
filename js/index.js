// 轮播图
var mySwiper = new Swiper ('.swiper-container', {
  loop: false, // 循环模式选项
  effect : 'fade',
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  simulateTouch : false,//禁止鼠标模拟
});
// mySwiper.slideTo(1);

//开始
$(".cont_start_img").on('click',function () {
    mySwiper.slideTo(1);
});
$(".star").one('click',function () {
   $$.prompt('你以为我会那么简单的开始吗？',false,2000);
});
//倒计时
var time = 30;
function countdownTime() {
  if(time == 31){
    return;
  }
  var test1;
  if (time >= 1) {
    time -= 1;
    $('.times').html(time);
    if (time == 0) {
        time = 31;
      $$.confirm("时间到，您失败了",function () {
        time = 30;
        countdownTime();
        $('.timeNumber').html(100);
      },function () {
        $$.prompt('Game Over',false,2000);
        setTimeout(function () {
          window.location.reload();
        },2000)
      },"重来","结束");
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
$(".green").one('click',function () {
  countdownTime();
});
$(".cont_cont1 button").on('click',function () {
  var dataType = $(this).attr('data-type');
  if(dataType=='2'){
    time = 31;
    $$.confirm("很遗憾，您失败了",function () {
      time = 30;
      countdownTime();
      $('.timeNumber').html(100);
      $('.green').css('left',"300px");
      $('.orgin').css('left',"540px");
    },function () {
      $$.prompt('Game Over',false,2000);
      setTimeout(function () {
        window.location.reload();
      },2000)
    },"重来","结束");
  }
});
$('.green').on("click",function () {
    var degree = $('.timeNumber').html();
    degree--;
    $('.timeNumber').html(degree);
    if(degree == 7){
        $('.green').css('left',"540px");
        $('.orgin').css('left',"300px");
    }else if(degree == 6){
      $('.green').css('left',"300px");
      $('.orgin').css('left',"540px");
    }else if(degree == 50){
      $('.green').css('left',"540px");
      $('.orgin').css('left',"300px");
    }else if(degree == 40){
      $('.green').css('left',"300px");
      $('.orgin').css('left',"540px");
    }else if(degree == 85){
      $('.green').css('left',"540px");
      $('.orgin').css('left',"300px");
    }else if(degree == 83){
      $('.green').css('left',"300px");
      $('.orgin').css('left',"540px");
    }else if(degree == 2){
      $('.green').css('left',"540px");
      $('.orgin').css('left',"300px");
    }else if(degree == 0){
       time = 31;
      $$.confirm("恭喜你，挑战成功",function () {
          $('.swiper-button-next').show(500);
      },function () {
        $$.prompt('Close the Game',false,2000);
          setTimeout(function () {
            window.location.reload();
          },2000)
      },"解锁下一关按钮","关闭");
    }else if(degree<0){
        degree=0;
        $('.timeNumber').html(degree);
    }
});
//第一页刷新
$(".pass_i1").on("click",function () {
    time = 30;
    if(time <0 ){
      countdownTime();
    }
    $('.timeNumber').html(100);
    mySwiper.slideTo(1);
});
//解锁后下一关按钮隐藏
$('.swiper-button-next').on('click',function () {
    $('.swiper-button-next').hide(500);
});

