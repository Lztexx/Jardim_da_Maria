const casa = document.querySelector(".click-casa");
const jardim = document.querySelector(".jardim");
const fade = document.querySelector(".fade");

casa.addEventListener("click", function(e){

    e.preventDefault();

    jardim.classList.add("zoom");

    fade.style.opacity = "1";

    setTimeout(function(){

        window.location.href = "/casa";

    },800);

});