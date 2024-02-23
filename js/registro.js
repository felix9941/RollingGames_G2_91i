const formRegistro = document.getElementById("formRegistro");
formRegistro.innerHTML = ` 
<div class="col-md-8 imagen-izquierda d-none d-md-block"></div>
<div class="col-md-4">
  <div class="text-center mt-5"><h4>Registro</h4></div>
  
  <div class="d-flex justify-content-center">
    <form class="mt-5 w-75" id= "registrationForm">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >Usuario</label
        >
        <input
          type="text"
          class="form-control custom-input"
          id="usuario"
          
        />
        
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >Correo Electrónico</label
        >
        <input
          type="email"
          class="form-control custom-input"
          id="mail"
        />
        
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Contraseña</label
        >
        <input
          type="password"
          class="form-control custom-input"
          id="pass"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Repetir contraseña</label
        >
        <input
          type="password"
          class="form-control custom-input"
          id="rPass"
        />
      </div>
      <div class="d-flex justify-content-center mt-5">
        <button type="button" class="slide" onclick="registerUser()">Confirmar</button>
      </div>
    </form>
  </div>
</div>`;

const registerUser = () => {
  let usuarioInput = document.getElementById("usuario");
  let mailInput = document.getElementById("mail");
  let passInput = document.getElementById("pass");
  let rPassInput = document.getElementById("rPass");

  function generarID() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuarios.length + 1;
  }

  function mostrarMensaje(input, mensaje) {
    let mensajeElement = document.getElementById(input.id + "-mensaje");
    if (!mensajeElement) {
      mensajeElement = document.createElement("div");
      mensajeElement.id = input.id + "-mensaje";
      input.parentNode.appendChild(mensajeElement);
    }
    mensajeElement.textContent = mensaje;
    mensajeElement.style.color = "red";

    input.classList.add("is-invalid");
  }

  function ocultarMensaje(input) {
    let mensajeElement = document.getElementById(input.id + "-mensaje");
    if (mensajeElement) {
      mensajeElement.textContent = "";
    }

    input.classList.remove("is-invalid");
  }

  function manejarInput(input) {
    ocultarMensaje(input);
  }

  usuarioInput.addEventListener("input", () => manejarInput(usuarioInput));
  mailInput.addEventListener("input", () => manejarInput(mailInput));
  passInput.addEventListener("input", () => manejarInput(passInput));
  rPassInput.addEventListener("input", () => manejarInput(rPassInput));

  let usuario = usuarioInput.value;
  let mail = mailInput.value;
  let pass = passInput.value;
  let rPass = rPassInput.value;

  const userRegexp = new RegExp("^[a-zA-Z0-9]{8,}$");
  const passwordRegexp = new RegExp("^[a-zA-Z0-9]{8,}$");

  let id = generarID();

  if (!usuario || !pass || !rPass || !mail) {
    if (!usuario) mostrarMensaje(usuarioInput, "Campo requerido");
    if (!pass) mostrarMensaje(passInput, "Campo requerido");
    if (!rPass) mostrarMensaje(rPassInput, "Campo requerido");
    if (!mail) mostrarMensaje(mailInput, "Campo requerido");

    return;
  } else if (pass !== rPass) {
    mostrarMensaje(rPassInput, "Las contraseñas no coinciden");
    return;
  }

  ocultarMensaje(usuarioInput);
  ocultarMensaje(passInput);
  ocultarMensaje(rPassInput);
  ocultarMensaje(mailInput);

  if (!userRegexp.test(usuario)) {
    mostrarMensaje(
      usuarioInput,
      "El nombre de usuario debe tener al menos 8 caracteres y contener solo letras y números"
    );
    return;
  } else if (!passwordRegexp.test(pass)) {
    mostrarMensaje(
      passInput,
      "La contraseña debe tener al menos 8 caracteres y contener solo letras y números"
    );
    return;
  }

  const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegexp.test(mail)) {
    mostrarMensaje(mailInput, "Correo inválido");
    return;
  }

  ocultarMensaje(usuarioInput);
  ocultarMensaje(passInput);

  const nuevoUsuario = {
    id: id,
    usuario: usuario,
    mail: mail,
    contraseña: pass,
    rol: "usuario",
    favoritos: [],
    carrito: [],
    estado: false,
    login: false,
    delete: false,
  };

  let usersList = JSON.parse(localStorage.getItem("usuarios")) || [];
  if (usersList.some((user) => user.usuario === usuario)) {
    mostrarMensaje(usuarioInput, "Usuario en uso");
    return;
  }

  if (usersList.find((user) => user.mail === mail)) {
    mostrarMensaje(mailInput, "El correo electronico ya esta en uso");
    return;
  }

  ocultarMensaje(usuarioInput);
  ocultarMensaje(mailInput);

  usersList.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usersList));

  document.getElementById("registrationForm").reset();

  alert("Usuario registrado con éxito!");

  enviarMail(mail);
};

const enviarMail = (correo) => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "martin.fesito@gmail.com",
    Password: "D52D5DF04EAF1430F1A6BA108E1ADA8E4BF6",
    To: correo,
    From: "martin.fesito@gmail.com",
    Subject: "Bienvenido a Play Gaming",
    Body: "Bienvenido a nuestra plataforma Play Gaming. En 24 horas habilitaremos tu cuenta para que puedas acceder.",
  });
};
