function redireccion() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find((usu) => usu.login === true);
  if (usuario) {
    if (usuario.id == "") {
      alert("Contactanos para ingresar");
      setTimeout(() => {
        window.location.href = "contacto.html";
      }, 1000);
    }
  } else {
    alert("Ups aun no te logueaste. Inicia sesion");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  }
}
redireccion();

function tieneJuegos() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find((usu) => usu.login === true);
  const arregloFavoritos = usuario.favoritos;
  const juegosFavoritos = document.getElementById("juegosFavoritos");
  const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos"));
  console.log(arregloFavoritos.lengt);
  if (arregloFavoritos.length !== 0) {
    arregloFavoritos.forEach(function (elemento) {
      const juego = juegos.find((game) => game.id === elemento);
      const nuevoJuego = document.createElement("div");
      nuevoJuego.innerHTML = `
      <div class="card mb-3 tarjetaDeJuego" >
      <div class="row g-0">
        <div class="col-md-7" >
        <a href="detalleDeJuego.html?id=${juego.id}"><img src="${juego.imagen}" style="width:100%; height: 100%;" class=" rounded-start" alt="${juego.titulo}"></a>
          
        </div>
        <div class="col-md-5 d-flex justify-content-around">
          <div class="card-body centrarContTarjeta">
  
          <h4 class="card-title mt-2">${juego.titulo}</h4>
          <h4 class="card-title mt-2">Precio: $ ${juego.precio}</h4>
          <button
          class=" mt-2  eliminarx" onclick="eliminarFavorito(${juego.id})"
        
        >
          Eliminar
        </button>
      </div>
          
        </div>
      </div>
    </div>
  </div>
  <div class="p-4"></div>
      `;
      // Agregar el nuevo elemento div al contenedor juegosFavoritos
      juegosFavoritos.appendChild(nuevoJuego);
    });
  } else {
    juegosFavoritos.innerHTML = `<h3 class="mt-3 text-efecto-sombra">Aun no tiene Juegos favoritos</h3>`;
  }
}
tieneJuegos();

function eliminarFavorito(idJuego) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find((usu) => usu.login === true);
  usuario.favoritos = usuario.favoritos.filter((id) => id !== idJuego);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  location.reload();
}

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
