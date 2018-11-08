$(function () {
  // 获取地址栏传过来的参数
  var couponId = getSearch('couponId');   //优惠券id
  var couponTitle = getSearch('couponTitle');   //优惠券标题
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getcouponproduct',
    data: {
      couponid: couponId
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);
      // 给info添加一个couponTitle属性，便于前端改标题
      info.couponTitle = couponTitle;

      //渲染标题
      var htmlStr = template('titleTpl', info);
      $('header').html(htmlStr);

      //渲染优惠券列表
      var htmlStr2 = template ('couponTpl',info);
      $('.couponproduct_list ul').html(htmlStr2);
    }
  })
})