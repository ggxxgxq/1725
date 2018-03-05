function setCookie(key,value,day){
	if(day){
		var d=new Date();
		d.setDate( d.getDate() + day )
		document.cookie = key + "=" + value +";expires"+d;
	}else{
		document.cookie = key + "=" + value ;
	}
}
function removeCookie(key){
	//ducument.cookie=key + "'+';expires=-1";
	setCookie(key,"",-1)
}
function getCookie(key){
	if(document.cookie){
		var str =document.cookie;//获取cookie信息   键1=值1; 键2=值1; 键3=值3;
		var arr =str.split("; ");//将cookie文件按照 ;   拆成数组
	    for(var i=0;i< arr.length ;i++){
	    	var item =arr[i].split("=");// 将数组中的每一个字符串通过=拆成一个小数组 [键1,值1]
	    	if( item[0]== key){
	    		return item[1];//返回key所对应的value的是一个字符串
	    		//return JSON.parse( item[1] ) ;//将key对应的值返回，字符串转数组  另一种方法
	    	}
	    }
	    //循环结束后没有对应的key 就返回一个""
	    return "";//说明有cookie但是没有对应的key
	    //循环结束后，如果cookie信息中不存在key，返回空数组   另一种方法
		//return [];
	}
	//没有cookie  就返回一个""
	return "";  //说明没有cookie
	//循环结束后，如果cookie信息中不存在key，返回空数组   另一种方法
    //return [];
}
