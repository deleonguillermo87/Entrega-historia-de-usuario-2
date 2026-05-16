
// =========================
// TASK 1: OBJETO DE PRODUCTOS
// =========================
const producto = {
    producto1: {
        id: 1,
        nombre: "arroz",
        precio: 3500
    },

    producto2: {
        id: 2,
        nombre: "yuca",
        precio: 3000
    },

    producto3: {
        id: 3,
        nombre: "eñame",
        precio: 3000
    },
};

// =========================
// VALIDACIÓN DE PRODUCTOS
// =========================
for (const key in producto) {
    const p = producto[key];

    const idValido =
        typeof p.id === "number" && p.id > 0;

    const nombreValido =
        typeof p.nombre === "string" && p.nombre.trim() !== "";

    const precioValido =
        typeof p.precio === "number" && p.precio > 0;

    if (idValido && nombreValido && precioValido) {
        console.log(`${key} es válido`);
    } else {
        console.log(`${key} es inválido`);
    }
}

// =========================
// TASK 2: SET (VALORES ÚNICOS)
// =========================
const lista = new Set([1, 1, 2, 2, 4, 5, 6, 7, 8]);

console.log("Set inicial:", lista);

// Agregar elemento
lista.add(9);
console.log("Después de add:", lista);

// Verificar existencia
console.log("Existe 9:", lista.has(9));
console.log("Existe 10:", lista.has(10));

// Eliminar elemento
lista.delete(4);
console.log("Después de delete:", lista);

// Recorrer Set
for (const valor of lista) {
    console.log("Valor del Set:", valor);
}

// =========================
// TASK 4: OBJETO PERSONA
// =========================
const persona = {
    nombre: "Guillermo",
    edad: 25,
    ciudad: "Barranquilla"
};

// for...in (recorre claves)
for (const propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

// Object.keys (solo claves)
console.log("Keys:", Object.keys(persona));

// Object.values (solo valores)
console.log("Values:", Object.values(persona));

// Object.entries (clave + valor en array)
console.log("Entries:", Object.entries(persona));

// =========================
// MAP (CATEGORÍAS -> PRODUCTOS)
// =========================
const mapa = new Map();

mapa.set("nombre", "guillermo");
mapa.set("edad", 25);
mapa.set("ciudad", "barranquilla");

console.log("Map completo:", mapa);

// for...of con desestructuración
for (const [propiedad, valor] of mapa) {
    console.log(propiedad + ": " + valor);
}

// forEach del Map
mapa.forEach((valor, clave) => {
    console.log(`la clave es ${clave} y su valor es ${valor}`);
});

// =========================
// RECORRER OBJETO PRODUCTO (EXTRA)
// =========================
for (const key in producto) {
    console.log("Producto:", key, producto[key]);
}
