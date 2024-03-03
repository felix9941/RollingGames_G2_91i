const formLogin = document.getElementById("formLogin");
formLogin.innerHTML = ` 
<div class="col-md-8 imagen d-none d-md-block"></div>
<div class="col-md-4">
  <div class="text-center mt-5"><h4>Iniciar Sesion</h4></div>
  
  <div class="d-flex justify-content-center">
    <form class="mt-5 w-75" id="loginForm">

      <div class="mb-3 mt-4">
        <label for="mail" class="form-label">Correo Electrónico o Usuario</label>
        <input
          type="email"
          class="form-control custom-input"
          id="mail"
          maxlength="50"
          required
        />
        <div class="invalid-feedback" id="mailError"></div>
        <div class="invalid-feedback" id="instructivoMjeUser"></div>
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
        <div class="invalid-feedback" id="passError"></div>
        <div class="invalid-feedback" id="instructivoMjePass"></div>
      </div>
     
      <div class="text-center">
      <a href="./recuperarCuenta.html" class="text-black">¿Olvidaste tu contraseña?</a>
      </div>

      <div class="text-center mt-2">
        <p> ¿No tienes una cuenta?, haz click <a href="./registro.html" class="text-black">aqui</a></p>
      </div>
      
      <div class="d-flex justify-content-center mt-4">
        <button type="button" class="slide2 w-100 m-0" onclick="pag404()">
         <i class="fab fa-google"></i> Iniciar con Gmail
        </button>
      </div>

      
      <div class="d-flex justify-content-center mt-3 mb-3">
        <button type="button" class="slide w-100 m-0" onclick="loginUser()">Conectarse</button>
      </div>
    </form>
  </div>
</div>`;

const navbarLogin = document.getElementById("navbar-Login");
navbarLogin.innerHTML = `
<div class="container-fluid">
<a href="/index.html" class="d-flex align-items-center enlace-logo">
  <img class="ms-1 px-2" src="../img/Logo Play Gaming.png" alt="" />
</a>
<button
  class="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
    <li class="nav-item"></li>
    <li class="nav-item">
      <a
        class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
        href="./sobreNosotros.html"
        >Sobre nosotros</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
        href="./contacto.html"
        >Contacto</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
        href="./login.html"
        >Iniciar sesion</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
        href="./registro.html"
        >Registrarse</a
      >
    </li>
  </ul>
</div>
</div>`;

const footerGeneral = document.getElementById("footerGeneral");
footerGeneral.innerHTML = ` <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
<a href="/index.html"
  ><img
    src="../img/Logo Play Gaming.png"
    alt="Logo-PlayGaming"
    width="150vw"
    class="pb-3"
/></a>
</div>

<div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
<div class="redes mt-3">
  <div class="Redes2 d-flex justify-content-center icons">
    <a href="error404.html"
      ><i class="fa-brands fa-square-facebook fa-3x mx-2"></i
    ></a>
    <a href="error404.html"
      ><i class="fa-brands fa-square-x-twitter fa-3x"></i
    ></a>
    <a href="error404.html"
      ><i class="fa-brands fa-square-instagram fa-3x mx-2"></i
    ></a>
    <a href="error404.html"
      ><i class="fa-brands fa-square-whatsapp fa-3x"></i
    ></a>
  </div>

  <h5 class="text-center mt-3">
    &copy; 2024 RollingsGame. Todos los derechos reservados.
  </h5>
</div>
</div>

<div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
<div class="informacion-pag">
  <div
    class="informacion-pag text-center mt-4 mb-3 listNone"
    
  >
    <li><a href="/index.html">Inicio</a></li>
    <li><a href="sobreNosotros.html">Sobre nosotros</a></li>
    <li><a href="contacto.html">Contacto</a></li>
    <li>
      <a href="error404.html"
        >Politicas de privacidad</a
      >
    </li>
  </div>
</div>
</div>`;

(() => {
  const generarID = () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
  };

  const newUser = {
    id: generarID(),
    usuario: "admin",
    mail: "playgaming@gaming.com.ar",
    contrasena: "playgaming24",
    login: false,
    rol: "admin",
    delete: false,
  };

  const usersList = JSON.parse(localStorage.getItem("usuarios")) || [];

  const existingUser = usersList.find((user) => user.mail === newUser.mail);

  if (!existingUser) {
    usersList.push(newUser);
    localStorage.setItem("usuarios", JSON.stringify(usersList));
  }
})();

const loginUser = () => {
  let inputMail = document.getElementById("mail").value;
  let inputPass = document.getElementById("pass").value;

  const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const userRegexp = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const passwordRegexp = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const usersList = JSON.parse(localStorage.getItem("usuarios")) || [];

  const combinedRegexp = new RegExp(
    `(${emailRegexp.source})|(${userRegexp.source})`
  );

  const userExists = usersList.find(
    (user) =>
      (user.mail === inputMail && user.contrasena === inputPass) ||
      (user.usuario === inputMail && user.contrasena === inputPass)
  );

  const isUserInhabilitado = userExists && userExists.delete === true;

  const isUserPendiente = userExists && userExists.estado === false;

  const admin = userExists && userExists.rol === "admin";

  if (admin) {
    Swal.fire({
      title: "Bienvenido Administrador",
      text: "Inicio de sesión exitoso!",
      icon: "success",
    });

    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const indiceUsuario = listaUsuarios.findIndex(
      (user) =>
        (user.mail === inputMail || user.usuario === inputMail) &&
        user.contrasena === inputPass
    );

    if (indiceUsuario !== -1) {
      listaUsuarios[indiceUsuario].login = true;

      localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    }

    setTimeout(() => {
      window.location.href = "paginaPrincipalAdmin.html";
    }, 3000);
    return;
  }

  if (!inputMail && !inputPass) {
    document.getElementById("mailError").innerHTML = "Campo requerido";
    document.getElementById("mail").classList.add("is-invalid");

    document.getElementById("passError").innerHTML = "Campo requerido";
    document.getElementById("pass").classList.add("is-invalid");

    document.getElementById("mail").addEventListener("input", () => {
      document.getElementById("mailError").innerHTML = "";
      document.getElementById("mail").classList.remove("is-invalid");
    });

    document.getElementById("pass").addEventListener("input", () => {
      document.getElementById("passError").innerHTML = "";
      document.getElementById("pass").classList.remove("is-invalid");
    });
    return;
  } else {
    if (!inputMail) {
      document.getElementById("mailError").innerHTML = "Campo requerido";
      document.getElementById("mail").classList.add("is-invalid");

      document.getElementById("mail").addEventListener("input", () => {
        document.getElementById("mailError").innerHTML = "";
        document.getElementById("mail").classList.remove("is-invalid");
      });
      return;
    }

    if (!inputPass) {
      document.getElementById("passError").innerHTML = "Campo requerido";
      document.getElementById("pass").classList.add("is-invalid");

      document.getElementById("pass").addEventListener("input", () => {
        document.getElementById("passError").innerHTML = "";
        document.getElementById("pass").classList.remove("is-invalid");
      });
      return;
    }
  }

  if (!combinedRegexp.test(inputMail)) {
    document.getElementById("instructivoMjeUser").innerHTML =
      "Usuario debe tener al menos 8 caracteres y contener letras y números, si no recuerdas el usuario utiliza el mail.";
    document.getElementById("mail").classList.add("is-invalid");

    document.getElementById("mail").addEventListener("input", () => {
      document.getElementById("instructivoMjeUser").innerHTML = "";
      document.getElementById("mail").classList.remove("is-invalid");
    });

    return;
  } else if (!passwordRegexp.test(inputPass)) {
    document.getElementById("instructivoMjePass").innerHTML =
      "La contraseña debe tener al menos 8 caracteres y contener solo letras y números.";
    document.getElementById("pass").classList.add("is-invalid");

    document.getElementById("pass").addEventListener("input", () => {
      document.getElementById("instructivoMjePass").innerHTML = "";
      document.getElementById("pass").classList.remove("is-invalid");
    });
    return;
  }

  document.getElementById("loginForm").reset();

  if (isUserInhabilitado) {
    Swal.fire({
      icon: "error",
      title: "Importante",
      text: "Usuario inhabilitado",
    });
    return;
  }

  if (isUserPendiente) {
    Swal.fire({
      icon: "warning",
      title: "Estado de tu cuenta",
      text: "Pendiente de aprobacion",
    });

    setTimeout(() => {
      window.location.href = "/index.html";
    }, 3000);

    return;
  }

  if (userExists) {
    Swal.fire({
      title: "Excelente!",
      text: "Inicio de sesión exitoso!",
      icon: "success",
    });

    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const indiceUsuario = listaUsuarios.findIndex(
      (user) =>
        (user.mail === inputMail || user.usuario === inputMail) &&
        user.contrasena === inputPass
    );

    if (indiceUsuario !== -1) {
      listaUsuarios[indiceUsuario].login = true;

      localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    }

    setTimeout(() => {
      window.location.href = "paginaPrincipal.html";
    }, 1000);
  } else {
    Swal.fire({
      icon: "error",
      title: "Importante",
      text: "Usuario o contraseña incorrectos.",
    });
  }
};

const pag404 = () => {
  setTimeout(() => {
    window.location.href = "./error404.html";
  }, 1000);
};
