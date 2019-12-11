// Menu-Noel
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("noel").style.marginRight = "250px";
	document.getElementById("rsp").style.display = "block";
	
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("noel").style.marginRight= "0";
	document.getElementById("rsp").style.display = "none";
}

var blac = document.getElementById("rsp");
blac.onclick = function(){
	closeNav();}

//đổi ảnh banner 
	var click =0;
	function myFunction2()
	{
		document.getElementById("myImg").src = click%2==0?"images/1976.jpg":"images/1974.jpg";
		click++;
	}
	// var btn = getElementById('btn');
	// var nav = getElementById('mySidenav');

	// function show(){
	// 	nav.classList.toggle('.none');
	// }

	// btn.onclick = function(){
	// 	show();
	// }