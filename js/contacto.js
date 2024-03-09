const footerGeneral = document.getElementById("footerGeneral");
footerGeneral.innerHTML = ` <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
<a 
  ><img
    src="../img/Logo Play Gaming.png"
    alt="Logo-PlayGaming"
    width="150vw"
    class="pb-3"
    onclick="PaginaPrincipal()"
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
    <li><a onclick="PaginaPrincipal()">Inicio</a></li>
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

const navbarContacto = document.getElementById("navbarContacto");
navbarContacto.innerHTML = `<a class="d-flex align-items-center enlace-logo" onclick="PaginaPrincipal()" id="loginP">
<img class="ms-1 px-2" src="../img/Logo Play Gaming.png" alt="logo de la empresa"/>
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
      href="sobreNosotros.html"
      >Sobre nosotros</a
    >
  </li>
  <li class="nav-item">
    <a
      class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
      href="contacto.html"
      >Contacto</a
    >
  </li>
  <li class="nav-item">
    <a
      class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
      href="login.html" id="loginItem">Iniciar sesion</a
    >
  </li>
  <li class="nav-item">
    <a
      class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
      href="registro.html" id="registerItem">Registrarse</a
    >
  </li>
  <li class="nav-item" id="administracion">
        <div class="dropdown">
           <a class="dropdown-toggle nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Administracion
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="adminUsuarios.html">Admin Usuarios</a></li>
            <li><a class="dropdown-item" href="adminProductos.html">Admin Productos</a></li>
          </ul>
        </div>
      </li>
  <li class="nav-item" id="micuenta">
  <div class="dropdown">
     <a class="dropdown-toggle nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
     Mi cuenta
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="favoritos.html">Favoritos</a></li>
      <li><a class="dropdown-item" href="carrito.html">Carrito</a></li>
      <li><a class="dropdown-item" href="error404.html"">Mis datos</a></li>
      <li><a class="dropdown-item" href="#" onclick="cerrarSesion()">Cerrar Sesion</a></li>
    </ul>
  </div>
</li>
</ul>
</div>`;

const idNombre = document.getElementById("idNombre");
const idApellido = document.getElementById("idApellido");
const idMail = document.getElementById("idMail");
const idMensaje = document.getElementById("idMensaje");

const enviarMail = () => {
  const nombre = idNombre.value;
  const apellido = idApellido.value;
  const correo = idMail.value;
  const mensaje = idMensaje.value;

  if (nombre && apellido && correo && mensaje) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "martin.fesito@gmail.com",
      Password: "D52D5DF04EAF1430F1A6BA108E1ADA8E4BF6",
      To: correo,
      From: "martin.fesito@gmail.com",
      Subject: "Contacto Play Gaming",
      Body: `Estimado ${nombre} ${apellido},\nHemos recibido exitosamente su contacto. En 24 horas estaremos respondiendo su consulta.`,
    });

    Swal.fire({
      title: "Mensaje enviado exitoso",
      text: "Mail enviado correctamente",
      icon: "success",
    });

    idNombre.value = "";
    idApellido.value = "";
    idMail.value = "";
    idMensaje.value = "";
  } else {
    alert("Por favor completa los campos");
  }
};

(() => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const botonInicio = document.getElementById("loginItem");
  const botonRegistro = document.getElementById("registerItem");
  const botonLogin = document.getElementById("micuenta");
  const botonLoginAdmin = document.getElementById("administracion");

  const userLogin = usuarios.find(
    (usuario) => usuario.login === true && usuario.rol === "usuario"
  );
  const userLoginAdmin = usuarios.find(
    (usuario) => usuario.login === true && usuario.rol === "admin"
  );
  const userLoginSuper = usuarios.find(
    (usuario) => usuario.login === true && usuario.rol === "SuperAdmin"
  );

  if (userLoginAdmin || userLoginSuper) {
    botonInicio.classList.add("d-none");
    botonRegistro.classList.add("d-none");
    botonLoginAdmin.classList.add("d-block");
  } else if (userLogin) {
    botonInicio.classList.add("d-none");
    botonRegistro.classList.add("d-none");
    botonLoginAdmin.classList.add("d-none");
  } else {
    botonInicio.classList.add("d-block");
    botonRegistro.classList.add("d-block");
    botonLogin.classList.add("d-none");
    botonLoginAdmin.classList.add("d-none");
  }
})();

function PaginaPrincipal() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const logoPrincipal = document.getElementById("loginP");

  const userLogin = usuarios.find((usuario) => usuario.login === true);

  if (userLogin) {
    logoPrincipal = window.location.href = "paginaPrincipal.html";
  } else {
    logoPrincipal = window.location.href = "/index.html";
  }
}

function cerrarSesion() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const userLogin = usuarios.find(
    (usuario) => usuario.id && usuario.login === true
  );

  if (userLogin) {
    userLogin.login = false;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }

  setTimeout(() => {
    window.location.href = "/index.html";
  }, 1000);
}

function PaginaPrincipal() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const logoPrincipal = document.getElementById("loginP");

  const userLogin = usuarios.find((usuario) => usuario.login === true);

  if (userLogin) {
    logoPrincipal = window.location.href = "paginaPrincipal.html";
  } else {
    logoPrincipal = window.location.href = "/index.html";
  }
}
