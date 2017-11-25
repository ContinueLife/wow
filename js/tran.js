// JavaScript Document

var url=decodeURI(location.search);
var Request = new Object();
if(url.indexOf("?")!=-1){
    var str = url.substr(1)　//去掉?号
    strs = str.split("&");
    for(var i=0;i<strs.length;i++){
        Request[strs[i ].split("=")[0]]=unescape(strs[i].split("=")[1]);
    }
}




document.getElementById("demo").innerHTML=Request["name"];
window.document.title=Request["name"]+"的故事";