const particles =
document.querySelector(".particles");

for(let i=0;i<60;i++){

let p=document.createElement("span");

p.style.left=Math.random()*100+"%";

p.style.animationDuration=
(6+Math.random()*8)+"s";

p.style.animationDelay=
Math.random()*6+"s";

particles.appendChild(p);

}

document
.getElementById("entrar")
.onclick=function(){

document.body.style.opacity="0";

setTimeout(()=>{

location.href="/menu";

},700);

}