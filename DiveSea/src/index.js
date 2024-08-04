import './index.html';
import './index.scss';

const nav = document.querySelector('.nav')
const hamburger = document.querySelector('.hamburger')

const body = document.body;

if (nav && hamburger) {
	hamburger.addEventListener('click', e => {
		nav.classList.toggle('_active')
		hamburger.classList.toggle('_active')
		body.classList.toggle('_lock')
	})

	nav.addEventListener('click', e => {
		if (e.target.classList.contains('hamburger')) {
			nav.classList.remove('_active')
			hamburger.classList.remove('_active')
			body.classList.remove('_lock')
		}
	})
}