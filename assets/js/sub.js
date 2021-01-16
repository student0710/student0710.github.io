// Signup Form.
(function () {

	// Vars.
	var $form = document.querySelectorAll('#passwd-form')[0]
		, $submit = document.querySelectorAll('#passwd-form input[type="submit"]')[
			0]
		, $message;

	// Bail if addEventListener isn't supported.
	if (!('addEventListener' in $form))
		return;

	// Message.
	$message = document.createElement('span');
	$message.classList.add('message');
	$form.appendChild($message);

	$message._show = function (type, text) {

		$message.innerHTML = text;
		$message.classList.add(type);
		$message.classList.add('visible');

		window.setTimeout(function () {
			$message._hide();
		}, 1000);

	};

	$message._hide = function () {
		$message.classList.remove('visible');
	};

	// Events.
	// Note: If you're *not* using AJAX, get rid of this event listener.
	$form.addEventListener('submit', function (event) {

		event.stopPropagation();
		event.preventDefault();

		// Hide message.
		$message._hide();

		// Disable submit.
		$submit.disabled = true;

		// Process form.
		// Note: Doesn't actually do anything yet (other than report back with a "thank you"),
		// but there's enough here to piece together a working AJAX submission call that does.
		window.setTimeout(function () {

            const passwd = 'masakimaron0710';
			// Show message.
			if ($message == passwd) {
				$message._show('成功', '成功しました。3秒後にメインページに移動します');
				$submit.disabled = false;
				$form.reset();
			} else {
				$message._show('失敗', 'パスワードの認証に失敗しました');
				$submit.disabled = false;
				$form.reset();
			}
		}, 0);

	});

})();