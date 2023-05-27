const form = document.getElementById('formulario');
// Evita que el formulario se envíe automáticamente

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  const url = 'https://formspree.io/f/xrgjknok';
  const formData = new FormData(form);
  fetch(url, {
    method: 'POST',
    body: formData,
    mode: 'no-cors'
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
const mensaje = document.getElementById('mensaje');


 // Mostramos el mensaje de notificación
  const notificacion = document.createElement('p');
  notificacion.textContent = 'El formulario se ha enviado correctamente';
  mensaje.appendChild(notificacion);

