const tablaJuegos = document.getElementById("idTablaJuegos");

const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos")) || [];

console.log(juegos);

const nuevoJuego = document.getElementById("idBotonNuevoJuego");
nuevoJuego.innerHTML = `  
<div class="row">
  <div class="col-12 d-flex justify-content-end mt-5">  
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Nuevo Juego
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
                  <label for="exampleInputPassword1" class="form-label">Descripcion</label>
                  <input type="text" class="form-control" id="idInputRol" name="rol" value="">
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
</div>
`;
/* Tablas de juego */
tablaJuegos.innerHTML = juegos
  .map(
    (juego) => `
<tr>
  <th scope="row">${juego.id}</th>
  <td>${juego.titulo}</td>
  <td>${juego.categoria}</td>
  <td>${juego.descripcion}</td> 
  <td>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" ${
        juego.publicado ? "checked" : ""
      }>
    </div>
  </td>
  <td>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">


          <!-- Button trigger modal -->
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal-${
            juego.id
          }">
                <i class="fas fa-edit"></i>
          </button>
          
          <!-- Modal -->
          <div class="modal  fade" id="exampleModal-${
            juego.id
          }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
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
                      <label for="disabledSelect" class="form-label">Categoria</label>
                      <select id="disabledSelect" class="form-select">
                        <option>Seleccionar categoria</option>
                        <option value="Aventura" ${
                          juego.categoria === "Aventura" ? "checked" : ""
                        }>Aventura</option>
                        <option value="Acción">Acción</option>
                        <option value="Estrategia">Estrategia</option>
                        <option value="Deportes">Deportes</option>
                      </select>
                    </div>
    
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Descripcion</label>
                      <input type="text" class="form-control" id="idInputRol" name="rol" value="">
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
        <div class="col-sm-6">
        <style>
        .text-yellow {
            color: yellow;
        }
      </style>
        <i class="fas fa-star fa-2x text-secondary ms-4"></i>
      </div>
    </div>
  </td> 
</tr>`
  )
  .join("");
