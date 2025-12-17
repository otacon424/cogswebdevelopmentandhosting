// Countdown script for launch page
(function(){
	// Set your launch date here (ISO format). Update as needed.
	const launchDate = new Date('2026-02-01T00:00:00Z');

	const $days = document.getElementById('days');
	const $hours = document.getElementById('hours');
	const $minutes = document.getElementById('minutes');
	const $seconds = document.getElementById('seconds');
	const $countdown = document.getElementById('countdown');
	const $launchMessage = document.getElementById('launch-message');
	const $form = document.getElementById('notify-form');
	const $email = document.getElementById('email');
	const $status = document.getElementById('notify-status');

	function update() {
		const now = new Date();
		const diff = launchDate - now;

		if (diff <= 0) {
			clearInterval(timer);
			$countdown.classList.add('hidden');
			$launchMessage.classList.remove('hidden');
			$status.textContent = '';
			return;
		}

		const secs = Math.floor(diff / 1000);
		const days = Math.floor(secs / (3600 * 24));
		const hours = Math.floor((secs % (3600 * 24)) / 3600);
		const minutes = Math.floor((secs % 3600) / 60);
		const seconds = secs % 60;

		$days.textContent = String(days);
		$hours.textContent = String(hours).padStart(2,'0');
		$minutes.textContent = String(minutes).padStart(2,'0');
		$seconds.textContent = String(seconds).padStart(2,'0');
	}

	const timer = setInterval(update,1000);
	update();

	// Mock notify form - replace with real backend when ready
	$form.addEventListener('submit', function(e){
		e.preventDefault();
		const email = $email.value.trim();
		if (!email) {
			$status.textContent = 'Please enter a valid email.';
			return;
		}
		$status.textContent = 'Thanks! We will notify you when we launch.';
		$email.value = '';
	});
})();
