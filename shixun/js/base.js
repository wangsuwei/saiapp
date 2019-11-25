// JavaScript Document
$(function(){
	$(".briefyue:last").css("border-bottom","none");
	$(".hrbox:last").hide();
	$(".minebox").css("min-height",$(window).height())
	$(".recordwu").css("min-height",$(window).height())
	$(".addressyy span:first").addClass("addressyy_xz");
	$(".graybg").css("min-height",$(window).height());
	$(".addressyy span").click(function(){
		$(".addressyy span").removeClass("addressyy_xz");
		$(this).addClass("addressyy_xz");
	});
	
	
	//$(".radinI:first").addClass("radinI_fist");
	$(".radinI").click(function(){
		$(".radinI").removeClass("radinI_fist").siblings("input.radioinp").removeAttr("checked");
		$(this).addClass("radinI_fist").siblings("input.radioinp").attr("checked","checked");		
	});
	//
	$(".yuyuedate div span").click(function(){
		$(".yuyuedate div span").removeClass("elects");
		$(this).addClass("elects");		
	});
	//
	$(".xzsonsp i").click(function(){
		$(".xzsonsp i").removeClass("pay_fist").siblings("input").removeAttr("checked");
		$(this).addClass("pay_fist").siblings("input").attr("checked","checked");		
	});
	//上传配方图片
	 $(".uptenct").each(function(){
		 var v = $(this).attr("name");
		$('.chooseImage'+v).on('change',function(){
			//alert("点击上传");
			$(".cropedBigImg"+v).show();
			$(".qvxiaoem"+v).show();
			var filePath = $(this).val(),//获取到input的value，里面是文件的路径
				fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase(),
				src = window.URL.createObjectURL(this.files[0]); //转成可以在本地预览的格式
			// 检查是否是图片
			if( !fileFormat.match(/.png|.jpg|.jpeg/) ) {
				error_prompt_alert('上传错误,文件格式必须为：png/jpg/jpeg');
				return;  
			}
			$('.cropedBigImg'+v).attr('src',src);
		});
		$(".qvxiaoem"+v).click(function(){
			$(".cropedBigImg"+v).removeAttr("src").css("display","none");
			$(this).hide();	
		});
	});	
	
	
	//收货订单JS
	$(".scstrike").each(function(){
		var id = $(this).attr("name");
		//删除订单
		$("#dzdele"+id).click(function(){
			$("#blackBg,.deleorder").show();
			$("body").css({"height":"100%","overflow":"hidden"});
			$(".cancelqx").click(function(){
				$("#blackBg,.deleorder").hide();
				$("body").css({"height":"100%","overflow":"auto"});
				return false;
			});
			$(".confirmr").click(function(){
				$("#blackBg,.deleorder").hide();
				$("body").css({"height":"100%","overflow":"auto"});
				$("#orderress"+id).remove();
			});
		});
		
    });
	
	//选择支付方式
	$(".paymentlab").click(function(){
		$(".paymentlab i").removeClass("payinI_fist");
		$(".paymentlab input").removeAttr("checked");
		$(this).children("i").addClass("payinI_fist");
		$(this).children("input").attr("checked","checked");		
	});
	//支付成功关闭
	$(".payabq,.prescricf").click(function(){
		$("#blackBg,.successpay").show();
		$("body").css({"height":"100%","overflow":"hidden"});	
	});
	$(".closegb").click(function(){
		$("#blackBg,.successpay").hide();
		$("body").css({"height":"100%","overflow":"auto"});	
	});
	//性别
	$(".genderson").click(function(){
		$(".genderson i").removeClass("rsonxb_fist");
		$(".genderson input").removeAttr("checked");
		$(this).children("i").addClass("rsonxb_fist");
		$(this).children("input").attr("checked","checked");		
	});
	//药材类型
	$(".genderson_zy").click(function(){
		$(".genderson_zy i").removeClass("rsonxb_fist");
		$(".genderson_zy input").removeAttr("checked");
		$(this).children("i").addClass("rsonxb_fist");
		$(this).children("input").attr("checked","checked");		
	});
	//煎药类型
	$(".gendersonjy").click(function(){
		$(".gendersonjy i").removeClass("rsonxb_fist");
		$(".gendersonjy input").removeAttr("checked");
		$(this).children("i").addClass("rsonxb_fist");
		$(this).children("input").attr("checked","checked");		
	});
	//领取方式
	$(".gendersonlq").click(function(){
		$(".gendersonlq i").removeClass("rsonxb_fist");
		$(".gendersonlq input").removeAttr("checked");
		$(this).children("i").addClass("rsonxb_fist");
		$(this).children("input").attr("checked","checked");
		var tihtx = $(this).children("em").html();
	});
	
	//选择领取地址
	$(".gendersonlq_zq").click(function(){
		$(".takingzq_zq").show();	
		$(".takingzq_kd").hide();
		$(".takingzq_ss").hide();		
	});
	$(".gendersonlq_kd").click(function(){
		$(".takingzq_kd").show();
		$(".takingzq_zq").hide();
		$(".takingzq_ss").hide();		
	});
	$(".gendersonlq_ss").click(function(){
		$(".takingzq_ss").show();		
		$(".takingzq_kd").hide();
		$(".takingzq_zq").hide();
	});
	$(".takingzq:first").show();
	$(".choosespan i").click(function(){
		$(".choosespan i").removeClass("choosespan_fist").siblings().removeAttr("checked");
		$(this).addClass("choosespan_fist").siblings("input").attr("checked","checked");		
	});
	// 中药 颗粒
	$(".genderson_xiyao").click(function(){
		$(".medicinejy").show();	
	});
	$(".genderson_keli").click(function(){
		$(".medicinejy").hide();	
	});
	
	
	//撤销售后申请
	$(".revmenat").click(function(){
		$("#blackBg,.deleorder").show();
		$("body").css({"height":"100%","overflow":"hidden"});
		return false;
	});
	$(".askforqx,.askforqr").click(function(){
		$("#blackBg,.deleorder").hide();
		$("body").css({"height":"100%","overflow":"auto"});
		return false;
	});
	//默认地址
	$(".default_dz i").click(function(){
		/*$(".default_dz i").removeClass("addspan_fist").siblings().removeAttr("checked");
		$(this).addClass("addspan_fist").siblings("input").attr("checked","checked");	*/
		if( $(this).hasClass("addspan_fist") ){
			$(".default_dz i").removeClass("addspan_fist").siblings().removeAttr("checked");
			$(this).removeClass("addspan_fist").siblings("input").removeAttr("checked");
		}else{
			$(".default_dz i").removeClass("addspan_fist").siblings().removeAttr("checked");
			$(this).addClass("addspan_fist").siblings("input").attr("checked","checked");
		}
	});
	
	/*-------------------------------------------------------------------------*/
	
	//新增收货地址默认
	$(".vingadd i").click(function(){
		if( $(this).hasClass("addspan_fist") ){
			$(this).removeClass("addspan_fist").siblings("input").attr("checked","checked");
		}else{
			$(this).addClass("addspan_fist").siblings("input").removeAttr("checked");
		}
	});
	
	//收货地址信息不能为空
	$(".newlyadded").click(function(){
		if( $(".shdzname").val()=="" ){
			layer.open({
				content: '请输入收货人姓名'
				,skin: 'msg'
				,time: 2 //2秒后自动关闭
			});
		}
		//手机
		var sj_a = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
		var sj_v = $(".shdzmobile").val();
		if( sj_v.length!=11||!sj_v.match(sj_a) ){
			layer.open({
				content: '请输入收件人手机号'
				,skin: 'msg'
				,time: 2 //2秒后自动关闭
			});
			return false;
		}
		if( $("#picker").val()=="" ){
			layer.open({
				content: '请选择省、市、区'
				,skin: 'msg'
				,time: 2 //2秒后自动关闭
			});
			return false;
		}	
		if( $(".shdetails").val()=="" ){
			layer.open({
				content: '请输入居住详细地址'
				,skin: 'msg'
				,time: 2 //2秒后自动关闭
			});
			return false;
		}	
	});
	
	$(".numberuser").blur(function(){
		var sj_a = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
		var sj_v = $(".numberuser").val();
		if( sj_v.length!=11||!sj_v.match(sj_a) ){
			alert("请输入收件人手机号");
			/*layer.open({
				content: '请输入收件人手机号'
				,skin: 'msg'
				,time: 2 //2秒后自动关闭
			});*/
			return false;
		}	
	});
	
	//加号
	$(".plussign").click(function(){
		$(".plusorder,#blackBg").show();
	});
	$(".quxiao").click(function(){//取消
		$(".plusorder,#blackBg").hide();
		$(".yuyuedate div.plussign span.elects").css({"border":"solid 1px #c6c6c6","background-color":"#fff","color":"#333"});
	});
	$(".confirm").click(function(){//确认
		$(".plusorder,#blackBg").hide();
		$(".yuyuedate div.plussign span.elects").css({"border":"solid 1px #8d6546","background-color":"#8d6546","color":"#fff"});		
	});
	
	
});

//删除收货地址
function deleAddress( id ){
	$("#addressdz"+id).remove();	
}



