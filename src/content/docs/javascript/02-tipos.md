---
title: Tipos de datos
description: A guide in my new Starlight docs site.
---
## Tipos de datos

|Primitivos | De Referencia |
|:---:|:--:|
| Number | Array |
| String | Object |
| Boolean | Function|
| Undefined | Clases |
| Null | |

### Aritméticos

Ejemplo:

```
let a = 5;
let b = 7;

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División
console.log(a % b); // Resto o Módulo (El resultado sobrante de una división)
console.log(a ** b); // potencia
```

### Operador de incremento

```
let a = 5;

console.log(++a); // <-- va a sumar 1 a la variable 'a' que es igual a 5 y luego lo va a mostrar.
```

```
let a = 5;

console.log(a++); // <-- va a mostrar el valor de la variable 'a' que es igual a 5 y luego suma 1.
```

### Operador de decremento

Funciona igual que el operador de Incremento pero reduciendo su valor en 1

```
let a = 5;

console.log(--a);
```

### Operadores de asignación

Hay algunos tipos más complejos, que proporcionan atajos útiles para mantener tu código más ordenado y más eficiente. Los más comunes se enumeran a continuación.

| Operador | Nombre | Propósito | Ejemplo | Atajo de |
|:----:|:----:|:----:|:----:|:----:|
| += | Adición asignación | Suma el valor de la derecha al valor de la variable de la izquierda y retorna el nuevo valor | x = 3; x += 4;| x = 3; x = x + 4; |
| -= | Resta asignación | Resta el valor de la derecha, del valor de la variable de la izquierda y retorna el nuevo valor. | x = 6; x -= 3; | x = 6; x = x - 3; |
| *= | Multiplicación asignación | Multiplica el valor de la variable en la izquierda por el valor en la derecha y retorna el nuevo valor. | x = 2; x *= 3; | x = 2; x = x * 3; |
| /= | División asignación | Divide el valor de la variable en la izquierda por el valor de la derecha y retorna el nuevo valor. | x = 10; x /= 5; | x = 10; x = x / 5; |

#### Más Información

- Leer más sobre Operadores aritméticos en la [web](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Math)