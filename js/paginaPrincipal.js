const catalogoJuegos =
  JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];

const navbarPaginaPrincipal = document.getElementById("navbar-PaginaPrincipal");
navbarPaginaPrincipal.innerHTML = `<a href="paginaPrincipal.html" class="d-flex align-items-center enlace-logo">
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

const juegosDestacados = document.getElementById("juegosDestacados");
juegosDestacados.innerHTML = `
<div class="card mb-3 px-0">
<div class="row g-0 px-0">
  <div class="col-md-8 px-0">
  <img id="imagenJuego" class="card-img-top" alt="ImagenDelJuego" />
  </div>
  <div class="col-md-4 px-0">
    <div class="card-body">
      <h2>Juego Destacado del Día</h2>
      <h4 class="card-title" id="tituloJuego"></h4>
      <h6 class="card-title">Disponible</h6>
      <p class="card-text" id="descripcionJuego"></p>
      <a class="ver-mas anta-regular" id="botonDestacado">Ver Mas</a>
    </div>
  </div>
</div>
</div>
`;

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

function mostrarJuego() {
  const juego = catalogoJuegos.find((juego) => juego.destacado === true);

  const imagenJuego = document.getElementById("imagenJuego");
  imagenJuego.style.backgroundImage = `url('${juego.imagen}')`;
  imagenJuego.style.backgroundSize = "cover";
  imagenJuego.style.height = "100%";

  document.getElementById("imagenJuego").src = juego.imagen;
  document.getElementById("tituloJuego").innerText = juego.titulo;

  const descripcionJuegoElement = document.getElementById("descripcionJuego");
  descripcionJuegoElement.innerText = juego.descripcion;

  descripcionJuegoElement.style.overflow = "hidden";
  descripcionJuegoElement.style.display = "-webkit-box";
  descripcionJuegoElement.style.webkitBoxOrient = "vertical";
  descripcionJuegoElement.style.webkitLineClamp = "4";
  descripcionJuegoElement.style.whiteSpace = "normal";

  document.getElementById(
    "botonDestacado"
  ).href = `../page/detalleDeJuego.html?id=${juego.id}`;
}

function inicializarPagina() {
  mostrarJuego(catalogoJuegos[8].id);
  inicializarCarrusel();
}

function inicializarCarrusel() {
  actualizarCarrusel(catalogoJuegos);
}
window.onload = inicializarPagina;

const filtroJuegos = document.getElementById("filtroJuegos");
filtroJuegos.innerHTML = `
<div class="row justify-content-center">
        <div class="col-12 mb-2 d-flex justify-content-center mt-4">
          <div>
            <button
              id="load-cards-btn"
              class="btn btn-elearning anta-regular"
              data-categoria="Acción"
            >
              Acción
            </button>
          </div>
          <div class="px-2">
            <button
              id="load-cards-btn-aventura"
              class="btn btn-elearning anta-regular"
              data-categoria="Aventura"
            >
              Aventura
            </button>
          </div>
          <div>
            <button
              id="load-cards-btn-deportes"
              class="btn btn-elearning anta-regular"
              data-categoria="Deportes"
            >
              Deportes
            </button>
          </div>
          <div class="px-2">
            <button
              id="load-cards-btn-estrategia"
              class="btn btn-elearning anta-regular"
              data-categoria="Estrategia"
            >
              Estrategia
            </button>
          </div>
        </div>
        <div class="col-12 mb-2 d-flex justify-content-center mb-4">
          <div>
            <button
              id="load-all-cards-btn"
              class="btn btn-elearning anta-regular"
              data-categoria="Todas"
            >
              Todas las Categorías
            </button>
          </div>
        </div>
      </div>
`;
const catalogoJuegosJSON = JSON.stringify(catalogoJuegos);

localStorage.setItem("catalogoDeJuegos", catalogoJuegosJSON);

const tarjetasCarrousel = document.getElementById("tarjetasCarrousel");
tarjetasCarrousel.innerHTML = `
<div id="carouselExample" class="carousel carousel-dark slide mt-5">
<div class="carousel-inner" id="carruselCards"></div>
<button
class="carousel-control-prev alcance"
type="button"
data-bs-target="#carouselExample"
data-bs-slide="prev"
>
<span
  class="carousel-control-prev-icon flecha-izq"
  aria-hidden="true"
></span>
<span class="visually-hidden" style="background-color: red"
  >Anterior</span
>
</button>
<button
class="carousel-control-next"
type="button"
data-bs-target="#carouselExample"
data-bs-slide="next"
>
<span
  class="carousel-control-next-icon flecha-der"
  aria-hidden="true"
></span>
<span class="visually-hidden">Siguiente</span>
</button>
</div>
`;
const createCard = (juego) => `
<div class="col-12 col-md-4 col-lg-3 my-3">
<h5 class="card-text-categoria anta-regular" style="text-align: center;">${juego.titulo}</h5>
  <div class="card-categoria">
    <a href="../page/detalleDeJuego.html?id=${juego.id}" class="card-link">
      <img src="${juego.imagen}" class="card-img-top-categoria" alt="${juego.titulo}">
    </a>
  </div>
</div>
`;

const createCarouselItem = (cards, isActive) => `
<div class="carousel-item ${isActive ? "active" : ""}">
  <div class="row no-gutters justify-content-center">
    ${cards}
  </div>
</div>
`;

const actualizarCarrusel = (datos) => {
  let cardsHTML = "";
  let carouselItems = "";
  const juegosPublicados = datos.filter((juego) => juego.publicado === true);

  if (juegosPublicados.length === 0) {
    carruselCards.innerHTML = `
    <div class="d-flex align-items-center justify-content-center h-100 text-white anta-regular">
     <h3>No hay juegos disponibles en esta categoría.</h3> 
    </div>
  `;
    return;
  }
  juegosPublicados.forEach((juego, index) => {
    if (window.innerWidth < 768) {
      carouselItems += createCarouselItem(
        createCard(juego, index),
        index === 0
      );
    } else {
      cardsHTML += createCard(juego);
      if ((index + 1) % 3 === 0 || index === juegosPublicados.length - 1) {
        carouselItems += createCarouselItem(cardsHTML, index < 3);
        cardsHTML = "";
      }
    }
  });

  carruselCards.innerHTML = carouselItems;
};

actualizarCarrusel(catalogoJuegos);

document.getElementById("load-cards-btn").addEventListener("click", () => {
  const juegosAccion = catalogoJuegos.filter(
    (juego) => juego.categoria === "Acción"
  );
  actualizarCarrusel(juegosAccion);
});

document
  .getElementById("load-cards-btn-aventura")
  .addEventListener("click", () => {
    const juegosAventura = catalogoJuegos.filter(
      (juego) => juego.categoria === "Aventura"
    );
    actualizarCarrusel(juegosAventura);
  });

document
  .getElementById("load-cards-btn-deportes")
  .addEventListener("click", () => {
    const juegosDeportes = catalogoJuegos.filter(
      (juego) => juego.categoria === "Deportes"
    );
    actualizarCarrusel(juegosDeportes);
  });

document
  .getElementById("load-cards-btn-estrategia")
  .addEventListener("click", () => {
    const juegosEstrategia = catalogoJuegos.filter(
      (juego) => juego.categoria === "Estrategia"
    );
    actualizarCarrusel(juegosEstrategia);
  });

document.getElementById("load-all-cards-btn").addEventListener("click", () => {
  actualizarCarrusel(catalogoJuegos);
});

window.onresize = () => {
  actualizarCarrusel(catalogoJuegos);
};

const publicidadSección = document.getElementById("publicidadSección");
publicidadSección.innerHTML = `
<ul class="img-list scroller_inner">
        <li>
          <img src="../img/Activision-logo.png" alt="Activision Logo" />
        </li>
        <li>
          <img src="../img/Nintendo-logo.png" alt="Nintendo-logo" />
        </li>
        <li>
          <img src="../img/Riot-games-logo.png" alt="RiotGames-logo" />
        </li>
        <li>
          <img src="../img/Blizzard-logo.png" alt="Blizzard-logo" />
        </li>
        <li>
          <img src="../img/Ubisoft-Logo.png" alt="Ubisoft-Logo" />
        </li>
        <li>
          <img src="../img/Rockstar-Logo.png" alt="Rockstar-Logo" />
        </li>
        <li>
          <img src="../img/Sony_games_logo.png" alt="SonyGames-logo" />
        </li>
      </ul>
`;
document.addEventListener("DOMContentLoaded", function () {
  const scrollerInner = document.querySelector(".scroller_inner");
  const imgList = document.querySelectorAll(".scroller_inner li");

  imgList.forEach((img) => {
    const clone = img.cloneNode(true);
    scrollerInner.appendChild(clone);
  });
});

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
const inputBusqueda = document.getElementById("inputBusqueda");
const resultadosContainer = document.getElementById("resultadosContainer");
const destacado = document.getElementById("juegosDestacados");
const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];

inputBusqueda.addEventListener("input", () => {
  const searchTerm = inputBusqueda.value.trim().toLowerCase();

  if (searchTerm === "") {
    destacado.classList.remove("d-none");
    resultadosContainer.innerHTML = "";
    return;
  }

  const resultados = juegos.filter((juego) => {
    return juego.titulo.toLowerCase().includes(searchTerm) && juego.publicado;
  });

  resultadosContainer.innerHTML = "";

  if (resultados.length > 0) {
    resultados.forEach((juego) => {
      const cardHTML = `
        <div class="col-12 col-md-4 col-lg-2 mt-4">
          <div class="card-categoria mx-3">
          <h5 class="card-text-categoria anta-regular textCenter">${juego.titulo}</h5>
            <a href="../page/detalleDeJuego.html?id=${juego.id}" class="card-link">
              <img src="${juego.imagen}" class="card-img-top-categoria" alt="${juego.titulo}">
            </a>
          </div>
        </div>
      `;
      resultadosContainer.innerHTML += cardHTML;
      destacado.classList.add("d-none");
    });
  } else {
    resultadosContainer.innerHTML =
      '<div class="text-white mt-3">No se encontraron resultados.</div>';
  }
});
