let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
        
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
        footer.classList.add('show-animate');
    }
    else {
        footer.classList.remove('show-animate');
    }
}

function openTab(event, tabId) {
    let tabLinks = document.querySelectorAll('.tab-link');
    let tabContents = document.querySelectorAll('.tab-content');

    // Désactiver tous les onglets et masquer le contenu
    tabLinks.forEach(link => link.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Activer l'onglet cliqué et afficher son contenu
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function switchProjet(type) {
    const blocUniv = document.getElementById("projets-univ");
    const blocPro = document.getElementById("projets-pro");
    const titre = document.querySelector("#projets h2"); 
    const sousTitre = document.querySelector("#projets h3"); 

    if (type === "univ") {
        blocUniv.style.display = "block";
        blocPro.style.display = "none";
        titre.innerHTML = "Mes <span>Projets</span> au <span>sein</span> de <span>mon</span> BUT";
        sousTitre.innerHTML = "*Situation d'Apprentissage et d'Évaluation";
    } else if (type === "pro") {
        blocUniv.style.display = "none";
        blocPro.style.display = "block";
        titre.innerHTML = "Mes <span>Projets</span> Professionnels <span class='animate scroll' style='--i:1;'></span>";
        sousTitre.innerHTML = "";
    }

    const sectionProjet = document.getElementById("projets");
    if (sectionProjet) sectionProjet.scrollIntoView({ behavior: "smooth" });
}

/* en cours */ 

/* function sendEmail() {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);

    emailjs.send("service_bhpr5dm", "YOUR_TEMPLATE_ID", {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    }).then(
        function(response) {
            alert("E-mail envoyé avec succès !");
        },
        function(error) {
            alert("Erreur lors de l'envoi de l'e-mail : " + error.text);
        }
    );
} */
