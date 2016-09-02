/*global $, jQuery, alert,  Aviary, currentImage, csdkImageEditor, console, launchImageEditor,validateFileType, loadtheuploadbutton, showTheEditButtons, selectedText, x */
/*jslint plusplus: true */
$(function () {
    "use strict";
    var font_size_list,
        inllineEditorToolbar,
        counter_1;
    for (counter_1 = 1; counter_1 <= 72; counter_1++) {
        font_size_list += "<option value=" + counter_1 + "px>" + counter_1 + "px</option>";
    }
    inllineEditorToolbar = "<div  class='toolbar' style='width:330px;position:fixed;top:0px; left:0; z-index:999; display:none;'><a class='text-format remove_format'><img src='/files/DE/icons/text-format-icon.png' alt='text-format'/></a><div class='J-Z-axR'></div><div class='select-style'><select class='fonts' style='height:32px !important;'><option value='Arial'>Arial</option><option value='Arial Black'>Arial Black</option><option value='Courier'>Courier</option><option value='Courier New'>Courier New</option><option value='Cursive'>Cursive</option><option value='Georgia'>Georgia</option><option value='Helvetica'>Helvetica</option><option value='Lucida Sans Typewriter'>Lucida Sans Typewriter</option><option value='Sans-serif'>Sans-serif</option><option value='Serif'>Serif</option><option value='Open Sans'>Open Sans</option><option value='Arvo'>Arvo</option></select></div><div class='J-Z-axR'></div><div class='select-style'><select class='font_size' style='height:32px !important;'>" + font_size_list + "</select></div><div class='J-Z-axR'></div><div class='font-color' id='font-color-underline'><input type='text' class='full' value='' /></div><div class='J-Z-axR'></div><a class='text-format link-box' href='javascript:;'><img src='/files/DE/icons/link.png' alt='anchor'/></a><div class='J-Z-axR'></div><div style='postition:relative;' class='more-wrapper'><div class='link_wrapper' style='display:none;position:absolute;'><input type='text' class='link' placeholder='http://example.com'/></div><div class='slider_wrapper' style='display:none;position:absolute;'><p style='margin:0px 9px !important;padding: 0px !important;'>15</p><div id='slider'></div><input type='hidden' name='storlek' id='storlek_testet' value='16'/><p style='margin:0px 9px !important;padding: 0px !important;'>50</p></div><div class='slider_wrapper2' style='display:none;position:absolute;'><p style='margin: 0 9px !important;padding: 0px !important;'>-1</p><div id='slider2'></div><input type='hidden' name='storlek2' id='storlek_testet2' value='0'/><p style='margin: 0 9px !important;padding: 0px !important;'>10</p></div><div class='sfp-text-editor-wrapper sub-toolbar'><ul><li><img src='/files/DE/icons/lineheight.png' alt='line height' onclick='new_line_height_f()'/></li><li class='bold_class'><img src='/files/DE/icons/bold.png' alt='bold' /></li><li class='italic_class'><img src='/files/DE/icons/italic.png' alt='italic' /></li><li class='underline_class'><img src='/files/DE/icons/Underline.png' alt='underline' /></li><li class='left_class'><img src='/files/DE/icons/alignleft.png' alt='left align' /></li><li class='center_class'><img src='/files/DE/icons/Align-Center.png' alt='center align' /></li><li class='right_class'><img src='/files/DE/icons/alignright.png' alt='right align'/></li><li class='justify_class'><img src='/files/DE/icons/Justify.png' alt='justify'/></li></ul></div><input type='button' class='More' value='More...' style='height: 30px !important;'/></div><a onclick='donef();' class='done-bt'>DONE</a></div>";
    $(inllineEditorToolbar).prependTo("body");
    $(window).scroll(function () {
        if ($(".textEditModeOn").length) {
            var top = parseInt($(".textEditModeOn").offset().top, 10) + parseInt($(".textEditModeOn").css('padding-top'), 10) - parseInt($(window).scrollTop(), 10) - 40;
            $(".toolbar").css('top', top);
        }
    });
    $(".full").spectrum({
        color: "#373a28",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        move: function (color) {

            var x = "'" + color + "'";
            $('.textEditModeOn').css('color', x);

        },
        show: function (color) {

        },
        beforeShow: function (color) {
            var content;
            $('.sub-toolbar').hide('slow');
            $('.slider_wrapper').hide('slow');
            $('.slider_wrapper2').hide('slow');
            $('.link_wrapper').hide('slow');
            $(this).parents('.toolbar').children().removeClass('active');
            $('.font-color').addClass('active');
            content = $("output").html();
            $("output").replaceWith(content);
            if (!$('font').hasClass('selectionPurpose')) {
                //foo();
                content = $("output").html();
                $("output").replaceWith("<font class='selectionPurpose' style='display:inline-block !important; font-size:inherit !important; line-height:inherit !important; text-align:inherit !important; text-transform:inherit !important;'>" + content + "</font>");
            }
        },
        hide: function (color) {
            $('font').removeClass('font_color');

        },
        change: function (color) {
            var x = "'" + color + "'";
            $('.textEditModeOn').css('color', x);

        },
        palette: [
            ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
                        "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(255, 255, 255)"
                    ],
            ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
                        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"
                    ],
            ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
                        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
                        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
                        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
                        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
                        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
                        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
                        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
                        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
                        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"
                    ]
        ]
    });
    $('.link-box').click(function (e) {
        $(".link_wrapper").css('top', '-41px');
        $('.sub-toolbar').hide('slow');
        $('.link_wrapper').show('slow');
    });

    $(".font_size").change(function () {
        var v = $(this).val();
        $(".textEditModeOn").css("font-size", v);

    });
    $(".fonts").change(function () {
        var v = $(this).val();
        $(".textEditModeOn").css("font-family", v);


    });
    $('.link').keyup(function (e) {
        if (e.keyCode === 13) {
            var linkVal = $('.link').val();
            $('.link_wrapper').hide();
            $('.textEditModeOn').wrapInner('<a href="' + linkVal + '" style="color:inherit" target="_blank"/>');
        }
    });
});

function deselection() {
    "use strict";
    if (window.getSelection) {
        if (window.getSelection().empty) { // Chrome
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) { // Firefox
            window.getSelection().removeAllRanges();
        }
    } else if (document.selection) { // IE?
        document.selection.empty();
    }
}

function donef() {
    "use strict";
    $('.toolbar').hide();
    $("#elementEditButton").show();
    $(".textEditModeOn").draggable("enable").removeClass('textEditModeOn');
    deselection();
}