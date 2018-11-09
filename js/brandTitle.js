$(function () {
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getbrandtitle',
    dataType: 'json',
    success: function (info) {
      console.log(info);
      // 将模板和对象绑定
      var htmlStr = template('firstTpl', info);
      //渲染数据到页面上
      $('.category_nav .first_list').html(htmlStr);
    }
  })



})