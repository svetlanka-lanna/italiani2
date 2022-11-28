$(document).ready(function(){

	function adaptiveSite() {
		let w = $(this).width();
		let h = $(this).height();
		if (w < 992) {
			if ($('.site-main > .container > .site-map').length == 0) {
				$('.site-main > .container').prepend($('.site-map'));
			}
		} else {
			if ($('.site-header__wrap > .site-map').length == 0) {
				$('.site-header__wrap .site-search').after($('.site-map'));
			}
		}
		if (w < 568) {
			$('.modal-menu__mobile').prepend($('.site-login'));

			//$('.modal-menu__mobile').append($('.site-search'));
			$('.modal-menu__container').css({
				'height' : h - 70 + 'px'
			});
		}
		else if (w < 768) {
			$('.modal-menu__mobile').prepend($('.site-login'));
			//$('.modal-menu__mobile').append($('.site-search'));
			$('.modal-menu__container').css({
				'height' : h - 130 + 'px'
			});
		}

		$('.site-main > .container > .site-map').not($('.site-main > .container > .site-map').eq(0)).remove();
		$('.site-header__wrap > .site-map').not($('.site-header__wrap > .site-map').eq(0)).remove();

	}

	adaptiveSite();

	$(window).on('resize', adaptiveSite);
});
