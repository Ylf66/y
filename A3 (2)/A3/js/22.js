//滚动事件
window.onload = function(){
var top = 0 ;
var box1 = document.querySelector(".box1");

window.onscroll = function(){
	//console.log("触发了滚动事件");
	//获取滚动条距离顶部的位置
	top = document.documentElement.scrollTop || document.body.scrollTop;
	console.log(top);
	if(top>=1600){
		console.log(box1);
		box1.style.display = "block";
	}else{
		box1.style.display = "none";
	}
}
box1.onclick = function(){
	console.log(top);
	var t = setInterval(function(){
		top=parseInt(top*0.7);
		document.documentElement.scrollTop=document.body.scrollTop=top;
		if(top==0){
			clearInterval(t);
		}
	},100)
	
}

}
