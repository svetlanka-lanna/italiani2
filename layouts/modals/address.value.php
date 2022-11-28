<div class="modal modal-address modal-address--value">
	<div class="modal-close">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#3F394F"/>
			<path d="M6.96967 6.96967C7.26256 6.67678 7.73744 6.67678 8.03033 6.96967L12 10.9393L15.9697 6.96967C16.2626 6.67678 16.7374 6.67678 17.0303 6.96967C17.3232 7.26256 17.3232 7.73744 17.0303 8.03033L13.0607 12L17.0303 15.9697C17.3232 16.2626 17.3232 16.7374 17.0303 17.0303C16.7374 17.3232 16.2626 17.3232 15.9697 17.0303L12 13.0607L8.03033 17.0303C7.73744 17.3232 7.26256 17.3232 6.96967 17.0303C6.67678 16.7374 6.67678 16.2626 6.96967 15.9697L10.9393 12L6.96967 8.03033C6.67678 7.73744 6.67678 7.26256 6.96967 6.96967Z" fill="#3F394F"/>
		</svg>
	</div>
	<div class="modal-container">
		<div class="row">
			<div class="col-sm-6 modal-address__left">
				<div class="title">Адрес доставки</div>
				<form>
					<div class="row">
						<div class="col-8">
							<input type="text" class="form-control" placeholder="Улица*" value="ул. Кременчугская" required>
						</div>
						<div class="col-4">
							<input type="text" placeholder="Дом*" class="form-control" value="13" required>
						</div>
					</div>
					<div class="row">
						<div class="col-3">
							<input type="text" required placeholder="Кв. / офис*" value="8" class="form-control">
						</div>
						<div class="col-3">
							<input type="text" placeholder="Подъезд" value="7" class="form-control">
						</div>
						<div class="col-3">
							<input type="text" placeholder="Код двери" class="form-control">
						</div>
						<div class="col-3">
							<input type="text" placeholder="Этаж" value="20" class="form-control">
						</div>
					</div>
					<div class="row">
						<div class="col-12">
							<div class="modal-address__notice">
								<div class="modal-address__notice-success">
									Доставка по вашему адресу доступна! <br>
									Минимальная сумма доставки - 800 руб.
								</div>
								<div class="modal-address__notice-error">
									Мы ещё не доставляем на этот адрес. Позвоните нам, возможно, мы найдём другие варианты доставки <a href="tel:79219066334">+7 (921) 906-63-34</a> 
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12">
							<input type="text" placeholder="Название адреса" value="Работа" class="form-control">
						</div>
						<div class="modal-address__notice">
							<div class="modal-address__notice-default">
								Например, <span>Дом</span> или <span>Работа</span>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12">
							<textarea name="" id="" class="form-control" placeholder="Комментарий к адресу">ул. Кременчугская, д. 13, последний подъезд, последний этаж, кв. 8
							</textarea>
						</div>
					</div>
					<button type="submit">Сохранить адрес</button>
				</form>
			</div>
			<div class="col-sm-6 modal-address__right">
				<div class="title">Зоны доставки</div>
				<div class="map">
					<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9c1bf496d772a749313ee01e65a76f6a8b8e6dfc205774130860900f5275c372&amp;source=constructor" width="100%" height="260" frameborder="0"></iframe>
				</div>
			</div>
		</div>
	</div>
</div>