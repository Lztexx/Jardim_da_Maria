const folhas = document.querySelector(".folhas");
const borboletas = document.querySelector(".borboletas");

// ================================
// FOLHAS
// ================================

for(let i=0;i<20;i++){

    const folha=document.createElement("img");

    folha.src="/static/img/jardim/folha.png";

    folha.className="folha";

    folha.style.left=Math.random()*100+"vw";

    folha.style.top=(-Math.random()*500)+"px";

    folha.style.width=(20+Math.random()*30)+"px";

    folha.style.animationDuration=
    (8+Math.random()*8)+"s";

    folha.style.animationDelay=
    (Math.random()*8)+"s";

    folhas.appendChild(folha);

}

// ================================
// BORBOLETAS
// ================================

for(let i=0;i<6;i++){

    const b=document.createElement("img");

    b.src="/static/img/jardim/borboleta.png";

    b.className="borboleta";

    b.style.left=(10+Math.random()*80)+"vw";

    b.style.top=(10+Math.random()*60)+"vh";

    b.style.width=(35+Math.random()*25)+"px";

    b.style.animationDuration=
    (5+Math.random()*5)+"s";

    b.style.animationDelay=
    (Math.random()*5)+"s";

    borboletas.appendChild(b);

}