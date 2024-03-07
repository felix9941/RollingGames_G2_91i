function redireccion() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find((usu) => usu.login === true);
  if (!usuario) {
    alert("Ups aun no te logueaste. Inicia sesion");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  }
  if (usuario.id == "") {
    alert("Contactanos para ingresar");
    setTimeout(() => {
      window.location.href = "contacto.html";
    }, 1000);
  }
}
redireccion();

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

const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];
const idJuego = location.search.split("=")[1];
const juego = juegos.find((game) => game.id === Number(idJuego));

const fotoComprar = document.getElementById("idFotoComprar");
fotoComprar.innerHTML = `<div class="col-md-8 pe-0 ps-2">
<img src="${juego.imagen}" class="imagenAlCien" alt=""  />
</div>
<div class="col-md-4 fondoParaComprar  d-flex flex-column  align-items-center justify-content-center ">
<div class="ms-3 me-3">

  <h3 class=" text-center mt-3 mb-2">${juego.titulo}</h3>
  <h5 class=" text-center mb-2">Categoria: ${juego.categoria}</h5>
  <h4 class=" text-center mb-4">Precio: $ ${juego.precio}</h4>

    <div class="container">
      <div class="row">
        <div class="col-12 mt-1 mb-1 p-0 text-center">

        <button
            class="btn btn-warning botones" onclick="comprar(${juego.id})"
          
          >
            Comprar
          </button>
        </div>
        <div class="col-12 mt-1 mb-1 p-0">

        <div class="col-12 mt-1 mb-3 mb-2 p-0 text-center">
        <button id="botonFavorito" class="btn botones ${
          tieneJuegos(juego.id) ? "btn-warning" : "bg-light text-dark "
        }"  onclick="carrito(${
  juego.id
})">Carrito <i class="fas fa-cart-shopping ms-2"></i></button>
    </div>

        <div class="col-12 mt-1 mb-3 mb-4 p-0  text-center">
        <button id="botonFavorito" class="btn botones ${
          tieneFavoritos(juego.id) ? "btn-warning" : "bg-light text-dark "
        }"  onclick="favorito(${
  juego.id
})">Favorito <i class="fas fa-star text-dark ms-2"></i></button>
    </div>
      </div>
    </div>
</div>
</div>`;

function tieneJuegos(idJuego) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  const usuario = usuarios.find((usu) => usu.login === true);
  const identificadores = usuario.carrito;
  if (incluido(identificadores, idJuego)) {
    return true;
  } else {
    return false;
  }
}

function tieneFavoritos(idJuego) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  const usuario = usuarios.find((usu) => usu.login === true);
  const identificadores = usuario.favoritos;
  if (incluido(identificadores, idJuego)) {
    return true;
  } else {
    return false;
  }
}

function mostrarMensaje(mensaje, tiempo) {
  const mensajeDiv = document.createElement("div");
  mensajeDiv.textContent = mensaje;
  mensajeDiv.classList.add("mensaje");
  document.body.appendChild(mensajeDiv);
  setTimeout(() => {
    mensajeDiv.remove();
  }, tiempo);
}

function incluido(array, elemento) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;
}

function comprar(id) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const posicionUsuario = usuarios.findIndex((usu) => usu.login === true);
  const usuarioLogueado = usuarios[posicionUsuario];
  if (incluido(usuarioLogueado.carrito, id)) {
    window.location.href = "carrito.html";
  } else {
    usuarioLogueado.carrito.push(id);
    usuarios[posicionUsuario] = usuarioLogueado;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    console.log(usuarioLogueado);
    window.location.href = "carrito.html";
  }
}

function carrito(id) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const posicionUsuario = usuarios.findIndex((usu) => usu.login === true);
  const usuarioLogueado = usuarios[posicionUsuario];
  if (incluido(usuarioLogueado.carrito, id)) {
    usuarioLogueado.carrito = usuarioLogueado.carrito.filter(
      (iden) => iden !== id
    );
    usuarios[posicionUsuario] = usuarioLogueado;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  } else {
    usuarioLogueado.carrito.push(id);
    usuarios[posicionUsuario] = usuarioLogueado;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
  location.reload();
}

function identificadorVideo(url) {
  const parts = url.split("/");
  const videoId = parts[parts.length - 1];
  return videoId;
}

function favorito(id) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const posicionUsuario = usuarios.findIndex((usu) => usu.login === true);
  const usuarioLogueado = usuarios[posicionUsuario];
  if (incluido(usuarioLogueado.favoritos, id)) {
    usuarioLogueado.favoritos = usuarioLogueado.favoritos.filter(
      (iden) => iden !== id
    );
    usuarios[posicionUsuario] = usuarioLogueado;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  } else {
    usuarioLogueado.favoritos.push(id);
    usuarios[posicionUsuario] = usuarioLogueado;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
  location.reload();
}

const descripcionVideo = document.getElementById("idDescripcionVideo");
descripcionVideo.innerHTML = `<div class="col-md-8">
<h2  class="mt-1">Descripcion</h2>
<p class="me-4 mt-3">
${textConSaltosDeLinea(juego.descripcion)}
</p>
</div>
<div class="col-md-4 p-0">
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/${identificadorVideo(juego.url)}?"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  class="imagenAlCien"
></iframe>
</div>`;

const requisitoSistema = document.getElementById("idRequisitoSistema");
requisitoSistema.innerHTML = ` <div class="col-md-6">
<h3 class="pt-4 ps-2">Minimos</h3>
<p>
<p class="pb-4 ps-2">
${textConSaltosDeLinea(juego.requisitosMinimos)}
</p>
</p>
</div>
<div class="col-md-6">
<h3 class="pt-4 ps-2">Recomendados</h3>
<div>
<p class="pb-4 ps-2">
    ${textConSaltosDeLinea(juego.requisitosRecomendados)}
  </p>
</div>
`;

function textConSaltosDeLinea(contenido) {
  const contenidoConSaltosDeLinea = contenido.replace(/\n/g, "<br>");
  //const contenidoConSaltosDeLinea = contenido.replace(/\. /g, "<br>");
  return contenidoConSaltosDeLinea;
}
