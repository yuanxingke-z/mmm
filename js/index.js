$(function () {
  // 一进入页面先渲染菜单页
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getindexmenu',
    dataType: 'json',
    success: function (info) {
      // console.log(info);
      //将模板跟对象绑定
      var htmlStr1 = template('menuTpl', info);
      //将数据渲染到页面上
      $('nav .menu').html(htmlStr1);
    }
  })

  // 再渲染折扣产品栏
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getmoneyctrl',
    dataType: 'json',
    success: function (info) {
      console.log(info);
      //将模板与对象绑定
      var htmlStr2 = template('productTpl', info);
      //将数据渲染到页面上
      $('.sale_main .sale_product').html(htmlStr2);
    }
  })

  //点击更多按钮，切换下面四个li的显示状态  需要注册事件委托
  $('nav .menu').on('click', '.click', function () {
    $(this).nextAll().toggleClass('active');
  })

  //点击折扣商品列表，跳转到折扣商品详情页  事件委托
  $('.sale_main .sale_product').on('click', '.product_item', function () {
    //获取productid
    var productid = $(this).data('productid');
    // console.log(productid);
    // 点击跳转到折扣商品详情页
    location.href = 'moneyproduct.html?productid=' + productid;

  })


})