const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close'),
	overlayElwm = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

overlayElwm.addEventListener('click', () => {
	menu.classList.remove('active');
});