$(document).ready(function () {
    // Inicializar Owl Carousel
    $(".custom-carousel").owlCarousel({
      autoWidth: true,
      loop: true
    });
  
    // Agregar evento de clic a los ítems del carrusel
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
  