
(function() {
  const KEY = 'installAppAccepted';
  const alertBox = document.getElementById('install-alert');
  const acceptBtn = document.getElementById('accept-btn');

  // Mostrar alerta solo si no aceptó antes
  if (!localStorage.getItem(KEY)) {
    window.addEventListener('load', () => {
      // Esperar 5 segundos antes de mostrar
      setTimeout(() => {
        alertBox.classList.remove('hidden');

        // Ocultar automáticamente después de 5 segundos visibles
        setTimeout(() => {
          if (!localStorage.getItem(KEY)) {
            alertBox.classList.add('hidden');
          }
        }, 5000);

      },1000);
    });
  }

  // Si presiona Aceptar → guardar y ocultar para siempre
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem(KEY, 'true');
    alertBox.classList.add('hidden');
  });
})();