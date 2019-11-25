// JavaScript Document
$(function(){
	$(".inputsr").focus(function(){
		$(".inputsr").css("border","solid .01rem #f8f8f8");
	});
	
	layer.open({
		content: '当天预约请联系前台客服<br>浦西店：021-53028359<br>浦东店：021-58762557'
		//layer.msg('当天预约请联系前台客服')
		,skin: 'msg'
		//,time: 2 //2秒后自动关闭
	});	
})

//注册页手机验证码JS
function timedCount(){
	var remain_time = 5;
	$('#xghq_but').css("background-color","#CCC");
	$('#xghq_but').attr("disabled","disabled");
	$('#xghq_but').text(remain_time+'S重新获取');
	var interval = setInterval(function(){
		var time = --remain_time; 
		$('#xghq_but').text(time+'S重新获取');
		$('#xghq_but').attr("disabled");
		if(time<=0){
			clearInterval(interval);
			$('#xghq_but').text('重新获取');
			$('#xghq_but').removeAttr("disabled");
			$('#xghq_but').css("background-color","#83634a");
		};
	},1000)
}

//注册信息提交JS
function souHuoform(){
	//手机
	var sj_a = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
	var sj_v = $("#mobileNum").val();
	//alert("执行函数");
	if( sj_v.length!=11||!sj_v.match(sj_a) ){
		layer.open({
			content: '请输入手机号'
			,skin: 'msg'
			,time: 2 //2秒后自动关闭
		});
		$("#mobileNum").css("border","solid .01rem #f60");
		return false;
	}else{
		$("#mobileNum").css("border","solid .01rem #f8f8f8");	
	}
	//姓名
	if( $("#manName").val()=="" ){
		layer.open({
			content: '请输入姓名'
			,skin: 'msg'
			,time: 2 //2秒后自动关闭
		});
		$("#manName").css("border","solid .01rem #f60");
		return false;
	}else{
		$("#manName").css("border","solid .01rem #f8f8f8");	
	}
	//验证码
	if( $("#inpyzm").val()=="" ){
		layer.open({
			content: '请输入验证码'
			,skin: 'msg'
			,time: 2 //2秒后自动关闭
		});
		$("#inpyzm").css("border","solid .01rem #f60");
		return false;
	}else{
		$("#inpyzm").css("border","solid .01rem #f8f8f8");	
	}
	
	return true;
}

//登录页手机验证码JS
function logoCount(){
	var remain_time = 5;
	$('#logo_but').css("background-color","#CCC");
	$('#logo_but').attr("disabled","disabled");
	$('#logo_but').text(remain_time+'S重新获取');
	var interval = setInterval(function(){
		var time = --remain_time; 
		$('#logo_but').text(time+'S重新获取');
		$('#logo_but').attr("disabled");
		if(time<=0){
			clearInterval(interval);
			$('#logo_but').text('重新获取');
			$('#logo_but').removeAttr("disabled");
			$('#logo_but').css("background-color","#83634a");
		};
	},1000)
}

//登录信息提交JS
function logoform(){
	//手机
	var sj_a = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
	var sj_v = $("#logoNum").val();
	//alert("执行函数");
	if( sj_v.length!=11||!sj_v.match(sj_a) ){
		layer.open({
			content: '请输入手机号'
			,skin: 'msg'
			,time: 2 //2秒后自动关闭
		});
		$("#logoNum").css("border","solid .01rem #f60");
		return false;
	}else{
		$("#logoNum").css("border","solid .01rem #f8f8f8");	
	}
	//验证码
	if( $("#logoyzm").val()=="" ){
		layer.open({
			content: '请输入验证码'
			,skin: 'msg'
			,time: 2 //2秒后自动关闭
		});
		$("#logoyzm").css("border","solid .01rem #f60");
		return false;
	}else{
		$("#logoyzm").css("border","solid .01rem #f8f8f8");	
	}
	
	return true;
}

