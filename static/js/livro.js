const book = document.getElementById("book");
const cover = document.getElementById("cover");

const papers = [
    document.getElementById("p1"),
    document.getElementById("p2"),
    document.getElementById("p3"),
    document.getElementById("p4"),
    document.getElementById("p5"),
    document.getElementById("p6")
];

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const contador = document.getElementById("contador");

let currentPaper = 0;
let bookOpen = false;

function atualizarContador(){

    let pagina = (currentPaper * 2) + 1;

    if(pagina > 12){
        pagina = 12;
    }

    contador.innerText = pagina + " / 12";

}

function abrirLivro(){

    if(bookOpen) return;

    book.classList.add("open");

    bookOpen = true;

}

function fecharLivro(){

    if(!bookOpen) return;

    book.classList.remove("open");

    bookOpen = false;

}

cover.addEventListener("click",()=>{

    abrirLivro();

    atualizarContador();

});

/* ========================================= */
/* PRÓXIMA PÁGINA */
/* ========================================= */

nextBtn.addEventListener("click",()=>{

    if(!bookOpen){

        abrirLivro();
        atualizarContador();

        return;

    }

    if(currentPaper >= papers.length){

        return;

    }

    const folha = papers[currentPaper];

    folha.classList.add("flipped");

    folha.style.zIndex = currentPaper;

    currentPaper++;

    atualizarContador();

});

/* ========================================= */
/* PÁGINA ANTERIOR */
/* ========================================= */

prevBtn.addEventListener("click",()=>{

    if(currentPaper <= 0){

        fecharLivro();

        atualizarContador();

        return;

    }

    currentPaper--;

    const folha = papers[currentPaper];

    folha.classList.remove("flipped");

    folha.style.zIndex = 100 - currentPaper;

    atualizarContador();

});

/* ========================================= */
/* Z-INDEX DAS FOLHAS */
/* ========================================= */

function organizarFolhas(){

    papers.forEach((folha,index)=>{

        folha.style.zIndex = papers.length - index;

    });

}