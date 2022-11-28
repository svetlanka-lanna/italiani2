<form id="order-delivery">
	<div class="row form-line">
		<div class="col-sm-4">
			<label for="name">Как вас зовут?</label>
		</div>
		<div class="col-sm-8">
			<input type="text" name="name" class="form-control">
		</div>
	</div>
	<div class="row form-line">
		<div class="col-sm-4">
			<label for="name">Ваш номер телефона</label>
		</div>
		<div class="col-sm-8">
			<input type="tel" name="phone" class="form-control" placeholder="+7 (999) 999-99-99">
		</div>
	</div>

	<div class="tab_content">
        <div class="tab_item">
        	<div class="row form-line">
				<div class="col-sm-4">
					<label for="name">Адрес доставки</label>
				</div>
				<div class="col-sm-8">
					<div class="old-address open-address--value">
						<div class="text">
							Кременчугская, 13
						</div>
						<div class="change">
							Изменить
						</div>
					</div>
					<div class="new-address open-address--new">Указать новый адрес</div>
				</div>
			</div>
        </div>
        <div class="tab_item">
        	<div class="row form-line">
				<div class="col-sm-4">
					<label for="name">Адрес доставки</label>
				</div>
				<div class="col-sm-8 pickup-address">
					<div class="old-address">
						<div class="text">
							Невский пр., 65, метро Маяковская
						</div>
						<div class="change open-address--pickup">
							Изменить
						</div>
					</div>
					<div class="new-address open-address--pickup">Выбрать ресторан</div>
				</div>
			</div>
        </div>
    </div>

		<div class="row form-line">
			<div class="col-sm-4">
				<label for="name">Дата доставки</label>
			</div>
			<div class="col-sm-8">
				<input type="text" readonly name="date-delivery" class="form-control" placeholder="Выберите дату">
			</div>
		</div>

	<div class="row form-line">
		<div class="col-sm-4">
			<label for="name">Время доставки</label>
		</div>
		<div class="col-sm-8">
			<div class="time-delivery time-delivery--open">
				<input type="hidden" value="0" name="time-delivery">
				<div class="time-delivery__checked">Побыстрее</div>
				<div class="time-delivery__change">Изменить</div>
			</div>
		</div>
	</div>

	<div class="row form-line">
		<div class="col-sm-4">
			<label for="name">Комментарий для ресторана</label>
		</div>
		<div class="col-sm-8">
			<textarea name="comment" class="form-control"></textarea>
		</div>
	</div>

	<div class="payment">
		<div class="title">Способы оплаты</div>
		<div class="form-radio">
			<input type="radio" data-toggle="card-form-1" name="payment" id="payment-card" value="card" checked>
			<label for="payment-card">Онлайн-оплата</label>
		</div>
		<div id="card-form-1" data-hidden="payment-card" class="card-form">
			<input type="text" class="form-control" placeholder="Номер карты" name="card-number">
			<div class="row">
				<div class="col-6">
					<input type="text" placeholder="Срок действия" name="card-date" class="form-control">
				</div>
				<div class="col-6">
					<input type="text" placeholder="CVV" name="card-cvv" class="form-control">
				</div>
			</div>
		</div>
		<div class="form-radio">
			<input type="radio" name="payment" id="payment-card-courier" value="card-courier">
			<label for="payment-card-courier">Картой курьеру</label>
		</div>
		<div class="form-radio">
			<input type="radio" name="payment" id="payment-cash" data-toggle="card-form-2" value="cash">
			<label for="payment-cash">Наличными</label>
		</div>
		<div id="card-form-2" data-hidden="payment-cash" class="card-form">
			<input type="text" class="form-control" placeholder="С какой суммы дать сдачу" name="summ">
		</div>
		<div class="total">
			<div class="row">
				<div class="col-8 total__left">
					<div class="spend-bonus">Потратить 1200 баллов</div>
					<div class="all-bonus">Накоплено 1654 </div>
				</div>
				<div class="col-4 total__right">
					<label class="switch" for="checkbox">
					    <input type="checkbox" checked id="checkbox">
					    <div class="slider round"></div>
					</label>
				</div>
			</div>
		</div>
	</div>

	<div class="total">
		<div class="row">
			<div class="col-8 total-left">
				<div class="title">К оплате</div>
				<div class="text">
					Будет накоплено баллов:
					<span>81</span>
				</div>
			</div>
			<div class="total-right col-4">
				<div class="price">1200 баллов.</div>
			</div>
		</div>
	</div>

	<div class="order-delivery-submit">
		<button type="submit">Оплатить 2 400 руб.</button>
	</div>

</form>
