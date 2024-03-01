const catalogoJuegos =
  JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];

const navbarRegistro = document.getElementById("navbar-registro");
navbarRegistro.innerHTML = `
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
        href="../page/sobreNosotros.html"
        >Sobre nosotros</a
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
      <a
        class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
        href="../page/login.html"
        >Iniciar sesion</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
        href="../page/registro.html"
        >Registrarse</a
      >
    </li>
  </ul>
</div>
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
        <a href="../page/registro.html" class="ver-mas anta-regular">Ver Mas</a>
      </div>
    </div>
  </div>
</div>
`;

function mostrarJuego(id) {
  const juego = catalogoJuegos.find((juego) => juego.destacado === true);

  const imagenJuego = document.getElementById("imagenJuego");
  imagenJuego.style.backgroundImage = `url('${juego.imagen}')`;
  imagenJuego.style.backgroundSize = "cover";
  imagenJuego.style.height = "100%";

  document.getElementById("imagenJuego").src = juego.imagen;
  document.getElementById("tituloJuego").innerText = juego.titulo;
  document.getElementById("descripcionJuego").innerText = juego.descripcion;
}

function inicializarPagina() {
  mostrarJuego(catalogoJuegos[8].id);
  inicializarCarrusel();
}

function inicializarCarrusel() {
  actualizarCarrusel(catalogoJuegos);
}

window.onload = inicializarPagina;
/* Categoria */
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

localStorage.setItem("catalogoJuegos", catalogoJuegosJSON);

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
const createCard = (juego, index) => `
<div class="col-12 col-md-4 col-lg-3 my-3">
<h5 class="card-text-categoria anta-regular" style="text-align: center;">${juego.titulo}</h5>
  <div class="card-categoria">
    <a href="../page/detalleJuego.html" class="card-link">
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

  datos.forEach((juego, index) => {
    if (window.innerWidth < 768) {
      carouselItems += createCarouselItem(
        createCard(juego, index),
        index === 0
      );
    } else {
      cardsHTML += createCard(juego);
      if ((index + 1) % 3 === 0 || index === datos.length - 1) {
        carouselItems += createCarouselItem(cardsHTML, index < 3);
        cardsHTML = "";
      }
    }
  });

  carruselCards.innerHTML = carouselItems;
};

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

const carruselCards = document.getElementById("carruselCards");

window.onresize = () => {
  actualizarCarrusel(catalogoJuegos);
};
//Publicidad
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
