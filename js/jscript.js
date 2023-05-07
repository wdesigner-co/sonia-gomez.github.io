// Obtener elementos del DOM
const contactButton = document.getElementById("contact-button");
const contactMenu = document.getElementById("contact-menu");
const closeButton = document.getElementById("close-button");
const emailButton = document.getElementById("email-button");
const qrButton = document.getElementById("qr-button");
const qrMenu = document.getElementById("qr-menu");
const qrClose = document.getElementById("qr-close");

// Función para mostrar un menú
function showMenu(menu) {
  menu.classList.add("show");
}

// Función para ocultar un menú
function hideMenu(menu) {
  menu.classList.remove("show");
}

// Evento al hacer clic en el botón de contacto
contactButton.addEventListener("click", function() {
  showMenu(contactMenu);
});

// Evento al hacer clic en el botón de cerrar
closeButton.addEventListener("click", function() {
  hideMenu(contactMenu);
});

// Evento al deslizar hacia abajo en el menú de contacto
let startY = 0;
contactMenu.addEventListener("touchstart", function (event) {
  startY = event.touches[0].clientY;
});

contactMenu.addEventListener("touchmove", function (event) {
  const currentY = event.touches[0].clientY;
  const distance = currentY - startY;

  if (distance > 0) {
    hideMenu(contactMenu);
  }
});

// Evento al hacer clic en el botón de email
emailButton.addEventListener("click", function() {
  window.location.href = "mailto: sggm245@gmail.com";
  emailButton.classList.add("clicked");
});

// Evento para compartir en RRSS
function share() {
  var url = "https://wdesigner-co.github.io/sonia-gomez.github.io/";
  var title = "Solicita los servicios de Sonia Gómez | Estilista Integral | a través de su Profile Card";
  var hashtags = "profilecard";
  
  var twitter_url = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(title + " #" + hashtags);
  var facebook_url = "https://www.facebook.com/sharer.php?u=" + encodeURIComponent(url);
  var linkedin_url = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(title);
  
  window.open(twitter_url, "Compartir en Twitter", "width=600,height=300");
  window.open(facebook_url, "Compartir en Facebook", "width=600,height=300");
  window.open(linkedin_url, "Compartir en LinkedIn", "width=600,height=300");
}

// Evento al hacer clic en el botón del menú QR
qrButton.addEventListener("click", function() {
  showMenu(qrMenu);
});

// Evento al hacer clic en el botón de cerrar del menú QR
qrClose.addEventListener("click", function() {
  hideMenu(qrMenu);
});

// Evento al deslizar hacia abajo en el menú QR
qrMenu.addEventListener("touchstart", function(event) {
  startY = event.touches[0].clientY;
});

qrMenu.addEventListener("touchmove", function(event) {
  const currentY = event.touches[0].clientY;
  const distance = currentY - startY;

  if (distance > 0) {
    hideMenu(qrMenu);
  }
});
