let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.carrossel-item');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'flex';
    slides[slideIndex - 1].classList.add('animate-slide'); // Adicione a classe de animação

    setTimeout(() => {
        slides[slideIndex - 1].classList.remove('animate-slide'); // Remova a classe de animação após a animação terminar
    }, 500); // Tempo da animação em milissegundos
    
    setTimeout(showSlides, 10000); // Mude para a próxima imagem a cada 2 segundos
}

showSlides(); // Inicie o carrossel