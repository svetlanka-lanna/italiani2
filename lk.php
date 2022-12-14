<?php include_once('layouts/header.php'); ?>

<main class="site-main page-personal">
	<div class="container">
		<div class="row">
			<div class="col-lg-8">
				<div class="personal-container">
					<div class="personal-header">
						<h1>Привет, Константин!</h1>
						<div class="personal-header__bonus">5 000 бонусов</div>
					</div>
					<div class="title">Личные данные</div>
					<form class="form-change">
						<div class="row">
							<div class="col-sm-4 d-flex align-items-center">
								<label for="change-name">Ваше имя</label>
							</div>
							<div class="col-sm-8">
								<div class="form-change__input">
									<input type="text" id="change-name" data-saved="Константин" name="name" class="form-control" disabled value="Константин">
									<div class="form-change__input--change">
										Изменить
									</div>
									<button type="submit">Сохранить</button>
									<div class="form-change__input--cancel">Отменить изменения</div>
								</div>
							</div>
						</div>
					</form>
					<form class="form-change">
						<div class="row">
							<div class="col-sm-4 d-flex align-items-center">
								<label for="change-name">Номер телефона</label>
							</div>
							<div class="col-sm-8">
								<div class="form-change__input">
									<input type="tel" id="change-phone" data-saved="+7 (919) 111-22-33" name="name" class="form-control" disabled value="+7 (919) 111-22-33">
									<div class="icon" data-modal="#modal-phone-notice">
										<img src="img/info-circle-fill.svg" alt="">
									</div>
								</div>
							</div>
							<div class="col-sm-4"></div>
							<div class="col-sm-8">
								<label for="mail-news" class="form-checkbox">
									<input type="checkbox" id="mail-news" checked>
									Не звонить для подтверждения заказа
								</label>
							</div>
						</div>
					</form>
					<form class="form-change">
						<div class="row">
							<div class="col-sm-4 d-flex align-items-center">
								<label for="change-name">Электронная почта</label>
							</div>
							<div class="col-sm-8">
								<div class="form-change__input">
									<input type="email" id="change-name" data-saved="theverylongemailaddress@icloud.com" name="email" class="form-control" disabled value="theverylongemailaddress@icloud.com">
									<div class="form-change__input--change">
										Изменить
									</div>
									<button type="submit">Сохранить</button>
									<div class="form-change__input--cancel">Отменить изменения</div>
								</div>
							</div>
							<div class="col-sm-4"></div>
							<div class="col-sm-8">
								<label for="mail-news" class="form-checkbox">
									<input type="checkbox" id="mail-news" checked>
									Получать наши предложения на почту
								</label>
							</div>
						</div>
					</form>
					<div class="border-block"></div>
					<div class="title">Адреса</div>
					<form class="form-change">
						<div class="row">
							<div class="col-sm-4 d-flex align-items-center">
								<label for="change-name">Дом</label>
							</div>
							<div class="col-sm-8">
								<div class="form-change__input">
									<input type="text" id="change-name" data-saved="ул. Кременчугская, д. 13, последний подъезд, последний этаж, кв. 8 " name="email" class="form-control" disabled value="ул. Кременчугская, д. 13, последний подъезд, последний этаж, кв. 8 ">
									<div class="form-change__input--change">
										Изменить
									</div>
									<button type="submit">Сохранить</button>
									<div class="form-change__input--cancel">Отменить изменения</div>
								</div>
							</div>
							<div class="col-sm-4"></div>
							<div class="col-sm-8">
								<div class="add open-address--new">
									+ Добавить новый адрес
								</div>
							</div>
						</div>
					</form>
					<div class="border-block"></div>
					<div class="title">Карты</div>
					<div class="personal-card">
						<div class="personal-card__inner">
							<div class="personal-card__item">
								<div class="block">
									<div class="icon">
										<img src="img/MasterCard.png" alt="">
									</div>
									<div class="text">4400 1200 0000 6120</div>
								</div>
								<div class="change">Изменить</div>
							</div>
							<form class="form-card">
								<div class="row">
									<div class="col-12">
										<input type="text" name="card" placeholder="Номер карты" value="4400 1200 0000 6120" class="form-control mask-card-number-js">
									</div>
									<div class="col-6">
										<input type="text" name="date" class="form-control mask-card-date-js" placeholder="Срок действия" value="11/30">
									</div>
									<div class="col-6">
										<input type="text" name="CVV" placeholder="CVV" value="321" class="form-control mask-card-cvv-js">
									</div>
								</div>
								<div class="row">
									<div class="col-6">
										<button type="submit">Сохранить</button>
									</div>
									<div class="col-6">
										<div class="cancel">Отмена</div>
									</div>
								</div>
							</form>
						</div>
						<div class="personal-card__inner">
							<div class="add change">+ Добавить новую карту</div>
							<form class="form-card">
								<div class="row">
									<div class="col-12">
										<input type="text" class="mask-card-number-js form-control" name="card" placeholder="Номер карты">
									</div>
									<div class="col-6">
										<input type="text" name="date" class="form-control mask-card-date-js" placeholder="Срок действия">
									</div>
									<div class="col-6">
										<input type="text" name="CVV" placeholder="CVV" class="form-control mask-card-cvv-js">
									</div>
								</div>
								<div class="row">
									<div class="col-6">
										<button type="submit">Сохранить</button>
									</div>
									<div class="col-6">
										<div class="cancel">Отмена</div>
									</div>
								</div>
							</form>
						</div>
					</div>

					<div class="title">Более 1 карты</div>
					<div class="personal-card">
						<div class="d-flex">
							<div class="form-radio">
								<input type="radio" name="card-more" id="card-8977" checked value="8977">
								<label for="card-8977"></label>
							</div>
							<div class="personal-card__inner">
								<div class="personal-card__item">
									<div class="block">
										<div class="icon">
											<img src="img/MasterCard.png" alt="">
										</div>
										<div class="text">4400 1200 0000 6120</div>
									</div>
									<div class="change">Изменить</div>
								</div>
								<form class="form-card">
									<div class="row">
										<div class="col-12">
											<input type="text" name="card" placeholder="Номер карты" value="4400 1200 0000 6120" class="form-control mask-card-number-js">
										</div>
										<div class="col-6">
											<input type="text" name="date" class="form-control mask-card-date-js" placeholder="Срок действия" value="11/30">
										</div>
										<div class="col-6">
											<input type="text" name="CVV" placeholder="CVV" value="321" class="form-control mask-card-cvv-js">
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<button type="submit">Сохранить</button>
										</div>
										<div class="col-6">
											<div class="cancel">Отмена</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div class="d-flex">
							<div class="form-radio">
								<input type="radio" name="card-more" id="card-8997" value="8997">
								<label for="card-8997"></label>
							</div>
							<div class="personal-card__inner">
								<div class="personal-card__item">
									<div class="block">
										<div class="icon">
											<img src="img/MasterCard.png" alt="">
										</div>
										<div class="text">4400 1200 0000 6120</div>
									</div>
									<div class="change">Изменить</div>
								</div>
								<form class="form-card">
									<div class="row">
										<div class="col-12">
											<input type="text" name="card" placeholder="Номер карты" value="4400 1200 0000 6120" class="form-control mask-card-number-js">
										</div>
										<div class="col-6">
											<input type="text" name="date" class="form-control mask-card-date-js" placeholder="Срок действия" value="11/30">
										</div>
										<div class="col-6">
											<input type="text" name="CVV" placeholder="CVV" value="321" class="form-control mask-card-cvv-js">
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<button type="submit">Сохранить</button>
										</div>
										<div class="col-6">
											<div class="cancel">Отмена</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="border-block"></div>
				</div>
			</div>
			<div class="col-lg-4 d-none d-sm-block">
				<a href="loyalty-program.php" target="_blank">
					<img src="img/layaliti-image.png" class="img-responsive" alt="">
				</a>
			</div>
		</div>
		<div class="row">
			<div class="d-flex purchase-header align-items-center justify-content-between">
				<div class="title">История заказов</div>
				<a href="purchase.php" class="add">Показать все</a>
			</div>
			<div class="purchase-empty mb-2">
				<p>
					Вы ещё ничего не заказывали. Посмотрите, что есть в <a href="index.php">Меню</a>.
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-6">
				<div class="purchase-item">
					<div class="purchase-item__header">
						<div class="d-flex align-items-center justify-content-between">
							<div class="purchase-item__id">#3</div>
							<div class="purchase-item__status green">
								Доставлен
							</div>
						</div>
						<div class="purchase-item__date">
							05.06.2022, 11:03
						</div>
					</div>
					<div class="purchase-item__main-mobile">
						<img src="img/purchase/2.png" alt="">
						<div class="block">
							<div class="time">
								05.06.2022, 11:03
							</div>
							<div class="text">
								Капрезе; Пицца Маргарита 24 см; Паста Болоньезе (сп...
							</div>
						</div>
					</div>
					<div class="purchase-item__main">
						<div class="purchase-item__delivery">Доставка как можно скорее</div>
						<div class="purchase-item__address">
							ул. Кременчугская, д. 13, последний подъезд, последний этаж, кв. 8
						</div>
						<div class="purchase-item__gallery">
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/1.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/2.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/3.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/1.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/2.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/3.png" alt="">
							</div>
						</div>
					</div>
					<div class="purchase-item__footer">
						<div class="d-flex align-items-center justify-content-between">
							<div class="purchase-item__sum">Сумма заказа</div>
							<div class="purchase-item__total">1 490 руб.</div>
						</div>
						<div class="purchase-item__btn" data-modal="#purchase-1234">Детали заказа</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="purchase-item">
					<div class="purchase-item__header">
						<div class="d-flex align-items-center justify-content-between">
							<div class="purchase-item__id">#3</div>
							<div class="purchase-item__status">
								Доставлен
							</div>
						</div>
						<div class="purchase-item__date">
							05.06.2022, 11:03
						</div>
					</div>
					<div class="purchase-item__main-mobile">
						<img src="img/purchase/3.png" alt="">
						<div class="block">
							<div class="time">
								05.06.2022, 11:03
							</div>
							<div class="text">
								Капрезе; Пицца Маргарита 24 см; Паста Болоньезе (сп...
							</div>
						</div>
					</div>
					<div class="purchase-item__main">
						<div class="purchase-item__delivery">Доставка как можно скорее</div>
						<div class="purchase-item__address">
							ул. Кременчугская, д. 13, последний подъезд, последний этаж, кв. 8
						</div>
						<div class="purchase-item__gallery">
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/1.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/2.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/3.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/1.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/2.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/3.png" alt="">
							</div>
						</div>
					</div>
					<div class="purchase-item__footer">
						<div class="d-flex align-items-center justify-content-between">
							<div class="purchase-item__sum">Сумма заказа</div>
							<div class="purchase-item__total">1 490 руб.</div>
						</div>
						<a href="cart.php" class="purchase-item__btn">Повторить</a>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="purchase-item">
					<div class="purchase-item__header">
						<div class="d-flex align-items-center justify-content-between">
							<div class="purchase-item__id">#3</div>
							<div class="purchase-item__status red">
								Отменён
							</div>
						</div>
						<div class="purchase-item__date">
							05.06.2022, 11:03
						</div>
					</div>
					<div class="purchase-item__main-mobile">
						<img src="img/purchase/1.png" alt="">
						<div class="block">
							<div class="time">
								05.06.2022, 11:03
							</div>
							<div class="text">
								Капрезе; Пицца Маргарита 24 см; Паста Болоньезе (сп...
							</div>
						</div>
					</div>
					<div class="purchase-item__main">
						<div class="purchase-item__delivery">Доставка как можно скорее</div>
						<div class="purchase-item__address">
							ул. Кременчугская, д. 13, последний подъезд, последний этаж, кв. 8
						</div>
						<div class="purchase-item__gallery">
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/1.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/2.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/3.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/1.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/2.png" alt="">
							</div>
							<div class="purchase-item__gallery-item">
								<img src="img/purchase/3.png" alt="">
							</div>
						</div>
					</div>
					<div class="purchase-item__footer">
						<div class="d-flex align-items-center justify-content-between">
							<div class="purchase-item__sum">Сумма заказа</div>
							<div class="purchase-item__total">1 490 руб.</div>
						</div>
						<a href="cart.php" class="purchase-item__btn">Повторить</a>
					</div>
				</div>
			</div>
		</div>
		<div class="border-block"></div>
		<div class="col-12 d-sm-none">
			<div class="title">
				Карта лояльности
			</div>
			<a href="loyalty-program.php" target="_blank">
				<img src="img/layaliti-image.png" class="img-responsive" alt="">
			</a>
		</div>
	</div>
</main>

<?php include_once('layouts/footer.php'); ?>
