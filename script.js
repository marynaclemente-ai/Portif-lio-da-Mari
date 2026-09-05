/* =========================================
   PORTFÓLIO MARINA DE SÁ
========================================= */

const cabecalho = document.querySelector(".cabecalho");

function atualizarCabecalho() {
    if (!cabecalho) {
        return;
    }

    if (window.scrollY > 30) {
        cabecalho.classList.add("scrolled");
    } else {
        cabecalho.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", atualizarCabecalho);
atualizarCabecalho();

const anoAtual = document.querySelector("#anoAtual");

if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}

const elementosAnimados = document.querySelectorAll(
    ".projeto-card, .tecnologia-item, .trajetoria-item, .sobre-destaque, .sobre-texto"
);

const estiloAnimacao = document.createElement("style");

estiloAnimacao.textContent = `
    .visivel {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(estiloAnimacao);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visivel");
                    observer.unobserve(entrada.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    elementosAnimados.forEach((elemento) => {
        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(25px)";
        elemento.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        observer.observe(elemento);
    });
} else {
    elementosAnimados.forEach((elemento) => {
        elemento.classList.add("visivel");
    });
}

const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach((link) => {
    link.addEventListener("click", (evento) => {
        const destino = link.getAttribute("href");

        if (!destino || destino === "#") {
            return;
        }

        const elemento = document.querySelector(destino);

        if (!elemento) {
            return;
        }

        evento.preventDefault();

        elemento.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
