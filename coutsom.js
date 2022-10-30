//alert("hello")


function hide(){
var s=document.forms[0].pass.type;


if(s=="text"){

document.forms[0].pass.type="password" 
}
else {
    document.forms[0].pass.type="text"
}


}