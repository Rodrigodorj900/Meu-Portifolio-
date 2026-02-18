function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Animação ao aparecer na tela
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";
    observer.observe(card);
});

function abrirEmail() {
    window.location.href = "mailto:lucasgomesdealmeida29l@email.com?subject=Contato pelo Portfólio&body=Olá Lucas, vi seu portfólio e gostaria de conversar com você.";
}

