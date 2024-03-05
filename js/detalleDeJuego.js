//redireccion - control de acceso.

(() => {
  const validacionUsuario = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = validacionUsuario.find(
    (validacion) =>
      validacion.id && validacion.login === true && validacion.rol === "admin"
  );

  const usuarioAdmin = validacionUsuario.find(
    (validacion) =>
      validacion.id && validacion.login === true && validacion.rol === "admin"
  );

  if (usuarioAdmin) {
  } else {
    window.location.href = "paginaPrincipal.html";
    return;
  }

  if (usuario) {
  } else {
    window.location.href = "login.html";
    return;
  }
})();

//Navbar
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

(() => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const botonInicio = document.getElementById("loginItem");
  const botonRegistro = document.getElementById("registerItem");
  const botonLogin = document.getElementById("micuenta");
  const botonLoginAdmin = document.getElementById("administracion");

  const userLogin = usuarios.find(
    (u) => u.login === true && u.rol === "usuario"
  );
  const userLoginAdmin = usuarios.find(
    (u) => u.login === true && u.rol === "admin"
  );

  if (userLoginAdmin) {
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

// Footer general
const footerGeneral = document.getElementById("footerGeneral");
footerGeneral.innerHTML = ` <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
<a href="./paginaPrincipal.html"
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
    <li><a href="./paginaPrincipal.html">Inicio</a></li>
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

/* ************* Contenido de la pagina del juego ************************* */

const tablaJuegos = document.getElementById("idTablaJuegos");
const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];
const nuevoJuego = document.getElementById("idBotonNuevoJuego");

/* //Logica de carrito aplicar al boton de carrito juego

const usuarios = JSON.parse(localStorage.getItem("usuarios"));
const usuario = usuarios.find((usu) => usu.login === true);
const indexUsuario = usuarios.findIndex((user) => user.id === usuario.id);
let usuarioCarrito = [];

const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos"));
let indice;

//Descomentar el if unicamente para cargar carrito, una vez ejecutado volver a comentar
/*   // INICIO -carga de juego en el usuario Borrar en un futuro
  if (indexUsuario !== -1) {
    usuarios[indexUsuario].carrito = [5, 3];
    //usuarios[indexUsuario].carrito.push(5, 6, 7); // Cargar los elementos 5, 6 y 7 al carrito
    console.log(usuarios[indexUsuario].carrito);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  } else {
    console.log("Usuario no encontrado");
  }
  // FIN - carga de juego en el usuario Borrar en un futuro 

if (usuario) {
  console.log("Esta logueado");
  if (indexUsuario != -1) {
    console.log("Se encontro posicion de usuario");
    idDeJuegos = usuarios[indexUsuario].carrito;
    cantDeJuegos = idDeJuegos.length;
    if (cantDeJuegos) {
      console.log("Los juegos a comprar son:");
      for (let index = 0; index < cantDeJuegos; index++) {
        indice = juegos.findIndex((juego) => juego.id == idDeJuegos[index]);
        console.log(juegos[indice].titulo);
      }
    } else {
      console.log("Carrito vacio");
    }
  } else {
    console.log("Posicion de usuario no encontrado");
  }
} else {
  console.log("No sta logueado");
}
 */
