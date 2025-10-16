// JS con botón de cerrar
(function () {
  const KEY = 'installAppAccepted';
  const alertBox = document.getElementById('install-alert');
  const acceptBtn = document.getElementById('accept-btn');
  const closeBtn = document.getElementById('close-btn');

  if (!localStorage.getItem(KEY)) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        alertBox.classList.remove('hidden');

        // Ocultar automáticamente después de 5 segundos visibles
        setTimeout(() => {
          if (!localStorage.getItem(KEY)) {
            alertBox.classList.add('hidden');
          }
        }, 55000);
      }, 3000);
    });
  }

  // Aceptar → guardar y ocultar
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem(KEY, 'true');
    alertBox.classList.add('hidden');
  });

  // Cerrar con la "X" → solo ocultar (no guardar)
  closeBtn.addEventListener('click', () => {
    alertBox.classList.add('hidden');
  });
})();


//alera qr
function qr() {
        Swal.fire({
            html: '<div class="ico-qr-aler2">'+
    '<img class="ico-qr-aler2-img"  src="img/qr-code (1).png" alt="">'+
'</div>',

            //tamaño
            imageWidth: 300,
            imageHeight: 300,
            //cerrar
            padding: '0rem',
            showCloseButton: true,
            showConfirmButton: false,
            backdrop: `
		rgb(54 54 54 / 58%)  `,
            background: 'linear-gradient(90deg, var(--g1), var(--g2), var(--g3))',
        })
    }


