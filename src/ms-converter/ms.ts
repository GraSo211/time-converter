// ms, s, min, h, d, w, m, y
export const msToSecond = (ms:number):number=>{
    return ms / 1000
}

export const msToMinute = (ms:number):number=>{
    return msToSecond(ms) / 60;
}

export const msToHour = (ms:number):number=>{
    return msToMinute(ms) / 60
}

export const msToDay = (ms:number):number=>{
    return msToHour(ms) / 24
}

export const msToWeek = (ms:number):number=>{
    return msToDay(ms) / 7
}

//jan feb mar apr may jun jul aug sep oct nov dec 
export const msToMonth = (ms:number, month:string):number=>{
    if(month in ["apr", "jun","sep", "nov"]){
        return msToDay(ms) / 30
    }else if(month in ["jan", "mar", "may","jul", "aug", "oct","dec"]){
        return msToDay(ms) / 31

    }else if(month === "feb"){
        return msToDay(ms) / 28
    }else{
        throw new Error("Bad Month");
    }

}

export const msToYear = (ms:number):number=>{
    return msToDay(ms) / 365;
}

