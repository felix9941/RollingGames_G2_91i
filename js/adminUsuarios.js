const navbarAdmin = document.getElementById("navbar-admin");
navbarAdmin.innerHTML = `
<div class="container-fluid">
<a href="./paginaPrincipalAdmin.html" class="d-flex align-items-center enlace-logo">
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
        href="./paginaPrincipalAdmin.html"
        >Inicio</a
      >
    </li>
    <li class="nav-item">
      <div class="dropdown">
         <a class="dropdown-toggle nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Mi cuenta
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="./adminUsuarios.html">Admin. Usuarios</a></li>
          <li><a class="dropdown-item" href="#">Admin. Productos</a></li>
          <li><a class="dropdown-item" onclick="cerrarSesion()">Cerrar Sesion</a></li>
        </ul>
      </div>
    </li>
  </ul>
</div>
</div>`;

const footerGeneral = document.getElementById("footerGeneral");
footerGeneral.innerHTML = ` <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
<a href="./paginaPrincipalAdmin.html"
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
    <li><a href="./paginaPrincipalAdmin.html">Inicio</a></li>
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

const tableAdmin = document.getElementById("tableAdmin");

const adminUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let tableContent = "";

adminUsuarios.forEach((usuario) => {
  let accionesHTML = "";

  if (usuario.rol !== "admin") {
    if (!usuario.estado) {
      accionesHTML = `
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-success" onclick="confirmarAutorizacion(${
              usuario.id
            })">Autorizar</button>
            <button type="button" class="btn btn-warning text-white" onclick="cambiarEstadoUsuario(${
              usuario.id
            })">${usuario.delete ? "Habilitar" : "Deshabilitar"}</button>
            <button type="button" class="btn btn-danger" onclick="borrarUsuario(${
              usuario.id
            })"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        `;
    } else {
      accionesHTML = `
          <div class="btn-group" role="group">
            <button type="button" class="btn ${
              usuario.delete ? "btn-success" : "btn-warning text-white"
            }" onclick="cambiarEstadoUsuario(${usuario.id})">${
        usuario.delete ? "Habilitar" : "Deshabilitar"
      }</button>
            <button type="button" class="btn btn-danger" onclick="borrarUsuario(${
              usuario.id
            })"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        `;
    }
  }

  tableContent += `
      <tr class="text-center">
        <th scope="row">${usuario.id}</th>
        <td>${usuario.usuario}</td>
        <td>${usuario.mail}</td>
        <td>${
          usuario.estado === false ? "Pendiente de aprobación" : "Permitido"
        }</td>
        <td>${usuario.delete === false ? "Habilitado" : "Inhabilitado"}</td>
        <td>${usuario.rol}</td>
        <td>${accionesHTML}</td>
      </tr>
    `;
});

tableAdmin.innerHTML = `
    <div class="col-12 col-md-6 col-lg-12">
      <div class="table-responsive">
        <table class="table mt-5 shadow p-3 mb-5 bg-body-tertiary rounded">
          <thead>
            <tr class="text-center">
              <th scope="col">ID</th>
              <th scope="col">Usuario</th>
              <th scope="col">Mail</th>
              <th scope="col">Acceso</th>
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

function renderizarTablaAdmin() {
  const adminUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  let tableContent = "";

  adminUsuarios.forEach((usuario) => {
    let accionesHTML = "";

    if (usuario.rol !== "admin") {
      if (!usuario.estado) {
        // Botón "Autorizar" cuando el usuario no está autorizado
        accionesHTML = `
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-success" onclick="confirmarAutorizacion(${
              usuario.id
            })">Autorizar</button>
            <button type="button" class="btn btn-warning text-white" onclick="cambiarEstadoUsuario(${
              usuario.id
            })">${usuario.delete ? "Habilitar" : "Deshabilitar"}</button>
            <button type="button" class="btn btn-danger" onclick="borrarUsuario(${
              usuario.id
            })"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        `;
      } else {
        // Botón "Deshabilitar/Habilitar" cuando el usuario está autorizado
        accionesHTML = `
          <div class="btn-group" role="group">
            <button type="button" class="btn ${
              usuario.delete ? "btn-success" : "btn-warning text-white"
            }" onclick="cambiarEstadoUsuario(${usuario.id})">${
          usuario.delete ? "Habilitar" : "Deshabilitar"
        }</button>
            <button type="button" class="btn btn-danger" onclick="borrarUsuario(${
              usuario.id
            })"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        `;
      }
    }

    tableContent += `
      <tr class="text-center">
        <th scope="row">${usuario.id}</th>
        <td>${usuario.usuario}</td>
        <td>${usuario.mail}</td>
        <td>${
          usuario.estado === false ? "Pendiente de aprobación" : "Permitido"
        }</td>
        <td>${usuario.delete === false ? "Habilitado" : "Inhabilitado"}</td>
        <td>${usuario.rol}</td>
        <td>${accionesHTML}</td>
      </tr>
    `;
  });

  tableAdmin.innerHTML = `
    <div class="col-12 col-md-6 col-lg-12">
      <div class="table-responsive">
        <table class="table mt-5 shadow p-3 mb-5 bg-body-tertiary rounded">
          <thead>
            <tr class="text-center">
              <th scope="col">ID</th>
              <th scope="col">Usuario</th>
              <th scope="col">Mail</th>
              <th scope="col">Acceso</th>
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
}

function cambiarEstadoUsuario(usuarioId) {
  const usuario = adminUsuarios.find((u) => u.id === usuarioId);

  if (usuario) {
    const confirmacion = window.confirm(
      `¿Estás seguro de ${
        usuario.delete ? "habilitar" : "deshabilitar"
      } al usuario con ID ${usuario.id}?`
    );

    if (confirmacion) {
      usuario.delete = !usuario.delete; // Cambiar el estado (true a false o viceversa)
      localStorage.setItem("usuarios", JSON.stringify(adminUsuarios));
      renderizarTablaAdmin();
    }
  }
}

function confirmarAutorizacion(usuarioId) {
  const usuario = adminUsuarios.find((u) => u.id === usuarioId);

  if (usuario) {
    const confirmacion = window.confirm(
      `¿Estás seguro de autorizar al usuario ${usuario.usuario}?`
    );

    if (confirmacion) {
      usuario.estado = true;
      localStorage.setItem("usuarios", JSON.stringify(adminUsuarios));
      renderizarTablaAdmin();
    }
    enviarMail(usuario.correo, usuario);
  }
}

function borrarUsuario(usuarioId) {
  const confirmacion = window.confirm(
    `¿Estás seguro de borrar al usuario con ID ${usuarioId}?`
  );

  if (confirmacion) {
    const index = adminUsuarios.findIndex((u) => u.id === usuarioId);
    if (index !== -1) {
      adminUsuarios.splice(index, 1);
      localStorage.setItem("usuarios", JSON.stringify(adminUsuarios));
      renderizarTablaAdmin();
    }
  }
}

const enviarMail = (correo, usuario) => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "martin.fesito@gmail.com",
    Password: "D52D5DF04EAF1430F1A6BA108E1ADA8E4BF6",
    To: correo,
    From: "martin.fesito@gmail.com",
    Subject: "Bienvenido a Play Gaming",
    Body: `Estimado ${usuario.usuario} a nuestra plataforma Play Gaming. Su usuario fue aprobado.`,
  });
};

function cerrarSesion() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const userLogin = usuarios.find((u) => u.id && u.login === true);

  if (userLogin) {
    userLogin.login = false;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
  setTimeout(() => {
    window.location.href = "/index.html";
  }, 1000);
}
