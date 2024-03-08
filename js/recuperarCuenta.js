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

              <div class="text-center">
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  class="text-black"
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
                            <div class="invalid-feedback" id="instructivoMjePass"></div>
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
                            <div class="invalid-feedback" id="passError"></div>

                          </div>
                          <div class="d-flex justify-content-center">
                            <button
                              type="button"
                              class="slide w-100 mt-3"
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
                <div class="mt-3 d-flex justify-content-center me-0">
                  <button
                    type="button"
                    class="slide w-100"
                    onclick="recuperarContraseña()"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
`;

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
    Body: `Estimado, para realizar el recupero de cuenta debe ingresar el código ${id}. Ingresa a la pagina https://play-gaming.netlify.app/page/recuperarcuenta luego haz click en "Click aqui, si ya tienes el codigo."`,
  });
};

const validacionRecupero = () => {
  const mailInput = document.getElementById("mailRecupero").value;
  const idInput = document.getElementById("idRecupero").value;
  const passRecupero = document.getElementById("passRecupero").value;
  const rPassRecupero = document.getElementById("rPassRecupero").value;

  const userExists = JSON.parse(localStorage.getItem("usuarios")) || [];

  const passwordRegexp = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const usuarioIndex = userExists.findIndex((user) => {
    return user.mail === mailInput && user.recuperarId == idInput;
  });

  const passIndex = userExists.findIndex((user) => {
    return user.contrasena === passRecupero;
  });

  if (!passwordRegexp.test(passRecupero)) {
    document.getElementById("instructivoMjePass").innerHTML =
      "La contraseña debe tener al menos 8 caracteres y contener solo letras y números.";
    document.getElementById("passRecupero").classList.add("is-invalid");

    document.getElementById("passRecupero").addEventListener("input", () => {
      document.getElementById("instructivoMjePass").innerHTML = "";
      document.getElementById("passRecupero").classList.remove("is-invalid");
    });
    return;
  }

  if (passRecupero !== rPassRecupero) {
    document.getElementById("passError").innerHTML =
      "No coincide la contraseña";
    document.getElementById("rPassRecupero").classList.add("is-invalid");

    document.getElementById("rPassRecupero").addEventListener("input", () => {
      document.getElementById("passError").innerHTML = "";
      document.getElementById("rPassRecupero").classList.remove("is-invalid");
    });
    return;
  }

  if (usuarioIndex !== -1) {
    userExists[usuarioIndex].contrasena = passRecupero;

    delete userExists[usuarioIndex].recuperarId;

    localStorage.setItem("usuarios", JSON.stringify(userExists));

    Swal.fire({
      title: "Excelente! lograste recuperar la cuenta",
      text: "Haz click para continuar",
      icon: "success",
    });
    document.getElementById("formularioRecuperar").reset();

    setTimeout(() => {
      window.location.href = "./login.html";
    }, 3000);
  } else {
    Swal.fire({
      icon: "error",
      title: "Importante",
      text: "Por favor ingrese un correo o codigo de recuperacion valido",
    });
    document.getElementById("formularioRecuperar").reset();
  }
};
