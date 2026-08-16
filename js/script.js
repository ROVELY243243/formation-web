// =========================================
// ANNÉE AUTOMATIQUE
// =========================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =========================================
// MODE SOMBRE
// =========================================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        const isDark =
            document.body.classList.contains("dark");

        if (isDark) {

            localStorage.setItem("theme", "dark");

            themeToggle.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "light");

            themeToggle.textContent = "🌙";
        }
    });
}


// =========================================
// MESSAGE DANS LA CONSOLE
// =========================================

console.log(
    "🎓 Bienvenue sur Formation Web !"
);
// =========================================
// FORMULAIRE DE CONTACT
// =========================================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm && formMessage) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            formMessage.textContent =
                "✅ Votre message a été préparé avec succès.";

            contactForm.reset();
        }
    );
}