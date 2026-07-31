const book = document.getElementById("book");
const cover = document.getElementById("cover");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const contador = document.getElementById("contador");

const papers = document.querySelectorAll(".paper");

let current = 0;
let aberto = false;

// =========================
// Organiza z-index
// =========================

papers.forEach((paper,index)=>{

    paper.style.zIndex = papers.length - index;

});

// =========================

function atualizarContador(){

    if(TOTAL_PAGINAS == 0){

        contador.innerHTML = "0 / 0";

        return;

    }

    let pagina = current + 1;

    if(pagina > TOTAL_PAGINAS){

        pagina = TOTAL_PAGINAS;

    }

    contador.innerHTML = pagina + " / " + TOTAL_PAGINAS;

}

// =========================
// Abrir livro
// =========================

cover.onclick = function(){

    if(aberto) return;

    aberto = true;

    book.classList.add("open");

    setTimeout(()=>{

        cover.style.zIndex = "0";

    },800);

}

// =========================
// Próxima folha
// =========================

next.onclick = function(){

    if(!aberto) return;

    if(current >= papers.length) return;

    papers[current].classList.add("flipped");

    papers[current].style.zIndex = current;

    current++;

    atualizarContador();

}

// =========================
// Folha anterior
// =========================

prev.onclick = function(){

    if(!aberto) return;

    if(current <= 0){

        aberto = false;

        cover.style.zIndex = "9999";

        book.classList.remove("open");

        atualizarContador();

        return;

    }

    current--;

    papers[current].classList.remove("flipped");

    papers[current].style.zIndex =
    papers.length - current;

    atualizarContador();

}

// =========================
// Teclado
// =========================

document.addEventListener("keydown",(e)=>{

    if(e.key=="ArrowRight"){

        next.click();

    }

    if(e.key=="ArrowLeft"){

        prev.click();

    }

});

// =========================

atualizarContador();