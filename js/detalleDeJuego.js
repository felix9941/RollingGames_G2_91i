//Logica de carrito aplicar al boton de carrito juego

const usuarios = JSON.parse(localStorage.getItem("usuarios"));
const usuario = usuarios.find((usu) => usu.login === true);
const indexUsuario = usuarios.findIndex((user) => user.id === usuario.id);
let usuarioCarrito = [];

const juegos = JSON.parse(localStorage.getItem("catalogoDeJuegos"));
let indice;

//Descomentar el if unicamente para cargar carrito, una vez ejecutado volver a comentar
/*   // INICIO -carga de juego en el usuario Borrar en un futuro
  if (indexUsuario !== -1) {
    usuarios[indexUsuario].carrito = [5, 3];
    //usuarios[indexUsuario].carrito.push(5, 6, 7); // Cargar los elementos 5, 6 y 7 al carrito
    console.log(usuarios[indexUsuario].carrito);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  } else {
    console.log("Usuario no encontrado");
  }
  // FIN - carga de juego en el usuario Borrar en un futuro */

if (usuario) {
  console.log("Esta logueado");
  if (indexUsuario != -1) {
    console.log("Se encontro posicion de usuario");
    idDeJuegos = usuarios[indexUsuario].carrito;
    cantDeJuegos = idDeJuegos.length;
    if (cantDeJuegos) {
      console.log("Los juegos a comprar son:");
      for (let index = 0; index < cantDeJuegos; index++) {
        indice = juegos.findIndex((juego) => juego.id == idDeJuegos[index]);
        console.log(juegos[indice].titulo);
      }
    } else {
      console.log("Carrito vacio");
    }
  } else {
    console.log("Posicion de usuario no encontrado");
  }
} else {
  console.log("No sta logueado");
}
