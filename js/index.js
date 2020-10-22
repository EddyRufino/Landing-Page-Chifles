function imgSlider(anything) {
	document.querySelector('.pepsi').src = anything;
}

function changeWords(two, three) {
	let span = document.querySelector('.two');
	let p = document.querySelector('.three');

	span.innerText = two;
	p.innerText = three;
}

function changeColor(color) {
	const sec = document.querySelector('.sec');
	sec.style.background = color;
}

const menuToggle = document.querySelector('.toggleMenu');

const nav = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {

    if (nav.className != 'active') {nav.className = 'active';}

    else {nav.className = '';}

});

// Click y cerrar menu responsi
const link = document.querySelector('ul');

link.addEventListener('click', () => {

	nav.className = 'XDD';

});

// Menu select
let marker = document.querySelector('#marker');
let item = document.querySelectorAll('ul li a');

function indicator(e) {
	marker.style.left = e.offsetLeft+"px";
	marker.style.width = e.offsetWidth+"px";
}

item.forEach(link => {
	link.addEventListener('click', (e) => {
		indicator(e.target);
		// console.log('xD');
	})
})

// Menu scroll
window.addEventListener('scroll', function () {
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

// Year
const footerYear = document.querySelector('.Footer-year')

footerYear.textContent = new Date().getFullYear()