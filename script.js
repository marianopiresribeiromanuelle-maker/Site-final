// Rolagem suave ao clicar no botão "Ver Coleção"
document.getElementById("verColecao").addEventListener("click", () => {
    document.getElementById("colecao").scrollIntoView({ behavior: "smooth" });
});

// Animação simples ao rolar (revela os cards)
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

// Estilo inicial dos cards
cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";
});