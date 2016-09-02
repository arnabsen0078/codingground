<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();
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
        <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0" />
        <title>B2B Email Course</title>
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/style.css?version=<?php echo time(); ?>" />
        <link type="text/css" rel="stylesheet" href="css/font-awesome.min.css">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
        <link rel="stylesheet" href="css/default.css?version=<?php echo time(); ?>" />
        <link rel="stylesheet" href="css/spectrum.css" />
        <link rel="stylesheet" href="css/style_editor.css" />
        <script src="js/jquery-1.10.2.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/webfont.js"></script>


        <script type="text/javascript" src="js/jquery.fittext.js"></script>
        <script type="text/javascript" src="js/jquery.magnific-popup.min.js"></script>
        <script type="text/javascript" src="js/jquery-ui.js"></script>
        <script type="text/javascript" src="http://feather.aviary.com/imaging/v3/editor.js"></script>
        <script type="text/javascript" src="js/main.js?version=<?php echo time(); ?>">
        </script>
        <script type="text/javascript" src="js/spectrum.js?version=<?php echo time(); ?>"></script>
        <script type="text/javascript" src="js/texteditor.js?version=<?php echo time(); ?>"></script>
    </head>

    <body>
        <div class="top-header">
            <a rel="desktop"> Desktop</a>
            <a rel="mobile"> Mobile</a>
            <a rel="save"> Save Template</a>
            <a class="next_publish" href="<?php echo 'http://test3.scampaigns.com/files/DE/temp_index.php?temp='.session_id(); ?>" target="_blank" rel="publish"> Publish Template</a>
        </div>
        <div id="loadPortionForDesktop" rel="desktop" style="padding-top:50px;"></div>
        <div id="loadPortionForMobile" rel="mobile" style="padding-top:50px;display: none; width: 480px; margin: 0 auto;"></div>
        <input type="hidden" value="<?php echo $newFileNameForDesktop ?>" id="fordesktop" />
        <input type="hidden" value="<?php echo $newFileNameForMobile ?>" id="formobile" />
        <input type="hidden" value="<?php echo session_id(); ?>" id="tempFile" />
    </body>

    </html>