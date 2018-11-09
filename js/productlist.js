$(function () {
  //获取地址栏传递的id
  var categoryId = getSearch('categoryId');
  //pageid从1开始
  var pageId = 1;
  var pageNum;

  //先渲染路径导航
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getcategorybyid',
    data: {
      categoryid: categoryId
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);
      var htmlStr = template('linkTpl', info);
      $('.breadcrumb .link').html(htmlStr);
    }
  })

  //先调用一次
  render(pageId, categoryId);
  //在渲染商品列表
  function render(pageId, categoryId) {
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getproductlist',
      data: {
        pageid: pageId,
        categoryid: categoryId
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        //渲染产品列表
        var htmlStr2 = template('prolistTpl', info);
        $('.product_list ul').html(htmlStr2);

        //获取总页数
        var totalPages = Math.ceil(info.totalCount / info.pagesize);
        pageNum = totalPages; //存一下页码总数
        //给info添加自定义属性
        info.totalPages = [];
        info.totalPages.length = totalPages;

        //给info添加一个page属性，用以判断当前页的id跟下拉框是否一致，一致则选中
        info.page = pageId;   //记录当前的pageid
        // 渲染分页
        var htmlStr3 = template('pageTpl', info);
        $('#page').html(htmlStr3);

      }
    })
  }

  // 选择下拉框不同的值，渲染对应的页面
  $('#page').on('change', function () {
    //获取下拉框的value值
    var value = $(this).val();
    //将值赋值给pageId
    pageId = parseInt(value) + 1;
    //重新调用渲染方法
    render(pageId, categoryId);
  })

  // 点击上一页，渲染上一页的页面
  $('#prev').click(function () {
    if (pageId <= 1) {
      return;
    }
    pageId--;
    render(pageId, categoryId);
  })

  // 点击下一页，渲染下一页的页面
  $('#next').click(function () {
    if (pageId >= pageNum) {
      return;
    }
    pageId++;
    render(pageId, categoryId);
  })

  // 点击商品栏的商品时将categoryName 和productId都传过去
  $('.product_list').on('click', 'a', function () {
    //获取分类详情的id 和分类名
    var productId = $(this).data('productid');
    var categoryName = $('#name').data('categoryname');
    location.href = 'bijia.html?productId=' + productId + '&categoryName=' + categoryName;

  })


})