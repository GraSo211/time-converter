/**
 * Convierte semanas a milisegundos.
 * @param week - Tiempo en semanas.
 * @returns Tiempo en milisegundos.
 */
export const weekToMiliSecond = (week: number): number => {
    return weekToSecond(week) * 1000;
};

/**
 * Convierte semanas a segundos.
 * @param week - Tiempo en semanas.
 * @returns Tiempo en segundos.
 */
export const weekToSecond = (week: number): number => {
    return weekToMinute(week) * 60;
};

/**
 * Convierte semanas a minutos.
 * @param week - Tiempo en semanas.
 * @returns Tiempo en minutos.
 */
export const weekToMinute = (week: number): number => {
    return weekToHour(week) * 60;
};

/**
 * Convierte semanas a horas.
 * @param week - Tiempo en semanas.
 * @returns Tiempo en horas.
 */
export const weekToHour = (week: number): number => {
    return weekToDay(week) * 24;
};

/**
 * Convierte semanas a días.
 * @param week - Tiempo en semanas.
 * @returns Tiempo en días.
 */
export const weekToDay = (week: number): number => {
    return week * 7;
};

/**
 * Convierte semanas a años (usando un año de 365 días).
 * @param week - Tiempo en semanas.
 * @returns Tiempo en años.
 */
export const weekToYear = (week: number): number => {
    return weekToDay(week) / 365;
};
