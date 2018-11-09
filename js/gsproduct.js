$(function () {
  //先渲染店铺
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getgsshop',
    dataType: 'json',
    success: function (info) {
      console.log(info);

    }
  })

  // 再渲染地区
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getgsshoparea',
    dataType: 'json',
    success: function (info) {
      console.log(info);

    }
  })

  //根据地区和店铺渲染产品
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getgsproduct',
    data: {
      shopid: 0,
      areaid: 0
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);

    }
  })
})