# js-time-converter

**js-time-converter** es una biblioteca sencilla para convertir y manipular formatos de tiempo en JavaScript/TypeScript. Funciona tanto en entornos de navegador como en Node.js.

## Características

-   Conversión fácil entre diferentes unidades de tiempo.
-   Compatible con TypeScript y JavaScript.
-   Soporta ejecución en navegador y Node.js.
-   Código ligero y sin dependencias externas.

## Instalación

Usa npm para instalar el paquete:

```bash
npm install js-time-converter
```

## Uso básico

Las funciones están organizadas en módulos separados, por ejemplo:

-   `minute-converter/minute.ts` para conversiones desde minutos.
-   `week-converter/week.ts` para conversiones relacionadas con semanas.

### Ejemplo importando desde diferentes módulos

```ts
import { minuteToMiliSecond, minuteToSecond, minuteToHour, minuteToDay } from "js-time-converter/minute-converter/minute";

import { minuteToWeek, minuteToYear } from "js-time-converter/week-converter/week";

// Convierte 5 minutos a milisegundos
console.log(minuteToMiliSecond(5)); // 300000

// Convierte 120 minutos a horas
console.log(minuteToHour(120)); // 2

// Convierte 10080 minutos a semanas
console.log(minuteToWeek(10080)); // 1

// Convierte 525600 minutos a años (aprox. 1 año)
console.log(minuteToYear(525600)); // 1
```

## Scripts disponibles

-   `npm run build-browser` — Compila para navegador (ES6 modules).
-   `npm run build-node` — Compila para Node.js.
-   `npm run build` — Ejecuta ambos builds.

## Contribuciones

¡Contribuciones son bienvenidas! Por favor, abre un issue o un pull request en el repositorio.

## Licencia

Este proyecto está bajo la licencia MIT.
