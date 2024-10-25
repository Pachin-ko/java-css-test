 // Gestionnaire de clic sur le titre (l'élément h2 avec la classe "hero")
 document.querySelector('.hero').addEventListener('click', function() {
     // Ajout de la classe "fade-out" pour déclencher l'animation de fondu
     document.body.classList.add('fade-out');
    
     // Attendre la fin de l'animation avant de changer de page (0.5s comme défini dans CSS)
     setTimeout(function() {
         window.location.href = "autrepage.html"; // Remplace par le chemin relatif vers la nouvelle page
     }, 500); // Correspond à la durée de la transition (0.5 seconde)
 });