<?php
if($_POST['param'] = 'templateSave')
{
    $desktopFilePath = $_SERVER['DOCUMENT_ROOT']."/files/DE/".$_POST['desktopFile'];
    $mobileFilePath = $_SERVER['DOCUMENT_ROOT']."/files/DE/".$_POST['mobileFile'];
    
    $fpdesktop = fopen($desktopFilePath,"w");
    $fpmobile = fopen($mobileFilePath,"w");
    
    fwrite($fpdesktop,$_POST['desktopHtml']);
    fwrite($fpmobile,$_POST['mobileHtml']);
    fclose($fpdesktop);
    fclose($fpmobile);
    if(isset($_POST['extraparam']) && $_POST['extraparam']=='publish')
    {
        
    }
}
?>