// =========================
// CARRUSEL DE LEYENDAS
// =========================

const leyendas = {

    es: [

        {
            titulo: "La Llorona",
            descripcion: "Espíritu errante que recorre los ríos lamentando la pérdida de sus hijos.",
            imagen: "imagenes/leyendas/llorona/llorona.png",
            link: "leyendas/llorona.html"
        },

        {
            titulo: "La Patasola",
            descripcion: "Mujer monstruosa de una sola pierna que aparece en los bosques.",
            imagen: "imagenes/leyendas/patasola/patasola.png",
            link: "leyendas/patasola.html"
        },

        {
            titulo: "El Duende",
            descripcion: "Ser travieso que confunde a los viajeros.",
            imagen: "imagenes/leyendas/duende/duende.png",
            link: "leyendas/duende.html"
        }

    ],

    en: [

        {
            titulo: "La llorona",
            descripcion: "A wandering spirit who roams rivers mourning the loss of her children.",
            imagen: "imagenes/leyendas/llorona/llorona.png",
            link: "leyendas/llorona.html"
        },

        {
            titulo: "La Patasola",
            descripcion: "A monstrous woman with a single leg who appears in the forests.",
            imagen: "imagenes/leyendas/patasola/patasola.png",
            link: "leyendas/patasola.html"
        },

        {
            titulo: "El duende",
            descripcion: "A mischievous creature that confuses travelers.",
            imagen: "imagenes/leyendas/duende/duende.png",
            link: "leyendas/duende.html"
        }

    ]

};

let leyendaActual = 0;


// =========================
// ELEMENTOS
// =========================

const leyendaTitulo =
    document.getElementById("leyendaTitulo");

const leyendaDescripcion =
    document.getElementById("leyendaDescripcion");

const leyendaImagen =
    document.getElementById("leyendaImagen");

const leyendaBoton =
    document.getElementById("leyendaBoton");

const nextLeyenda =
    document.getElementById("nextLeyenda");

const prevLeyenda =
    document.getElementById("prevLeyenda");


// =========================
// MOSTRAR LEYENDA
// =========================

function mostrarLeyenda(index) {

    if (!leyendaTitulo || !leyendaDescripcion || !leyendaImagen || !leyendaBoton) {
        return;
    }

    const idioma = localStorage.getItem("idioma") || "es";
    const datos = leyendas[idioma][index];

    leyendaTitulo.style.opacity = 0;
    leyendaDescripcion.style.opacity = 0;
    leyendaImagen.style.opacity = 0;
    leyendaBoton.style.opacity = 0;

    setTimeout(() => {

        leyendaTitulo.textContent = datos.titulo;
        leyendaDescripcion.textContent = datos.descripcion;
        leyendaImagen.src = datos.imagen;
        leyendaImagen.alt = datos.titulo;
        leyendaBoton.href = datos.link;

        leyendaBoton.textContent =
            idioma === "es" ? "SABER MÁS..." : "LEARN MORE...";

        leyendaTitulo.style.opacity = 1;
        leyendaDescripcion.style.opacity = 1;
        leyendaImagen.style.opacity = 1;
        leyendaBoton.style.opacity = 1;

    }, 300);

}


// =========================
// SIGUIENTE LEYENDA
// =========================

function siguienteLeyenda() {

    const idioma = localStorage.getItem("idioma") || "es";

    leyendaActual++;

    if (leyendaActual >= leyendas[idioma].length) {

        leyendaActual = 0;

    }

    mostrarLeyenda(leyendaActual);

}


// =========================
// LEYENDA ANTERIOR
// =========================

function anteriorLeyenda() {

    const idioma = localStorage.getItem("idioma") || "es";

    leyendaActual--;

    if (leyendaActual < 0) {

        leyendaActual = leyendas[idioma].length - 1;

    }

    mostrarLeyenda(leyendaActual);

}

// =========================
// EVENTOS
// =========================

if (nextLeyenda && prevLeyenda) {

    nextLeyenda.addEventListener("click", siguienteLeyenda);

    prevLeyenda.addEventListener("click", anteriorLeyenda);

}

// Mostrar la primera leyenda
mostrarLeyenda(leyendaActual);

// Cambio automático cada 5 segundos
setInterval(siguienteLeyenda, 5000);