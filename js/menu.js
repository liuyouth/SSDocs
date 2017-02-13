
/**
 * 需引入
 * 		<script src="//cdn.bootcss.com/dynamics.js/1.1.5/dynamics.js"></script>
 */

function showRight(){
	$('.right').css("right","0px");
	$('.rightMenu').css("left","0px");
	$('#rightIconShow').addClass("show");
	$('#rightIconHide').removeClass("show");
	$('#rootIcon').css("left","-70px");
}

function hideRight(){
	$('.right').css("right","-280px");
    $('.rightMenu').css("left","-70px");
	$('#rightIconHide').addClass("show");
	$('#rightIconShow').removeClass("show");
	$('#rootIcon').css("left","70px");
}

function showTop(){
	$('.top').css("top","0px");
	$('.topMenu').css("bottom","0px");
	$('#topIconShow').addClass("show");
	$('#topIconHide').removeClass("show");
}

function hideTop(){
	$('.top').css("top","-280px");
  $('.topMenu').css("bottom","-210px");
	$('#topIconHide').addClass("show");
	$('#topIconShow').removeClass("show");
}

function showSearch(){
	$('.searchDiv').css("left","0px");
	$('.searchMDiv').css("left","50px");
	$(".searchMenu").attr("onclick","hideSearch();");
	$(".searchMenu").css("width","120px");
	$(".rootSDiv").css("width","300px");
	$("#rootSInput").css("height","35px");
	$("#piaochu").css("width","800px");
	//$(".searchMenu").click(hideSearch());
}

function hideSearch(){
	$('.searchDiv').css("left","-280px");
    $('.searchMDiv').css("left","270px");
    $(".searchMenu").attr("onclick","showSearch();");
    $(".searchMenu").css("width","45px");
    $(".rootSDiv").css("width","0px");
	$("#rootSInput").css("height","0px");
	$("#piaochu").css("width","100px");
	//$(".searchMenu").click(showSearch());
}
