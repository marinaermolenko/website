let prevScrollPossition = window.pageYOffset;
let isMenuVisible = true;
const menuHideButton = document.getElementById("menuHideButton");
const menuShowButton = document.getElementById("menuShowButton")
const menuBlock = document.getElementsByClassName("menu")[0];
const viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
const mobileMenu = document.getElementsByClassName("mobile-menu")[0];

console.log(viewportwidth);


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