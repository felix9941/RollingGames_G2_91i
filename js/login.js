const formLogin = document.getElementById("formLogin");
formLogin.innerHTML = ` 
<div class="col-md-8 imagen d-none d-md-block"></div>
<div class="col-md-4">
  <div class="text-center mt-5"><h4>Iniciar Sesion</h4></div>
  
  <div class="d-flex justify-content-center">
    <form class="mt-5 w-75" id="loginForm">

      <div class="mb-3 mt-4">
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
     
      <div class="text-center textD">
      <a href="./recuperarCuenta.html">¿Olvidaste tu contraseña?</a>
      </div>

      <div class="text-center mt-2">
        <p> ¿No tienes una cuenta?, haz click <a href="./registro.html">aqui</a></p>
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
      (user.mail === inputMail && user.contrasena === inputPass) || (user.usuario === inputMail && user.contrasena === inputPass)
  );

  const isUserInhabilitado = userExists && userExists.delete === true;

  const isUserPendiente = userExists && userExists.estado === false;

  const admin = userExists && userExists.rol === "admin";

  if (admin) {
    alert("Bienvenido administrador");

    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const indiceUsuario = listaUsuarios.findIndex(
      (user) => user.mail === inputMail && user.contrasena === inputPass
    );

    if (indiceUsuario !== -1) {
      listaUsuarios[indiceUsuario].login = true;

      localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    }

    setTimeout(() => {
      window.location.href = "/page/admin.html";
    }, 1000);
    return;
  }

  if (!inputMail || !inputPass) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  if (!combinedRegexp.test(inputMail)) {
    alert(
      "Usuario debe tener al menos 8 caracteres y contener letras y números, si no recuerdas el usuario utiliza el mail."
    );
    return;
  } else if (!passwordRegexp.test(inputPass)) {
    alert(
      "La contraseña debe tener al menos 8 caracteres y contener solo letras y números."
    );
    return;
  }

  document.getElementById("loginForm").reset();

  if (isUserInhabilitado) {
    alert("Usuario inhabilitado");
    return;
  }

  if (isUserPendiente) {
    alert("Usuario pendiente de aprobacion");

    setTimeout(() => {
      window.location.href = "/index.html";
    }, 1000);

    return;
  }

  if (userExists) {
    alert("Inicio de sesión exitoso!");

    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const indiceUsuario = listaUsuarios.findIndex(
      (user) => user.mail === inputMail && user.contrasena === inputPass
    );

    if (indiceUsuario !== -1) {
      listaUsuarios[indiceUsuario].login = true;

      localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    }

    setTimeout(() => {
      window.location.href = "/page/paginaPrincipal.html";
    }, 1000);
  } else {
    alert("Nombre de usuario o contraseña incorrectos.");
  }
};

const pag404 = () => {
  setTimeout(() => {
    window.location.href = "./error404.html";
  }, 1000);
};
