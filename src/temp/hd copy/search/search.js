(function($) {
    $(document).ready(function() {

        $('.search .form-text').on('focus', function() {
            $('.search').addClass('focused');

        });

        $('.search .form-text').on('blur', function() {
            if ($('.search .form-text').val() == "") {
                $('.search').removeClass('focused');
            }
        });

        $('.search').on('mouseenter', function() {
            if ($('.search .form-text').val() != "") {
                $('.search').addClass('focused');
            }
        });

        $(document).click(function(event) {
            if ($(event.target).closest(".search").length) return;
            $('.search').removeClass('focused');
            event.stopPropagation();
        });

        $('body').on('click', function() {
        });
    });
})(jQuery);