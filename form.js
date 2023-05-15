const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  const url = 'https://ejemplo.com/notificacion';
  const formData = new FormData(form);
  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      console.log('Notificación enviada exitosamente');
    } else {
      console.error('Ocurrió un error al enviar la notificación');
    }
  })
  .catch(error => {
    console.error('Ocurrió un error al enviar la notificación:', error);
  });
});