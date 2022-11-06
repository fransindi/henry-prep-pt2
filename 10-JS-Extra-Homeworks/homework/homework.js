// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let newArr = []
  for (clave in objeto){
    newArr.push([clave, objeto[clave]])
  }
  return newArr
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objeto = {}
  for(let i = 0; i < string.length; i++)
  {
    if(!(objeto.hasOwnProperty(string.charAt(i)))){
    objeto[string.charAt(i)] = 1;
    } else {
      objeto[string.charAt(i)] = objeto[string.charAt(i)] + 1;
    }
  }
  return objeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let capitalizado = []
let lower = []
for(let i = 0; i < s.length; i++){
  if(s.charAt(i) === s.charAt(i).toLowerCase()){
    lower.push(s.charAt(i))
  } else{
    capitalizado.push(s.charAt(i))
  }
}
let mayus = capitalizado.join("")
let minus = lower.join("")
let final = mayus + minus;
return final
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let separado = str.split(" ")
  let final = separado.map((elemento) => {
    let volteao = ''
    for(let i = elemento.length - 1; i >= 0 ; i--){
      volteao = volteao + elemento[i];
    }
    return volteao
  }
  )
  let ahoraSi = final.join(" ")
  return ahoraSi
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let texto = numero + '';
  let volteao = '';
  for(let i = texto.length - 1; i >= 0 ; i--){
    volteao = volteao + texto.charAt(i);
  }
  if(texto === volteao){
    return "Es capicua"
  }
  return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let separado = cadena.split('');
  let sinabc = separado.filter(elemento => elemento !== "a").filter(elemento => elemento !== "b").filter(elemento => elemento !== "c")
  let final = sinabc.join("")

  return final;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let newarr = []
  for(let j = 0; j < 20; j++){
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length === j){
        newarr.push(arr[i])
      }
  }
  }
  return newarr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let newarr = []
  for (let i = 0; i < arreglo1.length; i++){
    if(arreglo2.indexOf(arreglo1[i]) !== -1){
      newarr.push(arreglo1[i])
    }
  }
  return newarr
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

