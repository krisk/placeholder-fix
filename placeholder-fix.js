/*!
* placeholder-fix v1.0
*
* Dependencies:
* - jQuery
*
* Copyright 2011, Kirollos Risk
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* Date: Jan 28 10:00:00 2011
*/
(function ($) {
    $(document).ready(function () {
        // Check if browser supports the placeholder attribute
        if ('placeholder' in document.createElement('input')) {
            return;
        }

        // Create a style sheet with a watermark class
        $($("head")[0]).append($('<style type="text/css"> textarea.watermark, input.watermark { color: Gray; } </style>'));

        // Find all the elements of input type="text" and textareas
        $.each($('input[type=text], textarea'), function (index, elem) {

            var elem = $(elem);
            var placeholder = elem.attr('placeholder');

            if (typeof placeholder !== 'undefined' && placeholder.length > 0) {
                if (elem.val().length === 0) {
                    elem
                        .addClass('watermark')
                        .val(placeholder);
                }
                elem
                    .focus(function () {
                        if (this.value == placeholder) {
                            $(this)
                                .val('')
                                .removeClass('watermark');

                        }
                    })
                    .blur(function () {
                        if (this.value.length === 0) {
                            $(this)
                                .addClass('watermark')
                                .val(placeholder);
                        }
                    });
            }
        });
    });
})(jQuery);