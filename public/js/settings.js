define(['jquery','template','uploadify'],function ($,template) {
  $.ajax({
    type:'get',
    url:'/api/teacher/profile',
    dataType:'json',
    success:function (data) {
      // console.log(data)
      //解析数据渲染页面
      var html=template('settingsTpl',data.result);
      $('#settingsInfo').html(html)
      // 处理头像上传
      $('#upfile').uploadify({
        width : 120,
        height : 120,
        buttonText : '',
        itemTemplate : '<span></span>',
        swf : '/public/assets/uploadify/uploadify.swf',
        uploader : '/api/uploader/avatar',
        fileObjName : 'tc_avatar',
        onUploadSuccess : function(a,b){
          var obj = JSON.parse(b);
          $('.preview img').attr('src',obj.result.path);
        }
      });



    }
  })
})
