<?php
  header('content-type:text/html; charset=utf8;');
  //header('content-type:text/plain; charset=utf8;');
  //echo '<div>内容</div>';

  //include('./views/main/index.html');

  //$path=$_SERVER['PATH_INFO'];
  //include('./views/'.$path.'.html');

  //默认目录名称
  $dir='main';
  //默认文件名称
  $filename='index';
  if(array_key_exists('PATH_INFO',$_SERVER)) {
    //路径存在
    //请求路径
    $path=$_SERVER['PATH_INFO'];// 得到的是 /main/index
    //截取字符串
    $str=substr($path,1);// 得到的是main/index
    $ret=explode('/',$str);
    if(count($ret)==2) {
      //两层路径
      //覆盖默认路径
      $dir=$ret[0];
      //覆盖默认文件名称
      $filename=$ret[1];
    }else {
      //其他情况统一跳转到login页面
      $filename='login';
    }

    //var_dump($ret);
  }
  //嵌入子页面
  include('./views/'.$dir.'/'.$filename.'.html');
?>
