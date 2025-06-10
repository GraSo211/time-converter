// ms, s, min, h, d, w, m, y
export const dayToMiliSecond = (day: number): number => {
    return dayToSecond(day) * 60;
};

export const dayToSecond = (day: number): number => {
    return dayToMinute(day) * 60;
};

export const dayToMinute = (day: number): number => {
    return dayToHour(day) * 60;
};

export const dayToHour = (day: number): number => {
    return day * 24;
};

export const dayToWeek = (day: number): number => {
    return day / 7;
};

//jan feb mar apr may jun jul aug sep oct nov dec
export const dayToMonth = (day: number, month: string): number => {
    if (month in ["jan", "mar", "may", "jul", "aug", "oct", "dec"]) {
        return day / 31;
    } else if (month === "feb") {
        return day / 28;
    } else if (month in ["apr", "jun", "sep", "nov"] || !month) {
        return day / 30;
    } else {
        throw new Error("Bad Month");
    }
};

export const dayToYear = (day: number): number => {
    return day / 365;
};
