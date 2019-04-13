(function(){
 "use strict"; 
  $("#show").on("click",function(){
	$(".drapdown-nav").toggle();
 })	

 var oSbox = document.querySelector("#sc381642");
		var oBbox = document.querySelector("#bc381642");
		var oBimg = document.getElementById("sim642");
		oSbox.addEventListener("mouseover",function(){
			oBbox.style.display = "block";
			oSbox.addEventListener("mousemove",function(eve){
				var e = eve || window.event
				var l = e.offsetX - oSbox.offsetLeft;
				var t = e.offsetY - oSbox.offsetTop;
				if(l<0) l=0;
				if(t<0) t=0;
				if(l>oSbox.offsetWidth){
					l = oSbox.offsetWidth
				}
				if(t>oSbox.offsetHeight){
					t = oSbox.offsetHeight;
				}
				var x = l / oSbox.offsetWidth;
				var y = t / oSbox.offsetHeight;
				oBimg.style.left = -(oBimg.offsetWidth - oBbox.offsetWidth) * x + "px";
				oBimg.style.top = -(oBimg.offsetHeight - oBbox.offsetHeight) * y + "px";
				
			})
		})
		oSbox.addEventListener("mouseout",function(){
			// oPbox.style.display = "none"
			oBbox.style.display = "none"
		})
		

		var ali = document.querySelectorAll("#goodesItems li");
        var ap = document .getElementById("sc381642")
		for(var i=0;i<ali.length;i++){
			ali[i].index = i;
			ali[i].onclick = function(){
			 $(ap).attr("src")=$(ali[i]).attr("bimg")
			 console.log(ai[i];)
			}
		}
})()