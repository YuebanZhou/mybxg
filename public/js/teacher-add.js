define(['jquery','template','util','datepicker','language','validate','form','state'],function($,template,util) {
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
  //封装函数，表单验证
  function submitForm(url) {
    $('#teacherForm').validate({
      sendForm:false,
      valid:function() {
        //console.log('success')
        $(this).ajaxSubmit({
          url:url,
          dataType:'json',
          success:function(data) {
            if(data.code==200) {
              location.href='/teacher/list'
            }
          }
        })
      },
      description:{
        tcName:{
          required:'用户名不能为空'
        },
        tcPass:{
          required:'密码不能为空',
          pattern:'密码必须是六位数字'
        },
        tcJoinDate:{
          required:'日期不能为空'
        }
      }
    });
  }


  /*function submitForm(url) {
    $('#teacherBtn').click(function() {
      $.ajax({
        type:'post',
        url:url,
        data:$('#teacherForm').serialize(),
        dataType:'json',
        success:function(data) {
          console.log(data)
          if(data.code=200) {
            location.href='/teacher/list'
          }
        }

      })
    })
    
  }*/
})
