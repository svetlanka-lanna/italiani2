document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed");

	// if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
	//   window.document.addEventListener('touchmove', e => {
	//     if(e.scale !== 1) {
	//       e.preventDefault();
	//     }
	//   }, {passive: false});
	// }

	//https://www.npmjs.com/package/js-datepicker#examples
	//дока
	if (document.querySelector('[name="date-delivery"]')) {
		var picker = datepicker('[name="date-delivery"]', {
			formatter: (input, date, instance) => {
				let value = date;
				let d = value.getDate();
				let m = value.getMonth();
				m++;
				let yyyy = value.getFullYear();
				if (d < 10) {
					d = '0' + d;
				}
				if (m < 10) {
					m = '0' + m;
				}
				input.value = d + '.' + m + '.' + yyyy; // => '1/1/2099'
			},
			overlayButton: "Выбрать",
			overlayPlaceholder: 'Введите нужный год',
			minDate: new Date(),
			startDay: 1,
			startDate: new Date(),
			maxDate: new Date(2024, 0, 1),
			dateSelected: new Date(),
			disableYearOverlay: true,
			customDays: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
			customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			onSelect: (instance, input, date) => {
				if (picker1) {
					picker1.setDate(instance.dateSelected);
				}
	    },
		});
	}

	if (document.querySelector('[name="modal-date-order"]')) {
		var picker1 = datepicker('[name="modal-date-order"]', {
			formatter: (input, date, instance) => {
				let value = date;
				let d = value.getDate();
				let m = value.getMonth();
				m++;
				let yyyy = value.getFullYear();
				if (d < 10) {
					d = '0' + d;
				}
				if (m < 10) {
					m = '0' + m;
				}
				input.value = d + '.' + m + '.' + yyyy; // => '1/1/2099'
			},
			overlayButton: "Выбрать",
			overlayPlaceholder: 'Введите нужный год',
			minDate: new Date(),
			startDay: 1,
			startDate: new Date(),
			maxDate: new Date(2024, 0, 1),
			dateSelected: new Date(),
			disableYearOverlay: true,
			customDays: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
			customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			onSelect: (instance, input, date) => {
				if (picker) {
					picker.setDate(instance.dateSelected);
				}
	    },
		});
	}
});

window.onload = function () {
    var scr = $(".menu-list");
    scr.mousedown(function () {
        var startX = this.scrollLeft + event.pageX;
        var startY = this.scrollTop + event.pageY;
        scr.mousemove(function () {
            this.scrollLeft = startX - event.pageX;
            this.scrollTop = startY - event.pageY;
            return false;
        });
    });
    $(window).mouseup(function () {
        scr.off("mousemove");
    });
}

$(document).ready(function(){

	$('.site-cookie .icon').click(function() {
		$('.site-cookie').fadeOut();
	});

	$('.menu-item .menu-item__cart-wrapper .menu-item__cart, .site-search__item-options .site-search__item-addcart').click(function() {
		$(this).hide();
		$(this).next().css("display", "flex").fadeIn(300);
	});

	$('.cart-modal .cart-modal__clear').click(function(){
		$(this).closest('.cart-modal').addClass('empty');
		$('.site-cart__number').text('0');
	});

	$('.cart-modal__close').click(function(){
		$(this).closest('.cart-modal').fadeOut();
	});

	$('.site-cart__button').click(function(){
		$('.cart-modal').fadeIn();
	});

	$('form.form-card .cancel').click(function() {
		$(this).closest('form.form-card').slideUp();
	});

	$('.personal-card__inner .change').click(function(){
		let p = $(this).closest('.personal-card__inner');
		p.find('form.form-card').slideDown();
	});

	$('label.form-checkbox').each(function(){
		let input = $(this).find('input');
		if ($(input).prop('checked')) {
			$(input).parent().addClass('active');
		} else {
			$(input).parent().removeClass('active');
		}
	});

	$('label.form-checkbox input').change(function(){
		if ($(this).prop('checked')) {
			$(this).parent().addClass('active');
		} else {
			$(this).parent().removeClass('active');
		}
	});

	$('form.form-change .form-change__input--change').click(function(){
		let p = $(this).closest('form.form-change');
		p.find('input').removeAttr('disabled');
		p.find('input').focus().val('');
		$(this).hide();
		p.find('button[type=submit]').show();
		p.find('.form-change__input--cancel').show();
	});

	$('form.form-change .form-change__input--cancel').click(function(){
		let p = $(this).closest('form.form-change');
		p.find('input').attr('disabled', 'disabled');
		let saved = p.find('input').attr('data-saved');
		p.find('input').val(saved);
		$(this).hide();
		p.find('button[type=submit]').hide();
		p.find('.form-change__input--change').show();
	});

	$('form.form-change').submit(function(e) {
		e.preventDefault();
		$(this).find('.form-change__input--cancel').hide();
		$(this).find('button[type=submit]').hide();
		$(this).find('.form-change__input--change').show();
		$(this).find('input').attr('data-saved', $(this).find('input').val());
		notificationsItem({
			data: {
				title: 'Успешно изменено',
				text: '',
			}
		});
	});

	$('form.form-change button[type=submit]').click(function(){
		let p = $(this).closest('form.form-change');
		p.find('input').attr('disabled', 'disabled');
		$(this).hide();
		p.find('button[type=submit]').hide();
		p.find('.form-change__input--change').show();
	});

	$('.modal-address--pickup .pickup .item').click(function(){
		let text = $(this).find('.title').text();
		$('.pickup-address .old-address .text').text(text);
		$('.pickup-address .old-address').show();
		$('.pickup-address .new-address').hide();
		$('.modal-address--pickup .pickup .item').removeClass('active');
		$(this).addClass('active');
		hideModals();
	});

	$('[data-modal]').click(function(){
		let attr = $(this).attr('data-modal');
		$(attr).fadeIn();
		$('.overlay').fadeIn();
	});

	$('.open-address--value').click(function(){
		let w = $(window).width();
		if (w > 576) {
			$('.overlay').fadeIn();
			$('.modal-address--value').fadeIn();
		} else {
			$('.modal-address--value').fadeIn();
			$('body').css({
				'overflow' : 'hidden'
			})
		}
	});

	$('#modal-phone-notice .btn.close').click(hideModals);

	$('.open-address--new').click(function(){
		let w = $(window).width();
		if (w > 576) {
			$('.overlay').fadeIn();
			$('.modal-address--new').fadeIn();
		} else {
			$('.modal-address--new').fadeIn();
			$('body').css({
				'overflow' : 'hidden'
			})
		}
	});

	$('.open-address--pickup').click(function(){
		let w = $(window).width();
		if (w > 576) {
			$('.overlay').fadeIn();
			$('.modal-address--pickup').fadeIn();
		} else {
			$('.modal-address--pickup').fadeIn();
			$('body').css({
				'overflow' : 'hidden'
			})
		}
	});

	$('.time-order .time-order__item').click(function(){
		if (!$(this).attr('data-time')) return;
		$('.time-order .time-order__item').removeClass('active');
		$(this).addClass('active');
		$('.time-delivery__checked').text($(this).find('.text').text());
		$('input[name="time-delivery"]').val($(this).find('.text').text());
		hideModals();
	});

	$('.time-delivery--open').click(function(){
		$('.modal-time-order').fadeIn();
		$('.overlay').fadeIn();
	});

	$('input[type=radio][name=payment][data-toggle]').each(function(){
		let attr = $(this).attr('data-toggle');
		if ($(this).prop('checked')) {
			$('#' + attr).slideDown();
		} else {
			$('#' + attr).slideUp();
		}
	});

	$('input[type=radio][name=payment]').change(function(){
		console.log($(this))
		let attr = $(this).attr('data-toggle');
		if ($(this).prop('checked')) {
			$('[data-hidden]').not('#' + attr).slideUp();
			$('#' + attr).slideDown();
		} else {
			$('#' + attr).slideUp();
		}
	});

	$('input[type=radio][name="order-address-delivery"][data-toggle]').each(function(){
		let attr = $(this).attr('data-toggle');
		if ($(this).prop('checked')) {
			$('#' + attr).slideDown();
		} else {
			$('#' + attr).slideUp();
		}
	});

	$('input[type=radio][name="order-address-delivery"]').change(function(){
		console.log($(this))
		let attr = $(this).attr('data-toggle');
		if ($(this).prop('checked')) {
			$('[data-hidden]').not('#' + attr).slideUp();
			$('#' + attr).slideDown();
		} else {
			$('#' + attr).slideUp();
		}
	});

	//tabs
	$(".tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn();
		$('.tab').removeClass('active');
		$('.tabs .tab input[type=radio]').prop('checked', false);
		$(this).find('input[type=radio]').prop('checked', true);
		$(this).addClass('active');
	}).eq(0).addClass("active");

	$(document).mouseup( function(e){
		var div = $( ".select-dropdown.active" );
		if ( !div.is(e.target) && div.has(e.target).length === 0 ) {
			div.find('.dropdown').fadeOut();
			div.removeClass('active');
		}

		var div1 = $( ".cart-modal" );
		if ( !div1.is(e.target) && div1.has(e.target).length === 0 ) {
			div1.fadeOut();
		}

		var div2 = $('#app .page-product .product-top .options');
		if ( !div2.is(e.target) && div2.has(e.target).length === 0 ) {
			div2.fadeOut();
		}
	});

	$('.product-doping .item').click(function(e){
		console.log(e.target.closest('.qty-input'))
		if (e.target.closest('.qty-input')) return false;
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$(this).find('input[type=hidden]').val('1');
		} else {
			$(this).removeClass('active');
			$(this).find('input[type=hidden]').val('0');
		}
	});

	function hideShowMenu(e) {
		if (e && e.data && e.data.method == 'close') {
			$('.site-humburger').removeClass('active');
			$('.site-humburger').find('.site-humburger__button').removeClass('open');
			$('.overlay-menu').fadeOut();
			$('.modal-menu').fadeOut();
			return false;
		}
		if ($(e.target).closest('.modal-menu').length > 0) return false;
		$('.site-humburger').toggleClass('active');
		$('.site-humburger').find('.site-humburger__button').toggleClass('open');
		$('.overlay-menu').fadeToggle();
		$('.modal-menu').fadeToggle();
		hideModals();
	}

	$('.modal-menu__close').click(function(){
		hideShowMenu({
			data: {
				method: 'close',
			}
		})
	});

	$('.site-humburger').click(hideShowMenu);
	$('.overlay-menu').click(hideShowMenu);

	let timerSearchHeaderForm = null;
	$('.site-search__input').on('input keyup', function(){
		console.log($(this).val());
		$('#app .modal-menu__container').scrollTop(0)
		if ($(this).val().length >= 1) {
			clearTimeout(timerSearchHeaderForm);
			$('.site-search__loader').fadeIn();
			timerSearchHeaderForm = setTimeout(function(){
				$('.site-search__wrap').slideDown();
				$('.site-search__loader').fadeOut();
			}, 2000);
		} else {
			$('.site-search__wrap').slideUp();
		}
	});
	$('.site-search__input').on('focusin', function(e){
		let w = $(window).width();
		if (w < 568) return false;
		hideShowMenu({
			data: {
				'method' : 'close',
			},
		});
	});
	$('.site-search').hover(function(e){
		if ($('.site-search__input').val().length < 1) return false;
		if ($('.site-search__wrap').is(':visible')) return false;
		let w = $(window).width();
		if (w > 568) {
			hideShowMenu({
				data: {
					'method' : 'close',
				},
			});
		}
		$('.site-search__wrap').slideDown();
	},
	function(e){
		$('.site-search__wrap').slideUp();
	});

	$('#app .modal-menu__container').on('scroll', function(){
		$('.site-search__input').blur();
	});

	$('.menu-item .menu-item__qty').click(function(e) {
		let p = $(this).closest('.menu-item');
		console.log(e.target);
		if (e.target.closest('.qty-count--minus')) {
			let button = $(e.target.closest('.qty-count--minus'));
			if (button.is(":disabled")) {
				p.find('.menu-item__cart.btn-default').show();
				p.find('.menu-item__qty').hide();
			}
		}

	});

	$('.option-button-mobile').click(function() {
		$('#app .page-product .product-top .options').fadeToggle();
	})

	$('.overlay, .modal .modal-close').click(hideModals);

	$('.modal-overlay').click(function(e) {
		if (e.target.classList.contains('modal-overlay')) {
			$(this).fadeOut();
			$('body').css({
				'overflow-y' : 'scroll',
			});
		}
	});

	$('.modal-overlay .modal-close').click(function() {
		$(this).closest('.modal-overlay').fadeOut();
		$('body').css({
			'overflow-y' : 'scroll',
		});
	});

	$('[data-modal-overlay]').click(function() {
		let id = $(this).attr('data-modal-overlay');
		$('body').css({
			'overflow-y' : 'hidden',
		});
		$(id).css("display", "flex").fadeIn();
		return false;
	});

	function hideModals() {
		$('.modal, .overlay').fadeOut();
		$('body').removeAttr('style');
	}

	$('.mask-code-sms input').on('input keyup', function(){
		let id = $(this).attr('id');
		id = id.replace(/[^0-9]/g, "");
		let max = $(this).attr('maxlength');
		let val = $(this).val();
		if (val.length == max) {
			if (id != 4) {
				let nextID = ++id;
				//$('#mask-code-sms-' + nextID).removeAttr('disabled');
				$('#mask-code-sms-' + nextID).focus()
			} else {
				$('.modal-login__form-step-1 .next').removeAttr('disabled');
			}
		}
	});

	$('.modal-login__form-step-1 .next').click(function() {
		hideModals();
		$('.site-login__button').text('Кабинет');
		return false;
	});

	$('.site-login__button').click(function(){
		$('.overlay').fadeIn();
		$('.modal-login').fadeIn();
	});

	$('.site-map__open-address, .open-address--default').click(function(){
		let w = $(window).width();
		if (w > 576) {
			$('.overlay').fadeIn();
			$('.modal-address--default').fadeIn();
		} else {
			$('.modal-address--default').fadeIn();
			$('body').css({
				'overflow' : 'hidden'
			})
		}
	});

	let loginTimerCount = 60;
	let loginTimerTimeout = null;
	const loginTimer = function() {
		--loginTimerCount;
		if (loginTimerCount > 0) {
			$('.login-timer-button').attr('disabled', 'disabled');
			$('.login-timer-button').text('Получить новый код через ' + loginTimerCount + ' сек');
			loginTimerTimeout = setTimeout(loginTimer, 1000);
		} else {
			$('.login-timer-button').removeAttr('disabled');
			$('.login-timer-button').text('Получить новый код');

		}
	}


	const loginTimerTimeoutStart = function() {
		clearTimeout(loginTimerTimeout);
		loginTimerCount = 60;
		loginTimerTimeout = setTimeout(loginTimer, 1000);
	}

	const loginTimerTimeoutDefault = function () {
		clearTimeout(loginTimerTimeout);
		loginTimerCount = 60;
		$('.login-timer-button').text('Получить новый код через 60 сек');
	}

	$('.modal-login__form-step .next').click(function(){
		$('.modal-login__form-step').hide();
		$('.modal-login__form-step-1').fadeIn();
		loginTimerTimeoutStart();
		$('.modal-login__change-phone-item').text($('.modal-login__form-phone').val());
		return false;
	});

	$('.modal-login__change-phone-btn').click(function(){
		$('.modal-login__form-step').fadeIn();
		$('.modal-login__form-step-1').hide();
		loginTimerTimeoutDefault();
		return false;
	});

	$('.mask-cyrlic-js, [name=name]').on('input keyup', function() {
		$(this).val($(this).val().replace(/[^а-я]/,''));
	});
	$('.mask-card-number-js').inputmask("9999 9999 9999 9999 9999");
	$('.mask-card-date-js').inputmask("99/99");
	$('.mask-card-cvv-js').inputmask("999");
	$('.modal-login__form-phone').inputmask("+7 (999) 999-99-99");
	$('input[type=tel]').inputmask("+7 (999) 999-99-99");
	$('.modal-login__form-phone').on('input.mask', function(){
		let val = $('.modal-login__form-phone').val();
		val = val.replace(/[^0-9]/g,"");
		if (val.length < 11) {
			$('.modal-login__form-step .next').attr('disabled', 'disabled');
		} else {
			$('.modal-login__form-step .next').removeAttr('disabled');
		}
	});


	//notice

	window.notificationsItem = function(e) {
		if (e == undefined || e == null || e.data.title == undefined || e.data.text == undefined) return false;
		let options = {
			type: e.data.type ? e.data.type : 'success',
			title: e.data.title,
			text: e.data.text,
		}

		let template = $('<div class="notifications__item"><div class="notifications__inner"> <div class="notifications__icon"></div> <div class="notifications__block"> <div class="notifications__title"></div> <div class="notifications__body"></div> </div> </div> </div>')


		let iconSuccess = $('<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.9997 5.33398C17.2956 5.33398 5.33301 17.2962 5.33301 32.0007C5.33301 46.7051 17.2956 58.6673 31.9997 58.6673C46.7038 58.6673 58.6663 46.7051 58.6663 32.0007C58.6663 17.2962 46.7038 5.33398 31.9997 5.33398ZM52.5255 19.5563C54.7304 23.1828 55.9999 27.445 55.9999 32.0009C55.9999 36.5568 54.7304 40.8163 52.5255 44.4455C52.1246 45.1052 51.6917 45.7461 51.232 46.3603C50.7696 46.9772 50.2805 47.57 49.7647 48.1389C48.7331 49.2738 47.5919 50.3127 46.3598 51.2313C46.0525 51.4637 45.7371 51.6853 45.4191 51.9016C44.1416 52.7669 42.7785 53.5093 41.3407 54.1128C40.9826 54.2677 40.6191 54.4119 40.2529 54.5455C39.5153 54.8125 38.7643 55.0475 37.9972 55.2451C36.081 55.7392 34.0712 56.0009 31.9999 56.0009C18.7465 56.0009 7.99992 45.2547 7.99992 32.0009C7.99992 18.7471 18.7465 8.0009 31.9999 8.0009C34.0712 8.0009 36.081 8.26261 37.9972 8.75665C38.7643 8.95427 39.5153 9.18661 40.2529 9.459C40.6191 9.59253 40.9826 9.73407 41.3407 9.88628C42.7785 10.4925 44.1416 11.2376 45.4191 12.1001C45.7371 12.3165 46.0525 12.5381 46.3598 12.7705C47.5919 13.6918 48.7331 14.7253 49.7647 15.8629C50.2805 16.4317 50.7696 17.0273 51.232 17.6415C51.6917 18.2584 52.1246 18.8966 52.5255 19.5563ZM22.7099 31.5342L29.0441 37.8689L44.4927 22.4192L46.3804 24.3056L29.0441 41.6442L20.8221 33.4231L22.7099 31.5342Z" fill="#1D1D1B"/></svg>')
		let iconError = $('<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.9997 5.33398C17.2956 5.33398 5.33301 17.2962 5.33301 32.0007C5.33301 46.7051 17.2956 58.6673 31.9997 58.6673C46.7038 58.6673 58.6663 46.7051 58.6663 32.0007C58.6663 17.2962 46.7038 5.33398 31.9997 5.33398M52.5255 19.5563C54.7304 23.1828 55.9999 27.445 55.9999 32.0009C55.9999 36.5568 54.7304 40.8163 52.5255 44.4455C52.1246 45.1052 51.6917 45.7461 51.232 46.3603C50.7696 46.9772 50.2805 47.57 49.7647 48.1389C48.7331 49.2738 47.5919 50.3127 46.3598 51.2313C46.0525 51.4637 45.7371 51.6853 45.4191 51.9016C44.1416 52.7669 42.7785 53.5093 41.3407 54.1128C40.9826 54.2677 40.6191 54.4119 40.2529 54.5455C39.5153 54.8125 38.7643 55.0475 37.9972 55.2451C36.081 55.7392 34.0712 56.0009 31.9999 56.0009C18.7465 56.0009 7.99992 45.2547 7.99992 32.0009C7.99992 18.7471 18.7465 8.0009 31.9999 8.0009C34.0712 8.0009 36.081 8.26261 37.9972 8.75665C38.7643 8.95427 39.5153 9.18661 40.2529 9.459C40.6191 9.59253 40.9826 9.73406 41.3407 9.88628C42.7785 10.4925 44.1416 11.2376 45.4191 12.1001C45.7371 12.3165 46.0525 12.5381 46.3598 12.7705C47.5919 13.6918 48.7331 14.7253 49.7647 15.8629C50.2805 16.4317 50.7696 17.0273 51.232 17.6415C51.6917 18.2584 52.1246 18.8966 52.5255 19.5563" fill="#1D1D1B"/><path d="M33.5 17.9091L33.2159 38.8182H29.9205L29.6364 17.9091H33.5ZM31.5682 47.2273C30.8674 47.2273 30.2661 46.9763 29.7642 46.4744C29.2623 45.9725 29.0114 45.3712 29.0114 44.6705C29.0114 43.9697 29.2623 43.3684 29.7642 42.8665C30.2661 42.3646 30.8674 42.1136 31.5682 42.1136C32.2689 42.1136 32.8703 42.3646 33.3722 42.8665C33.8741 43.3684 34.125 43.9697 34.125 44.6705C34.125 45.1345 34.0066 45.5606 33.7699 45.9489C33.5426 46.3371 33.2348 46.6496 32.8466 46.8864C32.4678 47.1136 32.0417 47.2273 31.5682 47.2273Z" fill="black"/></svg>')

		if (options.type == 'success') {
			template.find('.notifications__icon').html(iconSuccess);
		} else {
			template.find('.notifications__icon').html(iconError);
		}

		template.find('.notifications__title').html(options.title);
		template.find('.notifications__body').html(options.text);

		$('.notifications__wrap').append(template);

		setTimeout(function(){
			template.fadeOut();
			setTimeout(()=>{
				template.remove();
			}, 2000);
		}, 5000);
	}

	notificationsItem({
		data: {
			title: 'Заказ оплачен',
			text: 'И уже готовится Детали в <a href="#">Личном кабинете</a>',
		}
	});

	//slider
	if (document.querySelector('.top-slider__container')) {
		const topSlider = new Swiper('.top-slider__container', {
			speed: 400,
			spaceBetween: 100,
			navigation: {
				nextEl: '.top-slider__next',
				prevEl: '.top-slider__prev',
			},
			pagination: {
			    el: '.swiper-pagination',
			    type: 'bullets',
			    clickable: true,
			},
		});
	}

	$('.modal-menu__left .subtitle').click(function(){
		let w = $(window).width();
		if (w > 575) return false;
		$(this).toggleClass('active');
		$('.modal-menu__left ul').slideToggle(300);
	})

	$('.loyalty-program-text .toggle').click(function() {
		let p = $(this).parent();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).text('Правила программы лояльности');
			p.find('.hidden').slideUp();
		} else {
			p.find('.hidden').slideDown();
			$(this).addClass('active');
			$(this).text('Скрыть правила программы лояльности');
		}
	})

});
