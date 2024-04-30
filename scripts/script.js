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
    slides[slideIndex - 1].classList.add('animate-slide');

    setTimeout(() => {
        slides[slideIndex - 1].classList.remove('animate-slide');
    }, 500);
    
    setTimeout(showSlides, 10000); // Muda para a próxima imagem a cada 10 segundos
}

showSlides(); // Inicie o carrossel


function voltarSlide() {
    let slides = document.querySelectorAll('.carrossel-item');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    slides[slideIndex - 1].style.display = 'flex';
    slides[slideIndex - 1].classList.add('animate-slide');

    setTimeout(() => {
        slides[slideIndex - 1].classList.remove('animate-slide');
    }, 500);
    }

function avancarSlide() {
    let slides = document.querySelectorAll('.carrossel-item');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'flex';
    slides[slideIndex - 1].classList.add('animate-slide');

    setTimeout(() => {
        slides[slideIndex - 1].classList.remove('animate-slide');
    }, 500);
}

voltar = document.getElementById("seta_esquerda");
avancar = document.getElementById("seta_direita");

voltar.addEventListener("click", voltarSlide);
avancar.addEventListener("click", avancarSlide);