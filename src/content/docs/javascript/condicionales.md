---
title: Condicionales
description: A guide in my new Starlight docs site.
---

## if

Si se cumple una condición (true), entonces se ejecuta el bloque de código (expresión)

```
if (condición) {
    expresión
}
```

##### Ejemplo:

```
let edad = 25;

if (edad > 17) {
    console.log('Usuario mayor de edad');
}
```

---

## else

Se usa else para ejecutar otra porción de código si no se cumple la condición inicial.

##### Ejemplo:

```
let edad = 25;

if (edad > 17) {
    console.log('Usuario mayor de edad');
} else{
    console.log('Usuario menor de edad');
}
```

---

## else if

Es una combinación entre if y else para realizar un conjunto de comprobaciones en caso de que una condición no sea "true", se ejecutará una segunda condición if, así hasta descartar todas las anteriores terminando finalmente en else, cuando no se han cumplido todas las anteriores.

##### Ejemplo:

```
let edad = 25;

if (edad > 17) {
    console.log('Usuario mayor de edad');
} else if (edad >13) {
    console.log('Usuario necesita estar acompañado')
} else{
    console.log('Usuario menor de edad');
}
```