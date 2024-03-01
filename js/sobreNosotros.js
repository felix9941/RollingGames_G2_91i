const navbarSobreNosotros = document.getElementById("navbarSobreNosotros");
navbarSobreNosotros.innerHTML = `<a href="/index.html" class="d-flex align-items-center enlace-logo">
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
      href="login.html"
      >Iniciar sesion</a
    >
  </li>
  <li class="nav-item">
    <a
      class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
      href="registro.html"
      >Registrarse</a
    >
  </li>
</ul>
</div>`;

const video = document.getElementById("idVideo");
video.innerHTML = `<div class="column">
<iframe
  width="100%"
  height="500px"
  src="https://www.youtube.com/embed/MBxTQGUQtO8?si=ZNqUrt0ARnnvkEt5"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
</div>`;

const descripcionGeneral = document.getElementById("descripcionGeneral");
descripcionGeneral.innerHTML = `<h1><strong>Quienes somos</strong></h1>
<h4>
  En RollingsGames, nos apasiona el mundo de los juegos y
  entretenimiento. Somos un equipo de entusiastas dedicados a brindarte
  la mejor experiencia de juego posible. Desde los clásicos atemporales
  hasta las últimas novedades en la industria, nos esforzamos por
  ofrecerte una amplia variedad de juegos emocionantes para que
  disfrutes solo o en compañía de amigos y familiares. Nuestro
  compromiso con la calidad y la diversión se refleja en cada aspecto de
  nuestro sitio. Desde la selección cuidadosa de juegos hasta la
  experiencia de usuario fluida, trabajamos constantemente para
  asegurarnos de que tu tiempo con nosotros sea memorable y
  gratificante.
</h4>`;

const descripcionIndividual = document.getElementById("descripcionIndividual");
descripcionIndividual.innerHTML = `<div
class="col-12 col-md-3 d-flex flex-column align-items-center px-3"
>
<div class="circulo mb-3">
  <img
    src="../img/Javier.png"
    alt="Foto-integrante1"
    class="img-fluid rounded-circle"
  />
</div>
<h5 class="text-center pb-2"><strong>Isasmendi, Javier</strong></h5>

<p>
  Hola, soy Javier, tengo 29 años. Soy de Jujuy, Argentina y estudio
  Ingeniería Electrica en la UNT junto con programacion. Me gusta
  mucho la musica y los videojuegos.
</p>
</div>

<div
class="col-12 col-md-3 d-flex flex-column align-items-center px-3"
>
<div class="circulo mb-3">
  <img
    src="../img/Jose.png"
    alt="Foto-integrante2"
    class="img-fluid rounded-circle"
  />
</div>
<h5 class="text-center pb-2"><strong>Fe, Jose Martin</strong></h5>

<p>
  Hola, Mi nombre es Jose Martin Fe, tengo 27 años, soy padre de
  familia con una hermosa hija. Mi objetivo es lograr desarrollar y
  adquirir nuevos conocimientos en el ámbito de la programación.
</p>
</div>

<div
class="col-12 col-md-3 d-flex flex-column align-items-center px-3"
>
<div class="circulo mb-3">
  <img
    src="../img/Felix.png"
    alt="Foto-integrante3"
    class="img-fluid rounded-circle"
  />
</div>
<h5 class="text-center pb-2"><strong>Figueroa, Felix</strong></h5>

<p>
  Hola, soy Felix, tengo 24 años y vivo en Tuc-Arg, soy estudiante
  de la carrera Ingeniería en Sistemas en la UTN-FRT cursando 4°
  Año, en mis tiempos libres me gusta ver series, ver peliculas,
  salir con amigos de la facu, conocer lugares, etc.
</p>
</div>

<div
class="col-12 col-md-3 d-flex flex-column align-items-center px-3"
>
<div class="circulo mb-3">
  <img
    src="../img/Rodrigo.png"
    alt="Foto-integrante4"
    class="img-fluid rounded-circle"
  />
</div>
<h5 class="text-center pb-2"><strong>Paz, Rodrigo</strong></h5>

<p>
  Hola, soy Rodrigo, tengo 23 años, padre de 3 gatos y una tortuga.
  En 2024 comenzaré a estudiar la carrera de programación en UTN. En
  los tiempos que no estoy programando, me la estoy viviendo en el
  LOL, y sobreviviendo sin un peso.
</p>
</div>`;

const footerGeneral = document.getElementById("footerGeneral");
footerGeneral.innerHTML = ` <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
<a href="/index.html"
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
    <li><a href="/index.html">Inicio</a></li>
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
