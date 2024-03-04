const tablaJuegos = document.getElementById("idTablaJuegos");
const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];
const nuevoJuego = document.getElementById("idBotonNuevoJuego");

//Nuevo Juego
nuevoJuego.innerHTML = `  
  <div class="">  
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
       + Nuevo Juego
      </button>
      
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title w-100 text-center">Nuevo Juego</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="formularioNuevoJuego">
          <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="idInputTitulo" name="user" value="" aria-describedby="emailHelp">
          </div>

          <div class="mb-1">
            <label for="disabledSelect" class="form-label">Categoria</label>
            <select id="idSeleccionCategoria" class="form-select">
              <option value="">Seleccionar categoria</option>
              <option value="Aventura">Aventura</option>
              <option value="Acción">Acción</option>
              <option value="Estrategia">Estrategia</option>
              <option value="Deportes">Deportes</option>
            </select>
            <div id="categoriaError" style="color: red; display: none;">Por favor, selecciona una categoría</div>
          </div>

                <div class="mb-1">
                <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
                <textarea class="form-control" id="idDescripcion" rows="2"></textarea>   
              </div>

              <div class="mb-1">
              <label for="exampleFormControlTextarea1" class="form-label">Requisitos de sistema Minimos</label>
              <textarea class="form-control" id="idRequisitosMinimos" rows="2"></textarea>   
            </div>

            <div class="mb-1">
            <label for="exampleFormControlTextarea1" class="form-label">Requisitos de sistema recomendados</label>
            <textarea class="form-control" id="idRequisitosRecomendados" rows="2"></textarea>   
          </div>

                <div class="mb-1">
                  <label for="disabledSelect" class="form-label">Publicar</label>
                  <select id="idPublicar" class="form-select">
                    <option value="Si" selected>Si</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div class="mb-1">
                <label for="exampleInputPassword1" class="form-label">Link de imagen</label>
                <input type="text" class="form-control" id="idInputLinkImagen" name="link" value="">
              </div>

                <div class="mb-1">
                  <label for="exampleInputPassword1" class="form-label">Link trailer de juego</label>
                  <input type="text" class="form-control" id="idInputLink" name="link" value="">
                </div>

                <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label">Precio</label>
                <input type="number" step="any" class="form-control" id="idInputPrecio" name="precio" value="" aria-describedby="emailHelp" >
              </div>
                
              <button type="button" class="btn btn-primary" id="idBotonGuardar" onclick="validacionJuego(event)">Guardar Cambios</button>
              </form>
            </div>
          </div>
        </div>
  </div>
`;

// Tabla de juegos
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
        juego.publicado === true ? "checked" : ""
      } onclick="estadoDePublicacion(${juego.publicado},${juego.id})">
    </div>
  </td>
  <td>
    <div class="d-flex d-flex  align-items-center">

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


          <!-- EDITAR JUEGO -->
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-warning m-1" data-bs-toggle="modal" data-bs-target="#exampleModalEditar-${
            juego.id
          }">
          <i class="fas fa-edit"></i>
          </button>
          
          <!-- Modal -->
          <div class="modal fade" id="exampleModalEditar-${
            juego.id
          }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title w-100 text-center">Editar juego: ${
              juego.titulo
            }</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="formularioNuevoJuego">
              <div class="mb-1">
                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="idInputTituloEdit" name="user" value="${
                  juego.titulo
                }" aria-describedby="emailHelp">
              </div>
    
              <div class="mb-1">
                <label for="disabledSelect" class="form-label">Categoria</label>
                <select id="idSeleccionCategoriaEdit" class="form-select">
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
    
                    <div class="mb-1">
                    <label for="exampleFormControlTextarea1" class="form-label">Descripcion</label>
                    <textarea class="form-control" id="idDescripcionEdit" rows="2" value="">${
                      juego.descripcion
                    }</textarea>   
                  </div>
    
                  <div class="mb-1">
                  <label for="exampleFormControlTextarea1" class="form-label">Requisitos de sistema Minimos</label>
                  <textarea class="form-control" id="idRequisitosMinimosEdit" rows="2">${JSON.stringify(
                    juego.requisitos.minimos
                  )}</textarea>   
                </div>
    
                <div class="mb-1">
                <label for="exampleFormControlTextarea1" class="form-label">Requisitos de sistema recomendados</label>
                <textarea class="form-control" id="idRequisitosRecomendadosEdit" rows="2">${JSON.stringify(
                  juego.requisitos.recomendados
                )}</textarea>   
              </div>
    
                    <div class="mb-1">
                      <label for="disabledSelect" class="form-label">Publicar</label>
                      <select id="idPublicarEdit" class="form-select">
                        <option value="Si" selected>Si</option>
                        <option value="No">No</option>
                      </select>
                    </div>
    
                    <div class="mb-1">
                    <label for="exampleInputPassword1" class="form-label">Link de imagen</label>
                    <input type="text" class="form-control" id="idInputLinkImagenEdit" name="link" value="${
                      juego.imagen
                    }">
                  </div>
    
                    <div class="mb-1">
                      <label for="exampleInputPassword1" class="form-label">Link trailer de juego</label>
                      <input type="text" class="form-control" id="idInputLinkEdit" name="link" value="${
                        juego.url
                      }">
                    </div>
    
                    <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">Precio</label>
                    <input type="number" step="any" class="form-control" id="idInputPrecioEdit" name="precio" value="${
                      juego.precio
                    }" aria-describedby="emailHelp" >
                  </div>
                    
                  <button type="button" class="btn btn-primary" id="idBotonGuardar" onclick="validacionJuegoEditado(event,${
                    juego.id
                  })">Guardar Cambios</button>
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

// Boton de Destacado OK
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

//Logica para boton de publicar OK
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

//Validaciones colores de input
function colorInput(idInput) {
  document.getElementById(idInput).addEventListener("input", function () {
    var valorInput = this.value;
    if (valorInput.trim() === "") {
      this.classList.add("is-invalid");
    } else {
      this.classList.remove("is-invalid");
    }
  });
}

//Validaciones para nuevo Juego
const validacionJuego = (event) => {
  event.preventDefault();
  colorInput("idInputTitulo");
  colorInput("idSeleccionCategoria");
  colorInput("idDescripcion");
  colorInput("idRequisitosMinimos");
  colorInput("idRequisitosRecomendados");
  colorInput("idInputLinkImagen");
  colorInput("idInputLink");
  colorInput("idInputPrecio");
  let nombreJuego = document.getElementById("idInputTitulo").value;
  let categoriaJuego = document.getElementById("idSeleccionCategoria").value;
  let descripcionJuego = document.getElementById("idDescripcion").value;
  let requisitoMinimo = document.getElementById("idRequisitosMinimos").value;
  let requisitoRecomendado = document.getElementById(
    "idRequisitosRecomendados"
  ).value;
  let publicarJuego = document.getElementById("idPublicar").value;
  let linkImagenJuego = document.getElementById("idInputLinkImagen").value;
  let linkJuego = document.getElementById("idInputLink").value;
  let precioJuego = document.getElementById("idInputPrecio").value;
  const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];
  let idNuevoJuego = juegos.length > 0 ? juegos[juegos.length - 1].id + 1 : 1;

  if (nombreJuego.trim() === "") {
    alert("Por favor, ingresa un título para el juego.");
    document.getElementById("idInputTitulo").classList.add("is-invalid");
    return;
  }
  if (categoriaJuego.trim() === "") {
    alert("Por favor, seleccione una categoría para el juego.");
    document.getElementById("idSeleccionCategoria").classList.add("is-invalid");
    return;
  }
  if (descripcionJuego.trim() === "") {
    alert("Por favor, ingrese descripcion de juego");
    document.getElementById("idDescripcion").classList.add("is-invalid");
    return;
  }
  if (requisitoMinimo.trim() === "") {
    alert("Por favor, ingrese requisito de sistema minimo para el juego");
    document.getElementById("idRequisitosMinimos").classList.add("is-invalid");
    return;
  }
  if (requisitoRecomendado.trim() === "") {
    alert("Por favor, ingrese requisito de sistema recomendado para el juego");
    document
      .getElementById("idRequisitosRecomendados")
      .classList.add("is-invalid");
    return;
  }

  if (linkImagenJuego.trim() === "") {
    alert("Por favor, ingrese link de la imagen del juego");
    document.getElementById("idInputLinkImagen").classList.add("is-invalid");
    return;
  }
  if (linkJuego.trim() === "") {
    alert("Por favor, ingrese link del trailer del juego");
    document.getElementById("idInputLink").classList.add("is-invalid");
    return;
  }
  if (precioJuego.trim() === "") {
    alert("Por favor, ingrese precio del juego");
    document.getElementById("idInputPrecio").classList.add("is-invalid");
    return;
  }

  let estadoDeJuego;
  if (publicarJuego === "Si") {
    estadoDeJuego = true;
  } else {
    estadoDeJuego = false;
  }

  let nuevoJuego = {
    id: idNuevoJuego,
    titulo: nombreJuego,
    descripcion: descripcionJuego,
    categoria: categoriaJuego,
    precio: precioJuego,
    requisitos: {
      minimos: requisitoMinimo,
      recomendados: requisitoRecomendado,
    },
    imagen: linkImagenJuego,
    url: linkJuego,
    publicado: estadoDeJuego,
    destacado: false,
  };
  juegos.push(nuevoJuego);
  localStorage.setItem("catalogoDeJuegos", JSON.stringify(juegos));
  console.log("Nuevo juego agregado:", nuevoJuego);
  location.reload();
};

//  Validacion para Editar Juego
const validacionJuegoEditado = (event, identificadorDeJuego) => {
  event.preventDefault();
  colorInput("idInputTituloEdit");
  colorInput("idSeleccionCategoriaEdit");
  colorInput("idDescripcionEdit");
  colorInput("idRequisitosMinimosEdit");
  colorInput("idRequisitosRecomendadosEdit");
  colorInput("idInputLinkImagenEdit");
  colorInput("idInputLinkEdit");
  colorInput("idInputPrecioEdit");
  let nombreJuegoE = document.getElementById("idInputTituloEdit").value;
  let categoriaJuegoE = document.getElementById(
    "idSeleccionCategoriaEdit"
  ).value;
  let descripcionJuegoE = document.getElementById("idDescripcionEdit").value;
  let requisitoMinimoE = document.getElementById(
    "idRequisitosMinimosEdit"
  ).value;
  let requisitoRecomendadoE = document.getElementById(
    "idRequisitosRecomendadosEdit"
  ).value;
  let publicarJuegoE = document.getElementById("idPublicarEdit").value;
  let linkImagenJuegoE = document.getElementById("idInputLinkImagenEdit").value;
  let linkJuegoE = document.getElementById("idInputLinkEdit").value;
  let precioJuegoE = document.getElementById("idInputPrecioEdit").value;

  if (nombreJuegoE.trim() === "") {
    alert("Por favor, ingresa un título para el juego.");
    document.getElementById("idInputTituloEdit").classList.add("is-invalid");
    return;
  }
  if (categoriaJuegoE.trim() === "") {
    alert("Por favor, seleccione una categoría para el juego.");
    document
      .getElementById("idSeleccionCategoriaEdit")
      .classList.add("is-invalid");
    return;
  }
  if (descripcionJuegoE.trim() === "") {
    alert("Por favor, ingrese descripcion de juego");
    document.getElementById("idDescripcionEdit").classList.add("is-invalid");
    return;
  }
  if (requisitoMinimoE.trim() === "") {
    alert("Por favor, ingrese requisito de sistema minimo para el juego");
    document
      .getElementById("idRequisitosMinimosEdit")
      .classList.add("is-invalid");
    return;
  }
  if (requisitoRecomendadoE.trim() === "") {
    alert("Por favor, ingrese requisito de sistema recomendado para el juego");
    document
      .getElementById("idRequisitosRecomendadosEdit")
      .classList.add("is-invalid");
    return;
  }

  if (linkImagenJuegoE.trim() === "") {
    alert("Por favor, ingrese link de la imagen del juego");
    document
      .getElementById("idInputLinkImagenEdit")
      .classList.add("is-invalid");
    return;
  }
  if (linkJuegoE.trim() === "") {
    alert("Por favor, ingrese link del trailer del juego");
    document.getElementById("idInputLinkEdit").classList.add("is-invalid");
    return;
  }
  if (precioJuegoE.trim() === "") {
    alert("Por favor, ingrese precio del juego");
    document.getElementById("idInputPrecioEdit").classList.add("is-invalid");
    return;
  }

  let estadoDeJuegoE;
  if (publicarJuegoE === "Si") {
    estadoDeJuegoE = true;
  } else {
    estadoDeJuegoE = false;
  }

  const indexJuegoEditar = juegos.findIndex(
    (game) => game.id === identificadorDeJuego
  );
  juegoEditar = juegos[indexJuegoEditar];

  juegoEditar.id = identificadorDeJuego;
  juegoEditar.titulo = nombreJuegoE;
  juegoEditar.descripcion = descripcionJuegoE;
  juegoEditar.categoria = categoriaJuegoE;
  juegoEditar.precio = precioJuegoE;
  juegoEditar.requisitos.minimos = requisitoMinimoE;
  juegoEditar.requisitos.recomendados = requisitoRecomendadoE;
  juegoEditar.imagen = linkImagenJuegoE;
  juegoEditar.url = linkJuegoE;
  juegoEditar.publicado = estadoDeJuegoE;
  juegoEditar.destacado = false;

  juegos[indexJuegoEditar] = juegoEditar;
  localStorage.setItem("catalogoDeJuegos", JSON.stringify(juegos));
  location.reload();
};
