// JavaScript Document
$(function(){
	var date = new Date();
	var yeary = date.getFullYear(); //获取完整的年份(4位)
	var monthm = date.getMonth()+1; //获取当前月份(0-11,0代表1月)  date1.getMonth()+1)
	$("#ymonth_y").html(yeary);
	$("#ymonth_m").html(monthm);
	$(".riqison span em").click(function(){
		$(".riqison span em").removeClass("emxz");
		$(this).addClass("emxz");	
	});
	
		
})

