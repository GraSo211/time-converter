/**
 * Convierte horas a milisegundos.
 * @param hour - Tiempo en horas.
 * @returns Tiempo en milisegundos.
 */
export const hourToMiliSecond = (hour: number): number => {
    return hourToSecond(hour) * 1000;
};

/**
 * Convierte horas a segundos.
 * @param hour - Tiempo en horas.
 * @returns Tiempo en segundos.
 */
export const hourToSecond = (hour: number): number => {
    return hourToMinute(hour) * 60;
};

/**
 * Convierte horas a minutos.
 * @param hour - Tiempo en horas.
 * @returns Tiempo en minutos.
 */
export const hourToMinute = (hour: number): number => {
    return hour * 60;
};

/**
 * Convierte horas a días.
 * @param hour - Tiempo en horas.
 * @returns Tiempo en días.
 */
export const hourToDay = (hour: number): number => {
    return hour / 24;
};

/**
 * Convierte horas a semanas.
 * @param hour - Tiempo en horas.
 * @returns Tiempo en semanas.
 */
export const hourToWeek = (hour: number): number => {
    return hourToDay(hour) / 7;
};

/**
 * Convierte horas a años (usando un año de 365 días).
 * @param hour - Tiempo en horas.
 * @returns Tiempo en años.
 */
export const hourToYear = (hour: number): number => {
    return hourToDay(hour) / 365;
};
