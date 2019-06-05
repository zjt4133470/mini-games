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
      $$.prompt('您的金币不足，请先获取金币', false, 2000);
    } else {
      var hintType = $(this).attr('hintType');
      console.log(hintType);
      if (hintType == 1) {
        //如果是第一页
        $$.confirm("为2,6,7,40,50,83,85时候按钮互换位置", function () {
        }, function () {
        }, "ok", "close");
      } else if (hintType == 2) {
        //如果是第二页
        $$.confirm("页面上有个MENU，试着点点看", function () {
        }, function () {
        }, "ok", "close");
      }else if(hintType == 3){
        $$.confirm("页面上有个红色的字，试着点点看", function () {
        }, function () {
        }, "ok", "close");
      }

    }
    localStorage.setItem("gold", gold_out);
    $('.gold').html(gold_out);
  });
//  跳过

});
