// ms, s, min, h, d, w, m, y
export const monthToMiliSecond = (monthNum: number, monthName: string): number => {
    return monthToSecond(monthNum, monthName) * 60;
};

export const monthToSecond = (monthNum: number, monthName:string): number => {
    return monthToMinute(monthNum, monthName) * 60;
};

export const monthToMinute = (monthNum: number, monthName: string): number => {
    return monthToHour(monthNum, monthName) * 60;
};

export const monthToHour = (monthNum: number, monthName:string): number => {
    return monthToDay(monthNum, monthName) * 24;
};


//jan feb mar apr may jun jul aug sep oct nov dec
export const monthToDay = (monthNum: number, monthName: string): number => {
    if (monthName in ["jan", "mar", "may", "jul", "aug", "oct", "dec"]) {
        return monthNum / 31;
    } else if (monthName === "feb") {
        return monthNum / 28;
    } else if (monthName in ["apr", "jun", "sep", "nov"] || !monthName) {
        return monthNum / 30;
    } else {
        throw new Error("Bad Month");
    }
};

export const monthToWeek = (monthNum: number, monthName: string ): number => {
    return monthToDay(monthNum, monthName) /7;
};


export const monthToYear = (monthNum: number, monthName: string): number => {
    return monthToDay(monthNum, monthName) / 365;
};
