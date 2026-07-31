const botao = document.querySelector(".btn-jardim");
const fade = document.querySelector(".fade");

botao.addEventListener("click", function(e){

    e.preventDefault();

    fade.style.opacity = "1";

    setTimeout(function(){

        window.location.href="/jardim";

    },800);

});