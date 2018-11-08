$(function () {
  //获取地址栏的传参
  var productId = getSearch('productId');
  var categoryName = getSearch('categoryName');
  // 渲染商品详情页
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getproduct',
    data: {
      productid: productId
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);
      // 给info 添加一个属性
      info.categoryname = categoryName;

      var htmlStr = template('productDetail_Tpl', info);
      $('.product').html(htmlStr);


    }
  })

  //渲染评论页
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getproductcom',
    data: {
      productid: productId
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);
      var htmlStr2 = template('commentTpl', info);
      $('.comment_content').html(htmlStr2);

    }
  })


})