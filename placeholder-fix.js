(function ($) {

    var placeholderSupported = false;

    function placeholderFix() {
        var $elem = $(this),
            placeholder = $elem.attr('placeholder');

        if (!placeholderSupported && typeof placeholder !== 'undefined' && placeholder.length > 0) {

            $elem
                .focus(function () {
                    if ($elem.val() === placeholder) {
                        $elem
                            .val('')
                            .removeClass('watermark');

                    }
                })
                .blur(function () {
                    if ($elem.val().length === 0) {
                        $elem
                            .addClass('watermark')
                            .val(placeholder);
                    }
                });

            $elem.blur();
        }
    }

    $.fn.placeholderFix = function() {
        return $(this).each(function() {
            placeholderFix.call(this);
        });
    };

    $(function () {
        // Set any placeholders on the page

        // Check if browser supports the placeholder attribute
        if (!('placeholder' in document.createElement('input'))) {

            // Find all the elements of input type="text" and textareas
            $.each($('input[type=text], textarea'), function (index, elem) {
                placeholderFix.call(elem);
            });

        } else {
            placeholderSupported = true;
        }
    });

})(jQuery);