/* 
    Create a date
    create a date object for the date 20 feb, 2012
*/
let date = new Date(2017, 1, 20, 3, 12);
console.log(date);

/* 
    Show a weekday
    - write a function to show the weekday in short format: 'MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU
*/
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}

const findDay = new Date(2012, 0, 4);  // 3 Jan 2012
console.log(getWeekDay(findDay));