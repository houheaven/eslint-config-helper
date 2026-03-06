<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>标题</title>
    
  <link type="image/x-icon" rel="shortcut icon" href="http://www.houheaven.com/image/ico.ico" />
  <link rel="stylesheet" href="plugin/hhframe/hhframe.min.css" />
  <link rel="stylesheet" href="style/common.css" />
  <link rel="stylesheet" href="style/homepage.css">
  <script src="plugin/jquery.js"></script>
  <script src="plugin/hhframe/hhframe.min.js"></script>
  <script src="script/homepage.js"></script>
</head>
<body>

  <?php include("pub/header.php"); ?>
  <?php $cate="doc"; include("pub/header.php"); ?>
  <?php
    # 连接数据库，初始化
    include("../../php/DBconfig.php");
    include("../../php/hhMysqli.php");
    $DB = new hhMysqli($host,$user,$pswd,$database);
  ?>
  <!-- eslint-disable -->
  <?php
    # 置顶新闻
    $DB->query("select id,title,image from news_list where is_top=1");
    $DB->return_json();
  ?>
  <!-- eslint-enable -->
    
  <div class="wrap intro">
    <div class="content">
      <img src="image/whale_web.png" class="app_logo logo1" />
      <div class="info">
          <h3>hhframe（桌面端）</h3>
          <p>后天堂框架（hhframe.web），为“桌面端开发”而生。</p>
          <p>这款框架主要内嵌了一些常用的界面功能，按钮、列表、图标库、表格、表单 等，风格比较简约。同时也集成了很多非常基础且好用的插件（Ajax、正则验证、调试工具、本地存储、日期处理、页面状态、图片懒加载、七牛文件上传、后天堂面板、验证码 等）。</p>
          <a href="javascript:;" class="btn btn_download">下载</a>
          <a href="document_web.php?cate=doc" class="btn">查看文档</a>
      </div>
    </div>
  </div>
    
  <div class="wrap intro noback">
    <div class="content">
      <img src="image/whale_mob.png" class="app_logo logo2" />
      <div class="info">
        <h3>hhframe（移动端）</h3>
        <p>后天堂框架（hhframe.mob），为“移动端开发”而生。</p>
        <p>框架内嵌了一套简约风格的扁平化界面（常用基础布局、按钮、颜色、图标库、列表、表单 等），同时也集成了很多非常基础且好用的插件（Ajax、正则验证、调试工具、本地存储、上拉加载、日期处理、页面状态、图片懒加载、七牛文件上传、后天堂面板、验证码 等），响应式的设计能够让框架运行在电脑、平板、手机等多种终端上，而框架的环境设备检测功能也可以限制打开类型，比如，只能在微信运行、不能在电脑端运行 等。</p>
        <a href="javascript:;" class="btn btn_download">下载</a>
        <a href="document_mob.php?cate=doc" class="btn">查看文档</a>
      </div>
    </div>
  </div>
    
  <div class="wrap" id="feature">
    <div class="content">
      <div>
        <img src="icons/tech_ui.png" />
        <h3>界面优雅</h3>
        <p>框架采用了时下流行的扁平化设计，风格简约、优雅、干净，能更好展示页面和传达信息，从而带给用户更好的操作体验。</p>
      </div>
      <div>
        <img src="icons/tech_multifunc.png" />
        <h3>多功能</h3>
        <p>框架内嵌了很多插件和模块，部分来自第三方，部分是由我们自己开发的功能插件，基本上能够满足常见的应用场景，而且框架功能还在持续更新中。</p>
      </div>
    </div>
  </div>
    
  <div id="community">
    <div class="content">
      <img src="image/community.jpg" />
    </div>
  </div>
    
    <?php include("pub/footer.php"); ?>
    
</body>
</html>