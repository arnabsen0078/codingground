/*jslint browser: true*/
/*global $, jQuery, alert,  Aviary, currentImage, csdkImageEditor, console, launchImageEditor,validateFileType, loadtheuploadbutton, showTheEditButtons*/
/*jslint plusplus: true */
/*jshint -W065 */
var configObj = {
    apiKey: '05c6836b38524135a54af8bdc7afc834'
};
var foo = function () {
    "use strict";
    var selection = window.getSelection(),
        selectedText,
        span;
    alert(selection);
    if (selection !== '') {
        selection = window.getSelection().getRangeAt(0);
        selectedText = selection.extractContents();
        span = document.createElement("output");
        span.appendChild(selectedText);
        selection.insertNode(span);
        return 1;
    } else {
        return 0;
    }
};
$(function () {
    "use strict";
    var newFileNameForDesktop = "temp_" + $("#tempFile").val() + "-desktop.php",
        newFileNameForMobile = "temp_" + $("#tempFile").val() + "-mobile.php",
        elementEditButtonForImage = '<span id="elementEditButton" onclick="showTheEditButtons(\'image\',this)"  style="position: absolute; font-size: 13px;left: 0; top: -46px;z-index: 99999"><label class="btn btn-default initEdit">Edit</label><span id="editSection" style="font-size: 13px; top: -46px;z-index: 99999;left:0; display:none;"><label onclick="launchImageEditor()" class="btn btn-default">Modify</label><label for="exampleInput" class="btn btn-default">Change</label><input type="file" id="exampleInput" style="display: block; opacity: 0; position: absolute; top: 0;left:72px;width: 76px;height: 35px;" /><label onclick="    showElementEditbutton()" class="btn btn-default ">Done</label></span></span>',
        elementEditButtonForText = '<span id="elementEditButton" onclick="showTheEditButtons(\'text\',this)"  style="position: absolute; font-size: 13px;left: 0; top: -46px;z-index: 99999"><label class="btn btn-default">Edit</label></span>',
        aviaryButton = '<span id="editSection" style="position: absolute; font-size: 13px; top: -46px;z-index: 99999;left:0;"><span onclick="launchImageEditor()"><label class="btn btn-default">Edit</label></span><label for="exampleInput" class="btn btn-default">Click me</label><input type="file" id="exampleInput" style="display: block;opacity: 0;position: absolute;top: 0;left: 52px;width: 100px;height: 35px;" /></span>',
        xCoordinate = '<div class="helperx snap-helper" style="left: 0; display: none;"></div>',
        yCoordinate = '<div class="helpery snap-helper" style="top: 0; display: none;"></div>',
        xyCalculatedCoordinate = '<div id="dragThis"><span id="posX"></span><span id="posY"></span></div>';


    $(document).click(function (e) {
        if ($(e.target).is('.hoveredclick')) {
            return false;
        } else {
            $('.hoveredclick').removeClass("hoveredclick");
        }
    });


    $('div#loadPortionForDesktop').load(newFileNameForDesktop, function (data) {
        $("div#loadPortionForDesktop .SFPMVELEMEN")
            .hover(
                function () {
                    $(this).addClass('hovered');
                },
                function () {
                    $(this).removeClass("hovered");
                }
            )
            .click(function (event) {
                $(this).removeClass("hovered");
                $('.hoveredclick').removeClass("hoveredclick");

                if (!$(this).hasClass('ui-resizable')) {
                    if ($(".SFPMVELEMEN").hasClass('ui-resizable')) {
                        $('.ui-resizable').resizable("destroy");
                    }

                    if ($(this).find("img").length) {

                        $(this).resizable({
                            handles: 'n,e,s,w,ne,se,sw,nw',
                            aspectRatio: true
                        });

                        $("#elementEditButton").remove();
                        $(this).append(elementEditButtonForImage);
                        $('#editable-image').attr("id", '');
                        $(this).find('img').attr('id', 'editable-image');
                    } else {
                        $(this).resizable({
                            handles: 'e,w'
                        });
                        $("#elementEditButton").remove();
                        $(this).append(elementEditButtonForText);
                        $('#editable-image').attr("id", '');
                        showTheEditButtons('notimage');
                    }
                }
                $(this).addClass('hoveredclick');
            })
            .draggable({
                drag: function () {

                    if (!$("#dragThis").length) {
                        $(this).append(xyCalculatedCoordinate);
                        $(this).append(xCoordinate);
                        $(this).append(yCoordinate);

                    }
                    var offset = $(this).offset(),
                        xPos = Math.ceil(offset.left) + (parseInt($(this).width(), 10) / 2),
                        yPos = Math.ceil(offset.top) + (parseInt($(this).height(), 10) / 2),
                        xWindowPos = parseInt($(window).width(), 10) / 2;
                    $(".helperx").css("top", yPos).show();
                    $(".helpery").css("left", xPos).show();
                    $('#posX').text('x: ' + xPos);
                    $('#posY').text('y: ' + yPos);
                },
                stop: function (ev, ui) {
                    $("#dragThis").remove();
                    $(".helperx").remove();
                    $(".helpery").remove();
                },
                containment: "#loadPortionForDesktop",
                scroll: false,
                stack: "section, aside, div, h1, h2, h3, h4, h5, img, p, hr, a,form",
                cancel: "div.top-header"
            });
    });
    $('div#loadPortionForMobile').load(newFileNameForMobile, function (data) {
        $('div#loadPortionForMobile .container').css('cssText', 'width:480px !important;');
        $("div#loadPortionForMobile .SFPMVELEMEN")
            .hover(
                function () {
                    $(this).addClass('hovered');
                },
                function () {
                    $(this).removeClass("hovered");
                }
            )
            .click(function () {

                $('.hoveredclick').removeClass("hoveredclick");
                $(this).addClass('hoveredclick');

                if (!$(this).hasClass('ui-resizable')) {

                    if ($(".SFPMVELEMEN").hasClass('ui-resizable')) {
                        $('.ui-resizable').resizable("destroy");
                    }
                    var searchedImage = $(this).find("img");
                    if (searchedImage.length) {
                        $(this).resizable({
                            handles: 'n,e,s,w,ne,se,sw,nw',
                            aspectRatio: true
                        });
                        $("#editSection").remove();
                        $(this).append(elementEditButtonForImage);
                        loadtheuploadbutton();
                        $('#editable-image').attr("id", '');
                        $(this).find('img').attr('id', 'editable-image');
                    } else {
                        $(this).resizable({
                            handles: 'e,w'
                        });
                    }
                }
            })
            .draggable({
                drag: function () {
                    if (!$("#dragThis").length) {
                        $(this).append('<div id="dragThis"><span id="posX"></span><span id="posY"></span></div>');
                    }
                    var offset = $(this).offset(),
                        xPos = Math.ceil(offset.left),
                        yPos = Math.ceil(offset.top);
                    $(".helperx").css("top", yPos).show();
                    $(".helpery").css("left", xPos).show();
                    $('#posX').text('x: ' + xPos);
                    $('#posY').text('y: ' + yPos);
                },
                stop: function (ev, ui) {
                    $("#dragThis").remove();
                    $(".helperx").hide();
                    $(".helpery").hide();
                    var i, style = ui.helper[0].style,
                        property = "",
                        style_name, style_value;
                    for (i = 0; i < style.length; i++) {
                        style_name = style[i];
                        style_value = style[style_name];
                        property = property + " " + style_name + ": " + style_value + " !important;";
                    }
                    $(this).css('cssText', property);
                },

                containment: "#loadPortionForMobile",
                scroll: false,
                stack: "section, aside, div, h1, h2, h3, h4, h5, img, p, hr, a,form",
                cancel: "div.top-header"
            });
    });
    $(".top-header a").click(function (event) {
        if ($(".SFPMVELEMEN").hasClass('ui-resizable')) {
            $('.ui-resizable').resizable("destroy");
        }
        $('.hoveredclick').removeClass("hoveredclick");

        //if(event.target != 'next_publish')
        $(this).addClass('hoveredclick');
        $(".next_publish").removeClass('hoveredclick');
        var desktopFile = "",
            mobileFile = "",
            desktopHtml = "",
            mobileHtml = "",
            tempFile = "";
        if ($(this).attr('rel') === "desktop") {
            $("#loadPortionForMobile .SFPMVELEMEN").each(function (index, value) {
                var changeElement = "";
                if ($("#loadPortionForMobile .SFPMVELEMEN:eq('" + index + "')").find('img').length) {
                    changeElement = $("#loadPortionForMobile .SFPMVELEMEN:eq('" + index + "')").find('img').attr('src');
                    $("#loadPortionForDesktop .SFPMVELEMEN:eq('" + index + "')").find('img').attr('src', changeElement);
                } else {
                    changeElement = $("#loadPortionForMobile .SFPMVELEMEN:eq('" + index + "')").html();
                    $("#loadPortionForDesktop .SFPMVELEMEN:eq('" + index + "')").html(changeElement);
                }
            });
            $("#loadPortionForMobile").hide();
            $("#loadPortionForDesktop").show();
        } else if ($(this).attr('rel') === "mobile") {
            $("#loadPortionForDesktop .SFPMVELEMEN").each(function (index, value) {
                var changeElement = "";
                if ($("#loadPortionForDesktop .SFPMVELEMEN:eq('" + index + "')").find('img').length) {
                    changeElement = $("#loadPortionForDesktop .SFPMVELEMEN:eq('" + index + "')").find('img').attr('src');
                    $("#loadPortionForMobile .SFPMVELEMEN:eq('" + index + "')").find('img').attr('src', changeElement);
                } else {
                    changeElement = $("#loadPortionForDesktop .SFPMVELEMEN:eq('" + index + "')").html();
                    $("#loadPortionForMobile .SFPMVELEMEN:eq('" + index + "')").html(changeElement);
                }
            });
            $("#loadPortionForDesktop").hide();
            $("#loadPortionForMobile").show();
        } else if ($(this).attr('rel') === "save") {
            desktopFile = $("#fordesktop").val();
            mobileFile = $("#formobile").val();
            desktopHtml = $("#loadPortionForDesktop").html();
            mobileHtml = $("#loadPortionForMobile").html();
            $.ajax({
                method: 'POST',
                url: 'savetemplate.php',
                data: {
                    param: "templateSave",
                    desktopFile: desktopFile,
                    mobileFile: mobileFile,
                    desktopHtml: desktopHtml,
                    mobileHtml: mobileHtml
                },
                success: function (response) {

                }
            });
        } else if ($(this).attr('rel') === "publish") {
            desktopFile = $("#fordesktop").val();
            mobileFile = $("#formobile").val();
            desktopHtml = $("#loadPortionForDesktop").html();
            mobileHtml = $("#loadPortionForMobile").html();
            tempFile = $("#tempFile").val();
            $.ajax({
                method: 'POST',
                url: 'savetemplate.php',
                data: {
                    param: "templateSave",
                    extraparam: "publish",
                    desktopFile: desktopFile,
                    mobileFile: mobileFile,
                    desktopHtml: desktopHtml,
                    mobileHtml: mobileHtml,
                    tempFile: tempFile
                },
                success: function (response) {

                }
            });
        }
    });
});

function showElementEditbutton() {
    "use strict";
    $('.initEdit').show();
    $("#editSection").hide();
}

function showTheEditButtons(element, e) {
    "use strict";
    if (element === 'image') {
        $('.initEdit').hide();
        $("#editSection").show();
    } else if (element === 'text') {
        $(".textEditModeOn").removeClass('textEditModeOn');
        $(e).parent()
            .addClass('textEditModeOn')
            .draggable({
                disabled: true
            })
            .attr('contenteditable', 'true');
        var offset = $(e).parent().offset(),
            top = parseInt(offset.top, 10) + parseInt($(e).parent().css('padding-top'), 10) - parseInt($(window).scrollTop(), 10) - 40;
        $(".toolbar").css('top', top).css('left', offset.left).show();
        $(e).hide();
    }
}

function loadtheuploadbutton() {
    "use strict";
    $('#exampleInput')
        .click(function (e) {
            alert('test');
        })
        .change(function (e) {
            alert('test');
            var file = e.originalEvent.target.files[0];
            validateFileType(file);
        });
}

function fileIsSupported(file) {
    "use strict";
    var supportedFileTypes = ['image/jpeg', 'image/png'];
    return supportedFileTypes.indexOf(file.type) >= 0 ? true : false;
}

function setImage(file) {
    "use strict";
    var imageElement = $("#editable-image");
    imageElement.attr('src', window.URL.createObjectURL(file));
}

function validateFileType(file) {
    "use strict";
    if (fileIsSupported(file)) {
        setImage(file);
        launchImageEditor();
        return true;
    } else {
        alert('Try a JPEG or PNG image');
        return false;
    }
}

function launchImageEditor() {
    "use strict";
    var currentImage = document.getElementById("editable-image");
    csdkImageEditor.launch({
        image: currentImage.id
    });
}

var csdkImageEditor = new Aviary.Feather({
    apiKey: configObj.apiKey,
    onSave: function (imageID, newURL) {
        "use strict";
        var currentImage = document.getElementById("editable-image");
        currentImage.src = newURL;
        csdkImageEditor.close();
    },
    onError: function (errorObj) {
        "use strict";

    }
});