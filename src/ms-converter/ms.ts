/**
 * Convierte milisegundos a segundos.
 * @param ms - Tiempo en milisegundos.
 * @returns Tiempo en segundos.
 */
export const msToSecond = (ms: number): number => {
    return ms / 1000;
}

/**
 * Convierte milisegundos a minutos.
 * @param ms - Tiempo en milisegundos.
 * @returns Tiempo en minutos.
 */
export const msToMinute = (ms: number): number => {
    return msToSecond(ms) / 60;
}

/**
 * Convierte milisegundos a horas.
 * @param ms - Tiempo en milisegundos.
 * @returns Tiempo en horas.
 */
export const msToHour = (ms: number): number => {
    return msToMinute(ms) / 60;
}

/**
 * Convierte milisegundos a días.
 * @param ms - Tiempo en milisegundos.
 * @returns Tiempo en días.
 */
export const msToDay = (ms: number): number => {
    return msToHour(ms) / 24;
}

/**
 * Convierte milisegundos a semanas.
 * @param ms - Tiempo en milisegundos.
 * @returns Tiempo en semanas.
 */
export const msToWeek = (ms: number): number => {
    return msToDay(ms) / 7;
}

/**
 * Convierte milisegundos a años (usando un año de 365 días).
 * @param ms - Tiempo en milisegundos.
 * @returns Tiempo en años.
 */
export const msToYear = (ms: number): number => {
    return msToDay(ms) / 365;
}
