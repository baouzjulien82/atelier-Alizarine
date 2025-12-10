document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne tous les liens sauf le dropdown-toggle
  document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)')
    .forEach(function(navLink) {
      navLink.addEventListener('click', function () {
        var navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true
          });
        }
      });
    });
});