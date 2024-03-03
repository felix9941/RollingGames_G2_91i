const tablaJuegos = document.getElementById("idTablaJuegos");

const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];

const nuevoJuego = document.getElementById("idBotonNuevoJuego");
nuevoJuego.innerHTML = `  
  <div class="">  
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
       + Nuevo Juego
      </button>
      
      <!-- Modal -->
      <div class="modal  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title w-100 text-center">Nuevo Juego</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="formularioNuevoJuego">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="idInputUser" name="user" value="" aria-describedby="emailHelp" >
                </div>

                <div class="mb-3">
                  <label for="disabledSelect" class="form-label">Categoria</label>
                  <select id="disabledSelect" class="form-select">
                    <option value="Aventura">Aventura</option>
                    <option value="Acción">Acción</option>
                    <option value="Estrategia">Estrategia</option>
                    <option value="Deportes">Deportes</option>
                  </select>
                </div>

                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>   
              </div>

                <div class="mb-3">
                  <label for="disabledSelect" class="form-label">Publicar</label>
                  <select id="disabledSelect" class="form-select">
                    <option value="Si" selected>Si</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Link trailer de juego</label>
                  <input type="text" class="form-control" id="idInputLink" name="link" value="">
                </div>

                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Precio</label>
                <input type="number" step="any" class="form-control" id="idInputPrecio" name="precio" value="" aria-describedby="emailHelp" >
              </div>
                

                <button type="submit" class="btn btn-primary" id="idBotonGuardar">Guardar Cambios</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  </div>
`;

/* document.addEventListener("DOMContentLoaded", function () {
  const formularioNuevoJuego = document.getElementById("formularioNuevoJuego");
  const categoriaSelect = document.getElementById("disabledSelect");
  const categoriaError = document.getElementById("categoriaError");

  formularioNuevoJuego.addEventListener("submit", function (event) {
    if (categoriaSelect.value === "") {
      event.preventDefault(); // Evitar que se envíe el formulario
      categoriaError.style.display = "block"; // Mostrar mensaje de error
    } else {
      categoriaError.style.display = "none"; // Ocultar mensaje de error si se selecciona una categoría
    }
  });
}); */

/* Tablas de juego */
tablaJuegos.innerHTML = juegos
  .map(
    (juego) => `
<tr>
  <th scope="row">${juego.id}</th>
  <td class="letraPequeña">${juego.titulo}</td>
  <td class="letraPequeña">${juego.categoria}</td>
  <td class="letraPequeña">${juego.descripcion}</td> 
  <td>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" ${
        juego.publicado ? "checked" : ""
      } onclick="estadoDePublicacion(${juego.publicado},${juego.id})">
    </div>
  </td>
  <td>
    <div class="d-flex d-flex justify-content-center align-items-center">

          <!-- Botón de Eliminacio Fisica -->
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#eliminar-${
            juego.id
          }">
          <i class="fa-solid fa-trash  text-dark"></i>
          </button>
          
          <!-- Vertically centered modal -->
          <div class="modal fade" id="eliminar-${
            juego.id
          }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Eliminar</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                Esta seguro de querer eliminar ${juego.titulo}?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                  <button type="button" class="btn btn-primary" onclick="eliminacionFisica(${
                    juego.id
                  })">Si</button>
                </div>
              </div>
            </div>
          </div>


          <!-- Editar -->
          <!-- Button trigger modal -->
          <button type="button" class="btn  btn-warning m-1" data-bs-toggle="modal" data-bs-target="#exampleModal-${
            juego.id
          }">
                <i class="fas fa-edit"></i>
          </button>
          
          <!-- Modal -->
            <div class="modal  fade" id="exampleModal-${
              juego.id
            }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title w-100 text-center">Editar Juego: ${
                        juego.titulo
                      }</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="idInputUser" name="user" value="${
                          juego.titulo
                        }" aria-describedby="emailHelp" >
                      </div>
                    
                      <div class="mb-3">
                        <label for="categoriaSelect" class="form-label">Categoria</label>
                        <select id="categoriaSelect" class="form-select">
                          <option value="">Seleccionar categoria</option>
                          <option value="Aventura" ${
                            juego.categoria === "Aventura" ? "selected" : ""
                          }>Aventura</option>
                          <option value="Acción" ${
                            juego.categoria === "Acción" ? "selected" : ""
                          }>Acción</option>
                          <option value="Estrategia" ${
                            juego.categoria === "Estrategia" ? "selected" : ""
                          }>Estrategia</option>
                          <option value="Deportes" ${
                            juego.categoria === "Deportes" ? "selected" : ""
                          }>Deportes</option>
                        </select>
                      </div>
    
                      <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">${
                          juego.descripcion
                        }</textarea>   
                      </div>
    
                      <div class="mb-3">
                        <label for="disabledSelect" class="form-label">Publicar</label>
                        <select id="disabledSelect" class="form-select">
                          <option value="Si" selected>Si</option>
                          <option value="No">No</option>
                        </select>
                      </div>
      
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Link trailer de juego</label>
                        <input type="text" class="form-control" id="idInputRol" name="rol" value="${
                          juego.url
                        }">
                      </div>
      
                      <button type="submit" class="btn btn-primary" id="idBotonGuardar">Guardar Cambios</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          <!-- Destacar -->
          <!-- Button trigger modal -->
          <button type="button" class="btn ${colorBotonDestacar(
            juego.id
          )} " data-bs-toggle="modal"  id="botonEstrellaDestacar" data-bs-target="#destacar-${
      juego.id
    }">
              <i class="fas fa-star text-dark"></i>
          </button>
            
          <!-- Vertically centered modal -->
          <div class="modal fade" id="destacar-${
            juego.id
          }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Destacar</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                Esta seguro de querer destacar el juego ${juego.titulo}?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                  <button type="button" class="btn btn-primary" id="confirmacionDestacar" onclick="cambiarDestacado(${
                    juego.id
                  })">Si</button>

                </div>
              </div>
            </div>
          </div>
    </div>
  </td> 
</tr>
`
  )
  .join("");

function editar(id) {
  const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];
  const index = juegos.findIndex((juego) => juego.id === id);
}

function nuevoValorDeDestacado(valorActual) {
  const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];
  if (valorActual) {
    return false;
  } else {
    return true;
  }
}

function cambiarDestacado(id) {
  const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];
  const index = juegos.findIndex((juego) => juego.id === id);
  if (index !== -1) {
    const juegosDestacados = juegos.filter((juego) => juego.destacado === true);
    if (juegosDestacados.length > 1) {
      nuevoValor = false;
      juegos[index].destacado = nuevoValor;
    } else {
      if (juegosDestacados.length == 1) {
        if (juegosDestacados[0].id != id) {
          const indexViejo = juegos.findIndex(
            (juego) => juego.destacado === true
          );
          console.log(indexViejo);
          console.log(juegosDestacados[0].id);
          console.log(juegos[index].id);
          juegos[indexViejo].destacado = false;
          juegos[index].destacado = true;
        }
      } else {
        nuevoValor = nuevoValorDeDestacado(juegos[index].destacado);
        juegos[index].destacado = nuevoValor;
      }
    }
    localStorage.setItem("catalogoDeJuegos", JSON.stringify(juegos));
    window.location.reload(); // Recargar la página
  } else {
    console.log(`No se encontró ningún juego con ID ${id}`);
  }
}

function colorBotonDestacar(id) {
  const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];
  const juego = juegos.find((juego) => juego.id === id);
  // Devolver la clase del botón según el estado del juego
  if (juego && juego.destacado) {
    return "btn-warning"; // Si el juego está destacado, usar la clase 'btn-primary'
  } else {
    return "btn-secondary"; // Si el juego no está destacado, usar la clase 'btn-dark'
  }
}

function eliminacionFisica(id) {
  const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];
  const index = juegos.findIndex((juegaso) => juegaso.id === id);
  if (index !== -1) {
    juegos.splice(index, 1); // Eliminar el juego del array
    localStorage.setItem("catalogoDeJuegos", JSON.stringify(juegos));
    location.reload();
  }
}

function estadoDePublicacion(estado, id) {
  if (estado) {
    despublicar(id);
  } else {
    publicar(id);
  }
}

function publicar(id) {
  const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];
  const indexJuego = juegos.findIndex((juego) => juego.id === id);
  juegos[indexJuego].publicado = true;
  localStorage.setItem("catalogoDeJuegos", JSON.stringify(juegos));
  console.log("Publicar");
  location.reload();
}

function despublicar(id) {
  const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];
  const indexJuego = juegos.findIndex((juego) => juego.id === id);
  juegos[indexJuego].publicado = false;
  localStorage.setItem("catalogoDeJuegos", JSON.stringify(juegos));
  console.log("Despublicar");
  location.reload();
}

console.log(juegos[juegos.length - 1].id);

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("#exampleModal form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    var nombreJuego = document.querySelector("#idInputUser").value;
    var categoriaJuego = document.querySelector("#disabledSelect").value;
    var descripcionJuego = document.querySelector(
      "#exampleFormControlTextarea1"
    ).value;
    var publicarJuego = document.querySelector("#disabledSelect").value;
    var linkJuego = document.querySelector("#idInputLink").value;
    var precioJuego = document.querySelector("#idInputPrecio").value;

    const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];
    let idNuevoJuego = juegos[juegos.length - 1].id + 1;

    let nuevoJuego = {
      id: idNuevoJuego,
      titulo: nombreJuego,
      descripcion: descripcionJuego,
      categoria: categoriaJuego,
      precio: precioJuego,
      requisitos: {
        minimos: "No disponible (exclusivo de consola)",
        recomendados: "No disponible (exclusivo de consola)",
      },
      imagen: "../img/The Legend of Zelda  Breath of the Wild.png",
      url: linkJuego,
      publicado: publicarJuego,
      destacado: false,
    };

    juegos.push(nuevoJuego);
    localStorage.setItem("catalogoDeJuegos", JSON.stringify(juegos));
    console.log("Nuevo juego agregado:", nuevoJuego);
    location.reload();
  });
});
