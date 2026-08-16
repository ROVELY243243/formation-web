// =========================================
// MENU MOBILE
// =========================================

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");


if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("show");

        const menuOuvert =
            navbar.classList.contains("show");

        if (menuOuvert) {

            menuToggle.textContent = "✕";

        } else {

            menuToggle.textContent = "☰";
        }
    });


    // Fermer le menu lorsqu'on clique sur un lien

    const links =
        navbar.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("show");

            menuToggle.textContent = "☰";
        });
    });
}