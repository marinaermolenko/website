let prevScrollPossition = window.pageYOffset;
let isMenuVisible = true;
let menuHideButton = document.getElementById("menuHideButton");
let menuShowButton = document.getElementById("menuShowButton")
let menuBlock = document.getElementsByClassName("menu")[0];
let viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
let mobileMenu = document.getElementsByClassName("mobile-menu")[0];

console.log(viewportwidth);


document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
																													// Если должен быть найден один элемент
});

function closeMobileMenu() {
	mobileMenu.classList.remove("mobile-menu-shown");
	menuShowButton.style.top = "0";
}

function hideMenu() {
	if(viewportwidth > 600) {
		if (isMenuVisible) {
			menuShowButton.style.top = "0";
			menuBlock.style.top = "-100%";
			isMenuVisible = false;
		} else {
			menuShowButton.style.top = "-100%";
			menuBlock.style.top = "0";
			isMenuVisible = true;
		}
	}
	else {
		console.log("i am here");
		mobileMenu.classList.add("mobile-menu-shown");
		menuShowButton.style.top = "-100%";
	}
}

window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
	if (currentScrollPos == 0) {
		console.log(viewportwidth);
		document.getElementById("menu").style.top = "0";
		if(viewportwidth > 600) {
			menuShowButton.style.top = "-100%";
		}
		isMenuVisible = true;
	} else {
		document.getElementById("menu").style.top = "-100%";
		console.log(viewportwidth);
		if(viewportwidth > 600) {
			menuShowButton.style.top = "0";
			isMenuVisible = false;
		}
	}
	prevScrollPossition = currentScrollPos;
};