 function test(){
     var url=new Array();
     url[0]="one.html";
	 url[1]="two.html";
	 url[2]="three.html";
	 url[3]="four.html";
   
     var ints=parseInt(Math.random()*(url.length));
    //本窗口打开     
	document.form1.action=url[ints];

    }// JavaScript Document