const tablaJuegos = document.getElementById("idTablaJuegos");

const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];

const deletedProd = (idProd) => {
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();

  const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
  confirmDeleteBtn.addEventListener("click", () => {
    const indexProduct = productos.findIndex(
      (product) => product.id === idProd
    );
    productos[indexProduct].delete = true;
    localStorage.setItem("productos", JSON.stringify(productos));
    location.reload();
  });
};

const nuevoJuego = document.getElementById("idBotonNuevoJuego");
nuevoJuego.innerHTML = `  
  <div class="">  
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
       + Nuevo Juego
      </button>
      
      <!-- Modal -->
      <div class="modal  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title w-100 text-center">Nuevo Juego</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="idInputUser" name="user" value="" aria-describedby="emailHelp" >
                </div>

                <div class="mb-3">
                  <label for="disabledSelect" class="form-label">Categoria</label>
                  <select id="disabledSelect" class="form-select">
                    <option>Seleccionar categoria</option>
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
                  <input type="text" class="form-control" id="idInputRol" name="rol" value="">
                </div>

                <button type="submit" class="btn btn-primary" id="idBotonGuardar">Guardar Cambios</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  </div>
`;

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
      }>
    </div>
  </td>
  <td>
    <div class="d-flex d-flex justify-content-center align-items-center">


          <!-- Botón de Eliminar -->
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
                Esta seguro de querer eliminar: ${juego.titulo}?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                  <button type="button" class="btn btn-primary">Si</button>
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
            <i class="fas fa-star text-secondary"></i>
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
                Esta seguro de querer destacar ${juego.titulo}?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                  <button type="button" class="btn btn-primary" id="confirmacionDestacar" onclick="cambiarDestacado(${
                    juego.id
                  }, true)">Si</button>

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

function cambiarDestacado(id, nuevoValor) {
  const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];
  const index = juegos.findIndex((juego) => juego.id === id);

  if (index !== -1) {
    juegos[index].destacado = nuevoValor;
    localStorage.setItem("catalogoDeJuegos", JSON.stringify(juegos));
    console.log(
      `Se cambió el destacado del juego con ID ${id} a ${nuevoValor}`
    );
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
    return "btn-primary"; // Si el juego está destacado, usar la clase 'btn-primary'
  } else {
    return "btn-dark"; // Si el juego no está destacado, usar la clase 'btn-dark'
  }
}
// Uso de la función para cambiar el destacado a false
/* cambiarDestacado(1, false); */
