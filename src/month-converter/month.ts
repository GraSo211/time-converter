/**
 * Convierte meses a años (usando un año de 365 días).
 * @param month - Tiempo en minutos.
 * @returns Tiempo en años.
 */
export const monthToYear = (month: number): number => {
    return month / 12;
};
