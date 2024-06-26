window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const logoimage = document.querySelector('.logo-image');
    if (window.scrollY > 50) { // Ajuste este valor conforme necessário
        navbar.classList.add('fixed');
        logoimage.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
        logoimage.classList.remove('fixed');
    }
});

const targetDate = new Date('November 1, 2024 00:00:00').getTime();

// Função para atualizar a contagem regressiva
function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    // Calcule o tempo restante
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Atualize os elementos no HTML
    document.querySelector('.days-count').textContent = days;
    document.querySelector('.hours-count').textContent = hours;
    document.querySelector('.minutes-count').textContent = minutes;
    document.querySelector('.seconds-count').textContent = seconds;
}

// Atualize a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

// Inicialize a contagem regressiva
updateCountdown();

document.getElementById('mc-embedded-subscribe-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário e o redirecionamento

    var form = this; // Referência ao formulário
    var url = form.action + '&' + new URLSearchParams(new FormData(form)).toString();
    var script = document.createElement('script');
    script.src = url;

    script.onload = function () {
        showPopup();
    };

    script.onerror = function () {
        showPopup();
    };

    document.body.appendChild(script); // Adiciona o script ao DOM para executar a solicitação JSONP
});

function showPopup() {
    document.getElementById('popup-overlay').style.display = 'block';
    document.getElementById('success-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById('success-popup').style.display = 'none';
}