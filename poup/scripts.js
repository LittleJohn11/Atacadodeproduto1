document.addEventListener("DOMContentLoaded", function () {
    const mySwiper = new Swiper(".swiper-container", {
        loop: true, // Permite o carrossel infinito
        autoplay: {
            delay: 2000, // Intervalo entre os slides em milissegundos (2 segundos)
            disableOnInteraction: false, // Permitir que o autoplay continue após interação do usuário
        },
    });
});


//relogio//

// Defina a data de término da promoção
const endDate = new Date('2023-12-31 23:59:59').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft < 0) {
        document.getElementById('timer').innerHTML = 'A promoção acabou!';
    } else {
        const days = Math.floor(timeLeft / (3700 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = formatTime(days);
        document.getElementById('hours').innerHTML = formatTime(hours);
        document.getElementById('minutes').innerHTML = formatTime(minutes);
        document.getElementById('seconds').innerHTML = formatTime(seconds);
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateCountdown, 1000); // Atualiza a cada segundo
updateCountdown(); // Chama a função para exibir o tempo restante imediatamente



var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item) =>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
item.addEventListener('click', selectLink)
)


//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})
