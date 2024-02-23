const formRegistro = document.getElementById("formRegistro");
formRegistro.innerHTML = ` 
<div class="col-md-8 imagen-izquierda d-none d-md-block"></div>
<div class="col-md-4">
  <div class="text-center mt-4"><h4>Registro</h4></div>
  
  <div class="d-flex justify-content-center">
    <form class="mt-5 w-75" id="registrationForm">
      <div class="mb-3">
        <label for="usuario" class="form-label">Usuario</label>
        <input
          type="text"
          class="form-control custom-input"
          id="usuario"
          minlength="8"
          maxlength="20" 
          required
        />
      </div>
      <div id="usuario-mensaje-instructivo" class="form-text text-muted">
      Debe contener al menos 8 caracteres, letras y números.
      </div>
      <div class="mb-3 mt-3">
        <label for="mail" class="form-label">Correo Electrónico</label>
        <input
          type="email"
          class="form-control custom-input"
          id="mail"
          maxlength="50"
          required
        />
        
      </div>
      <div class="mb-3">
        <label for="pass" class="form-label">Contraseña</label>
        <input
          type="password"
          class="form-control custom-input"
          id="pass"
          minlength="8"
          maxlength="20" 
          
        />
      </div>
      <div id="pass-mensaje-instructivo" class="form-text text-muted">
        Debe contener al menos 8 caracteres, letras y números.
      </div>
      <div class="mb-3 mt-3">
        <label for="rPass" class="form-label">Repetir contraseña</label>
        <input
          type="password"
          class="form-control custom-input"
          id="rPass"
          minlength="8"
          maxlength="20"
          
        />
      </div>
      

      <div class="d-flex justify-content-center mt-4">
        <button type="button" class="slide2 w-100" onclick="pag404()">
         <i class="fab fa-google"></i> Iniciar con Google
        </button>
      </div>

      
      <div class="d-flex justify-content-center mt-3">
        <button type="button" class="slide w-100" onclick="registerUser()">Confirmar</button>
      </div>
    </form>
  </div>
</div>`;

const registerUser = () => {
  const usuarioInput = document.getElementById("usuario");
  const mailInput = document.getElementById("mail");
  const passInput = document.getElementById("pass");
  const rPassInput = document.getElementById("rPass");

  const generarID = () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuarios.length + 1;
  };

  const mostrarMensaje = (input, mensaje) => {
    let mensajeElement = document.getElementById(`${input.id}-mensaje`);
    if (!mensajeElement) {
      mensajeElement = document.createElement("div");
      mensajeElement.id = `${input.id}-mensaje`;
      input.parentNode.appendChild(mensajeElement);
    }

    // Oculta el mensaje instructivo
    const instructivoElement = document.getElementById(
      `${input.id}-mensaje-instructivo`
    );
    if (instructivoElement) {
      instructivoElement.style.display = "none";
    }
    mensajeElement.textContent = mensaje;
    mensajeElement.style.color = "red";

    input.classList.add("is-invalid");
  };

  const ocultarMensaje = (input) => {
    const mensajeElement = document.getElementById(`${input.id}-mensaje`);
    if (mensajeElement) {
      mensajeElement.textContent = "";
    }

    const instructivoElement = document.getElementById(
      `${input.id}-mensaje-instructivo`
    );
    if (instructivoElement && !input.value.trim()) {
      instructivoElement.style.display = "block";
    }

    input.classList.remove("is-invalid");
  };

  const manejarInput = (input) => {
    ocultarMensaje(input);

    const instructivoElement = document.getElementById(
      `${input.id}-mensaje-instructivo`
    );
    if (!input.value.trim() && instructivoElement) {
      instructivoElement.style.display = "block";
    }
  };

  usuarioInput.addEventListener("input", () => manejarInput(usuarioInput));
  mailInput.addEventListener("input", () => manejarInput(mailInput));
  passInput.addEventListener("input", () => manejarInput(passInput));
  rPassInput.addEventListener("input", () => manejarInput(rPassInput));

  const userRegexp = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const passwordRegexp = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const id = generarID();

  const usuario = usuarioInput.value.trim();
  const mail = mailInput.value.trim();
  const pass = passInput.value.trim();
  const rPass = rPassInput.value.trim();

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

  if (!emailRegexp.test(mail)) {
    mostrarMensaje(mailInput, "Correo inválido");
    return;
  }

  ocultarMensaje(usuarioInput);
  ocultarMensaje(passInput);

  const nuevoUsuario = {
    id,
    usuario,
    mail,
    contraseña: pass,
    rol: "usuario",
    favoritos: [],
    carrito: [],
    estado: false,
    login: false,
    delete: false,
  };

  const usersList = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usersList.some((user) => user.usuario === usuario)) {
    mostrarMensaje(usuarioInput, "Usuario en uso");
    return;
  }

  if (usersList.find((user) => user.mail === mail)) {
    mostrarMensaje(mailInput, "El correo electrónico ya está en uso");
    return;
  }

  ocultarMensaje(usuarioInput);
  ocultarMensaje(mailInput);

  usersList.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usersList));

  document.getElementById("registrationForm").reset();

  alert(
    "Registro exitoso, por favor verifique su mail para continuar. En caso de no encontrarlo, revisa la carpeta SPAM"
  );

  enviarMail(mail);

  setTimeout(() => {
    window.location.href = "./heroPage.html";
  }, 1000);
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

const pag404 = () => {
  setTimeout(() => {
    window.location.href = "./error404.html";
  }, 1000);
};
