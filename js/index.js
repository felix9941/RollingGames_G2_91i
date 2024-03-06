const catalogoJuegos = [
  {
    id: 1,
    titulo: "The Legend of Zelda: Breath of the Wild",
    descripcion:
      "¡Sumérgete en una épica aventura en el galardonado mundo de Hyrule con The Legend of Zelda: Breath of the Wild! En este juego de acción y aventuras de mundo abierto, te embarcarás en un viaje inolvidable como Link, el valiente héroe destinado a salvar el reino de Hyrule de la oscuridad. \nCon una historia profunda y conmovedora, gráficos impresionantes y una banda sonora que te sumerge en la aventura, The Legend of Zelda: Breath of the Wild es un juego imprescindible para cualquier amante de los videojuegos.",
    categoria: "Aventura",
    precio: 59.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-3570K o AMD FX-8310\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i7-4790 o AMD Ryzen 5 3600\n Memoria RAM: 16 GB\nTarjeta Grafica: NVIDIA GTX 1060 6GB",
    imagen: "../img/The Legend of Zelda  Breath of the Wild.png",
    url: "https://youtu.be/1rPxiXXxftE",
    publicado: true,
    destacado: false,
  },
  {
    id: 2,
    titulo: "Cyberpunk 2077",
    descripcion:
      "El impresionante mundo de Cyberpunk 2077, un juego de rol de acción en un futuro distópico lleno de emocionantes aventuras y peligrosas intrigas! Ambientado en la vibrante y peligrosa ciudad de Night City, eres V, un mercenario con un trasfondo único y habilidades especiales que te permitirán forjar tu propio camino en esta metrópolis obsesionada con el poder, el glamour y la modificación corporal.\nExplora una ciudad llena de vida y color, donde cada decisión que tomes afectará el curso de la historia y el destino de sus habitantes. Personaliza tu personaje, mejora tus habilidades y equipamiento cibernético, y enfréntate a enemigos despiadados en intensos combates en primera persona.",
    categoria: "Acción",
    precio: 49.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 10 \nProcesador: Intel Core i5-3570K o AMD FX-8310\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10 \nProcesador:Intel Core i7-4790 o AMD Ryzen 5 3600\n Memoria RAM: 16 GB\nTarjeta Grafica: NVIDIA GTX 1050 6GB",

    imagen: "../img/Cyber Punk 2077.png",
    url: "https://youtu.be/8X2kIfS6fb8",
    publicado: true,
    destacado: true,
  },
  {
    id: 3,
    titulo: "FIFA 22",
    descripcion:
      "¡Experimenta la emoción del fútbol como nunca antes con FIFA 22, el último título de la aclamada serie de videojuegos de EA Sports! Con una jugabilidad mejorada, gráficos realistas y nuevas características emocionantes, FIFA 22 te sumerge en la pasión y la intensidad del deporte más popular del mundo.\nDomina el campo con movimientos más fluidos y realistas, gracias a la tecnología HyperMotion, que ofrece animaciones más auténticas y un nivel de realismo sin precedentes. Además, disfruta de una inteligencia artificial mejorada que hace que los jugadores se comporten de manera más realista, tomando decisiones más inteligentes tanto en ataque como en defensa.",
    categoria: "Deportes",
    precio: 54.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-3570K o AMD FX-8310\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i7-4790 o AMD Ryzen 5 3600\n Memoria RAM: 16 GB\nTarjeta Grafica: NVIDIA GTX 1060 6GB",
    imagen: "../img/FIFA 22.png",
    url: "https://youtu.be/o1igaMv46SY",
    publicado: true,
    destacado: false,
  },
  {
    id: 4,
    titulo: "Assassin's Creed Valhalla",
    descripcion:
      "La última entrega de la icónica serie de juegos de Ubisoft! En este juego de acción y aventuras, te convertirás en Eivor, un feroz guerrero vikingo que lidera su clan en busca de un nuevo hogar en las exuberantes tierras de Inglaterra del siglo IX.\nExplora un vasto mundo abierto lleno de misterios por descubrir, batallas épicas por librar y decisiones morales que determinarán el destino de tu clan y de toda Inglaterra. Conviértete en un legendario saqueador, construye y mejora tu asentamiento, forja alianzas estratégicas y haz frente a poderosos enemigos en combates intensos y emocionantes.",
    categoria: "Acción",
    precio: 59.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-4460 o AMD Ryzen 3 1200\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Intel Core i7-6700 o AMD Ryzen 7 1700\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 1060 6GB o AMD Radeon RX 5700 XT",

    imagen: "../img/Assassins Creed Valhalla.png",
    url: "https://youtu.be/1Z7mIKGzowQ",
    publicado: true,
    destacado: false,
  },
  {
    id: 5,
    titulo: "Minecraft",
    descripcion:
      "El juego de construcción y aventuras que ha cautivado a millones de jugadores en todo el mundo! En Minecraft, te sumerges en un mundo abierto generado procedimentalmente, lleno de bloques que puedes recolectar, combinar y colocar para crear casi cualquier cosa que puedas imaginar.\nExplora vastas tierras, desde exuberantes praderas hasta oscuras cuevas subterráneas, y enfrenta los peligros del mundo, como monstruos hostiles y terrenos inhóspitos. Construye estructuras impresionantes, desde simples cabañas hasta ciudades enteras, utilizando tu creatividad y habilidades para dar vida a tus ideas.",
    categoria: "Aventura",
    precio: 26.95,
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-3570K o AMD FX-8310\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i7-4790 o AMD Ryzen 5 3600\n Memoria RAM: 16 GB\nTarjeta Grafica: NVIDIA GTX 1060 6GB",

    imagen: "../img/Minecraft.png",
    url: "https://youtu.be/MmB9b5njVbA",
    publicado: true,
    destacado: false,
  },
  {
    id: 6,
    titulo: "Call of Duty: Warzone",
    descripcion:
      "El galardonado juego de disparos en primera persona que te sumerge en un campo de batalla épico y lleno de acción! En Warzone, te unirás a un escuadrón de operadores y te lanzarás en paracaídas sobre Verdansk, un vasto y detallado campo de batalla donde la estrategia y la habilidad son clave para la supervivencia.\nEscoge entre una variedad de modos de juego, incluido el popular Battle Royale, donde lucharás contra otros jugadores en una frenética batalla por ser el último en pie, o Plunder, donde el objetivo es recolectar la mayor cantidad de efectivo posible para ganar la partida. Con un arsenal de armas realistas y letales, vehículos para desplazarte rápidamente por el mapa y un sistema de juego emocionante, Warzone te ofrece una experiencia de combate inigualable.",
    categoria: "Estrategia",
    precio: 10,
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-2500K o AMD Ryzen R5 1600X\n Memoria RAM: 12 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i7-4770K o AMD Ryzen 5 1600\n Memoria RAM: 16 GB\nTarjeta Grafica: NVIDIA GTX 1060 6GB",

    imagen: "../img/Call Of Duty Warzone.png",
    url: "https://youtu.be/0E44DClsX5Q",
    publicado: true,
    destacado: false,
  },
  {
    id: 7,
    titulo: "The Witcher 3: Wild Hunt",
    descripcion:
      "Explora un vasto y detallado mundo abierto, desde pintorescos paisajes hasta ciudades bulliciosas y misteriosos bosques, mientras te enfrentas a peligrosos enemigos y completas misiones épicas. Con un sistema de combate fluido y táctico, una narrativa rica y ramificada, y decisiones morales que afectan el curso de la historia, The Witcher 3 te sumerge en una experiencia de juego inmersiva y emocionante.\nPersonaliza a Geralt con habilidades y equipo únicos, forja alianzas con personajes memorables y enfréntate a monstruos legendarios en combates emocionantes y desafiantes. Con una historia emocionante que te mantendrá enganchado desde el principio hasta el final, The Witcher 3: Wild Hunt es un juego imprescindible para los amantes de los juegos de rol y la fantasía.",
    categoria: "Aventura",
    precio: 39.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-2500K o AMD Ryzen R5 1600X\n Memoria RAM: 6 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i7-3770 o AMD FX-8350\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 1060 6GB ",
    imagen: "../img/The witcher 3 Wild Hunt.png",
    url: "https://youtu.be/6qpf3YWbCcE",
    publicado: true,
    destacado: false,
  },
  {
    id: 8,
    titulo: "Overwatch",
    descripcion:
      "Elige entre una variedad de héroes, desde valientes tanques hasta ágiles sanadores y mortales tiradores, y combina tus habilidades con las de tus compañeros de equipo para lograr la victoria. Con un enfoque en la estrategia y la cooperación, Overwatch te desafía a trabajar en equipo para cumplir objetivos y derrotar al equipo rival en una variedad de modos de juego dinámicos.\nCon un estilo artístico vibrante y único, personajes carismáticos y una jugabilidad accesible pero profunda, Overwatch ofrece una experiencia de juego emocionante y adictiva que te mantendrá regresando por más. Únete a la comunidad de Overwatch y descubre por qué es uno de los juegos de disparos más populares y aclamados por la crítica de la actualidad.",
    categoria: "Estrategia",
    precio: 39.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 7\n Procesador:Intel Core i3-2100 o AMD FX-6300 \n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 670 o AMD Radeon HD 7950",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i5-750Intel Core i3-2100 o AMD Phenom II X4 965\n Memoria RAM: 16 GB\nTarjeta Grafica: NVIDIA GTX 970",

    imagen: "../img/Overwatch.png",
    url: "https://youtu.be/Eu7_o0g4n3U",
    publicado: true,
    destacado: false,
  },
  {
    id: 9,
    titulo: "Red Dead Redemption 2",
    descripcion:
      "Red Dead Redemption 2 es un juego de acción y aventuras desarrollado por Rockstar Games. Sumérgete en el salvaje oeste y vive la vida de un forajido en una época en la que la ley y el orden eran un lujo raro. Explora un vasto y desgarrador mundo lleno de personajes memorables y emocionantes misiones. \n Con un realismo impresionante y una narrativa envolvente, Red Dead Redemption 2 te llevará en un viaje emocionante a través de paisajes impresionantes y peligrosos. \n Caza, pesca, juega al póquer y vive como un verdadero vaquero en este juego épico que redefine el género de mundo abierto. ¡Descubre por qué Red Dead Redemption 2 es uno de los juegos más aclamados por la crítica y los jugadores de todo el mundo!",
    categoria: "Acción",
    precio: 49.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-3570K o AMD FX-8310\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i7-4790 o AMD Ryzen 5 3600\n Memoria RAM: 16 GB\nTarjeta Grafica: NVIDIA GTX 1050 6GB",

    imagen: "../img/RED DEAD 2.png",
    url: "https://youtu.be/tx8BPmTMS_o",
    publicado: true,
    destacado: false,
  },
  {
    id: 10,
    titulo: "League of Legends",
    descripcion:
      "League of Legends es un juego multijugador en línea de arena de batalla en línea (MOBA) desarrollado y publicado por Riot Games. Sumérgete en un mundo de fantasía donde dos equipos de campeones poderosos se enfrentan en emocionantes batallas para destruir la base enemiga. \n Con una amplia variedad de campeones para elegir, cada uno con habilidades únicas y estilos de juego distintivos, League of Legends ofrece una experiencia de juego estratégica y competitiva que desafiará tus habilidades y tu ingenio. \n Únete a millones de jugadores de todo el mundo en partidas rápidas y emocionantes o en competiciones a gran escala en el escenario profesional. ",
    categoria: "Estrategia",
    precio: 13,
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-2500K o AMD Ryzen R5 1600X\n Memoria RAM: 6 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i7-3770 o AMD FX-8350\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 1060 6GB",
    imagen: "../img/League of Legends.png",
    url: "https://youtu.be/ZHhqwBwmRkI",
    publicado: true,
    destacado: false,
  },
  {
    id: 11,
    titulo: "Super Mario Odyssey",
    descripcion:
      "Super Mario Odyssey es un juego de plataformas en 3D desarrollado y publicado por Nintendo para la consola Nintendo Switch. En este juego, te unes a Mario en una emocionante aventura a través de varios reinos en un intento de rescatar a la Princesa Peach de Bowser, quien planea casarse con ella. \n Explora mundos expansivos y coloridos llenos de secretos y desafíos mientras recolectas Power Moons para alimentar tu nave, el Odyssey, y seguir persiguiendo a Bowser a través de diferentes dimensiones.",
    categoria: "Aventura",
    precio: 49.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 7\n Procesador:Intel Core i3-2100 o AMD FX-6300 \n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 670 o AMD Radeon HD 7950",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i5-750Intel Core i3-2100 o AMD Phenom II X4 965\n Memoria RAM: 16 GB\nTarjeta Grafica: NVIDIA GTX 970 o AMD Radeon RX 570",

    imagen: "../img/Super Mario odyssey.png",
    url: "https://youtu.be/5kcdRBHM7kM",
    publicado: true,
    destacado: false,
  },
  {
    id: 12,
    titulo: "Star Wars Jedi: Fallen Order",
    descripcion:
      "Star Wars Jedi: Fallen Order es un juego de acción y aventuras desarrollado por Respawn Entertainment y publicado por Electronic Arts. Ambientado en el universo de Star Wars, el juego te pone en el papel de Cal Kestis, un joven padawan que sobrevivió a la Orden 66 y ahora se encuentra huyendo del Imperio Galáctico. \n A lo largo de la historia, Cal descubre que tiene habilidades con la Fuerza y emprende un viaje para completar su entrenamiento Jedi y restaurar la Orden Jedi.",
    categoria: "Acción",
    precio: 39.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-3570K o AMD FX-8310\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i7-4790 o AMD Ryzen 5 3600\n Memoria RAM: 16 GB\nTarjeta Grafica: NVIDIA GTX 1030 4GB",

    imagen: "../img/Star war Jedi Fallen Order.png",
    url: "https://youtu.be/8V2dTitXClU",
    publicado: true,
    destacado: false,
  },
  {
    id: 13,
    titulo: "Dota 2",
    descripcion:
      "Dota 2 es un juego multijugador en línea de arena de batalla en línea (MOBA) desarrollado y publicado por Valve Corporation. En Dota 2, dos equipos de cinco jugadores se enfrentan en un campo de batalla virtual con el objetivo de destruir la antigua estructura enemiga conocida como Ancient mientras defienden la suya propia. \n Cada jugador controla un héroe con habilidades únicas y roles específicos, como asesinos, soportes, tanques y magos, entre otros. Trabaja en equipo para coordinar ataques, defender torres y asegurar objetivos clave en el mapa para obtener ventaja sobre el equipo enemigo.",
    categoria: "Estrategia",
    precio: 12.99, // Gratis
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-2500K o AMD Ryzen R5 1600X\n Memoria RAM: 6 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i7-3770 o AMD FX-8350\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 1060 6GB",

    imagen: "../img/Dota 2.png",
    url: "https://youtu.be/tmn5HXW-3Wk",
    publicado: true,
    destacado: false,
  },
  {
    id: 14,
    titulo: "Sekiro: Shadows Die Twice",
    descripcion:
      "Sekiro: Shadows Die Twice es un juego de acción y aventuras desarrollado por FromSoftware y publicado por Activision. Ambientado en el Japón feudal, el juego te pone en la piel de un guerrero shinobi conocido como Sekiro en su búsqueda por vengarse de un samurái que secuestró a su señor y lo dejó por muerto. \n Con una jugabilidad desafiante y táctica, Sekiro: Shadows Die Twice te desafía a dominar el combate con espadas, la furtividad y el uso estratégico de habilidades especiales para enfrentarte a enemigos poderosos y jefes desafiantes.",
    categoria: "Acción",
    precio: 59.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 7\n Procesador:Intel Core i3-2100 o AMD FX-6300 \n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 670 o AMD Radeon HD 7950",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i5-750Intel Core i3-2100 o AMD Phenom II X4 965\n Memoria RAM: 16 GB\nTarjeta Grafica: NVIDIA GTX 970 o AMD Radeon RX 570",

    imagen: "../img/Sekiro Shadows Die Twice.png",
    url: "https://youtu.be/e8iGRmFCRQk",
    publicado: true,
    destacado: false,
  },
  {
    id: 15,
    titulo: "Fortnite",
    descripcion:
      "Fortnite es un juego en línea desarrollado por Epic Games que ha ganado una enorme popularidad en todo el mundo. \n En Fortnite, los jugadores se enfrentan en emocionantes batallas de estilo Battle Royale donde el último jugador o equipo en pie gana. \n El juego se destaca por su estilo artístico único, que combina gráficos coloridos y caricaturescos con mecánicas de juego accesibles pero profundas.",
    categoria: "Aventura",
    precio: 0, // Gratis
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-3570K o AMD FX-8310\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i7-4790 o AMD Ryzen 5 3600\n Memoria RAM: 16 GB\nTarjeta Grafica: NVIDIA GTX 1060 6GB o AMD Radeon RX 5700 XT",

    imagen: "../img/Fornite.png",
    url: "https://youtu.be/YRq7HdDhxjM",
    publicado: true,
    destacado: false,
  },

  {
    id: 16,
    titulo: "Final Fantasy XV",
    descripcion:
      "Final Fantasy XV es un juego de rol de acción desarrollado y publicado por Square Enix. \n En este juego, los jugadores asumen el papel de Noctis Lucis Caelum, el príncipe heredero de Lucis, en su viaje para recuperar su reino de las garras del Imperio de Niflheim. \n Acompañado por sus amigos leales, Noctis emprende un viaje épico a través de un mundo abierto expansivo lleno de peligros y maravillas.",
    categoria: "Estrategia",
    precio: 49.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-2500K o AMD Ryzen R5 1600X\n Memoria RAM: 6 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i7-3770 o AMD FX-8350\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 1060 6GB o AMD Radeon RX 5700 XT",

    imagen: "../img/Final Fantasy xv.png",
    url: "https://youtu.be/dPOMkB8Q9aQ",
    publicado: true,
    destacado: false,
  },
  {
    id: 17,
    titulo: "Rainbow Six Siege",
    descripcion:
      "Rainbow Six Siege es un juego de disparos táctico en primera persona desarrollado por Ubisoft. \n En este juego, los jugadores asumen el papel de operadores de fuerzas especiales de diferentes países, cada uno con habilidades únicas, y participan en emocionantes enfrentamientos PvP (jugador contra jugador) o PvE (jugador contra entorno) en partidas 5v5. \n El juego se centra en la estrategia, la coordinación en equipo y el uso inteligente de habilidades y recursos para alcanzar la victoria. ",
    categoria: "Shooter",
    precio: 29.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-3570K o AMD FX-8310\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i7-4790 o AMD Ryzen 5 3600\n Memoria RAM: 16 GB\nTarjeta Grafica: NVIDIA GTX 1060 6GB",

    imagen: "../img/Rainbow Six Siege.png",
    url: "https://youtu.be/ZH0VC-MTAzE",
    publicado: true,
    destacado: false,
  },
  {
    id: 18,
    titulo: "Hollow Knight",
    descripcion:
      "Hollow Knight es un juego de aventuras y plataformas desarrollado y publicado por Team Cherry. En este juego, los jugadores controlan a un personaje llamado El Caballero mientras exploran un vasto mundo subterráneo conocido como Hallownest. El juego presenta un estilo de arte único dibujado a mano y una atmósfera oscura y misteriosa que sumerge a los jugadores en su cautivador mundo. Con un sistema de combate desafiante, una exploración gratificante y jefes memorables, Hollow Knight ha sido elogiado por su jugabilidad sólida y su profunda narrativa ambiental. ",
    categoria: "Aventura",
    precio: 14.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-2500K o AMD Ryzen R5 1600X\n Memoria RAM: 6 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i7-3770 o AMD FX-8350\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 1060 6GB",

    imagen: "../img/Hollow Knight.png",
    url: "https://youtu.be/UAO2urG23S4",
    publicado: true,
    destacado: false,
  },
  {
    id: 19,
    titulo: "World of Warcraft",
    descripcion:
      "World of Warcraft es un juego de rol multijugador en línea (MMORPG) desarrollado y publicado por Blizzard Entertainment. \n En World of Warcraft, los jugadores asumen el papel de un personaje dentro del mundo de fantasía de Azeroth, donde pueden explorar paisajes vastos, completar misiones, luchar contra monstruos y otros jugadores, y participar en actividades como mazmorras y campos de batalla PvP. ",
    categoria: "Aventura",
    precio: 14.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 10\n Procesador: Intel Core i5-3570K o AMD FX-8310\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 780 o AMD Radeon RX 470",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i7-4790 o AMD Ryzen 5 3600\n Memoria RAM: 16 GB\nTarjeta Grafica: NVIDIA GTX 1060 6GB",

    imagen: "../img/World of Warcraft.png",
    url: "https://youtu.be/askHMKqQJvk",
    publicado: true,
    destacado: false,
  },
  {
    id: 20,
    titulo: "Mortal Kombat 11",
    descripcion:
      "Mortal Kombat 11 es un juego de lucha desarrollado por NetherRealm Studios y publicado por Warner Bros. Interactive Entertainment. \n En Mortal Kombat 11, los jugadores participan en combates uno contra uno con una amplia variedad de personajes, cada uno con sus propios movimientos y habilidades únicas. El juego presenta un sistema de combate profundo y satisfactorio, con una mezcla de ataques cuerpo a cuerpo, movimientos especiales y combos elaborados. ",
    categoria: "Acción",
    precio: 59.99,
    requisitosMinimos:
      "Sistema Operativo: Windows 7\n Procesador: Intel Core i5-750 o AMD Phenom II X4 965\n Memoria RAM: 8 GB\nTarjeta Grafica: NVIDIA GTX 670 o AMD Radeon HD 7950",
    requisitosRecomendados:
      "Sistema Operativo: Windows 10\n Procesador:Intel Core i3-2100 o AMD FX-6300\n Memoria RAM: 16 GB\nTarjeta Grafica: NVIDIA GTX 970 o AMD Radeon RX 570",
    imagen: "../img/Mortal Kombat 11.png",
    url: "https://youtu.be/z7f4paq1Fvg",
    publicado: true,
    destacado: false,
  },
];

//  Inicializacion de localStorage

const catalogoDeJuegos = localStorage.getItem("catalogoDeJuegos") || [];

if (!catalogoDeJuegos.length) {
  localStorage.setItem("catalogoDeJuegos", JSON.stringify(catalogoJuegos));
}
