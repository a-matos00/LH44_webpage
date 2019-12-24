var clicks=0;

$("#darkMode").click(function(){
	clicks++;
	if(clicks%2==1){
	$("body").css("background-color","#00042b");
	$("header").css("background-color","#930202");
	$("article").css("color","white");
	}
	
	if(clicks%2==0){
	$("body").css("background-color","white");
	$("header").css("background-color","#001F7E");
	$("article").css("color","black");
	}
});