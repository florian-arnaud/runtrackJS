function bisextile(year)
{


    if ((year % 4 == 0) && (year % 100 != 0 ) || (year % 400 ==0 )) {
        return true;
    }
    else
    {
        return false;
    }
}

let year = prompt("What year do you want to check?")
console.log("Is " +year + " a leap year ? Answer : " + bisextile(year));
