function actualizarBienvenida() {

    const idioma = localStorage.getItem("idioma") || "es";
    const mensaje = document.getElementById("mensajeBienvenida");

    if (!mensaje) return;

    const hora = new Date().getHours();

    if (idioma === "es") {

        if (hora < 12) {
            mensaje.textContent = "¡Buenos días! Bienvenido a Raíces Visuales.";
        } else if (hora < 18) {
            mensaje.textContent = "¡Buenas tardes! Bienvenido a Raíces Visuales.";
        } else {
            mensaje.textContent = "¡Buenas noches! Bienvenido a Raíces Visuales.";
        }

    } else {

        if (hora < 12) {
            mensaje.textContent = "Good morning! Welcome to Raíces Visuales.";
        } else if (hora < 18) {
            mensaje.textContent = "Good afternoon! Welcome to Raíces Visuales.";
        } else {
            mensaje.textContent = "Good evening! Welcome to Raíces Visuales.";
        }

    }

}

actualizarBienvenida();