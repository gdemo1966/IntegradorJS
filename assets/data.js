// Array de productos
const productsData = [
  {
    id: 1,
    titulo: "Crac",
    autor: "Nora Hilb",
    ilustrador: "Marcela Cabezas Hilb",
    editorial: "Calibroscopio",
    precio: 3000,
    texto_alt: "Crac. Editorial Calibroscopio",
    categoria: "1a3",
    imagen: "./assets/img/Libros/Crac_1a3.jpg"
  },

  {
    id: 2,
    titulo: "Federico ¿ Cómo te llamas Federico ?",
    autor: "Leo Arias",
    ilustrador: "Leo Arias",
    editorial: "Calibroscopio",
    precio: 3000,
    texto_alt: "Federico ¿ Cómo te llamas Federico ? Editorial Calibroscopio",
    categoria: "1a3",
    imagen: "./assets/img/Libros/Federico_como_te_llamas_1a3.jpg"
  },
  
  {
    id: 3,
    titulo: "La nana del ananá",
    autor: "Gastón Caba",
    ilustrador: "",
    editorial: "Periplo",
    precio: 2450,
    texto_alt: "La nana del ananá. Editorial Periplo",
    categoria: "0a1",
    imagen: "./assets/img/Libros/La_nana_del_anana_0a1.jpg"
  },
  
  {
    id: 4,
    titulo: "Luna y la Luna",
    autor: "Laura Wittner",
    ilustrador: "Pum Pum",
    editorial: "Periplo",
    precio: 2650,
    texto_alt: "Luna y la luna. Editorial Periplo",
    categoria: "0a1",
    imagen: "./assets/img/Libros/Luna_y_la_luna_0a1.png"
  },
  
  {
    id: 5,
    titulo: "Si mamá canta",
    autor: "Laura Wttner",
    ilustrador: "Marcela R. Clark",
    editorial: "Periplo",
    precio: 2950,
    texto_alt: "Si mamá canta. Editorial Periplo",
    categoria: "0a1",
    imagen: "./assets/img/Libros/La_nana_del_anana_0a1.jpg"
  },
  
  {
    id: 6,
    titulo: "El plan",
    autor: "Ethel Batista ",
    ilustrador: "Eva Mastrogiulio",
    editorial: "Calibroscopio",
    precio: 3450,
    texto_alt: "El plan. Editorial Calibroscopio",
    categoria: "6a8",
    imagen: "./assets/img/Libros/El_plan_6a8.jpg"
  },
  
  {
    id: 7,
    titulo: "Mi abuela tiene un león",
    autor: "María Elena Méndez",
    ilustrador: "María Elena Méndez",
    editorial: "Periplo",
    precio: 3650,
    texto_alt: "Mi abuela tiene un león. Editorial Periplo",
    categoria: "0a1",
    imagen: "./assets/img/Libros/Mi_abuela_tiene_un_leon_0a1.jpg"
  },
  
  {
    id: 8,
    titulo: "Fernando Furioso",
    autor: "Hiawyn Oram",
    ilustrador: "Satoshi Kitamura",
    editorial: "Ediciones Ekaré",
    precio: 2900,
    texto_alt: "Fernando Furioso. Ediciones Ekaré",
    categoria: "3a5",
    imagen: "./assets/img/Libros/Fernando_furioso_3a5.jpg"
  },
  
  {
    id: 9,
    titulo: "Mi gato el más bestia",
    autor: "Gilles Bachelet",
    ilustrador: "Gilles Bachelet",
    editorial: "Calibroscopio",
    precio: 3800,
    texto_alt: "Mi gato el más bestia. Editorial Calibroscopio",
    categoria: "3a5",
    imagen: "./assets/img/Libros/Mi_gato_el_mas_bestia_3a5.jpg"
  },
  
  {
    id: 10,
    titulo: "Petit el monstruo",
    autor: "Isol Misenta",
    ilustrador: "Isol Misenta",
    editorial: "Periplo",
    precio: 3300,
    texto_alt: "Petit el monstruo. Editorial Calibroscopio",
    categoria: "6a8",
    imagen: "./assets/img/Libros/Petit_el_monstruo_6a8.jpg"
  },
  
  {
    id: 11,
    titulo: "¡No!",
    autor: "Marta Altes",
    ilustrador: "Marta Altes",
    editorial: "Calibroscopio",
    precio: 2600,
    texto_alt: "¡No! Editorial Calibroscopio",
    categoria: "3a5",
    imagen: "./assets/img/Libros/No_3a5.jpg"
  },
  
  {
    id: 12,
    titulo: "La noche de las estrellas",
    autor: "Douglas Gutiérrez",
    ilustrador: "María Oliver",
    editorial: "Ediciones Ekaré",
    precio: 3350,
    texto_alt: "La noche de las estrellas. Ediciones Ekaré",
    categoria: "6a8",
    imagen: "./assets/img/Libros/La_noche_de_las_estrellas_6a8.jpg"
  },
  
  {
    id: 13,
    titulo: "Los sonidos de la noche",
    autor: "Javier Sobrino",
    ilustrador: "Javier Sobrino",
    editorial: "Ediciones Ekaré",
    precio: 3350,
    texto_alt: "Los sonidos de la noche. Ediciones Ekaré",
    categoria: "1a3",
    imagen: "./assets/img/Libros/Los_sonidos_de_la_noche_1a3.jpg"
  },
  
  {
    id: 14,
    titulo: "El libro que tiene miedo",
    autor: "Cédric Ramadier",
    ilustrador: "Vincent Bourgeau",
    editorial: "Lóguez",
    precio: 3250,
    texto_alt: "El libro que tiene miedo. Editorial Lóguez",
    categoria: "0a1",
    imagen: "./assets/img/Libros/El_libro_que_tiene_miedo_0a1.jpeg"
  },
  
  {
    id: 15,
    titulo: "¡Hay un lobo!",
    autor: "Matthieu Maudet",
    ilustrador: "Matthieu Maudet",
    editorial: "Lóguez",
    precio: 3600,
    texto_alt: "¡Hay un lobo!. Editorial Lóguez",
    categoria: "3a5",
    imagen: "./assets/img/Libros/Hay_un_lobo_3a5.jpg"
  },
  
  {
    id: 16,
    titulo: "Mi cocodrilo verde inglés",
    autor: "Jaquelina Romero",
    ilustrador: "Cecilia Varela",
    editorial: "Del naranjo",
    precio: 2450,
    texto_alt: "Mi cocodrilo verde inglés. Editorial Del naranjo",
    categoria: "6a8",
    imagen: "./assets/img/Libros/Mi_cocodrilo_verde_ingles_6a8.jpg"
  },
  
  {
    id: 17,
    titulo: "Tomás y el lápiz mágico",
    autor: "Ricardo Alcantara",
    ilustrador: "Gusti",
    editorial: "Edelvives Argentina",
    precio: 1190,
    texto_alt: "Tomás y el lápiz mágico. Editorial Edelvives",
    categoria: "6a8",
    imagen: "./assets/img/Libros/Tomas_y_el_lapiz_magico_6a8.jpg"
  },
  
  {
    id: 18,
    titulo: "Me duele la lengua",
    autor: "Margarita Mainé",
    ilustrador: "Héctor Borlasca",
    editorial: "Azeditora",
    precio: 1300,
    texto_alt: "Me duele la lengua. Editorial Azeditora",
    categoria: "6a8",
    imagen: "./assets/img/Libros/Me_duele_la_lengua_6a8.jpg"
  },
  
  {
    id: 19,
    titulo: "Nunca vi una bruja",
    autor: "Luciana De Luca",
    ilustrador: "Francisco Cunha",
    editorial: "Periplo",
    precio: 3500,
    texto_alt: "Nunca vi una bruja. Editorial Periplo",
    categoria: "6a8",
    imagen: "./assets/img/Libros/Nunca_vi_una_bruja_6a8.jpg"
  },
  
  {
    id: 20,
    titulo: "Lila y Lali",
    autor: "Alejandra Viacava",
    ilustrador: "Nancy Brajer",
    editorial: "Edelvives Argentina",
    precio: 950,
    texto_alt: "Lila y Lali. Editorial Edelvives",
    categoria: "3a5",
    imagen: "./assets/img/Libros/Lila_y_Lali_3a5.jpg"
  },
  
  {
    id: 21,
    titulo: "Niña bonita",
    autor: "Ana María Machado",
    ilustrador: "Ilustralmas",
    editorial: "Calibroscopio",
    precio: 2400,
    texto_alt: "Niña bonita. Editorial Calibroscopio",
    categoria: "3a5",
    imagen: "./assets/img/Libros/Nina_bonita_3a5.jpg"
  },
  
  {
    id: 22,
    titulo: "Pequeño dragón aprende a volar",
    autor: "Graciela Pérez Aguilar",
    ilustrador: "Natalia Colombo",
    editorial: "Edelvives Argentina",
    precio: 950,
    texto_alt: "Pequeño dragón aprende a volar. Editorial Edelvives",
    categoria: "1a3",
    imagen: "./assets/img/Libros/Pequeno_dragon_aprende_a_volar_1a3.jpg"
  },
  
  {
    id: 23,
    titulo: "Pequeño dragón aprende a viajar solo",
    autor: "Graciela Pérez Aguilar",
    ilustrador: "Natalia Colombo",
    editorial: "Edelvives Argentina",
    precio: 950,
    texto_alt: "Pequeño dragón aprende a viajar solo. Editorial Edelvives",
    categoria: "1a3",
    imagen: "./assets/img/Libros/Pequeno_dragon_aprende_a_viajar_solo_1a3.jpg"
  },

  {
    id: 24,
    titulo: "Pequeño dragón aprende a echar fuego",
    autor: "Graciela Pérez Aguilar",
    ilustrador: "Natalia Colombo",
    editorial: "Edelvives Argentina",
    precio: 950,
    texto_alt: "Pequeño dragón aprende a echar fuego. Editorial Edelvives",
    categoria: "1a3",
    imagen: "./assets/img/Libros/Pequeno_dragon_echa_fuego_1a3.jpg"
  },
  
  {
    id: 25,
    titulo: "Pete pide prestado",
    autor: "Graciela Montes",
    ilustrador: "Yael Frankel",
    editorial: "Calibroscopio",
    precio: 3000,
    texto_alt: "Pete pide prestado. Editorial Calibroscopio",
    categoria: "1a3",
    imagen: "./assets/img/Libros/Pete_pide_prestado_1a3.jpg"
  },
  
  {
    id: 26,
    titulo: "Estaba la rana",
    autor: "Paloma Valdivia",
    ilustrador: "Carkes Ballesteros",
    editorial: "Amanuta",
    precio: 2500,
    texto_alt: "Estaba la rana. Editorial Amanuta",
    categoria: "0a1",
    imagen: "./assets/img/Libros/Estaba_la_rana_0a1.jpg"
  },
  
  {
    id: 27,
    titulo: "Dorir sin almohada",
    autor: "Jorge Luján",
    ilustrador: "Natalia Colombo",
    editorial: "Ojoreja",
    precio: 2900,
    texto_alt: "La nana del ananá. Editorial Ojoreja",
    categoria: "0a1",
    imagen: "./assets/img/Libros/Dormir_sin_almohada_0a1.jpg"
  },
  
  {
    id: 28,
    titulo: "El chupete perdido",
    autor: "Walter Binder",
    ilustrador: "Sonia Esplugas",
    editorial: "Calibroscopio",
    precio: 2500,
    texto_alt: "La nana del ananá. Editorial Calibroscopio",
    categoria: "0a1",
    imagen: "./assets/img/Libros/El_chupete_perdido_0a3.jpg"
  },
  
  {
    id: 29,
    titulo: "¿Es tuyo este perro?",
    autor: "José Sanabria",
    ilustrador: "Jimena Tello",
    editorial: "Del Naranjo",
    precio: 2450,
    texto_alt: "¿Es tuyo este perro? Editorial Del Naranjo",
    categoria: "3a5",
    imagen: "./assets/img/Libros/Es_tuyo_este_perro_3a5.jpg"
  },
  
  {
    id: 30,
    titulo: "Mi gato Manteca",
    autor: "Maria Laura Dedé",
    ilustrador: "Flaiban Dedé",
    editorial: "Primavera Bonete",
    precio: 1300,
    texto_alt: "Mi gato Manteca. Editorial Primavera Bonete",
    categoria: "0a1",
    imagen: "./assets/img/Libros/Mi_gato_manteca_0a1.jpg"
  },
];

// para hacer la paginación de "ver mas"
const splitProducts = (size) => {
  let dividedProducts = [];
  for (let i = 0; i < productsData.length; i += size)
    dividedProducts.push(productsData.slice(i, i + size));
  return dividedProducts;
};

const productsController = {
  dividedProducts: splitProducts(6), //  [[6],[6],[3]]
  nextProductsIndex: 1,
  productsLimit: splitProducts(6).length,
};
