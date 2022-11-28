$(document).ready(function(){
	$('.cart td.remove img').click(function(){
		$(this).closest('tr').remove();
	});

	$('.delete-all-cart').click(function(){
		$('.overlay').fadeIn();
		$('.modal-clearcart').fadeIn();
	});

	$('.modal-clearcart .success').click(function(){
		$('form#cart-form').remove();
		$('.modal, .overlay').fadeOut();
		$('body').removeAttr('style');
		$('.delete-all-cart').hide();
	});

	$('.modal-clearcart .btn.close').click(function(){
		$('.modal, .overlay').fadeOut();
		$('body').removeAttr('style');
	});
});