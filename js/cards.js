// =========================
// TARJETAS DE MITOS
// =========================

const tarjetasMito = document.querySelectorAll(".card-mito");

tarjetasMito.forEach(tarjeta => {

    const boton = tarjeta.querySelector(".btn-primary");

    tarjeta.addEventListener("mouseover", () => {

        const idioma = localStorage.getItem("idioma") || "es";

        boton.textContent =
            idioma === "es" ? "¡Conócelo!" : "Discover it!";

        tarjeta.classList.add("activa");

    });

    tarjeta.addEventListener("mouseout", () => {

        const idioma = localStorage.getItem("idioma") || "es";

        boton.textContent =
            idioma === "es" ? "SABER MÁS..." : "LEARN MORE...";

        tarjeta.classList.remove("activa");

    });

});


// =========================
// TARJETAS DE LEYENDAS
// =========================

const tarjetasLeyenda = document.querySelectorAll(".card-leyenda");

tarjetasLeyenda.forEach(tarjeta => {

    const boton = tarjeta.querySelector(".btn-primary");

    tarjeta.addEventListener("mouseover", () => {

        const idioma = localStorage.getItem("idioma") || "es";

        boton.textContent =
            idioma === "es" ? "¡Descúbrela!" : "Discover it!";

        tarjeta.classList.add("activa");

    });

    tarjeta.addEventListener("mouseout", () => {

        const idioma = localStorage.getItem("idioma") || "es";

        boton.textContent =
            idioma === "es" ? "SABER MÁS..." : "LEARN MORE...";

        tarjeta.classList.remove("activa");

    });

});