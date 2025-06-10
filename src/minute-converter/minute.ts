// ms, s, min, h, d, w, m, y
export const minuteToMiliSecond = (minute:number):number=>{
    return minuteToSecond(minute) * 60;
}

export const minuteToSecond = (minute:number):number=>{
    return minute * 60
}


export const minuteToHour = (minute:number):number=>{
    return minute / 60
}

export const minuteToDay = (minute:number):number=>{
    return minuteToHour(minute) / 24
}

export const minuteToWeek = (minute:number):number=>{
    return minuteToDay(minute) / 7
}

//jan feb mar apr may jun jul aug sep oct nov dec 
export const minuteToMonth = (minute:number, month:string):number=>{
    if(month in ["apr", "jun","sep", "nov"]){
        return minuteToDay(minute) / 30
    }else if(month in ["jan", "mar", "may","jul", "aug", "oct","dec"]){
        return minuteToDay(minute) / 31

    }else if(month === "feb"){
        return minuteToDay(minute) / 28
    }else{
        throw new Error("Bad Month");
    }

}

export const minuteToYear = (minute:number):number=>{
    return minuteToDay(minute) / 365;
}

