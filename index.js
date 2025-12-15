document.addEventListener("DOMContentLoaded", function () {
  // === FUNCIONALIDAD DE MENÚ (ACORDEÓN) ===
  const titulos = document.querySelectorAll(".menu-item h1");
  titulos.forEach((titulo) => {
    titulo.addEventListener("click", function () {
      const menuItem = this.closest(".menu-item");
      const isCurrentlyActive = menuItem.classList.contains("active-info");

      // Cierra todos los elementos activos
      document.querySelectorAll(".menu-item.active-info").forEach((item) => {
        item.classList.remove("active-info");
      });

      // Abre el elemento si no estaba activo
      if (!isCurrentlyActive) {
        menuItem.classList.add("active-info");
      }
    });
  });

  // === PARA ABRIR Y CERRAR PROTAFOLIO ===
  // 💡 CORRECCIÓN: Se usa document.getElementById y document.querySelector
  const openPortafolio = document.getElementById("open-portafolio");
  const backgroundBlack = document.querySelector(".backgroud-black");
  const portafolioViewer = document.querySelector(".portafolio-viewer");

  // Asegúrate de que los elementos existen antes de añadir el listener
  if (openPortafolio && backgroundBlack && portafolioViewer) {
    openPortafolio.addEventListener("click", function () {
      backgroundBlack.classList.add("active-bkg");
      portafolioViewer.classList.add("active-portafolio");
    });

    const closePortafolio = document.querySelector(".close-portafolio");
    if (closePortafolio) {
      closePortafolio.addEventListener("click", function () {
        backgroundBlack.classList.remove("active-bkg");
        portafolioViewer.classList.remove("active-portafolio");
      });
    }
  }


}); //CIERRE DOMCONTENTLOADED

  // === PARA NAVEGACION DE CARRUSEL DE PROYECTOS ===
  const cardsContainer = document.querySelector(".cards-container");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  if (cardsContainer && prevButton && nextButton) {
    //const card = document.querySelector(".proyecto-card");

    nextButton.addEventListener("click", function () {
      cardsContainer.scrollLeft += 100;
    });

    prevButton.addEventListener("click", function () {
      cardsContainer.scrollLeft -= 100;
    });
  }