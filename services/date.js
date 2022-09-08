export const uniqueDates = (tasks)=>{
    const unique = [];
    tasks.forEach(task => {
        if(!unique.includes(task.fecha)){
            unique.push(task.fecha);
        }
    });
    return unique;
};

export const orderDates = (dates)=>{
    dates.sort((a, b) =>{
        const first = moment(a,"DD/MM/YYYY");
        const second = moment(b,"DD/MM/YYYY");
        return first - second;
    });
}