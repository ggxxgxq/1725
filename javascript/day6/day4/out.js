function fnSort(a,b,c){
    	var t;
    	//假设a<b<c
        if(a>b){
        	t=a;
        	a=b;
        	b=t;
        }
        if(a>c){
        	t=c;
        	c=a;
        	a=t;
        }
        if(b>c){
        	t=c;
        	c=b;
        	b=t;
        }  
      /* alert("三个数按照从小到大顺序是"+a+","+b+","+c)*/
     alert(c);
//   return(c)
      }