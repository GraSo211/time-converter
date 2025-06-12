/**
 * Convierte segundos a milisegundos.
 * @param s - Tiempo en segundos.
 * @returns Tiempo en milisegundos.
 */
export const secondToMiliSecond = (s: number): number => {
    return s * 1000;
}

/**
 * Convierte segundos a minutos.
 * @param s - Tiempo en segundos.
 * @returns Tiempo en minutos.
 */
export const secondToMinute = (s: number): number => {
    return s / 60;
}

/**
 * Convierte segundos a horas.
 * @param s - Tiempo en segundos.
 * @returns Tiempo en horas.
 */
export const secondToHour = (s: number): number => {
    return secondToMinute(s) / 60;
}

/**
 * Convierte segundos a días.
 * @param s - Tiempo en segundos.
 * @returns Tiempo en días.
 */
export const secondToDay = (s: number): number => {
    return secondToHour(s) / 24;
}

/**
 * Convierte segundos a semanas.
 * @param s - Tiempo en segundos.
 * @returns Tiempo en semanas.
 */
export const secondToWeek = (s: number): number => {
    return secondToDay(s) / 7;
}

/**
 * Convierte segundos a años (usando un año de 365 días).
 * @param s - Tiempo en segundos.
 * @returns Tiempo en años.
 */
export const secondToYear = (s: number): number => {
    return secondToDay(s) / 365;
}
