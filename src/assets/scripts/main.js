function sendMessage() {
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const consulta = document.getElementById('consulta');
  
  if (!nombre.value || !email.value || !consulta.value) {
    alert('Todos los campos son requeridos');
    return;
  }

  alert("Tu consulta ha sido enviada");
}
