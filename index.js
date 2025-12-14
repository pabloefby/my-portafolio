document.addEventListener("DOMContentLoaded", function () {
  const titulos = document.querySelectorAll(".menu-item h1");

  titulos.forEach((titulo) => {
    titulo.addEventListener("click", function () {
      const menuItem = this.closest(".menu-item");

      const isCurrentlyActive = menuItem.classList.contains("active-info");

      document.querySelectorAll(".menu-item.active-info").forEach((item) => {
        item.classList.remove("active-info");
      });

      if (!isCurrentlyActive) {
        menuItem.classList.add("active-info");
      }
    });
  });
});
