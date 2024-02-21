const formRegistro = document.getElementById("formRegistro");
formRegistro.innerHTML = ` 
<div class="col-md-8 imagen-izquierda"></div>
<div class="col-md-4">
  <div class="text-center mt-5"><h4>Registro</h4></div>
  
  <div class="d-flex justify-content-center">
    <form class="mt-5 w-75">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >Usuario</label
        >
        <input
          type="text"
          class="form-control custom-input"
          id="usuario"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >Correo Electrónico</label
        >
        <input
          type="email"
          class="form-control custom-input"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Contraseña</label
        >
        <input
          type="password"
          class="form-control custom-input"
          id="pass"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Repetir contraseña</label
        >
        <input
          type="password"
          class="form-control custom-input"
          id="rPass"
        />
      </div>
      <div class="d-flex justify-content-center mt-5">
        <button type="submit" class="slide">Confirmar</button>
      </div>
    </form>
  </div>
</div>`;
