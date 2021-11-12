(function($) {
    $(document).ready(function() {
        var swiper = new Swiper(".news", {
            slideClass: "block__subitem",
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 40
                },
                4000: {
                    slidesPerView: 2,
                    spaceBetween: 40
                }
            },
            navigation: {
                nextEl: ".arrow-right",
                prevEl: ".arrow-left",
            },
        });
    });
})(jQuery);
