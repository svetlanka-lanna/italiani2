$(document).ready(function(){
	$('.select-dropdown div.input').click(function(){
		let thx = $(this);
		thx.closest('.select-dropdown').find('.dropdown').slideToggle();
		thx.closest('.select-dropdown').toggleClass('active');
	});

	$('.select-dropdown .add').click(function(){
		let thx = $(this);
		let parent = thx.closest('.select-dropdown');
		let type = parent.attr('data-select');
		let dropdown = parent.find('.dropdown');
		let item = thx.closest('.item');
		let title = item.find('.title').text().trim();
		let input = parent.find('input');
		let selected = parent.find('div.input');

		if (type == 'single') {
			input.val(title);
			selected.text(title);
			selected.attr('data-title', title);
			parent.find('.options.active').removeClass('active');
			parent.find('.add').text('Выбрать');
			thx.parent().addClass('active');
			thx.text('Выбрано');
			//dropdown.slideUp();
			//parent.removeClass('active');
			thx.parent().find('.qty-input input').val('1');
		}
	});

	// $('.select-dropdown .options .qty-input .qty-count--minus, .select-dropdown .options .qty-input .qty-count--add').click(function() {
	// 	let thx = $(this);
	// 	let parent = thx.closest('.select-dropdown');
	// 	let type = parent.attr('data-select');
	// 	let input = parent.find('input');
	// 	let title = input.val().trim();
	// 	let selected = parent.find('div.input');

	// 	let inputQty = thx.parent().find('input');

	// 	console.log($(this).val())
	// 	if (type == 'single') {
	// 		input.val(title + ' x' + inputQty.val());
	// 		selected.text(title + ' x' + inputQty.val());
	// 	}
	// });
});
