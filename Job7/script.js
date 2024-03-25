function jourTravaille(date)
{
    let dayName = "";
    let dayMonth = "";
    let dayNumber = "";
    let answer = "";
    let dateText = "";


    switch (date.getDay) {
        case 0:
            dayName = "Dimanche";
            break;
        case 1:
            dayName = "Lundi";
            break;
        case 2:
            dayName = "Mardi";
            break;
        case 3:
            dayName = "Mercredi";
        case 4:
            dayName = "Jeudi";
        case 5:
            dayName = "Vendredi";
        case 6:
            dayName = "Samedi";


        default:
            break;
    }
    if (date.getDay() == 0 || date.getDay() == 6)
    {
        let answer = "Non, le " + dateText + " est un week-end";
        return answer
    }
       dateText = dayName + " " + dayNumber + " " + dayMonth;

    console.log(date)
    console.log(date.getDay())
    console.log(dateText)
}
let myDate = new Date;
myDate.setFullYear(2024);
myDate.setMonth(3);
myDate.setDate(6);
console.log(jourTravaille(myDate));