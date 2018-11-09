$(function () {
  //获取地址栏传递的id
  var brandTitleId = getSearch('brandTitleId');

  //渲染十大品牌
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getbrand',
    data: {
      brandtitleid: brandTitleId
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);
      var htmlStr = template ('rankTpl',info);
      $('.brand_list ul').html(htmlStr);


    }
  })

  

})