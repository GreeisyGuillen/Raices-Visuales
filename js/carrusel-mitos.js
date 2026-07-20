// =========================
// CARRUSEL DE MITOS
// =========================

const mitos = {

    es: [

        {
            titulo: "La Madremonte",
            descripcion: "Espíritu protector de la naturaleza y los bosques.",
            imagen: "imagenes/mitos/madremonte/madremonte.png",
            link: "mitos/madremonte.html"
        },

        {
            titulo: "Yurupari",
            descripcion: "Figura aterradora que aparece en la selva.",
            imagen: "imagenes/mitos/yurupari/yurupari.png",
            link: "mitos/yurupari.html"
        },

        {
            titulo: "Bachue",
            descripcion: "Madre de la humanidad muisca, de cuyas enseñanzas surgieron los primeros pueblos.",
            imagen: "imagenes/mitos/bachue/bachue.png",
            link: "mitos/bachue.html"
        }

    ],

    en: [

        {
            titulo: "La Madremonte",
            descripcion: "Guardian spirit of forests and nature.",
            imagen: "imagenes/mitos/madremonte/madremonte.png",
            link: "mitos/madremonte.html"
        },

        {
            titulo: "Yurupari",
            descripcion: "A frightening figure said to appear deep within the jungle.",
            imagen: "imagenes/mitos/yurupari/yurupari.png",
            link: "mitos/yurupari.html"
        },

        {
            titulo: "Bachue",
            descripcion: "Mother of the Muisca people, from whose teachings the first communities emerged.",
            imagen: "imagenes/mitos/bachue/bachue.png",
            link: "mitos/bachue.html"
        }

    ]

};

let mitoActual = 0;


// =========================
// ELEMENTOS
// =========================

const mitoTitulo = document.getElementById("mitoTitulo");

const mitoDescripcion = document.getElementById("mitoDescripcion");

const mitoImagen = document.getElementById("mitoImagen");

const mitoBoton = document.getElementById("mitoBoton");

const nextMito = document.getElementById("nextMito");

const prevMito = document.getElementById("prevMito");


// =========================
// MOSTRAR MITO
// =========================

function mostrarMito(index) {

    if (!mitoTitulo || !mitoDescripcion || !mitoImagen || !mitoBoton) {
        return;
    }

    const idioma = localStorage.getItem("idioma") || "es";

    const datos = mitos[idioma][index];

    mitoTitulo.style.opacity = 0;
    mitoDescripcion.style.opacity = 0;
    mitoImagen.style.opacity = 0;
    mitoBoton.style.opacity = 0;

    setTimeout(() => {

        mitoTitulo.textContent = datos.titulo;
        mitoDescripcion.textContent = datos.descripcion;
        mitoImagen.src = datos.imagen;
        mitoImagen.alt = datos.titulo;
        mitoBoton.href = datos.link;

        mitoBoton.textContent =
            idioma === "es" ? "SABER MÁS..." : "LEARN MORE...";

        mitoTitulo.style.opacity = 1;
        mitoDescripcion.style.opacity = 1;
        mitoImagen.style.opacity = 1;
        mitoBoton.style.opacity = 1;

    }, 300);

}


// =========================
// SIGUIENTE MITO
// =========================

function siguienteMito() {

    const idioma = localStorage.getItem("idioma") || "es";

    mitoActual++;

    if (mitoActual >= mitos[idioma].length) {

        mitoActual = 0;

    }

    mostrarMito(mitoActual);

}


// =========================
// MITO ANTERIOR
// =========================

function anteriorMito() {

    const idioma = localStorage.getItem("idioma") || "es";

    mitoActual--;

    if (mitoActual < 0) {

        mitoActual = mitos[idioma].length - 1;

    }

    mostrarMito(mitoActual);

}


// =========================
// EVENTOS
// =========================

if (nextMito && prevMito) {

    nextMito.addEventListener("click", siguienteMito);

    prevMito.addEventListener("click", anteriorMito);

}

// Mostrar el primer mito al cargar la página
mostrarMito(mitoActual);

// Cambio automático
setInterval(siguienteMito, 5000);