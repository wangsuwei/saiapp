function rem(){
	document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+"px"
}
rem();
window.onresize=rem;