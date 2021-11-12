(function($) {

	$(document).ready(function() {

		$('.image__big').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			slidesPerRow: 1,
			arrows: false,
			touchThreshold: 30,
			cssEase: 'linear',
			fade: true,
			asNavFor: '.image__preview-inner'
		});
		$('.image__preview-inner').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			arrows: false,
			vertical: true,
			cssEase: 'linear',
			touchThreshold: 30,
			verticalSwiping: false,
			asNavFor: '.image__big',
			variableWidth: true,
			appendArrows: $('.image__preview .arrows'),
			//prevArrow: '<button type="button" class="slick-next">Next</button>',
			//nextArrow: '<div class="arrows-slider__arrow arrows-slider__next"><span aria-label="Next">›</span></div>'
		});

		/*lightGallery('.image__big', 'a');
		$('.image__preview .image__item').on('click', function(e) {
			var slickIndex = e.currentTarget.getAttribute('data-slick-index')
			$('.image__big .image__item').eq(slickIndex).find('a').click();
		});*/

	});

})(jQuery);
