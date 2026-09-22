const nombre = prompt("¿Cuál es tu nombre?");

const nacimientoAnio = parseInt(prompt("¿En qué año naciste?"));

const numeroFavorito = parseInt(prompt("¿Cuál es tu número favorito?"));

alert(`¡Hola, ${nombre}! Tu año de nacimiento es ${nacimientoAnio}, tu número favorito es ${numeroFavorito}, y tu edad es ${2026 - nacimientoAnio}.`);