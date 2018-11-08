$(function () {
  //定义ul的宽度
  var totalWidth = 0;
  var titleId = 0;
  //渲染tab栏
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
    dataType: 'json',
    success: function (info) {
      // console.log(info);
      var htmlStr = template('tabTpl', info);
      $('.tab ul').html(htmlStr);

      $('.tab li').each(function (index, element) {
        var width = $(this).width();
        totalWidth += width;
      })
      // 把ul的真实宽度设置给ul
      $('.tab ul').width(totalWidth);
    }
  })

  // 进来先渲染一次
  render(titleId);
  function render(titleId) {
      $.ajax({
          type: 'get',
          url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
          data: {
            titleid: titleId
          },
          dataType : 'json',
          success : function (info) {
            console.log(info);
            
          }
      })
  }





})