//obj 要操作的对象
//target 目标值
//attr  操作的属性
function startMove(obj,target,attr){
	clearInterval(obj.timer);
	obj.timer =setInterval(function(){
		var current =0;
		if(attr=="opacity"){//透明度
		 current =parseFloat(getStyle(obj,attr))*100;
		}else{			
		 current =parseInt( getStyle(obj,attr));
		}
		var speed =(target-current)/10;
		speed =speed>0 ? Math.ceil(speed):Math.floor(speed);
		if(target==current){
			clearInterval(obj.timer)
		}else{
			if(attr=="opacity"){ //判断透明度的操作
			obj.style[attr] =(current +speed)/100;				
			}else{				
			obj.style[attr] =current +speed+"px";
			}
		}
	},30)
}

//获取非行内样式的值
function getStyle(obj,attr){
	if( getComputedStyle ){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return  obj.currentStyle[attr];
	}
}
