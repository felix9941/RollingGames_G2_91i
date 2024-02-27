const navbarLogin = document.getElementById("navbarRecuperarCuenta");
navbarLogin.innerHTML = `
<div class="container-fluid">
<a href="/index.html" class="d-flex align-items-center enlace-logo">
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
        href="./sobreNosotros.html"
        >Sobre nosotros</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
        href="./contacto.html"
        >Contacto</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
        href="./login.html"
        >Iniciar sesion</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link btn-hover btn-focus text-navbar anta-regular ms-3 px-2"
        href="./registro.html"
        >Registrarse</a
      >
    </li>
  </ul>
</div>
</div>`;

const formRecupero = document.getElementById("formRecupero");
formRecupero.innerHTML = `
<div
            class="col-12 col-md-6 col-lg-12 d-flex justify-content-center mt-5"
          >
            <form
              class="shadow p-3 mb-5 bg-body-tertiary rounded"
              id="formularioRecuperar"
            >
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Correo Electronico</label
                >
                <input type="email" class="form-control" id="email" />
                <div class="invalid-feedback" id="mailError"></div>
                <div class="invalid-feedback" id="instructivoMjeUser"></div>
              </div>

              <div class="text-center textD">
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Click aqui, si ya tienes el codigo</a
                >

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Recupero de cuenta
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body text-start">
                        <form>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label"
                              >Correo Electronico</label
                            >
                            <input
                              type="email"
                              class="form-control"
                              id="mailRecupero"
                              aria-describedby="emailHelp"
                            />
                          </div>
                          <div class="mb-3">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                              >Codigo de recuperacion</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="idRecupero"
                            />
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                              >Nueva contraseña</label
                            >
                            <input
                              type="password"
                              class="form-control"
                              id="passRecupero"
                            />
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleInputPassword1"
                              class="form-label"
                              >Repetir contraseña</label
                            >
                            <input
                              type="password"
                              class="form-control"
                              id="rPassRecupero"
                            />
                          </div>
                          <div class="d-flex justify-content-center">
                            <button
                              type="button"
                              class="btn btn-primary"
                              onclick="validacionRecupero()"
                            >
                              Confirmar
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-3">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onclick="recuperarContraseña()"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
`;

function recuperarContraseña() {
  const email = document.getElementById("email").value;

  if (!email) {
    document.getElementById("mailError").innerHTML = "Campo requerido";
    document.getElementById("email").classList.add("is-invalid");

    document.getElementById("email").addEventListener("input", () => {
      document.getElementById("mailError").innerHTML = "";
      document.getElementById("email").classList.remove("is-invalid");
    });
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find((u) => u.mail === email);

  if (usuario) {
    const randomId = generarID();

    usuario.recuperarId = randomId;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    enviarMail(email, randomId);

    Swal.fire({
      title: "Recupero de cuenta",
      text: "Verifique su mail para proceder el recupero de contraseña",
      icon: "success",
    });
    document.getElementById("formularioRecuperar").reset();
  } else {
    Swal.fire({
      icon: "error",
      title: "Importante",
      text: "Correo electrónico no encontrado. Introduce un correo válido.",
    });
    document.getElementById("formularioRecuperar").reset();
  }
}

function generarID() {
  return Math.floor(Math.random() * 9000) + 1000;
}

const enviarMail = (correo, id) => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "martin.fesito@gmail.com",
    Password: "D52D5DF04EAF1430F1A6BA108E1ADA8E4BF6",
    To: correo,
    From: "martin.fesito@gmail.com",
    Subject: "Recupero de contraseña",
    Body: `Estimado, para realizar el recupero de cuenta debe ingresar el código ${id} en el siguiente enlace. Luego haz click en "Click aqui, si ya tienes el codigo".`,
  });
};

const validacionRecupero = () => {
  const mailInput = document.getElementById("mailRecupero").value;
  const idInput = document.getElementById("idRecupero").value;
  const passRecupero = document.getElementById("passRecupero").value;
  const rPassRecupero = document.getElementById("rPassRecupero").value;

  const userExists = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuarioIndex = userExists.findIndex((user) => {
    return user.mail === mailInput && user.recuperarId == idInput;
  });

  if (passRecupero !== rPassRecupero) {
    alert("No coincide la contraseña");
    return;
  }

  if (usuarioIndex !== -1) {
    // Usuario encontrado, actualiza la contraseña
    userExists[usuarioIndex].contrasena = passRecupero;

    // Remueve recuperarId
    delete userExists[usuarioIndex].recuperarId;

    // Guarda la actualización en el localStorage
    localStorage.setItem("usuarios", JSON.stringify(userExists));

    Swal.fire({
      title: "Excelente! lograste recuperar la cuenta",
      text: "Haz click para continuar",
      icon: "success",
    });
    document.getElementById("formularioRecuperar").reset();
  } else {
    Swal.fire({
      icon: "error",
      title: "Importante",
      text: "El código de recuperación es incorrecto",
    });
    document.getElementById("formularioRecuperar").reset();
  }
};
