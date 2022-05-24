//program to check leap year
function checkLeapYear(year){
    const leap = new Date(year,1,29).getDate() ===29;
    if(leap){
        console.log(year+'is a leap year');
    } else{
        console.log(year+'is not a leap year');
    }
}

//take input
const year = prompt('Enter a year')
checkLeapYear(year);