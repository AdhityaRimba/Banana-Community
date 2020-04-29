var message="NoRightClicking";function defeatIE(){if(document.all){(message);return!1}}
function defeatNS(e){if(document.layers||(document.getElementById&&!document.all)){if(e.which==2||e.which==3){(message);return!1}}}
if(document.layers){document.captureEvents(Event.MOUSEDOWN);document.onmousedown=defeatNS}else{document.onmouseup=defeatNS;document.oncontextmenu=defeatIE}
document.oncontextmenu=new Function("return false")
document.onkeydown=function(e){if(e.ctrlKey&&(e.keyCode===67||e.keyCode===86||e.keyCode===85||e.keyCode===117)){return!1}else{return!0}};$(document).keypress("u",function(e){if(e.ctrlKey){return!1}else{return!0}});$(document).keydown(function(event){if(event.keyCode==123){return!1}else if(event.ctrlKey&&event.shiftKey&&event.keyCode==73){return!1}})
