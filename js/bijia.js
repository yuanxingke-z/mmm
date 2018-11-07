$(function () {
  //获取地址栏的传参
  var productId = getSearch('productId');
  var categoryName = getSearch('categoryName');
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getproduct',
    data: {
      productid: productId
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);

    }
  })


  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getproductcom',
    data: {
      productid: productId
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);

    }
  })


})