$(function () {
  var obj = {};
  var type;
  var htmlStr;
  var shopId = 0;
  var areaId = 0;
  var Index = 0;

  // 注册导航渲染事件
  $('[data-type]').click(function () {
    type = $(this).data('type');  //获取类型

    if (type === 'store' && $('nav ul').has('active')) {
      render1();

    } else if (type === 'area' && $('nav ul').has('active')) {
      render2();

    } else {
      $('nav ul').html('<li><a class="checked" href="#">全部价格</a></li>');
    }

  })

  function render1() {
    //先店铺获取店铺数据
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getgsshop',
      dataType: 'json',
      success: function (info) {
        console.log(info);
        // 给info添加index属性
        info.index = Index;

        htmlStr = template('storeTpl', info);
        $('nav ul').html(htmlStr);
      }
    })
  }

  function render2() {
    //先店铺获取店铺数据
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getgsshoparea',
      dataType: 'json',
      success: function (info) {
        console.log(info);
        // 给info添加index属性
        info.index = Index;

        htmlStr = template('areaTpl', info);
        $('nav ul').html(htmlStr);
      }
    })
  }

  // 进来先调用一次函数渲染凑单品列表
  render3(shopId, areaId);

  //根据地区和店铺渲染产品
  function render3(shopId, areaId) {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getgsproduct',
      data: {
        shopid: shopId,
        areaid: areaId
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        var html2 = template('productTpl', info);
        $('.gsprodct_list ul').html(html2);

      }
    })

  }


  // // 注册店铺地区点击事件
  $('nav').click(function () {
    $(this).find('ul').toggleClass('active');
  })

  // 注册选中事件  事件委托
  $('nav ul').on('click', 'a', function () {
    if (type === 'store') {
      // 赋值店铺id
      shopId = $(this).data('shopid');
      Index = shopId;


    } else if (type === 'area') {
      //赋值地区id
      areaId = $(this).data('areaid');
      Index = areaId;

    } else {
      return;
    }

    // 调用一次函数渲染凑单品列表
    render3(shopId, areaId);


  })





})