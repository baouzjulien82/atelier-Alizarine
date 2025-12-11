// ===============================
// NAVBAR : fermer le menu au clic
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)')
    .forEach(function (navLink) {
      navLink.addEventListener('click', function () {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse, { toggle: true });
        }
      });
    });
});

// ===============================
// GALERIE : affichage + bouton Voir plus / Voir moins
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const galerieContainer = document.getElementById("galerie-container");
  const toggleBtn = document.getElementById("toggle-images");

  // Tableau des images
  const images = [
    "photo1-galerie-thumbnail.jpg",
    "photo2-galerie-thumbnail.jpg",
    "photo3-galerie-thumbnail.jpg",
    "photo4-galerie-thumbnail.jpg",
    "photo5-galerie-thumbnail.jpg",
    "photo6-galerie-thumbnail.jpg",
    "photo7-galerie-thumbnail.jpg",
    "photo8-galerie-thumbnail.jpg",
    "photo9-galerie-thumbnail.jpg",
    "photo10-galerie-thumbnail.jpg",
    "photo11-galerie-thumbnail.jpg",
    "photo12-galerie-thumbnail.jpg",
    "photo13-galerie-thumbnail.jpg",
    "photo14-galerie-thumbnail.jpg",
    "photo15-galerie-thumbnail.jpg",
    "photo16-galerie-thumbnail.jpg",
    "photo17-galerie-thumbnail.jpg",
    "photo18-galerie-thumbnail.jpg",
    "photo19-galerie-thumbnail.jpg",
    "photo20-galerie-thumbnail.jpg"
  ];

  // Nombre initial selon la largeur de l’écran
  const initialCount = window.innerWidth <= 576 ? 6 : 12;
  let visibleCount = initialCount;
  let expanded = false;

  // Fonction pour ouvrir le lightbox
  function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = src.replace("-thumbnail", "");
  }

  // Fonction pour afficher les images
  function renderImages(limit) {
    galerieContainer.innerHTML = "";
    for (let i = 0; i < limit && i < images.length; i++) {
      const img = document.createElement("img");
      img.src = `/atelier-Alizarine/media/img/${images[i]}`;
      img.className = "img-thumbnail";
      img.alt = `Image ${i + 1}`;

      // événement lightbox
      img.addEventListener('click', () => openLightbox(img.src));

      galerieContainer.appendChild(img);
    }
  }

  // Affiche l’état initial
  renderImages(visibleCount);

  // Toggle bouton Voir plus / Voir moins
  toggleBtn.addEventListener("click", function () {
    if (!expanded) {
      renderImages(images.length);
      toggleBtn.textContent = "Voir moins";
      expanded = true;
    } else {
      visibleCount = initialCount;
      renderImages(visibleCount);
      toggleBtn.textContent = "Voir plus";
      expanded = false;
    }
  });
});

// ===============================
// LIGHTBOX : fermeture
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  // Fermer au clic sur le bouton "X"
  document.querySelector('.lightbox .close').addEventListener('click', function () {
    document.getElementById('lightbox').style.display = 'none';
  });

  // Fermer au clic sur le fond (hors image)
  document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
  });
});

// ===============================
// COOKIES : bannière de consentement
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  if (localStorage.getItem("cookiesConsent")) {
    banner.style.display = "none";
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesConsent", "accepted");
    banner.style.display = "none";
    // Ici activer tes scripts externes (FB, Insta, Analytics)
  });

  rejectBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesConsent", "rejected");
    banner.style.display = "none";
    // Ici bloquer ou ne pas charger les scripts externes
  });
});

// ===============================
// FOOTER : année dynamique
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();
});