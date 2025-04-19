var msg = document.getElementById("no")
var img = document.getElementById("stopNow")
var msgs =[
  "stop",
  "I said stop!",
  "stop!!!!!!!!!!",
  "STOP THE KEYS NOW OR ELSE",
  "( ͡° ͜ʖ ͡°)",
  ]
  
  var c = 0
function no(e){
  if (c== msgs.length-1){
    img.src ='https://media.tenor.com/6q4MAQrO28cAAAAM/cat-stop.gif'
  }
  msg.innerHTML =msgs[c];
  if (c< msgs.length-1){
  c+=1;}
}

document.addEventListener("keydown",no)