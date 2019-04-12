(function(){
	"use strict";
	// -------banner--------
	var index = 1;
	var timer=setInterval(()=>{
		if(index<4){
			$(".slides li").fadeOut(500).eq(index).fadeIn(500);
		index++;
	}else{
			$(".slides li").fadeOut(500).eq(index).fadeIn(500);
			index=0;
		}
	},10000);	
  $(".circle").children("li").on("click",function(){
			var circle=$(".circle li").index(this);
			$(".slides li").fadeOut(100).eq(circle).fadeIn(100)	
	})
  $(".flexslide").hover(function(){
    clearInterval(timer)
	},function(){
		setInterval(()=>{
			if(index<4){
				$(".slides li").fadeOut(500).eq(index).fadeIn(500);
			index++;}else{
				$(".slides li").fadeOut(500).eq(index).fadeIn(500);
				index=0;
			}
		},10000);	
	})
//-----------------floorLinks--------
$(".floorTabHead").find("a").click(function(){
	$(this).addClass("hover").siblings().removeClass("hover");
	
	$(".floorLinks .floorItem").removeClass("fromnav").eq($(this).index()).addClass("fromnav");
})


// ------back--to--top--   
$(window).scroll(function () {
if ($(window).scrollTop()>$(window).height()) {
		 $(".backtop").css("display","block")
	}else{
		$(".backtop").css("display","none")
	}
})
$(document).ready(function(){
	$('backtop a').click(function(){
			$('html,body').animate({scrollTop:0},'slow');
	});
});

// -----菜单消失隐藏-----
  $("#show").on("click",function(){
		$(".drapdown-nav").toggle();
	})	

})()