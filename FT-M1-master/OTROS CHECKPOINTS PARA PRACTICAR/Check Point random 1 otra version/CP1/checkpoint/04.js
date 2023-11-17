// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
//
//
// 4️⃣ ***** EJERCICIO 4 ***** - construccionCasas() 4️⃣
// En este ejercicio debemos implementar la función construccionCasas() la cual nos va a determinar
// cuantas casas se pueden construir según la cantidad de bolsas de cemento que dispongamos.
// La función recibirá por parámetro la cantidad de bolsas de cemento que dispongamos y
// dentro de la misma debe retornar otra función pasándole por parámetros la cantidad de casas que queramos construir.
//
// INFO:
// 10 bolsas de cemento equivalen a 1 casa
//* -Si la cantidad de casas que recibo es 0 o menor debe retornar "Por favor ingresar cuantas casas quieres construir"
//* -Si la cantidad de bolsas de cemento no equivalen a 1 casa debe retornar "No se puede construir casas con esa cantidad de bolsas"
// -Si la cantidad de casas sobrepasa la cantidad de bolsas de cemento necesarias para construir esas casas... ej: bolsas de cemento = 10 y casas = 2 debe retornar `Solo puedes construir esta cantidad de casas: 1`
// -Si la cantidad de casas es igual a la cantidad de bolsas de cemento necesarias para construir esas casas debe retornar true
//
// EJEMPLOS:
// let casas = construccionCasas(100)
// casas(10) => 10 me devolvería true
//
// let casas = construccionCasas(0)
//casas(10) => 'No se puede construir casas con esa cantidad de bolsas'
//
// REQUISITOS:
//  🟢

const construccionCasas = bolsas => {
  return casas => {
    if (casas <= 0) return 'Por favor ingresar cuantas casas quieres construir';
    if (bolsas < 10) return 'No se puede construir casas con esa cantidad de bolsas';
    if (casas * 10 > bolsas)
      return `Solo puedes construir esta cantidad de casas: ${Math.floor(bolsas / 10)}`;
    if (casas * 10 === bolsas) return true;
  };
};

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  construccionCasas,
};
