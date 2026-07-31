const livro = document.querySelector(".livro");

livro.addEventListener("click", () => {

    livro.style.transition = "0.6s";

    livro.style.transform = "scale(1.18)";

    setTimeout(() => {

        window.location.href = "/livro";

    }, 600);

});