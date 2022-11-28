<div class="overlay-menu"></div>
<div class="overlay"></div>

<div class="modal modal-login">
	<div class="modal-close">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#3F394F"/>
			<path d="M6.96967 6.96967C7.26256 6.67678 7.73744 6.67678 8.03033 6.96967L12 10.9393L15.9697 6.96967C16.2626 6.67678 16.7374 6.67678 17.0303 6.96967C17.3232 7.26256 17.3232 7.73744 17.0303 8.03033L13.0607 12L17.0303 15.9697C17.3232 16.2626 17.3232 16.7374 17.0303 17.0303C16.7374 17.3232 16.2626 17.3232 15.9697 17.0303L12 13.0607L8.03033 17.0303C7.73744 17.3232 7.26256 17.3232 6.96967 17.0303C6.67678 16.7374 6.67678 16.2626 6.96967 15.9697L10.9393 12L6.96967 8.03033C6.67678 7.73744 6.67678 7.26256 6.96967 6.96967Z" fill="#3F394F"/>
		</svg>
	</div>
	<div class="modal-container">
		<div class="title">Вход в личный кабинет</div>
		<p>
			Код подтверждения будет выслан в <strong>WhatsApp</strong>, при его отсутствии — в виде SMS.
		</p>
		<form class="modal-login__form-step modal-login__form">
			<input type="text" placeholder="+7 (___) ___-__-__" class="form-control modal-login__form-phone">
			<button type="submit" class="next" disabled>Выслать код</button>
		</form>
		<form class="modal-login__form-step-1 modal-login__form">
			<div class="modal-login__change-phone">
				<div class="modal-login__change-phone-item">+7 (919) 111-22-33</div>
				<div class="modal-login__change-phone-btn">Изменить</div>
			</div>
			<div class="mask-code-sms">
				<div class="mask-code-sms_item">
					<input type="text" id="mask-code-sms-1" maxlength="1" minlength="1">
				</div>
				<div class="mask-code-sms_item">
					<input type="text" id="mask-code-sms-2" maxlength="1" minlength="1">
				</div>
				<div class="mask-code-sms_item">
					<input type="text" id="mask-code-sms-3" maxlength="1" minlength="1">
				</div>
				<div class="mask-code-sms_item">
					<input type="text" id="mask-code-sms-4" maxlength="1" minlength="1">
				</div>
			</div>
			<input type="hidden" name="codeSMS">
			<button type="submit" class="next" disabled>Продолжить</button>
			<button type="submit" class="login-timer-button" disabled>Получить новый код через 60 сек</button>
		</form>
		<div class="policy">
			<p>Продолжая, вы соглашаетесь <a href="#" target="_blank">со сбором и обработкой персональных данных</a> и <a href="#" target="_blank">пользовательским соглашением</a></p>
		</div>
	</div>
</div>
<div class="container">
	<div class="notifications">
		<div class="notifications__wrap"></div>
	</div>
</div>

<!-- modal clear cart -->
<?php include_once('layouts/modals/clearcart.php'); ?>

<!-- modal time order -->
<?php include_once('layouts/modals/timeordermodal.php'); ?>

<!-- modal-address -->
<?php include_once('layouts/modals/address.default.php'); ?>
<?php include_once('layouts/modals/address.value.php'); ?>
<?php include_once('layouts/modals/address.new.php'); ?>
<?php include_once('layouts/modals/address.pickup.php'); ?>


<?php include_once('layouts/modals/purchase.modal.php'); ?>


<?php include_once('layouts/modals/phone.notice.php'); ?>

<?php include_once('layouts/modals/modals.modifiers.php'); ?>
