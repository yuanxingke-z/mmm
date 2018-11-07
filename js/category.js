$(function () {
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getcategorytitle',
    dataType: 'json',
    success: function (info) {
      // console.log(info);
      // 将模板和对象绑定
      var htmlStr = template('firstTpl', info);
      //渲染数据到页面上
      $('.category_nav .first_list').html(htmlStr);
    }
  })

  //点击每个li里面的a，使下面的盒子显示
  // 注册事件委托
  $('.category_nav .first_list').on('click', '.dropDown', function () {
    //获取分类标题的id
    var titleid = $(this).data('titleid');
    // 切换二级分类显示与隐藏
    $(this).next().toggleClass('active');
    //其他的二级分类隐藏
    $(this).parent().siblings().find('.second_list').removeClass('active');

    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getcategory',
      data: {
        titleid: titleid
      },
      dataType: 'json',
      success: function (info) {
        // console.log(info);
        // 将对象跟模板绑定
        var htmlStr2 = template('secondTpl', info);
        //将数据渲染到页面上
        $('.second_list').html(htmlStr2);
      }
    })

  })

})