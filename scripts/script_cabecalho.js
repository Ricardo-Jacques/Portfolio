window.addEventListener('scroll', function() {
    let cabecalho = document.getElementsByTagName('header')[0];
    let limiteScroll = 100; // Defina a quantidade de rolagem necessária para fixar o cabeçalho

    if (window.scrollY > limiteScroll) {
        cabecalho.classList.add('fixado');
    } else {
        cabecalho.classList.remove('fixado');
    }
});

// Rolar para a seção desejada
function scrollPara(elemento) {
    document.querySelector(elemento).scrollIntoView({
        behavior: 'smooth'
    });
} 