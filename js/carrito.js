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
const usuarios = JSON.parse(localStorage.getItem("usuarios"));
const usuario = usuarios.find((usu) => usu.login === true);
const indexUsuario = usuarios.findIndex((user) => user.id === usuario.id);
let usuarioCarrito = [];

const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos"));
let indice;

//Descomentar el if unicamente para cargar carrito, una vez ejecutado volver a comentar

// INICIO -carga de juego en el usuario Borrar en un futuro
/*if (indexUsuario !== -1) {
  usuarios[indexUsuario].carrito = [5, 3];
  //usuarios[indexUsuario].carrito.push(5, 6, 7); // Cargar los elementos 5, 6 y 7 al carrito
  console.log(usuarios[indexUsuario].carrito);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
} else {
  console.log("Usuario no encontrado");
}
// FIN - carga de juego en el usuario Borrar en un futuro */
const carritoBody = document.getElementById("carritoBody");

if (usuario) {
  console.log("Esta logueado");
  if (indexUsuario != -1) {
    console.log("Se encontro posicion de usuario");
    idDeJuegos = usuarios[indexUsuario].carrito;
    cantDeJuegos = idDeJuegos.length;

    let total = 0;

    if (cantDeJuegos) {
      console.log("Los juegos a comprar son:");
      for (let index = 0; index < cantDeJuegos; index++) {
        indice = juegos.findIndex((juego) => juego.id == idDeJuegos[index]);
        console.log(juegos[indice].titulo);
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${juegos[indice].id}</td>
          <td><img src="${juegos[indice].imagen}" alt="${juegos[indice].titulo}" style="max-width: 70px; max-height: 50px;"></td>
          <td>${juegos[indice].titulo}</td>
          <td>${juegos[indice].precio}</td>
          <td>
            <button type="button" class="btn btn-danger" onclick="eliminarJuego()">Eliminar</button>
          </td>
        `;
        total += parseFloat(juegos[indice].precio);
        console.log(total);

        carritoBody.appendChild(row);
      }
    } else {
      console.log("Carrito vacío");
    }
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
      <th colspan="3">Total($)</th>
      <td id="total" colspan="1">${total.toFixed(2)}</td>
    `;
    carritoBody.appendChild(totalRow);

    const contenedor = document.getElementById("botonCarrito");
    const botonPagar = document.createElement("button");
    botonPagar.type = "button";
    botonPagar.className = "pagar anta-regular";
    botonPagar.textContent = "Pagar";
    botonCarrito.appendChild(botonPagar);
    botonPagar.addEventListener("click", function () {
      window.location.href = "../page/error404.html";
    });
  } else {
    console.log("Posición de usuario no encontrada");
  }
} else {
  console.log("No está logueado");
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
