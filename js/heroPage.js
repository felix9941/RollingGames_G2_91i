const navbarHeroPage = document.getElementById("id-navbar-HeroPage");
navbarHeroPage.innerHTML = `<div class="container-fluid">
<a href="./index.html" class="d-flex align-items-center enlace-logo">
  <img class="ms-1 px-2" src="./img/Logo Play Gaming.png" alt="" />
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
        href="./page/sobreNosotros.html"
        >Sobre nosotros</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
        href="./page/contacto.html"
        >Contacto</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
        href="./page/login.html"
        >Iniciar sesion</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
        href="./page/registro.html"
        >Registrarse</a
      >
    </li>
  </ul>
</div>
</div>`;

const heroPage = document.getElementById("id-heroPage");
heroPage.innerHTML = `<div
id="carouselExampleCaptions"
class="carousel slide"
data-bs-ride="carousel"

>
<div class="carousel-inner">
  <div class="carousel-item active">
    <div class="contenedor-img-carrusel">
      <img
        src="./img/Cyber Punk 2077.png"
        class="d-block w-100"
        alt="..."
      />
    </div>

    <div class="texto-superpuesto texto-bajo-carrucel text-alto">
      <h1 class="text-efecto-sombra anta-regular">Cyber Punk</h1>
      <p class="text-efecto-sombra-p kanit-light">
        En este emocionante videojuego de rol de acción, tomas el papel
        de V, un mercenario en busca de un implante único que otorga la
        inmortalidad. Explora un mundo abierto lleno de misterios,
        peligros y decisiones morales impactantes. ¡Prepárate para una
        experiencia de juego intensa y emocionante que te dejará sin
        aliento!
      </p>
      <a href="./page/registro.html" class="ver-mas anta-regular"
        >Ver Mas</a
      >
    </div>
  </div>

  <div class="carousel-item">
    <div class="contenedor-img-carrusel">
      <img
        src="./img/Call Of Duty Warzone.png"
        class="d-block w-100"
        alt="..."
      />
    </div>

    <div class="texto-superpuesto texto-bajo-carrucel text-alto">
      <h1 class="text-efecto-sombra anta-regular">
        Call of Duty Warzone
      </h1>
      <p class="text-efecto-sombra-p kanit-light">
        El popular juego de disparos en primera persona que te lleva al
        campo de batalla más grande y dinámico de la serie. Forma equipo
        con tus amigos, elige entre una variedad de armas y vehículos, y
        lucha por ser el último en pie en un intenso juego de
        supervivencia.
      </p>
      <a href="./page/registro.html" class="ver-mas anta-regular"
        >Ver Mas</a
      >
    </div>
  </div>
  <div class="carousel-item">
    <div class="contenedor-img-carrusel">
      <img
        src="./img/Hollow Knight.png"
        class="d-block w-100"
        alt="..."
      />
    </div>
    <div class="texto-superpuesto texto-bajo-carrucel text-alto">
      <h1 class="text-efecto-sombra anta-regular">Hollow Knigth</h1>
      <p class="text-efecto-sombra-p kanit-light">
        Explora laberínticas cavernas, lucha contra feroces criaturas y
        descubre antiguos secretos mientras desentrañas la historia de
        un reino en ruinas. Con su impresionante arte y su desafiante
        jugabilidad, Hollow Knight te llevará a un viaje inolvidable
      </p>
      <a href="./page/registro.html" class="ver-mas anta-regular"
        >Ver Mas</a
      >
    </div>
  </div>
</div>
<button
  class="carousel-control-prev alcance"
  type="button"
  data-bs-target="#carouselExampleCaptions"
  data-bs-slide="prev"
>
  <span
    class="carousel-control-prev-icon flecha-izq"
    aria-hidden="true"
  ></span>
  <span class="visually-hidden">Previous</span>
</button>
<button
  class="carousel-control-next alcance"
  type="button"
  data-bs-target="#carouselExampleCaptions"
  data-bs-slide="next"
>
  <span
    class="carousel-control-next-icon flecha-der"
    aria-hidden="true"
  ></span>
  <span class="visually-hidden">Next</span>
</button>
</div>`;
