---
title: Ejercicios
description: A guide in my new Starlight docs site.
sidebar:
    badge: New
---

## Ejercicios de práctica 

### Ejercicio 1

hay que construir una función que recibe 2 parámetros, y hay que averiguar cual es mayor de los 2 argumentos para que imprima 10 como resultado.
```
function cualEsMayor(a, b) {
}

let mayor = cualEsMayor(10, 5);

console.log(mayor);
```

#### Solución 1

Solución mas corta.

```
function cualEsMayor(a, b) {
    return (a > b) ? a : b;
}

let mayor = cualEsMayor(10, 5);

console.log(mayor);
```

#### Solución 2

```
function cualEsMayor(a, b) {
    if ( a < b ) {
        return a;
    } else {
        return b;
    }
}

let mayor = cualEsMayor(10, 5);

console.log(mayor);
```
---

### Ejercicio 2
Esta función debe devolvernos los nombres de las resoluciones que vamos a soportar, para saber que la resolución es HD, debemos comprobar que ancho y alto sean mayores 
que el valor de HD, y  si alguno de los 2 valores fuera inferior debería retornar que es falso.

```
/**
* Nombre: ancho x alto
* 8K 7680 x 4320
* 4K 3840 x 2160
* WQHD 2560 x 1440
* FHD: 1920 x 1080
* HD 1280 x 720
 */

function nombreResolucion(ancho, alto) {

}

let nombre = nombreResolucion(1366, 768);
console.log(nombre)
```

#### Solución 2
```
/**
* Nombre: ancho x alto
* 8K 7680 x 4320
* 4K 3840 x 2160
* WQHD 2560 x 1440
* FHD: 1920 x 1080
* HD 1280 x 720
 */

function nombreResolucion(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320 ) {
        return '8K';
    } else if (ancho >= 3840 && alto >= 2160 ) {
        return '4k';
    } else if (ancho >= 2560 && alto >= 1440) {
        return 'WQHD';
    } else if (ancho >= 1920 && alto >= 1080 ) {
        return 'FHD';
    } else if (ancho >= 1280 && alto >= 720 ) {
        return 'HD';
    } else {
        return 'false'
    }
}

let nombre = nombreResolucion(1366, 768);
console.log(nombre);
```

