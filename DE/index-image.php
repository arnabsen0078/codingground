<!DOCTYPE html>
<html>

<head>
    <title>CSDK Image Editor - jQuery</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/image-style.css">

</head>

<body class="container">
    <div class="row">
        <div class="col-md-12 text-center">
            <h1>Creative SDK Image Editor</h1>
            <h2>+ HTML Drag and Drop API</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-md-2">
            <div class="row">
                <div class="col-md-12">
                    <button id="edit-image-button" class="btn btn-primary btn-block button-panel">
                        <span class="glyphicon glyphicon-pencil pull-left padleft" aria-hidden="true"></span> Edit
                    </button>
                </div>
                <div class="col-md-12">
                    <button id="download-image-button" class="btn btn-success btn-block button-panel">
                        <span class="glyphicon glyphicon-save pull-left padleft" aria-hidden="true"></span> Download
                    </button>
                </div>
                <div class="col-md-12">
                    <button id="reset-image-button" class="btn btn-warning btn-block button-panel">
                        <span class="glyphicon glyphicon-repeat pull-left padleft" aria-hidden="true"></span> Reset
                    </button>
                </div>
                <div class="col-md-12">
                    <button id="clear-image-button" class="btn btn-danger btn-block button-panel">
                        <span class="glyphicon glyphicon-remove pull-left padleft" aria-hidden="true"></span> Clear
                    </button>
                </div>
            </div>
        </div>

        <div class="col-md-10">
            <input id="click-upload" type="file">
            <div id="drop-area">
                <p>Drop an image here!</p>
                <p>(or click to upload)</p>
            </div>
            <img id="editable-image" class="img-responsive">
        </div>

    </div>
    <!-- end .row -->


    <div id="more-info-modal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">About this demo</h4>
                </div>



                <script type="text/javascript" src="js/jquery-1.10.2.js"></script>
                <script type="text/javascript" src="http://feather.aviary.com/imaging/v3/editor.js"></script>
                <script type="text/javascript" src="js/image-config.js"></script>
                <script type="text/javascript" src="js/image-index.js?version=<?php echo time(); ?>"></script>
</body>

</html>