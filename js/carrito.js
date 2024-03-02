const navbarUsuario = document.getElementById("navbar-usuario");
navbarUsuario.innerHTML = `
<div class="container-fluid">
<a href="../index.html" class="d-flex align-items-center enlace-logo">
  <img class="ms-1 px-2" src="../img/Logo Play Gaming.png" alt="Logo Play Gamming" />
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
        href="../page/sobreNosotros.html">Sobre nosotros</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
        href="../page/contacto.html"
        >Contacto</a
      >
    </li>
    <li class="nav-item">
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
</div>
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
const carritoJuegos = document.getElementById("carritoJuegos");
const usersList = JSON.parse(localStorage.getItem("usuarios")) || [];
const carritoBody = document.getElementById("carritoBody"); // Asegúrate de tener un elemento con este id

// Encuentra al usuario que ha iniciado sesión
const usuarioLogueado = usersList.find((u) => u.login);

if (usuarioLogueado) {
  // Muestra el carrito del usuario que ha iniciado sesión
  if (
    usuarioLogueado.carrito &&
    Array.isArray(usuarioLogueado.carrito) &&
    usuarioLogueado.carrito.length > 0
  ) {
    usuarioLogueado.carrito.forEach((carritoItem) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${carritoItem.id}</td>
        <td>${carritoItem.imagen}</td>
        <td>${carritoItem.titulo}</td>
        <td>${carritoItem.precio}</td>
        <td>
        <button type="button" class="btn btn-danger" onclick="eliminarJuego">Eliminar</button>
      </td>
      `;

      carritoBody.appendChild(row);
    });
  } else {
    // Muestra una alerta si no hay nada en el carrito
    alert("No tienes ningun juego en el carrito.");
  }
} else {
  // Muestra una alerta si no hay usuario logueado
  alert("No hay usuario logueado.");
}

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
