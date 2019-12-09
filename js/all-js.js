//----------> Portfolio <-------- //
// sticky
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-150px";
	}
}
// menu- responsive (portfolio)
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

// end sticky 
window.onscroll = function() {scrollFunctions()};
function scrollFunctions() {
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
		document.getElementById("navbar-1").style.top = "0";
	} else {
		document.getElementById("navbar-1").style.top = "-150px";
	}
}
// menu- responsive (cô tô)
	function openNava() {
	document.getElementById("mySidenav-1").style.width = "250px";
}

function closeNava() {
	document.getElementById("mySidenav-1").style.width = "0";
}

// slick-slider buffet

