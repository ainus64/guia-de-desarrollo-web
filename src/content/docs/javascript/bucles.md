---
title: Control de Flujo
description: A guide in my new Starlight docs site.
---

Habrá momentos en el cual necesitaremos ejecutar código mas de una vez, para esto existen los LOOPS o los Bucles, que es código que se va a ejecutar mas de una vez hasta que se cumpla una condición.


## while

Si se cumple una condición (true), entonces se ejecuta el bloque de código (expresión)

```
while (condición) {
    Bloque de código
}
```

---

##### Ejemplo:

```
let i = 0;

while (i < 10) {
    console.log(i); 
    i++; 
}
```

---

## do while

El bucle de 'do while' a diferencia del 'while' es que la comprobación en lugar de hacerse al comienzo se dará al final.
Cómo la evaluación de while se ejecuta al final, se va a ejecutar primero la porción de código y después se va a comprobar si se cumple la condición

---

##### Ejemplo:

```
let i = 0

do {
    console.log(i);
    i++
} while (i < 10);
```

---

## for

el bucle for hace exactamente lo mismo que while, solo que contiene absolutamente todo en una sola línea.

Para que esto sea posible, el bucle for se compone de 3 expresiones, (Inicialización, comparación, terminarIteración)

##### Sintaxis:

```
for (Inicialización; Comparación; terminarIteración) {

}
```
---

##### Ejemplo:

```
for (let i = 2; i < 2; i++) {
    console.log(i)
}
```

---

## for of

For of sirve para iterar un listado de elementos dentro de una array de forma sencilla, se puede realizar esto mismo con un while.
a continuación veremos un par de ejemplos.

---

##### Ejemplo for of:

```
    // app.js
let animales = ['Cerdo', 'Perro', 'Gato'];

for (let animal of animales) {
    console.log(animal);
}

```

La consola de nos mostrará esto:

```
    // output.console
    Cerdo
    Perro
    Gato
```

---

##### Ejemplo con while:

```
    // app.js
let animales = ['Cerdo', 'Perro', 'Gato'];
let i = 0;

while (i < animales.length){
    console.log(animales[i])
    i++;
}

```

---

## for in

Antiguamente  se usaba 'for in' para iterar por las propiedades de un objeto, pero en la actualidad es mejor usar 'for of' para esto, a continuación veremos algunos ejemplos de como se usa.

---

##### Ejemplo:

```
    // app.js
let user = {
    id: 1,
    name: 'Cerdo',
    age: 25,
};

for (let prop in user) {
    console.log(prop);
}
```

Salida de la consola:

```
    // output.console
    id
    name
    age
```

---

##### Ejemplo 2:

En este ejemplo veremos como obtener el nombre de la propiedad y también su valor.

```
    // app.js
let user = {
    id: 1,
    name: 'Cerdo',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}
```

Salida de la consola:

```
    // output.console
    id 1
    name Cerdo
    age 25
```
---

##### Ejemplo 3:

Antiguamente se usaba el loop for in para iterar con Arrays, pero es mejor usar for of, que es una función relativamente nueva en javascript que funciona mejor.

```
    // app.js
    let animales = ['Cerdo', 'Perro', Gato];

    for (let indice in animales) {
        // usaremos la variable indice para acceder el número de índice del array, seguido de los nombres de los animales.
        console.log(indice, animales[indice]);
    }
```

Salida de la consola:

```
    // output.console
    0 Cerdo
    1 Perro
    2 Gato
```

---

## break / continue

Break nos permite detener la iteración de algún loop, ya sea 'while', 'for', 'for in', 'for each', o 'do while', esto se usaría porque estas buscando un elemento en particular, y ya no necesitas seguir calculando el resto.

'Break' nos permite salirnos de la iteración y 'Continue' nos permite saltarnos una iteración.

##### Ejemplo 1:

```
    // app.js
    let i = 0;
    while (i < 6) {
        i++;
        if ( i === 2) {
        // Si i vale 2, se va a saltar el console.log(i) al estar al final y va a repetir el loop
            continue;
        }
        console.log(i);
    }
```

Salida de la consola:

```
    // output.console
    1
    3
    4
    5
    6
```

##### Ejemplo 2:

```
    // app.js
    let i = 0;
    while (i < 6) {
        i++;
        if ( i === 4) {
            break;
        }
        console.log(i);
    }
```

Salida de la consola:

```
    // output.console
    1
    2
    3
```

La función comprueba si se cumple el valor i = 4, entonces con Break rompe el bucle y sale.

## switch

Con switch vamos a indicar donde queremos que vaya el código una vez se cumpla el valor de una variable.

##### Ejemplo 1:

```
    // app.js
    let accion = 'listar';
    
    switch (accion) {
        case 'listar':
            console.log('Acción de listar');
            break;
        case 'guardar':
            console.log('Acción de guardar');
            break;
        default:
            console.log('Acción no reconocida');
    }

    if (accion == 'listar')
    else if (accion == 'guardar')
```

Salida de la consola:

```
    // output.console
    Acción listar
```
La forma de redactarlo para hacer comprobaciones forma parte de tu elección aunque existen librerías que hacen mucho uso de switch como [Redux](https://redux.js.org/)