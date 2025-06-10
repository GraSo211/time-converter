// ms, s, min, h, d, w, m, y
export const secondToMiliSecond = (s:number):number=>{
    return s * 1000;
}

export const secondToMinute = (s:number):number=>{
    return s / 60
}


export const secondToHour = (s:number):number=>{
    return secondToMinute(s) / 60
}

export const secondToDay = (s:number):number=>{
    return secondToHour(s) / 24
}

export const secondToWeek = (s:number):number=>{
    return secondToDay(s) / 7
}

//jan feb mar apr may jun jul aug sep oct nov dec 
export const secondToMonth = (s:number, month:string):number=>{
    if(month in ["apr", "jun","sep", "nov"]){
        return secondToDay(s) / 30
    }else if(month in ["jan", "mar", "may","jul", "aug", "oct","dec"]){
        return secondToDay(s) / 31

    }else if(month === "feb"){
        return secondToDay(s) / 28
    }else{
        throw new Error("Bad Month");
    }

}

export const secondToYear = (s:number):number=>{
    return secondToDay(s) / 365;
}

