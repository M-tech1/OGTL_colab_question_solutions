
function day_of_the_week(param_1, param_2, param_3)
{
    days = ["Sunday","Monday","Tuesday","Wedenesday","Thursday","Friday","Saturday"];
    da = new Date(param_3+ '-'+ param_2+'-'+param_1);
    dayIndex = da.getDay();

    return days[dayIndex]
    
}

console.log(day_of_the_week(12, 11, 2002));
