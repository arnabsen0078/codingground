<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();
//echo session_id();
$newFileNameForDesktop = "temp_".session_id()."-desktop.php";
$newFileNameForMobile  = "temp_".session_id()."-mobile.php";

$mainFilePath = $_SERVER['DOCUMENT_ROOT']."/files/DE/index-desktop.php";
if(!file_exists($newFileNameForDesktop))
{
$newfilefordesktop      = $_SERVER['DOCUMENT_ROOT']."/files/DE/".$newFileNameForDesktop;
$filePath     = $_SERVER['DOCUMENT_ROOT']."/files/DE/";

$getFile = file_get_contents($mainFilePath);
$fp = fopen($newFileNameForDesktop,"wb");
$fp1 = fopen($newFileNameForMobile,"wb");
fwrite($fp,$getFile);
fwrite($fp1,$getFile);
fclose($fp);
fclose($fp1);
}
$desktopHtmlContent = file_get_contents($newFileNameForDesktop);
$mobileHtmlContent = file_get_contents($newFileNameForMobile);
?>



<!--SFPPAGE-->
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0"/>
  <title>B2B Email Course</title>
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="css/style.css"/>
  <link type="text/css" rel="stylesheet" href="css/font-awesome.min.css">
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <link rel="stylesheet" href="css/default.css" />
    <link rel="stylesheet" href="css/style_editor.css">   
    <link id="jquiCSS" rel="stylesheet" href="css/spectrum.css" type="text/css" media="all">
 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="http://feather.aviary.com/imaging/v3/editor.js"></script>
<script type="text/javascript" src="js/image-config.js"></script>
<script type="text/javascript" src="js/image-index2.js"></script>
<script  src="js/bootstrap.min.js"></script>
<script src="js/webfont.js"></script>
 <script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript" src="js/spectrum.js"></script>
    
    <script src="js/jquery.fittext.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/jquery-ui.js"></script>
    <script src="js/main.js?version=<?php echo time(); ?>"></script>
    
    
  
   
   
  

  
</head>
<!--SFPtracker-->
<body>
<div class="top-header">
<a rel="desktop">Desktop</a>
<a rel="mobile">Mobile</a>
<a rel="save">Save Template</a>
<a class="next_publish" href="<?php echo 'http://test3.scampaigns.com/files/DE/temp_index.php?temp='.session_id(); ?>" target="_blank" rel="publish">Publish Template</a>
</div>
<div id="loadPortionForDesktop" rel="desktop">

</div>
<div id="loadPortionForMobile" rel="mobile" style="display: none; width: 480px; margin: 0 auto;">

</div>
<input type="hidden" value="<?php echo $newFileNameForDesktop ?>" id="fordesktop" />
<input type="hidden" value="<?php echo $newFileNameForMobile ?>" id="formobile" />
<input type="hidden" value="<?php echo session_id(); ?>" id="tempFile" />

 </body>
</html>
