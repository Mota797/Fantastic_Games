//Script para animação de rolagem na página
document.querySelectorAll('header #scroll').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevenir o comportamento padrão
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      // Scroll suave até a seção
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });

//Parte do script para o carrossel de jogos
new Swiper('#card-wrapper', {
    loop: true,
    slidesPerView: 3,
    marginLeft: 90,
    
    // If we need pagination
    //pagination: {
    //  el: '#swiper-pagination',
    //},
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoint :{
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });

  //Parte do script para o carrossel de jogos em promoção
  let contador = 1;
  document.getElementById('radio1').checked = true;

  setInterval(function (){
    intervalo();
  },5000);

  function intervalo() {
    contador++;
    if (contador > 6) {
      contador = 1; // Reinicia ao chegar no último
    }
    document.getElementById(`radio${contador}`).checked = true;
  }

  
