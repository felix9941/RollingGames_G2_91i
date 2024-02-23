const catalogoJuegos = [
  {
    id: 1,
    titulo: "The Legend of Zelda: Breath of the Wild",
    descripcion:
      "Un juego de acción y aventuras ambientado en un vasto mundo abierto.",
    categoria: "Aventura",
    precio: 59.99,
    requisitos: {
      minimos: "No disponible (exclusivo de consola)",
      recomendados: "No disponible (exclusivo de consola)",
    },
    imagen: "../img/The Legend of Zelda  Breath of the Wild.png",
    url: "https://youtu.be/1rPxiXXxftE",
  },
  {
    id: 2,
    titulo: "Cyberpunk 2077",
    descripcion: "Un RPG de mundo abierto ambientado en un futuro distópico.",
    categoria: "RPG",
    precio: 49.99,
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i5-3570K o AMD FX-8310",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 780 o AMD Radeon RX 470",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i7-4790 o AMD Ryzen 5 3600",
        memoriaRAM: "16 GB",
        tarjetaGrafica: "NVIDIA GTX 1060 6GB o AMD Radeon RX 5700 XT",
      },
    },
    imagen: "../img/Cyber Punk 2077.png",
    url: "https://youtu.be/8X2kIfS6fb8",
  },
  {
    id: 3,
    titulo: "FIFA 22",
    descripcion:
      "Simulador de fútbol con las últimas actualizaciones de equipos y jugadores.",
    categoria: "Deportes",
    precio: 54.99,
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i3-6100 o AMD Athlon X4 880K",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 660 o AMD Radeon HD 7850",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i5-3550 o AMD FX-8350",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 660 o AMD Radeon HD 7850",
      },
    },
    imagen: "../img/FIFA 22.png",
    url: "https://youtu.be/o1igaMv46SY",
  },
  {
    id: 4,
    titulo: "Assassin's Creed Valhalla",
    descripcion:
      "Viaja a la era vikinga y vive la epopeya de saqueos y conquistas.",
    categoria: "Acción",
    precio: 59.99,
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i5-4460 o AMD Ryzen 3 1200",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 960 o AMD Radeon R9 380",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i7-6700 o AMD Ryzen 7 1700",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 1080 o AMD RX Vega 64",
      },
    },
    imagen: "../img/Assassins Creed Valhalla.png",
    url: "https://youtu.be/1Z7mIKGzowQ",
  },
  {
    id: 5,
    titulo: "Minecraft",
    descripcion:
      "Juego de construcción y aventuras con un mundo infinito de bloques.",
    categoria: "Aventura",
    precio: 26.95,
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i5-4690 o AMD A10-7800",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 960 o AMD Radeon R9 290",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i7-6500U o AMD A8-6600K",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GeForce 940M o AMD Radeon HD 8570",
      },
    },
    imagen: "../img/Minecraft.png",
    url: "https://youtu.be/MmB9b5njVbA",
  },
  {
    id: 6,
    titulo: "Call of Duty: Warzone",
    descripcion: "Battle royale con acción intensa y modos de juego variados.",
    categoria: "Shooter",
    precio: 0, // Gratis
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i5-2500K o AMD Ryzen R5 1600X",
        memoriaRAM: "12 GB",
        tarjetaGrafica: "NVIDIA GTX 970 o AMD Radeon RX 590",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i7-4770K o AMD Ryzen 5 1600",
        memoriaRAM: "16 GB",
        tarjetaGrafica: "NVIDIA GTX 1660 o AMD Radeon RX 580",
      },
    },
    imagen: "../img/Call Of Duty Warzone.png",
    url: "https://youtu.be/0E44DClsX5Q",
  },
  {
    id: 7,
    titulo: "The Witcher 3: Wild Hunt",
    descripcion:
      "RPG de acción con un mundo abierto lleno de monstruos y misterios.",
    categoria: "RPG",
    precio: 39.99,
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 7/8/10",
        procesador: "Intel Core i5-2500K o AMD Phenom II X4 940",
        memoriaRAM: "6 GB",
        tarjetaGrafica: "NVIDIA GTX 660 o AMD Radeon HD 7870",
      },
      recomendados: {
        sistemaOperativo: "Windows 7/8/10",
        procesador: "Intel Core i7-3770 o AMD FX-8350",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 770 o AMD Radeon R9 290",
      },
    },
    imagen: "../img/The witcher 3 Wild Hunt.png",
    url: "https://youtu.be/6qpf3YWbCcE",
  },
  {
    id: 8,
    titulo: "Overwatch",
    descripcion:
      "Juego de disparos en equipo con héroes únicos y habilidades especiales.",
    categoria: "Shooter",
    precio: 39.99,
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i3-4150 o AMD Phenom II X4 945",
        memoriaRAM: "4 GB",
        tarjetaGrafica: "NVIDIA GTX 660 o AMD Radeon HD 7950",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i5-4670K o AMD Ryzen 5 1500X",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 1060 o AMD Radeon RX 480",
      },
    },
    imagen: "../img/Overwatch.png",
    url: "https://youtu.be/Eu7_o0g4n3U",
  },
  {
    id: 9,
    titulo: "Red Dead Redemption 2",
    descripcion:
      "Explora el Salvaje Oeste en este épico juego de acción y aventuras.",
    categoria: "Acción",
    precio: 49.99,
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 7",
        procesador: "Intel Core i5-2500K o AMD FX-6300",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 770 o AMD Radeon R9 280",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i7-4770K o AMD Ryzen 5 1500X",
        memoriaRAM: "12 GB",
        tarjetaGrafica: "NVIDIA GTX 1060 o AMD Radeon RX 480",
      },
    },
    imagen: "../img/RED DEAD 2.png",
    url: "https://youtu.be/tx8BPmTMS_o",
  },
  {
    id: 10,
    titulo: "League of Legends",
    descripcion:
      "Participa en batallas multijugador online con personajes únicos y estrategias de equipo.",
    categoria: "Estrategia",
    precio: 0, // Gratis
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 7",
        procesador: "Intel Core 2 Duo E8400",
        memoriaRAM: "4 GB",
        tarjetaGrafica: "NVIDIA GeForce 8800 o AMD Radeon HD 5670",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel i3-4150 o AMD A10-8700P",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GeForce GT 730 o AMD Radeon R7 240",
      },
    },
    imagen: "../img/League of Legends.png",
    url: "https://youtu.be/ZHhqwBwmRkI",
  },
  {
    id: 11,
    titulo: "Super Mario Odyssey",
    descripcion:
      "Acompaña a Mario en una emocionante aventura para salvar a la princesa Peach.",
    categoria: "Aventura",
    precio: 49.99,
    requisitos: {
      minimos: "No disponible (exclusivo de consola)",
      recomendados: "No disponible (exclusivo de consola)",
    },
    imagen: "../img/Super Mario odyssey.png",
    url: "https://youtu.be/5kcdRBHM7kM",
  },
  {
    id: 12,
    titulo: "Star Wars Jedi: Fallen Order",
    descripcion:
      "Vive la historia de un joven Jedi en este juego de acción basado en el universo Star Wars.",
    categoria: "Acción",
    precio: 39.99,
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 7/8.1/10",
        procesador: "AMD FX-6100 o Intel i3-3220",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 650 o AMD Radeon HD 7750",
      },
      recomendados: {
        sistemaOperativo: "Windows 7/8.1/10",
        procesador: "AMD Ryzen 7 1700 o Intel i7-6700K",
        memoriaRAM: "16 GB",
        tarjetaGrafica: "NVIDIA GTX 1070 o AMD RX Vega 56",
      },
    },
    imagen: "../img/Star war Jedi Fallen Order.png",
    url: "https://youtu.be/8V2dTitXClU",
  },
  {
    id: 13,
    titulo: "Dota 2",
    descripcion:
      "Enfréntate en intensas batallas estratégicas en este juego MOBA.",
    categoria: "Estrategia",
    precio: 0, // Gratis
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 7",
        procesador: "Dual-core de Intel o AMD a 2.8 GHz",
        memoriaRAM: "4 GB",
        tarjetaGrafica: "NVIDIA GeForce 8600/9600GT o AMD Radeon HD 2600/3600",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Quad-core de Intel o AMD a 3.0 GHz",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GeForce GTX 960 o AMD Radeon R9 280",
      },
    },
    imagen: "../img/Dota 2.png",
    url: "https://youtu.be/tmn5HXW-3Wk",
  },
  {
    id: 14,
    titulo: "Sekiro: Shadows Die Twice",
    descripcion:
      "Embárcate en una aventura brutal en el Japón feudal como un shinobi.",
    categoria: "Acción",
    precio: 59.99,
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 7",
        procesador: "Intel Core i3-2100 o AMD FX-6300",
        memoriaRAM: "4 GB",
        tarjetaGrafica: "NVIDIA GTX 760 o AMD Radeon HD 7950",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i5-2500K o AMD Ryzen 5 1400",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 970 o AMD Radeon RX 570",
      },
    },
    imagen: "../img/Sekiro Shadows Die Twice.png",
    url: "https://youtu.be/e8iGRmFCRQk",
  },
  {
    id: 15,
    titulo: "Fortnite",
    descripcion:
      "Únete a la batalla en línea y sé el último en pie en este juego battle royale.",
    categoria: "Shooter",
    precio: 0, // Gratis
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 7/8/10",
        procesador: "Intel Core i3-3225 o AMD FX-6350",
        memoriaRAM: "4 GB",
        tarjetaGrafica: "NVIDIA GTX 660 o AMD Radeon HD 7870",
      },
      recomendados: {
        sistemaOperativo: "Windows 7/8/10",
        procesador: "Intel Core i5-7300U o equivalente",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 960 o AMD Radeon R9 280",
      },
    },
    imagen: "../img/Fornite.png",
    url: "https://youtu.be/YRq7HdDhxjM",
  },
  {
    id: 16,
    titulo: "Final Fantasy XV",
    descripcion:
      "Embárcate en un viaje épico en este RPG de acción de la serie Final Fantasy.",
    categoria: "RPG",
    precio: 49.99,
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 7",
        procesador: "Intel Core i5-2500 o AMD FX-6100",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 760 o AMD Radeon R9 280",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i7-3770 o AMD FX-8350",
        memoriaRAM: "16 GB",
        tarjetaGrafica: "NVIDIA GTX 1060 o AMD Radeon RX 480",
      },
    },
    imagen: "../img/Final Fantasy xv.png",
    url: "https://youtu.be/dPOMkB8Q9aQ",
  },
  {
    id: 17,
    titulo: "Rainbow Six Siege",
    descripcion:
      "Participa en operaciones tácticas intensas en este juego de disparos en equipo.",
    categoria: "Shooter",
    precio: 29.99,
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 7",
        procesador: "Intel Core i3-560 o AMD Phenom II X4 945",
        memoriaRAM: "6 GB",
        tarjetaGrafica: "NVIDIA GTX 460 o AMD Radeon HD 5870",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i5-2500K o AMD Ryzen R5 1500X",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 670 o AMD Radeon HD 7970",
      },
    },
    imagen: "../img/Rainbow Six Siege.png",
    url: "https://youtu.be/ZH0VC-MTAzE",
  },
  {
    id: 18,
    titulo: "Hollow Knight",
    descripcion:
      "Sumérgete en un mundo oscuro y misterioso en este juego de acción y plataformas.",
    categoria: "Aventura",
    precio: 14.99,
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 7",
        procesador: "Intel Core 2 Duo E5200",
        memoriaRAM: "4 GB",
        tarjetaGrafica: "GeForce 9800GTX+ o AMD Radeon HD 5770",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i5",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "GeForce GTX 560 o equivalente AMD",
      },
    },
    imagen: "../img/Hollow Knight.png",
    url: "https://youtu.be/UAO2urG23S4",
  } /*
  {
    id: 19,
    titulo: "World of Warcraft",
    descripcion:
      "Adéntrate en el universo de Azeroth en este juego MMORPG legendario.",
    categoria: "MMORPG",
    precio: 14.99 / mes,
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 7/8/10",
        procesador: "Intel Core i5-3450 o AMD FX 8300",
        memoriaRAM: "4 GB",
        tarjetaGrafica: "NVIDIA GeForce GTX 760 o AMD Radeon RX 560",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i7-6700 o AMD Ryzen 7 2700X",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GeForce GTX 1080 o AMD Radeon RX Vega 64",
      },
    },
    imagen: "../img/World of Warcraft.png",
    url: "https://youtu.be/askHMKqQJvk",
  },
  {
    id: 20,
    titulo: "Mortal Kombat 11",
    descripcion:
      "Libra batallas épicas en este juego de lucha con personajes icónicos de Mortal Kombat.",
    categoria: "Lucha",
    precio: 59.99,
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 7",
        procesador: "Intel Core i5-750 o AMD Phenom II X4 965",
        memoriaRAM: "8 GB",
        tarjetaGrafica: "NVIDIA GTX 670 o AMD Radeon HD 7950",
      },
      recomendados: {
        sistemaOperativo: "Windows 10",
        procesador: "Intel Core i3-2100 o AMD FX-6300",
        memoriaRAM: "16 GB",
        tarjetaGrafica: "NVIDIA GTX 970 o AMD Radeon RX 570",
      },
    },
    imagen: "../img/Mortal Kombat 11.png",
    url: "https://youtu.be/z7f4paq1Fvg",
  },
  */,
  ,
];
/*
const juegoDestacado =
  catalogoJuegos[Math.floor(Math.random() * catalogoJuegos.length)];
*/

const navbarRegistro = document.getElementById("navbar-registro");
navbarRegistro.innerHTML = `
<div class="container-fluid">
<a href="../page/PaginaPrincipal.html" class="d-flex align-items-center enlace-logo">
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

const juegosDestacados = document.getElementById("juegosDestacados");
juegosDestacados.innerHTML = `
<div class="card mb-3 px-0">
  <div class="row g-0 px-0">
    <div class="col-md-8 px-0">
      <img id="imagenJuego" class="card-img-top" alt="ImagenDelJuego" />
    </div>
    <div class="col-md-4 px-0">
      <div class="card-body">
        <h2>Juego Destacado del Día</h2>
        <h4 class="card-title" id="tituloJuego"></h4>
        <h6 class="card-title">Disponible</h6>
        <p class="card-text" id="descripcionJuego"></p>
        <a href="#" class="btn btn-custom"
          >Ver más</a
        >
      </div>
    </div>
  </div>
</div>
`;
function mostrarJuego(id) {
  const juego = catalogoJuegos.find((juego) => juego.id === id);

  document.getElementById("imagenJuego").src = juego.imagen;
  document.getElementById("tituloJuego").innerText = juego.titulo;
  document.getElementById("descripcionJuego").innerText = juego.descripcion;
}

window.onload = function () {
  mostrarJuego(catalogoJuegos[10].id);
};
