function openMenu() {
    document.getElementById("sideMenu").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
}
function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "rgba(245,245,245,1.0)";
}
window.addEventListener("load", function() { 
	var openButton = document.getElementById("openDialogButton");
	var closeButton = document.getElementById("closeDialogButton");
	var dialogBox = document.getElementById("dialogBox");

	openButton.onclick = function() {
		document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.2)";
		dialogBox.show();
	};
	closeButton.onclick = function() {
		document.getElementById("main").style.backgroundColor = "rgba(245,245,245,1.0)";
		dialogBox.close();
	};
});