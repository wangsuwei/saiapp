// JavaScript Document
$(function(){
	$(".choicespan i").addClass("default_inp");
	$(".total_i").addClass("default_inp");
	$(".total_int").removeAttr("checked");
	$(".check_box").removeAttr("checked");
	
	
	//选中商品
	$(".choicespan i").click(function(){
		if( $(this).hasClass("default_inp") ){
			$(this).removeClass("default_inp").addClass("select_inp").siblings("input").attr("checked","checked");
		}else{
			$(this).addClass("default_inp").removeClass("select_inp").siblings("input").removeAttr("checked");
		}
		//全选状态
		var chknum = $("input[name='items']").length;
		var chk = $("input[name='items']:checked").length;
		if( chknum==chk ){//全选
			$(".total_i").removeClass("default_inp").addClass("select_inp").siblings("input").attr("checked","checked");
		}else{//不全选
			$(".total_i").removeClass("select_inp").addClass("default_inp").siblings("input").removeAttr("checked");
		}
		
		$("#totalNum").html( 0 )
		$("input[name='items']:checked").each(function(){ 
         	var thisV = $(this).val();
			//alert(thisV);
			var total = parseInt( $("#totalNum").html() );
			var dj = parseInt( $("#price"+thisV).html() ); 
			var sl = parseInt( $("#input-num"+thisV).children("input").val() ); 
			var xj = dj*sl;
			if( $(this).is(":checked") ){
				total = total + xj ;
				$("#totalNum").html( total );
			}else{
				total = total - xj ;
				$("#totalNum").html( total );
			}
        });
	});
	//全选
	$(".total_i").click(function(){
		if( $(this).hasClass("default_inp") ){
			$(this).removeClass("default_inp").addClass("select_inp").siblings("input").attr("checked","checked");
			$(".choicespan i").removeClass("default_inp").addClass("select_inp").siblings("input").attr("checked","checked");
		}else{
			$(this).addClass("default_inp").removeClass("select_inp").siblings("input").removeAttr("checked");
			$(".choicespan i").removeClass("select_inp").addClass("default_inp").siblings("input").removeAttr("checked");
		}
		$("#totalNum").html( 0 );
		$("input[name='items']:checked").each(function(){
			var thisV = $(this).val();
			//alert(thisV);
			var total = parseInt( $("#totalNum").html() );
			var dj = parseInt( $("#price"+thisV).html() ); 
			var sl = parseInt( $("#input-num"+thisV).children("input").val() ); 
			var xj = dj*sl;
			if( $(this).is(":checked") ){
				total = total + xj ;
				$("#totalNum").html( total );
			}else{
				total = total - xj ;
				$("#totalNum").html( total );
			}
        });
	});


		
	//编辑购物车
	$("#bianji").click(function(){
		$("#junctionjs,.totalheji,#bianji").hide();//隐藏结算
		$("#deletesc,#wancheng").show();//打开删除
		$(".choicespan i,.total_i").addClass("default_inp").removeClass("select_inp").siblings("input").removeAttr("checked");
    });	
	$("#wancheng").click(function(){
		$("#junctionjs,.totalheji,#bianji").show();//打开结算
		$("#deletesc,#wancheng").hide();//隐藏删除
		$(".choicespan i,.total_i").addClass("default_inp").removeClass("select_inp").siblings("input").removeAttr("checked");
		$("#totalNum").html( 0 );		
    });	
	//删除产品
	$("#deletesc").click(function(){
		if( $("[name=items]:checkbox").is(":checked") ){
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
				$("input[name='items']:checked").each(function(){
					var dekeV = $(this).val();
					$("#del_ete"+dekeV).remove();
				});
				var fxk = $("input[name='items']").length;
				if( fxk==0 ){
					$(".cartDiv").show();
					$(".payment").hide();
				}
			});	
		}else{
			layer.open({
				content: '请勾选想要删除的商品'
				,skin: 'msg'
				,time: 2 //2秒后自动关闭
			});	
		}
	});	
		

	xxSwitch(".listgoodsbox",".scallord span em");//产品分类js
	//清除历史搜索记录
	$(".emptyjl").click(function(){
		$(".ssjiludiv").remove();	
	});
	//
	$(".xzsonsp i").click(function(){
		$(".xzsonsp i").removeClass("pay_fist").siblings("input").removeAttr("checked");
		$(this).addClass("pay_fist").siblings("input").attr("checked","checked");		
	});
	
	
	//幻灯片
	$('#home_slider').flexslider({
		animation : 'slide',
		controlNav : true,
		directionNav : true,
		animationLoop : true,
		slideshow : true,
		slideshowSpeed: 5000,
		useCSS : false
	});
});
//产品分类js
function xxSwitch(obj,objTab){
	$(obj).first().show();
	$(objTab).first().addClass("cgfist");
	$(objTab).click(function(){
		$(this).addClass("cgfist").parent("span").siblings().children("em").removeClass("cgfist");
		var name=$(this).attr("name");
		if($(obj).has(name)){
			$(obj).hide();
			$(obj+"."+name).show();	
		};
	});
};


// 修改数量，同步总价
function updatenum(id){
	$("#input-num"+id+" .Amount").change(function(){
		//var num = parseInt($(this).val());
		//alert(num);
		$("#totalNum").html(0);
		$("input[name='items']:checked").each(function(){
			var thisV = $(this).val();
			var total = parseInt( $("#totalNum").html() );
			var dj = parseInt( $("#price"+thisV).html() ); 
			var sl = parseInt( $("#input-num"+thisV).children("input").val() );
			var xj = dj*sl;
			if( $(this).is(":checked") ){
				total = total + xj ;
				$("#totalNum").html( total );
			}else{
				total = total - xj ;
				$("#totalNum").html( total );
			}
        });
	});
	
	$("#input-num"+id+" .DisDe").click(function(){
		//var num = parseInt($(this).next().val());
		//alert(num);
		$("#totalNum").html(0);
		$("input[name='items']:checked").each(function(){
			var thisV = $(this).val();
			var total = parseInt( $("#totalNum").html() );
			var dj = parseInt( $("#price"+thisV).html() ); 
			var sl = parseInt( $("#input-num"+thisV).children("input").val() );
			var xj = dj*sl;
			if( $(this).is(":checked") ){
				total = total + xj ;
				$("#totalNum").html( total );
			}else{
				total = total - xj ;
				$("#totalNum").html( total );
			}
        });
	});
	
	$("#input-num"+id+" .Increase").click(function(){
		//var num = parseInt($(this).prev().val());
		//alert(num);
		$("#totalNum").html(0);
		$("input[name='items']:checked").each(function(){
			var thisV = $(this).val();
			var total = parseInt( $("#totalNum").html() );
			var dj = parseInt( $("#price"+thisV).html() ); 
			var sl = parseInt( $("#input-num"+thisV).children("input").val() );
			var xj = dj*sl;
			if( $(this).is(":checked") ){
				total = total + xj ;
				$("#totalNum").html( total );
			}else{
				total = total - xj ;
				$("#totalNum").html( total );
			}
        });
	});	
}



