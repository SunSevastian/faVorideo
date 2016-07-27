<!DOCTYPE html>
<html lang="en">
<head>

<!-- Meta & links & hooks -->
	<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php bloginfo('name') ?></title>
	
	<!-- Подключаем css -->
	<link rel="stylesheet" href="<?php bloginfo("template_directory");?>/css/bootstrap-grid-3.3.1.min.css">
	<link rel="stylesheet" href="<?php bloginfo("template_directory");?>/fonts/font-awesome-4.6.3/css/font-awesome.min.css">
	<link rel="stylesheet" href="<?php bloginfo("template_directory");?>/css/libs.min.css">
  <link rel="stylesheet" href="<?php bloginfo("template_directory");?>/css/main.css">
  <link rel="stylesheet" href="<?php bloginfo("template_directory");?>/style.css">

	 <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

   <?php  
	/* wp_head() всегда должен быть перед </head>
	 * иначе будет нарушена работа многих плагинов, которые
	 * используют этот хук, чтобы добавить свои коды в <head>. Это:
	 * стили (styles), скрипты (scripts) и метатеги.
	 */
	wp_head();
 	?>

</head>
<body>
	
<!-- SEO Analytics -->
	<?php include_once("analyticstracking.php") 
	?>

<!-- Logotip -->
	<header>
		<section class="logo">
			<h1 class="logo__h1">faVorideo</h1>
			<h3 class="logo__description">It's time for your favorite video</h3>
		</section>		
	</header>

<!-- Menu -->
	<div class="container-fluid">
	<div class="row">
		<div class="tabMenu"><p>Clips</p></div>
	</div>
	</div>