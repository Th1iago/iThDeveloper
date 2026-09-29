/*const nombre = prompt("¿Cuál es tu nombre?");

const nacimientoAnio = parseInt(prompt("¿En qué año naciste?"));

const numeroFavorito = parseInt(prompt("¿Cuál es tu número favorito?"));

alert(`¡Hola, ${nombre}! Tu año de nacimiento es ${nacimientoAnio}, tu número favorito es ${numeroFavorito}, y tu edad es ${2026 - nacimientoAnio}.`);
*/
const nombre = prompt("¡Hola! ¿Cómo te llamás?");
console.log(`Bienvenido ${nombre} al cotizador de páginas web.`);
 
let opcion = "";
 
while (opcion !== "0") {
  opcion = (prompt(
    "¿Qué tipo de página querés?\n" +
    "1 - Landing page\n" +
    "2 - Portfolio\n" +
    "3 - Tienda online\n" +
    "0 - Salir\n" +
    "Ingrese el número de la opción deseada:"
  )); 
 
  let tipo = "";
  let precio = 0;
 
  switch (opcion) {
    case "1":
      tipo = "Landing page";
      precio = 50000;
      console.log(`Elegiste ${tipo}. El precio es $${precio}.`);
      break;
    case "2":
      tipo = "Portfolio";
      precio = 80000;
      console.log(`Elegiste ${tipo}. El precio es $${precio}.`);
      break;
    case "3":
      tipo = "Tienda online";
      precio = 150000;
      console.log(`Elegiste ${tipo}. El precio es $${precio}.`);
      break;
    case "0":
        console.log("Gracias por usar el cotizador. ¡Hasta luego!");
  }

}
