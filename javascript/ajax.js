//url :路径
//callback 调用函数
//data 可选参数
function ajaxGet(url,callback,data){
	var ajax =null;
	if(window.XMLHttpRequest){
		ajax =new XMLHttpRequest();
	}else{
		ajax =new ActiveXObject("Microsoft.XMLHTTP")
	}
	if(data){
		url=url+"?"+data;
	}
	ajax.open("get",url);
	ajax.send();
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status==200){
			//通过回调函数的调用 将服务器处理的结果返回到客户端上
			callback(ajax.responseText)
		}
	}
}
function ajaxPost(url,callback,data){
	var ajax = null;
	if( window.XMLHttpRequest ){
		ajax = new XMLHttpRequest();
	}else{
		ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	ajax.open("POST",url);
	
	//设置请求头：
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			callback(ajax.responseText);
		}
	}	
	ajax.send(data);//向服务器端发送数据 用户名
}
