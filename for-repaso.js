//secuencia de numeros del 1 al 20 con  solo pares

let p = 0;
while (p < 20) {
    p++;
    if (p %2  ===0) {
        console.log(p);
        
    }
}

//secuencia al reves del 10 al 0 impares
let j = 10;
while(j >= 1) {
    j--;
    if (j %2 !=0) {
    console.log(j);
    }
}

//naturales
//suma de elementos en total
let plus = 0;
//la cuenta total
count = plus;
//se usa for recorrer los numerosm del1 al 15 a partir de posiciones
for (let i = 1; i < 16; i++) {
 //al son dl recorrido se vasumando cada elemento ejemplo1+ 2 = 3
     count += i
     // se imprime suma de cada resultado
    console.log(count);

}


//frutas
// se crea variable frutas en arreglominusculña
let  fruits = ["pear", "banana", "straewberry"];
// arreglo vacio
let mfruits = [];
// se recorre arreglo
for (let i = 0; i <= fruits.length-1; i++) {
//se inserta las fgrutas emayuscula en el arreglo
mfruits.push(fruits[i].toUpperCase())
//se imprime arreglo mayusculas
    console.log(mfruits);
   
}



//ciudades
//arreglo ciudades
const citys = ["armenia", "madrid", "pereira"];
//mensage vacio
let message = "";
//se recorre arreglo
for (let i = 0; i <= citys.length; i++) {
    //si enciuntro madrid se imprime
    if (citys[i] === "madrid") {
    console.log( "congratulations your find madrid");
    //si la encuentra deja de interar una y otra vez
    break;
    //si no se imprime
    } else {
    console.log( "well next in another oportunity");
}
    //retorno mensaje
    //return  message;  
}

