$(function () {
  // 再渲染折扣产品栏
  var pageid = 0;
  //进来先调用一次
  render();
  function render(pageid) {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getmoneyctrl',
      data: {
        pageid: pageid
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        //将模板2与对象绑定
        var htmlStr2 = template('productTpl', info);
        //将数据渲染到页面上
        $('.sale_product').html(htmlStr2);

        // 把页数属性添加到info中
        info.total = [];
        // 给info添加一个pageid属性，传到前端页面
        info.page = pageid;
        //获取总的页数
        var totalPage = Math.ceil(info.totalCount / info.pagesize);
        // 给total添加长度
        info.total.length = totalPage;

        //将模板1跟对象绑定
        var htmlStr = template('pageTpl', info);
        //将数据渲染到页面上
        $('#page').html(htmlStr);
      }
    })
  }

  //点击折扣商品列表，跳转到折扣商品详情页  事件委托
  $('.sale_product').on('click', '.product_item', function () {
    //获取productid
    var productid = $(this).data('productid');
    // console.log(productid);
    // 点击跳转到折扣商品详情页
    location.href = 'moneyproduct.html?productid=' + productid;

  })

  // 点击下拉框选中对应的页码，获得id，渲染页面
  $('#page').on('change', function () {
    var value = $(this).val();
    // 同时改变pageid的值，再重新渲染
    pageid = value;
    render(pageid);
  })

  // 点击上、下一页分别渲染数据
  $('#prev').click(function () {
    if (pageid <= 0) {
      return;
    }
    pageid--;
    render(pageid);
  })

  $('#next').click(function () {
    if (pageid >= 14) {
      return;
    }
    pageid++;
    render(pageid);
  })

})