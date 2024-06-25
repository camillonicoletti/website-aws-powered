// Seleziona l'elemento del menu mobile con id 'mobile-menu'
const menu = document.querySelector('#mobile-menu');

// Seleziona l'elemento delle voci di menu della navbar con classe 'navbar__menu'
const menuLinks = document.querySelector('.navbar__menu');

// Aggiungi un event listener per gestire il click sull'elemento del menu mobile
menu.addEventListener('click', function() {
    // Aggiunge o rimuove la classe 'is-active' dall'elemento del menu mobile per attivare o disattivare un'icona o un indicatore visivo di attivazione
    menu.classList.toggle('is-active');

    // Aggiunge o rimuove la classe 'active' dall'elemento delle voci di menu della navbar per mostrare o nascondere le voci di menu quando il menu mobile è attivo
    menuLinks.classList.toggle('active');
});
