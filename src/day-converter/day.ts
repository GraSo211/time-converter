/**
 * Convierte días a milisegundos.
 * @param day - Tiempo en días.
 * @returns Tiempo en milisegundos.
 */
export const dayToMiliSecond = (day: number): number => {
    return dayToSecond(day) * 1000;
};

/**
 * Convierte días a segundos.
 * @param day - Tiempo en días.
 * @returns Tiempo en segundos.
 */
export const dayToSecond = (day: number): number => {
    return dayToMinute(day) * 60;
};

/**
 * Convierte días a minutos.
 * @param day - Tiempo en días.
 * @returns Tiempo en minutos.
 */
export const dayToMinute = (day: number): number => {
    return dayToHour(day) * 60;
};

/**
 * Convierte días a horas.
 * @param day - Tiempo en días.
 * @returns Tiempo en horas.
 */
export const dayToHour = (day: number): number => {
    return day * 24;
};

/**
 * Convierte días a semanas.
 * @param day - Tiempo en días.
 * @returns Tiempo en semanas.
 */
export const dayToWeek = (day: number): number => {
    return day / 7;
};

/**
 * Convierte días a años (usando un año de 365 días).
 * @param day - Tiempo en días.
 * @returns Tiempo en años.
 */
export const dayToYear = (day: number): number => {
    return day / 365;
};
