let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1; 
let year = today.getFullYear();


let current = `${day}/${month}/${year}`;

function dateCheck(inputDay, inputMonth, inputYear) {
    let inputDate = new Date(inputYear, inputMonth - 1, inputDay); // Month is 0-indexed
    let todayDate = new Date(year, month - 1, day);

    console.log(todayDate.getTime());
    

    if (inputDate.getTime() === todayDate.getTime()) {
        console.log(true);
    } else {
        console.log(false);
    }
}

dateCheck();  // true if today's date is April 30, 2025
