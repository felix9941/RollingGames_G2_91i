const navbarCarrito = document.getElementById("navbar-Carrito");
navbarCarrito.innerHTML = `<a href="paginaPrincipal.html" class="d-flex align-items-center enlace-logo">
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

function redireccion() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find((usu) => usu.login === true);

  if (usuario) {
    if (usuario.rol === "admin") {
      alert("Admin no puede acceder");
      setTimeout(() => {
        window.location.href = "paginaPrincipal.html";
      }, 1000);
    }
  } else {
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

const usuarios = JSON.parse(localStorage.getItem("usuarios"));
const usuario = usuarios.find((usu) => usu.login === true);
const indexUsuario = usuarios.findIndex((user) => user.id === usuario.id);
let usuarioCarrito = [];

const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos"));
let indice;

const carritoBody = document.getElementById("carritoBody");

function eliminarJuego(juegoId, event) {
  event.stopPropagation();
  const confirmarEliminar = window.confirm(
    `¿Estás seguro de eliminar el juego con ID ${juegoId}?`
  );

  if (confirmarEliminar) {
    const juegoIndex = usuarioCarrito.findIndex((id) => id === juegoId);
    if (juegoIndex !== -1) {
      usuarioCarrito.splice(juegoIndex, 1);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      const fila = document.getElementById(`fila-${juegoId}`);
      fila.remove();
      const totalElement = document.getElementById("total");
      const juego = juegos.find((juego) => juego.id === juegoId);
      if (juego) {
        const precio = parseFloat(juego.precio);
        const totalActual = parseFloat(totalElement.textContent);
        totalElement.textContent = (totalActual - precio).toFixed(2);
      }
    } else {
      console.error(`No se encontró el juego con ID ${juegoId} en su carrito`);
    }
  }
}
if (usuario) {
  if (indexUsuario !== -1) {
    usuarioCarrito = usuarios[indexUsuario].carrito || [];
    cantDeJuegos = usuarioCarrito.length;

    let total = 0;

    if (cantDeJuegos) {
      for (let index = 0; index < cantDeJuegos; index++) {
        indice = juegos.findIndex((juego) => juego.id == usuarioCarrito[index]);
        if (indice !== -1 && juegos[indice]) {
          const row = document.createElement("tr");
          row.id = `fila-${juegos[indice].id}`;
          row.innerHTML = `
            <td>${juegos[indice].id}</td>
            <td><img src="${juegos[indice].imagen}" alt="${juegos[indice].titulo}" style="max-width: 70px; max-height: 50px;"></td>
            <td>${juegos[indice].titulo}</td>
            <td>${juegos[indice].precio}</td>
            <td>
              <button type="button" class="btn btn-danger" onclick="eliminarJuego(${juegos[indice].id})">Eliminar</button>
            </td>
          `;
          total += parseFloat(juegos[indice].precio);
          console.log(total);

          carritoBody.appendChild(row);
        } else {
          console.error(
            `No se encontró el juego con ID ${usuarioCarrito[index]}`
          );
        }
      }
    } else {
      console.log("Carrito vacío");
      const filaCarritoVacio = document.createElement("tr");
      const cell = document.createElement("td");
      cell.colSpan = "6";
      cell.style.textAlign = "center";
      const carritoVacioMensaje = document.createElement("h3");
      carritoVacioMensaje.textContent = "Carrito vacío";
      cell.appendChild(carritoVacioMensaje);
      filaCarritoVacio.appendChild(cell);
      carritoBody.appendChild(filaCarritoVacio);
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

    const botonesEliminar = document.querySelectorAll(".btn-danger");
    botonesEliminar.forEach((boton) => {
      boton.addEventListener("click", function (event) {
        const juegoId = parseInt(
          this.closest("tr").querySelector("td:first-child").textContent,
          10
        );
        eliminarJuego(juegoId, event);
      });
    });
  }
}

function cerrarSesion() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const userLogin = usuarios.find(
    (usuario) => usuario.id && usuario.login === true
  );

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
