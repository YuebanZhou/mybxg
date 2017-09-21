define(['jquery','template','util'],function($,template,util) {
  var tcId=util.qs('tc_id');
  if(tcId) {
    //编辑
    $.ajax({
      type:'get',
      url:'/api/teacher/edit',
      data:{tc_id:tcId},
      dataType:'json',
      success:function(data) {
        data.result.operate='讲师编辑'
        console.log(data)
        //渲染页面
        var html=template('teacherTpl',data.result);
        $('#teacherInfo').html(html);
        submitForm('/api/teacher/update');
      }
    })
  }else {
    //添加
    var html=template('teacherTpl',{operate:'讲师添加'});
    $('#teacherInfo').html(html);
    submitForm('/api/teacher/add');
  }
  function submitForm(url) {
    $('#teacherBtn').click(function() {
      $.ajax({
      type:'post',
      url:url,
      data:$('#teacherForm').serialize(),
      dataType:'json',
      success:function(data) {
        if(data.code=200) {
          location.href='/teacher/list'
        }
      }
      })
    })
    
  }
})
