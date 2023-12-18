document.addEventListener('DOMContentLoaded', function () {
    const nonButton = document.getElementById('non');
  
    nonButton.addEventListener('mouseover', function () {
      nonButton.style.display = 'none';
    });
  
    nonButton.addEventListener('mouseout', function () {
      nonButton.style.display = 'inline-block'; // Ou 'block' selon le contexte de votre mise en page
    });
  });
  