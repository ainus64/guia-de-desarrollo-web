---
title: Conventional Commits
description: A guide in my new Starlight docs site.
---
Conventional Commits son una serie de reglas en el formato de los mensajes para realizar commits.

La idea es mantener una legibilidad sencilla y clara a la hora de hacer una Push Request al proyecto.

## Semantic Versioning o SemVer
La Semantic Versioning está ligada a la Conventional Commits para establecer versiones de librerías, paquetes, dependencias.

El versionado se divide en tres bloques:

```
// MAJOR.MINOR.PATCH

Version 2.12.7
// 2 -> MAJOR
// 12 -> MINOR
// 17 -> PATCH
```

---

> * **MAJOR**: Número de versión que se incrementa cuando se rompe la compatibilidad de versiones anteriores.

> * **MINOR**: Número de versión que se incrementa cuando se añade funcionalidad y esta es compatible en la versión MAJOR actual.
 
> * **PATCH**: Número de versión que se incrementa cuando se arreglan errores en la versión MAJOR.MINOR actual.

---

Adicionalmente está permitido (y es muy común) añadir al bloque PATCH información adicional indicando si son versiones previas a un nuevo lanzamiento (alpha, beta, next, rc, ...) y el número de la compilación. Esta información adicional debe ir en el bloque PATCH precedido por un guión.

    12.2.0-alpha.0
    // Aquí "alpha" indica el estado de la compilación y ".0" indica el número de compilación


## Estructura de Commits

Suele ser habitual por buenas prácticas utilizar un scope para indicar que cambio afecta.

    <TIPO>(SCOPE o ÁMBITO): <DESCRIPCIÓN>
        <LINEA_EN_BLANCO>
        [BODY - opcional]
        <LINEA_EN_BLANCO>
        [nota(s) del FOOTER - opcional(es)]

    // Ejemplo de un Commit:
    fix(index.html): Se ha corregido un fallo.

    Se han corregido ciertos fallos sintáticos en el <body> ...

### Tipos de Commits
Etiquetas habituales en los commits.

| Tipos de Commits   | Para que se usa                               |
|-----------|-----------------------------------------------|
| fix       | Indica que el commit es un parche de un error. Está relacionado con la versión **PATCH** del proyecto.|
| feat      | Cambios nuevos que añaden funcionalidad. está relacionado con la versión **MINOR** del proyecto.   |
| BREAKING CHANGES | Se añade en el Footer de un commit o el caracter ! despues del tipo. <Ejemplo: **feat!(scope): Descripción**> . Indica que se rompe la compatibilidad de la versión actual y está relacionada con la versión **MAJOR**,   |
| chore | tareas rutinarias que no sean específicas de una feature o un error como por ejemplo añadir contenido al fichero .gitignore o instalar una dependencia.|
| test | si añadimos o arreglamos tests. |
| docs | cuando solo se modifica documentación |
| build | cuando el cambio afecta al compilado del proyecto |
| ci | el cambio afecta a ficheros de configuración y scripts relacionados con la integración continua. |
| style | cambios de legibilidad o formateo de código que no afecta a funcionalidad. |
| refactor | cambio de código que no corrige errores ni añade funcionalidad, pero mejora el código. |
| perf |  usado para mejoras de rendimiento. |
| revert | si el commit revierte un commit anterior. Debería indicarse el hash del commit que se revierte. |


### Scope o Ámbito
Es **opcional**, pero sirve para dar información contextual por ejemplo indicar el nombre de la feature a la que afecta el commit.

### Descripción
Breve descripción del cambio cumpliendo lo siguiente:

- Usa imperativos, en tiempo presente: “añade” mejor que “añadido” o “añadidos”
- La primera letra siempre irá en minúscula
- no escribir un punto al final

### BODY
Es **opcional** y debería añadir aportar más información que la descripción. Debería usar el mismo tono imperativo que esta.

### FOOTER
Es **opcional**. Siempre se utiliza para indicar cambios que rompan la compatibilidad de la versión actual (Breaking Changes) aunque también están permitidos otros formatos que sigan la convención de git trailer format.

Si el pie de página indica un Breaking Change, el formato deberá ser el siguiente:

    BREAKING CHANGE: <description>

### Ejemplos

##### Commit rompiendo la compatibilidad de la versión

    feat: allow provided config object to extend other configs

    BREAKING CHANGE: `extends` key in config file is now used for extending other config files

##### El mismo commit de antes pero indicando la ruptura con !

    feat!: allow provided config object to extend other configs

##### Commit con Scope

    feat(lang): add spanish language

##### Commit con BODY y FOOTER

    fix: correct minor typos in code

    see the issue for details
    on typos fixed.

    Reviewed-by: Z
    Refs #1234

## ¿Por qué usar Conventional Commits?
- Conseguimos un acuerdo en el formato de los commits con todo el equipo de desarrollo tanto interno como externo
- Armonía en el histórico del repositorio
- Generación automática de CHANGELOG
- Versionado automático del proyecto


#### Saber más
> Para más información:
> - Leer más sobre [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) en su página web original 
> - o también en [Conventional Commits - Que es y por donde empezar](https://dev.to/achamorro_dev/conventional-commits-que-es-y-por-que-deberias-empezar-a-utilizarlo-23an)
