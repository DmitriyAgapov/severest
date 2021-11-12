(function($) {
	$(document).ready(function() {
		var galleryThumbs = new Swiper(".gallery-thumbs", {
			spaceBetween: 10,
			slidesPerView: 4,
			//width: 200,	
			height: 300,
			direction: getDirection(),
			//autoHeight: true,
			//loop: true,
			navigation: {
				nextEl: ".arrow-next",
				prevEl: ".arrow-prev",
			},
			on: {
				resize: function() {
					swiper.changeDirection(getDirection());
				}
			}
			//freeMode: true,
			//watchSlidesVisibility: true,
			//watchSlidesProgress: true,
		});
		var galleryTop = new Swiper(".gallery-top", {
			spaceBetween: 0,
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: '.cont .swiper-pagination',
			},
			thumbs: {
				swiper: galleryThumbs
			}
		});
		function getDirection() {
			var windowWidth = window.innerWidth;
			var direction = window.innerWidth <= 1023 ? 'horizontal' : 'vertical';

			return direction;
		}
	});
})(jQuery);
