// global declarations 
//$output = $("output");// not working
/* functionality start for done button */
function donef() {
    var content = $("output").html();
    $("output").replaceWith(content);
    $('.toolbar').css('display', 'none');
    $('.sp-container').remove();
    $('font').removeClass('selectionPurpose');
    $('.toolbar').remove();
    deselection();
}
/* functionality end for done button */

function deselection() {
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
foo = function () {
    var selection = window.getSelection();
    if (selection != '') {
        selection = window.getSelection().getRangeAt(0);
        var selectedText = selection.extractContents();
        var span = document.createElement("output");
        span.appendChild(selectedText);
        selection.insertNode(span);
        return 1;
    } else
        return 0;
}



//array for line-height
var list = new Array();
list[9] = "<option>Line Height</option>";
for (i = 10; i <= 50; i++) {
    list[i] = "<option value=" + i + "px>" + i + "px</option>";
}

function new_line_height_f() {
    $('.sub-toolbar').hide('slow');
    $('.slider_wrapper').show('slow');
    $('.slider_wrapper2').show('slow');
}

function new_text_spacing_f() {
    $('.sub-toolbar').hide('slow');
    $('.slider_wrapper2').show('slow');
}

function getSelectionTextAndContainerElement() {
    var text = "",
        containerElement = null;
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var node = sel.getRangeAt(0).commonAncestorContainer;
            containerElement = node.nodeType == 1 ? node : node.parentNode;
            text = sel.toString();
        }
    } else if (typeof document.selection != "undefined" &&
        document.selection.type != "Control") {
        var textRange = document.selection.createRange();
        containerElement = textRange.parentElement();
        text = textRange.text;
    }
    return {
        text: text,
        containerElement: containerElement
    };
}

$(function () {
    // this for pasting purpose     
    $('.SFPTWO_TEXTEDIT').each(function () {
        $(this).find('.SFPTWO_TAGEDIT').bind({
            paste: function (e) {
                console.log('paste behaviour detected!');
                var data = e.originalEvent.clipboardData.getData('Text');
                //console.log(data);
                e.preventDefault();
                $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').text(data);
            }
        });
    });
    // this is creating p tag on enter keypressed           
    $(".SFPTWO_TAGEDIT").keydown(function (e) {
        if (e.keyCode == 13) { // trap the return key being pressed    
            document.execCommand('formatBlock', false, 'p');
        }
    });
    $(".SFPTWO_TAGEDIT").click(function (e) {
        if ($(this).prev().hasClass('toolbar')) {
            $('font').removeClass('selectionPurpose');
        }
    });

    $(".wrapper").scroll(function () {
        if ($('.toolbar').length) {
            var selector = $(".toolbar");
            var w = $(".wrapper");
            var offset = selector.parent().offset();
            var padding_top = selector.parent().css('padding-top');
            var pos = selector.next().position();
            var top = (parseInt(offset.top) - 30 + parseInt(padding_top));
            selector.css("top", top + "px");
            $(".sp-container").hide();
        }
    });
    // setInterval(function () {
    //$('.SFPTWO_TEXTEDIT').each(function () {
    $('.SFPTWO_TEXTEDIT').dblclick(function (e) {
        $('font').removeClass('selectionPurpose'); //to deselect selection area
        var content = $("output").html();
        $("output").replaceWith(content);
        $('.toolbar').css('display', 'none'); //to hide toolbar
        $('.toolbar').remove();
        $('.sp-container').remove();

        var w = $(".wrapper");
        var offset = $(this).offset();
        var containerWidth = w.css('width');
        var leftPosition = "left:" + offset.left + "px;";


        var pos = $(this).find('.SFPTWO_TAGEDIT').position();
        var margin_top = $(this).css('padding-top');

        var pos_top = 0;
        var pos_left = pos.left;
        var top = (parseInt(offset.top) - 30 + parseInt(margin_top));
        var defaultCss = $(this).find('.SFPTWO_TAGEDIT').css('font-family');
        var defaultfontsize = $(this).find('.SFPTWO_TAGEDIT').css('font-size').split('px');

        font_size_list = "<option  value=" + defaultfontsize[0] + "px>" + defaultfontsize[0] + "px</option>";
        for (i = 1; i <= 72; i++) {
            font_size_list += "<option value=" + i + "px>" + i + "px</option>";
        }
        var defaultfontToShow = defaultCss.split(" ");
        $(this).prepend("<div  class='toolbar' style='width:330px;position:fixed;top:" + top + "px; " + leftPosition + " z-index:999;'><a class='text-format remove_format'><img src='/editor2/icons/text-format-icon.png' alt=''></a><div class='J-Z-axR'></div><div class='select-style'><select class='fonts' style='height:32px !important;'><option value='" + defaultCss + "'>" + defaultfontToShow[0] + "</option><option value='Arial'>Arial</option><option value='Arial Black'>Arial Black</option><option value='Courier'>Courier</option><option value='Courier New'>Courier New</option><option value='Cursive'>Cursive</option><option value='Georgia'>Georgia</option><option value='Helvetica'>Helvetica</option><option value='Lucida Sans Typewriter'>Lucida Sans Typewriter</option><option value='Sans-serif'>Sans-serif</option><option value='Serif'>Serif</option><option value='Open Sans'>Open Sans</option><option value='Arvo'>Arvo</option></select></div><div class='J-Z-axR'></div><div class='select-style'><select class='font_size' style='height:32px !important;'>" + font_size_list + "</select></div><div class='J-Z-axR'></div><div class='font-color' id='font-color-underline'><input type='text' class='full' value='' /></div><div class='J-Z-axR'></div><a class='text-format link-box' href='javascript:;'><img src='/editor2/icons/link.png' alt=''></a><div class='J-Z-axR'></div><div style='postition:relative;' class='more-wrapper'><div class='link_wrapper' style='display:none;position:absolute;'><input type='text' class='link' placeholder='http://example.com'/></div><div class='slider_wrapper' style='display:none;position:absolute;'><p style='margin:0px 9px !important;padding: 0px !important;'>15</p><div id='slider'></div><input type='hidden' name='storlek' id='storlek_testet' value='16'/><p style='margin:0px 9px !important;padding: 0px !important;'>50</p></div><div class='slider_wrapper2' style='display:none;position:absolute;'><p style='margin: 0 9px !important;padding: 0px !important;'>-1</p><div id='slider2'></div><input type='hidden' name='storlek2' id='storlek_testet2' value='0'/><p style='margin: 0 9px !important;padding: 0px !important;'>10</p></div><div class='sfp-text-editor-wrapper sub-toolbar'><ul><li><img src='/editor2/icons/lineheight.png' alt='' onclick='new_line_height_f()'></li><li class='bold_class'><img src='/editor2/icons/bold.png' alt='' ></li><li class='italic_class'><img src='/editor2/icons/italic.png' alt=''></li><li class='underline_class'><img src='/editor2/icons/Underline.png' alt='' ></li><li class='left_class'><img src='/editor2/icons/alignleft.png' alt='' ></li><li class='center_class'><img src='/editor2/icons/Align-Center.png' alt='' ></li><li class='right_class'><img src='/editor2/icons/alignright.png' alt=''></li><li class='justify_class'><img src='/editor2/icons/Justify.png' alt=''></li></ul></div><input type='button' class='More' value='More...' style='height: 30px !important;'/></div><a onclick='donef();' class='done-bt'>DONE</a></div>");




        //slider cursor
        //            $(this).delegate(".slider-track", "mouseover", function () {
        //                $(".slider").find(".tooltip").css('visibility', 'hidden');
        //            });
        //            $(this).find(".slider_wrapper").mouseover(function () {
        //                $(".slider").find(".tooltip").css('visibility', 'hidden');
        //            });
        //            $(this).find(".slider_wrapper2").mouseover(function () {
        //                $(".slider").find(".tooltip").css('visibility', 'hidden');
        //            });


        // for slider line-height purpose   
        $(this).find("#slider").slider({
            range: "max",
            min: 15,
            max: 80,
            value: 16,
            slide: function (event, ui) {
                $("#storlek_testet").val(ui.value);
                $(ui.value).val($('#storlek_testet').val());
                var v = $('#storlek_testet').val();
                v = v + 'px';
                //for text spacing purpose
                $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').css("line-height", v);
            }
        });
        $("#storlek_testet").keyup(function () {
            $("#slider").slider("value", $(this).val())
        });


        // for slider text spacing purpose           
        $(this).find("#slider2").slider({
            range: "max",
            min: 0,
            max: 10,
            value: 0,
            slide: function (event, ui) {
                $("#storlek_testet2").val(ui.value);
                $(ui.value).val($('#storlek_testet2').val());
                var v2 = $('#storlek_testet2').val();
                v2 = v2 + 'px';
                $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').css("letter-spacing", v2);
            }
        });
        $("#storlek_testet2").keyup(function () {
            $("#slider2").slider("value", $(this).val())
        });


        //for left align
        $(this).find('.left_class').click(function (e) {
            $('.sub-toolbar ul li').removeClass('active');
            if ($(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children().not('font').length == 0)
                var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT');
            else
                var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children();

            if (workingselecter.css('text-align') == "left")
                workingselecter.css('text-align', "");
            else
                workingselecter.css('text-align', "left");

        });


        //for right align
        $(this).find('.right_class').click(function (e) {
            $('.sub-toolbar ul li').removeClass('active');
            if ($(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children().not('font').length == 0)
                var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT');
            else
                var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children();

            if (workingselecter.css('text-align') == "right")
                workingselecter.css('text-align', "");
            else
                workingselecter.css('text-align', "right");
        });


        //for center align
        $(this).find('.center_class').click(function (e) {
            $('.sub-toolbar ul li').removeClass('active');
            if ($(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children().not('font').length == 0)
                var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT');
            else
                var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children();

            if (workingselecter.css('text-align') == "center")
                workingselecter.css('text-align', "");
            else
                workingselecter.css('text-align', "center");
        });


        //for justify
        $(this).find('.justify_class').click(function (e) {
            $('.sub-toolbar ul li').removeClass('active');
            if ($(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children().not('font').length == 0)
                var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT');
            else
                var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children();

            if (workingselecter.css('text-align') == "justify")
                workingselecter.css('text-align', "");
            else
                workingselecter.css('text-align', "justify");



        });



        //for bold
        $(this).find('.bold_class').click(function (e) {
            var boldPropertyCheck = 0;
            if (!$('font').hasClass('selectionPurpose')) {
                var f = foo();
                if (f) {
                    // have selection
                    var content = $("output").html();
                    $("output").replaceWith("<font class='selectionPurpose'>" + content + "</font>");
                } else {
                    boldPropertyCheck = 2;

                    if ($(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children().not('font').length == 0)
                        var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT');
                    else
                        var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children();

                    var purposeStyle = workingselecter.prop('style');
                    for (var i = 0; i < purposeStyle.length; i++) {
                        var style_name = purposeStyle[i];
                        var style_value = purposeStyle[style_name];

                        if (style_name == 'font-weight') {
                            boldPropertyCheck = 1;
                            if (style_value == 'bold') {
                                if (typeof workingselecter.children().attr('style') == 'undefined')
                                    var holdprevcss = "";
                                else {
                                    var holdprevcss = workingselecter.children().attr('style');

                                }
                                if (typeof workingselecter.attr('style') == 'undefined')
                                    holdcss = "";
                                else
                                    var holdcss = workingselecter.attr('style');
                                if (workingselecter.css('font-weight') == "bold") {
                                    workingselecter.css("cssText", holdcss + 'font-weight : normal !important');
                                    workingselecter.children().css("cssText", holdprevcss + 'font-weight : normal !important');
                                } else {
                                    workingselecter.css("cssText", holdcss + 'font-weight : bold !important');
                                    workingselecter.children().css("cssText", holdprevcss + 'font-weight : bold !important');
                                }

                            } else {
                                workingselecter.css('font-weight', "bold");
                                workingselecter.children().css("cssText", holdprevcss + "font-weight : bold !important;");
                            }
                        }
                    }
                }
            }
            if (typeof $('.selectionPurpose').attr('style') == 'undefined')
                var holdprevcss = "";
            else
                var holdprevcss = $('.selectionPurpose').attr('style');
            if (typeof $('.selectionPurpose').attr('style') != 'undefined') {

                var purposeStyle = $('.selectionPurpose').prop('style');
                console.log(purposeStyle);
                for (var i = 0; i < purposeStyle.length; i++) {
                    var style_name = purposeStyle[i];
                    var style_value = purposeStyle[style_name];
                    console.log(purposeStyle[i] + "--" + purposeStyle[style_name]);

                    if (style_name == 'font-weight') {
                        boldPropertyCheck = 1;
                        if (style_value == 'bold') {
                            $('.selectionPurpose').css("cssText", holdprevcss + "font-weight : normal !important;");
                        } else {
                            $('.selectionPurpose').css("cssText", holdprevcss + "font-weight : bold !important;");
                        }
                    }
                }
            } else {
                $('.selectionPurpose').css("cssText", holdprevcss + "font-weight : bold !important;");
            }
            if (boldPropertyCheck == 0) {
                $('.selectionPurpose').css("cssText", holdprevcss + "font-weight : bold !important;");
            }
            if (boldPropertyCheck == 2) {
                if (typeof workingselecter.children().attr('style') == 'undefined')
                    var holdprevcss = "";

                else {
                    var holdprevcss = workingselecter.children().attr('style');

                }
                if (typeof workingselecter.attr('style') == 'undefined')
                    holdcss = "";
                else
                    var holdcss = workingselecter.attr('style');

                if (workingselecter.css('font-weight') == "bold") {
                    workingselecter.css("cssText", holdcss + 'font-weight : normal !important');
                    workingselecter.children().css("cssText", holdprevcss + 'font-weight : normal !important');
                } else {
                    workingselecter.css("cssText", holdcss + 'font-weight : bold !important');
                    workingselecter.children().css("cssText", holdprevcss + 'font-weight : bold !important');
                }
            }
            // console.log(boldPropertyCheck);


        });


        //for italic
        $(this).find('.italic_class').click(function (e) {
            if (!$('font').hasClass('selectionPurpose')) {
                var f = foo();
                if (f) {
                    // have selection
                    var content = $("output").html();
                    $("output").replaceWith("<font class='selectionPurpose'>" + content + "</font>");
                } else {
                    // have no selection then select block
                    if ($(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children().not('font').length == 0)
                        var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT');
                    else
                        var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children();


                    if (typeof workingselecter.children().attr('style') == 'undefined')
                        var holdprevcss = "";
                    else
                        var holdprevcss = workingselecter.children().attr('style');

                    if (typeof workingselecter.attr('style') == 'undefined')
                        holdcss = "";
                    else
                        var holdcss = workingselecter.attr('style');

                    if (workingselecter.css('font-style') == "italic") {
                        workingselecter.css("cssText", holdcss + 'font-style : normal !important');
                        workingselecter.children().css("cssText", holdprevcss + 'font-style : normal !important');
                    } else {
                        workingselecter.css("cssText", holdcss + 'font-style : italic !important');
                        workingselecter.children().css("cssText", holdprevcss + 'font-style : italic !important');
                    }
                }
            }

            if (typeof $('.selectionPurpose').attr('style') == 'undefined')
                var holdprevcss = "";
            else
                var holdprevcss = $('.selectionPurpose').attr('style');

            if ($('.selectionPurpose').css('font-style') == "italic") {
                $('.selectionPurpose').css("cssText", holdprevcss + "font-style: normal !important;");
            } else {
                $('.selectionPurpose').css("cssText", holdprevcss + "font-style: italic !important;");
            }
        });


        //for underline
        $(this).find('.underline_class').click(function (e) {
            if (!$('font').hasClass('selectionPurpose')) {
                var f = foo();
                if (f) {
                    // have selection
                    var content = $("output").html();
                    $("output").replaceWith("<font class='selectionPurpose'>" + content + "</font>");
                } else {
                    // have no selection then select block
                    if ($(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children().not('font').length == 0)
                        var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT');
                    else
                        var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children();

                    if (typeof workingselecter.children().attr('style') == 'undefined')
                        var holdprevcss = "";
                    else {
                        var holdprevcss = workingselecter.children().attr('style');

                    }
                    if (typeof workingselecter.attr('style') == 'undefined')
                        holdcss = "";
                    else
                        var holdcss = workingselecter.attr('style');
                    //console.log(workingselecter.css('text-decoration'));    

                    if (workingselecter.css('text-decoration') == "underline") {
                        workingselecter.css("cssText", holdcss + 'text-decoration : none !important');
                        workingselecter.children().css("cssText", holdprevcss + 'text-decoration : none !important');
                    } else {
                        //console.log("in else");  
                        //console.log(workingselecter.html());
                        workingselecter.css("cssText", holdcss + 'text-decoration : underline !important');
                        workingselecter.children().css("cssText", holdprevcss + 'text-decoration : underline !important');

                    }
                }
            }

            if (typeof $('.selectionPurpose').attr('style') == 'undefined')
                var holdprevcss = "";
            else
                var holdprevcss = $('.selectionPurpose').attr('style');

            console.log(holdprevcss);
            if ($('.selectionPurpose').css('text-decoration') == "underline") {
                $('.selectionPurpose').css("cssText", holdprevcss + 'text-decoration : none !important;');
            } else {
                $('.selectionPurpose').css("cssText", holdprevcss + 'text-decoration : underline !important;');
            }
        });

        // this is for link
        $(this).find('.link').keyup(function (e) {
            if (e.keyCode == 13) {
                var linkVal = $('.link').val();
                $('.link_wrapper').hide();
                $('.selectionPurpose').wrapInner('<a href="' + linkVal + '" style="color:inherit" target="_blank"/>');
            }
        });
        $(this).find('.link-box').click(function (e) {
            if ($(this).offset().top + parseInt(42) > $(".wrapper1").outerHeight())
                $(".link_wrapper").css('top', '-41px');
            else
                $(".link_wrapper").css('top', '32px');

            if (!$('font').hasClass('selectionPurpose')) {
                var f = foo();
                if (f) {
                    var content = $("output").html();
                    $("output").replaceWith("<font class='selectionPurpose'>" + content + "</font>");
                } else {
                    alert('Select some text');
                }
            }
            $('.sub-toolbar').hide('slow');
            $('.link_wrapper').show('slow');
        });

        // for font-family purpose                
        $(this).find(".fonts").change(function () {
            var v = $(this).val();
            if (!$('font').hasClass('selectionPurpose')) {
                var f = foo();
                if (f) {
                    var content = $("output").html();
                    $("output").replaceWith("<font class='selectionPurpose'>" + content + "</font>");
                } else {
                    // have no selection then select the block
                    $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').css("font-family", v);
                    $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children().css("font-family", v);

                }
            }
            if ($('font').hasClass('selectionPurpose')) {
                $('.selectionPurpose').css("font-family", v);
            }
        });


        // for font size purpose
        $(this).find('.font_size').html(font_size_list.toString());
        $(this).find(".font_size").change(function () {
            var v = $(this).val();
            if (!$('font').hasClass('selectionPurpose')) {
                var f = foo();
                if (f) {
                    var content = $("output").html();
                    $("output").replaceWith("<font class='selectionPurpose'>" + content + "</font>");
                } else {
                    // have no selection then select the block
                    $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').css("font-size", v);
                }
            }
            if ($('font').hasClass('selectionPurpose')) {
                $('.selectionPurpose').css("font-size", v);
            }
        });



        // this is for remove formatting
        $(this).find('.remove_format').click(function (e) {
            $(this).parents('.toolbar').children().removeClass('active');
            //$(this).addClass('active');
            $('.sub-toolbar').hide('slow');
            $('.slider_wrapper').hide('slow');
            $('.slider_wrapper2').hide('slow');
            $('.link_wrapper').hide('slow');

            if ($(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children().not('font').length == 0)
                var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT');
            else
                var workingselecter = $(this).parents('.SFPTWO_TEXTEDIT').children('.SFPTWO_TAGEDIT').children();

            //var text = $(this).parent().parent().find('.SFPTWO_TAGEDIT').text();
            // alert(text);  

            $(this).parent().parent().find('.SFPTWO_TAGEDIT font').each(function () {
                $(this).contents().unwrap();
            });
            $(this).parent().parent().find('.SFPTWO_TAGEDIT a').each(function () {
                $(this).contents().unwrap();
            });

            workingselecter.removeAttr('style');
            workingselecter.children().removeAttr('style');

            /* $(this).parent().parent().find('.SFPTWO_TAGEDIT').removeClass('bold');
             $(this).parent().parent().find('.SFPTWO_TAGEDIT').removeClass('ita');
             $(this).parent().parent().find('.SFPTWO_TAGEDIT').removeClass('underline');
             $(this).parent().parent().find('.SFPTWO_TAGEDIT').removeClass('left_cls');
             $(this).parent().parent().find('.SFPTWO_TAGEDIT').removeClass('right_cls');
             $(this).parent().parent().find('.SFPTWO_TAGEDIT').removeClass('center_cls');
             $(this).parent().parent().find('.SFPTWO_TAGEDIT').removeClass('justify_cls');*/
        });

        $(this).find('.More').click(function () {
            if ($(this).offset().top + parseInt(150) > $(".wrapper1").outerHeight()) {
                $(".sfp-text-editor-wrapper").css('top', '-151px');
                $(".slider_wrapper").css('top', '-40px');
                $(".slider_wrapper2").css('top', '-81px');
            } else {
                $(".sfp-text-editor-wrapper").css('top', '32px');
                $(".slider_wrapper").css('top', '31px');
                $(".slider_wrapper2").css('top', '72px');
            }

            $('.sub-toolbar ul li').removeClass('active');
            $('.sub-toolbar').toggle('slow');
            $('.slider_wrapper').hide('slow');
            $('.slider_wrapper2').hide('slow');
            $('.link_wrapper').hide('slow');

        });


        // to shut down other windows
        $(this).find('.toolbar .fonts').mousedown(function () {
            //alert('fonts click');
            $(this).parents('.toolbar').children().removeClass('active');
            $('.sub-toolbar').hide('slow');
            $('.slider_wrapper').hide('slow');
            $('.slider_wrapper2').hide('slow');
            $('.link_wrapper').hide('slow');
            if ($(this).parents('form').hasClass('SFPTWO_EDITFORM')) {
                // console.log(1);
                $(this).parent().addClass('explicit_edit');
            }
        });
        // to shut down other windows
        $(this).find('.toolbar .font_size').mousedown(function () {
            //alert('fonts click');
            $(this).parents('.toolbar').children().removeClass('active');
            $('.sub-toolbar').hide('slow');
            $('.slider_wrapper').hide('slow');
            $('.slider_wrapper2').hide('slow');
            $('.link_wrapper').hide('slow');
            if ($(this).parents('form').hasClass('SFPTWO_EDITFORM')) {
                // console.log(1);
                $(this).parent().addClass('explicit_edit');
            }
        });

        //to access existing inline styles
        var style = $(this).find('.SFPTWO_TAGEDIT').prop('style');

        //looping
        for (var i = 0; i < style.length; i++) {
            var style_name = style[i];
            var style_value = style[style_name];

            //alert(style_name + ': ' + style_value)
            var st_va = style_value.replace(/(^"|"$)/g, '');
            if (style_name == 'font-family') {
                //alert(style_name);
                //alert(style_value.replace(/(^"|"$)/g, ''));


                $(this).find('.toolbar .fonts option').each(function () {

                    // Add $(this).val() to your list
                    //alert($(this).val());

                    if ($(this).val() == st_va) {
                        $(this).attr("selected", "selected");
                        //alert($(this).val());
                    }
                });
            }
            if (style_name == 'font-size') {
                //alert(style_name);
                // alert(style_value.replace(/(^"|"$)/g, ''));

                $(this).find('.toolbar .font_size option').each(function () {

                    // Add $(this).val() to your list
                    //alert($(this).val());

                    if ($(this).val() == st_va) {
                        $(this).attr("selected", "selected");
                        //alert($(this).val());
                    }
                });
            }
        }

        // this is for fore color
        $(this).find(".full").spectrum({
            color: "#373a28",
            showInput: true,
            className: "full-spectrum",
            showInitial: true,
            showPalette: true,
            showSelectionPalette: true,
            preferredFormat: "hex",
            localStorageKey: "spectrum.demo",
            move: function (color) {
                // code by anindya                       
                if ($('font').hasClass('selectionPurpose')) {
                    $('font').addClass('font_color');
                    // alert("move - "+color); 
                    x = "'" + color + "'";
                    $('.selectionPurpose').css('color', x);

                }
            },
            show: function (color) {

            },
            beforeShow: function (color) {
                $('.sub-toolbar').hide('slow');
                $('.slider_wrapper').hide('slow');
                $('.slider_wrapper2').hide('slow');
                $('.link_wrapper').hide('slow');
                $(this).parents('.toolbar').children().removeClass('active');
                $('.font-color').addClass('active');
                var content = $("output").html();
                $("output").replaceWith(content);
                if (!$('font').hasClass('selectionPurpose')) {
                    foo();
                    var content = $("output").html();
                    $("output").replaceWith("<font class='selectionPurpose' style='display:inline-block !important; font-size:inherit !important; line-height:inherit !important; text-align:inherit !important; text-transform:inherit !important;'>" + content + "</font>");
                }
            },
            hide: function (color) {
                $('font').removeClass('font_color');

            },
            change: function (color) {

                // code by anindya                       
                if ($('font').hasClass('selectionPurpose')) {
                    $('font').addClass('font_color');
                    //alert("css - "+color);
                    x = "'" + color + "'";
                    //alert(x);
                    $('.selectionPurpose').css('color', x);
                }


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
    });
    //});
    //}, 5000);

});