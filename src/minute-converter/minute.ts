/**
 * Convierte minutos a milisegundos.
 * @param minute - Tiempo en minutos.
 * @returns Tiempo en milisegundos.
 */
export const minuteToMiliSecond = (minute: number): number => {
    return minuteToSecond(minute) * 1000;
};

/**
 * Convierte minutos a segundos.
 * @param minute - Tiempo en minutos.
 * @returns Tiempo en segundos.
 */
export const minuteToSecond = (minute: number): number => {
    return minute * 60;
};

/**
 * Convierte minutos a horas.
 * @param minute - Tiempo en minutos.
 * @returns Tiempo en horas.
 */
export const minuteToHour = (minute: number): number => {
    return minute / 60;
};

/**
 * Convierte minutos a días.
 * @param minute - Tiempo en minutos.
 * @returns Tiempo en días.
 */
export const minuteToDay = (minute: number): number => {
    return minuteToHour(minute) / 24;
};

/**
 * Convierte minutos a semanas.
 * @param minute - Tiempo en minutos.
 * @returns Tiempo en semanas.
 */
export const minuteToWeek = (minute: number): number => {
    return minuteToDay(minute) / 7;
};

/**
 * Convierte minutos a años (usando un año de 365 días).
 * @param minute - Tiempo en minutos.
 * @returns Tiempo en años.
 */
export const minuteToYear = (minute: number): number => {
    return minuteToDay(minute) / 365;
};

