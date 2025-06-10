export const yearToMiliSecond = (year: number): number => {
    return yearToSecond(year) * 60;
};

export const yearToSecond = (year: number): number => {
    return yearToMinute(year) * 60;
};

export const yearToMinute = (year: number): number => {
    return yearToHour(year) * 60;
};

export const yearToHour = (year: number): number => {
    return yearToDay(year) * 24;
};

export const yearToDay = (year: number): number => {
    return year * 365;
};

export const yearToWeek = (year: number): number => {
    return yearToDay(year) / 7;
};

export const yearToMonth = (year: number): number => {
    return year * 12
};

