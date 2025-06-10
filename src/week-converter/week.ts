// ms, s, min, h, d, w, m, y
export const weekToMiliSecond = (week: number): number => {
    return weekToSecond(week) * 60;
};

export const weekToSecond = (week: number): number => {
    return weekToMinute(week) * 60;
};

export const weekToMinute = (week: number): number => {
    return weekToHour(week) * 60;
};

export const weekToHour = (week: number): number => {
    return weekToDay(week) * 24;
};

export const weekToDay = (week: number): number => {
    return week * 7;
};

//jan feb mar apr may jun jul aug sep oct nov dec
export const weekToMonth = (week: number, month: string): number => {
    if (month in ["jan", "mar", "may", "jul", "aug", "oct", "dec"]) {
        return weekToDay(week) / 31;
    } else if (month === "feb") {
        return weekToDay(week) / 28;
    } else if (month in ["apr", "jun", "sep", "nov"] || !month) {
        return weekToDay(week) / 30;
    } else {
        throw new Error("Bad Month");
    }
};

export const weekToYear = (week: number): number => {
    return weekToDay(week) / 365;
};
