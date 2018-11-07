$(function () {
  //获取地址栏传进来的参数
  var productid = getSearch('productid');
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getmoneyctrlproduct',
    data: {
      productid :productid
    },
    dataType : 'json',
    success :function (info) {
      console.log(info);
      // 将数据跟模板绑定
      var htmlStr = template('saleTpl',info);
      // 将数据渲染到页面上
      $('.sale_product').html(htmlStr);
    }
  })
})