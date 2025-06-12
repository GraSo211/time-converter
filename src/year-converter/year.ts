/**
 * Convierte años a milisegundos.
 * @param year - Tiempo en años.
 * @returns Tiempo en milisegundos.
 */
export const yearToMiliSecond = (year: number): number => {
    return yearToSecond(year) * 1000; // Corrección aquí
};

/**
 * Convierte años a segundos.
 * @param year - Tiempo en años.
 * @returns Tiempo en segundos.
 */
export const yearToSecond = (year: number): number => {
    return yearToMinute(year) * 60;
};

/**
 * Convierte años a minutos.
 * @param year - Tiempo en años.
 * @returns Tiempo en minutos.
 */
export const yearToMinute = (year: number): number => {
    return yearToHour(year) * 60;
};

/**
 * Convierte años a horas.
 * @param year - Tiempo en años.
 * @returns Tiempo en horas.
 */
export const yearToHour = (year: number): number => {
    return yearToDay(year) * 24;
};

/**
 * Convierte años a días (usando un año de 365 días).
 * @param year - Tiempo en años.
 * @returns Tiempo en días.
 */
export const yearToDay = (year: number): number => {
    return year * 365;
};

/**
 * Convierte años a semanas (usando un año de 365 días).
 * @param year - Tiempo en años.
 * @returns Tiempo en semanas.
 */
export const yearToWeek = (year: number): number => {
    return yearToDay(year) / 7;
};

/**
 * Convierte años a meses (considerando 12 meses por año).
 * @param year - Tiempo en años.
 * @returns Tiempo en meses.
 */
export const yearToMonth = (year: number): number => {
    return year * 12;
};
