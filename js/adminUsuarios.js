const navbarAdminUsuarios = document.getElementById("navbar-admin");
navbarAdminUsuarios.innerHTML = `<a href="paginaPrincipal.html" class="d-flex align-items-center enlace-logo">
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

const footerGeneral = document.getElementById("footerGeneral");
footerGeneral.innerHTML = ` <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
<a href="paginaPrincipal.html"
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
    <li><a href="paginaPrincipal.html">Inicio</a></li>
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

const validacionAdmin = () => {
  const validacionUsuario = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuarioAdmin = validacionUsuario.find(
    (validacion) =>
      validacion.id && validacion.login && validacion.rol === "admin"
  );

  if (usuarioAdmin) {
  } else {
    const tableAdmin = document.getElementById("tableAdmin");
    tableAdmin.classList.add("d-none");
    window.location.href = "paginaPrincipal.html";
  }
};

validacionAdmin();

const validacionUser = () => {
  const validacionUsuario = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = validacionUsuario.find(
    (validacion) => validacion.id && validacion.login
  );

  if (usuario) {
  } else {
    const tableAdmin = document.getElementById("tableAdmin");
    tableAdmin.classList.add("d-none");
    window.location.href = "login.html";
    return;
  }
};

validacionUser();
const tableAdmin = document.getElementById("tableAdmin");
const adminUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let tableContent = "";

const usuarioAdminLogueado = adminUsuarios.find((usuario) => {
  return usuario.rol === "admin" && usuario.login;
});

adminUsuarios.forEach((usuario) => {
  let accionesHTML = "";

  if (usuario.rol !== "admin") {
    if (usuarioAdminLogueado) {
      if (!usuario.estado) {
        accionesHTML = `
          <div class="btn-group" role="group">
            <button type="button" class="btn ${
              usuario.delete ? "btn-success" : "btn-warning text-white"
            }" onclick="cambiarEstadoUsuario(${usuario.id})">
              ${usuario.delete ? "Habilitar" : "Deshabilitar"}
            </button>
            <button type="button" class="btn btn-danger" onclick="borrarUsuario(${
              usuario.id
            })">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        `;
      }
    }
  }

  tableContent += `
    <tr class="text-center">
      <th scope="row">${usuario.id}</th>
      <td>${usuario.usuario}</td>
      <td>${usuario.mail}</td>
      <td>${usuario.delete === false ? "Habilitado" : "Inhabilitado"}</td>
      <td>${usuario.rol}</td>
      <td>${accionesHTML}</td>
    </tr>
  `;
});

tableAdmin.innerHTML = `
    <div class="col-12">
      <div class="table-responsive">
        <table class="table mt-5 shadow p-3 mb-5 bg-body-tertiary rounded">
          <thead>
            <tr class="text-center">
              <th scope="col">ID</th>
              <th scope="col">Usuario</th>
              <th scope="col">Mail</th>
              <th scope="col">Estado</th>
              <th scope="col">Rol</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${tableContent}
          </tbody>
        </table>
      </div>
    </div>
  `;

function cambiarEstadoUsuario(usuarioId) {
  const usuario = adminUsuarios.find((usuario) => usuario.id === usuarioId);

  if (usuario) {
    Swal.fire({
      title: `¿Estás seguro de ${
        usuario.delete ? "habilitar" : "deshabilitar"
      } al usuario con ID ${usuario.id}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, continuar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        usuario.delete = !usuario.delete;

        const asunto = usuario.delete
          ? "Su cuenta ha sido deshabilitada"
          : "Su cuenta ha sido habilitada";
        const mensaje = usuario.delete
          ? `El usuario ${usuario.usuario} ha sido deshabilitado. Para recuperar tu cuenta puedes contactarnos en nuestra página de contacto.`
          : `El usuario ${usuario.usuario} ha sido habilitado. Para conectarte, ingresa aquí.`;

        enviarMail(usuario.mail, asunto, mensaje);

        localStorage.setItem("usuarios", JSON.stringify(adminUsuarios));

        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    });
  }
}

function borrarUsuario(usuarioId) {
  Swal.fire({
    title: `¿Estás seguro de borrar al usuario con ID ${usuarioId}?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      const index = adminUsuarios.findIndex(
        (usuario) => usuario.id === usuarioId
      );
      if (index !== -1) {
        adminUsuarios.splice(index, 1);
        localStorage.setItem("usuarios", JSON.stringify(adminUsuarios));
        location.reload();
      }
    }
  });
}

const enviarMail = (correo, mensaje, asunto) => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "martin.fesito@gmail.com",
    Password: "D52D5DF04EAF1430F1A6BA108E1ADA8E4BF6",
    To: correo,
    From: "martin.fesito@gmail.com",
    Subject: mensaje,
    Body: asunto,
  });
};

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

(() => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const botonInicio = document.getElementById("loginItem");
  const botonRegistro = document.getElementById("registerItem");
  const botonLoginAdmin = document.getElementById("administracion");

  const userLoginAdmin = usuarios.find(
    (usuario) => usuario.login === true && usuario.rol === "admin"
  );

  if (userLoginAdmin) {
    botonInicio.classList.add("d-none");
    botonRegistro.classList.add("d-none");
    botonLoginAdmin.classList.add("d-block");
  }
})();
