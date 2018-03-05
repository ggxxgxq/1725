//根据id查找页面的元素
function $id(id){
	return document.getElementById(id)
}
//获取任意区间的值
function rand(min,max){
	return Math.round(Math.random()*(max-min)+min )
}
//获取颜色的值
function getColor(){
    var str = "0123456789abcdef";
	var color = "#";
    for(var i=1;i<=6;i++){  	 
    	color +=str.charAt( rand(0,15) );
    }
    return color;
}
//日期时间格式封装
function dateToString(sign){
	//如果用户不传递任何参数  默认日期间隔符号是  - 
		sign=sign || "-";
		var d = new Date();//如果sign是未定义，就按默认值 "-"
		var y = d.getFullYear()
		var m = toTwo(d.getMonth()+1)
		var _date =toTwo( d.getDate() )
		var h = toTwo(d.getHours() )
		var min = toTwo(d.getMinutes() )
		var s = toTwo(d.getSeconds() )
		return y+sign+m+sign+_date+" "+h+":"+min+":"+s;
	}
//如果得到的是小于10的数 就 拼接0
	function toTwo(val){
		return val<10 ? "0"+val: val;
	}

//定义一个时间差函数  
function diff(start,end){
	return Math.abs( start.getTime()-end.getTime() ) / 1000;
}
//定义一个创建函数
function createEle(ele){
	return document.createElement(ele);
}
function pz(obj1,obj2){
	var L1 =obj1.offsetLeft;
	var R1 =obj1.offsetLeft + obj1.offsetWidth;
	var T1 =obj1.offsetTop;
	var B1 =obj1.offsetTop +obj1.offsetHeight;
	
	var L2 =obj2.offsetLeft;
	var R2 =obj2.offsetLeft + obj2.offsetWidth;
	var T2 =obj2.offsetTop;
	var B2 =obj2.offsetTop +obj2.offsetHeight;
	
	if( R2<L1 ||L2> R1 || T2 > B1 || B2<T1 ){
		return false;
	}else {
		return true;
	}
}
function getCode(){
	    var arrStr=[];
	    for(var i=0;i<6;i++){
	    	var code= rand(48,122);
	    	if(  code>58 &&  code<64 || code>91 &&  code<96){
	    		i--;
	    	}else {
	    		arrStr[i]=String.fromCharCode(code);
	    	}
	    }
	    return arrStr.join("")
	}
