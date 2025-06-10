// ms, s, min, h, d, w, m, y
export const hourToMiliSecond = (hour:number):number=>{
    return hourToSecond(hour) * 60;
}

export const hourToSecond = (hour:number):number=>{
    return hourToMinute(hour) * 60
}


export const hourToMinute = (hour:number):number=>{
    return hour * 60
}

export const hourToDay = (hour:number):number=>{
    return hour / 24
}

export const hourToWeek = (hour:number):number=>{
    return hourToDay(hour) / 7
}

//jan feb mar apr may jun jul aug sep oct nov dec 
export const hourToMonth = (hour:number, month:string):number=>{
    if(month in ["apr", "jun","sep", "nov"]){
        return hourToDay(hour) / 30
    }else if(month in ["jan", "mar", "may","jul", "aug", "oct","dec"]){
        return hourToDay(hour) / 31

    }else if(month === "feb"){
        return hourToDay(hour) / 28
    }else{
        throw new Error("Bad Month");
    }

}

export const hourToYear = (hour:number):number=>{
    return hourToDay(hour) / 365;
}

