// Date objects encapsulate a single point in time, independent of the time zone or the calendar being used. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC.



let myDate = new Date();

console.log(myDate.toString()); //it will return the current date and time

console.log(myDate.toDateString()); //it will return the current date

console.log(myDate.toTimeString()); //it will return the current time

console.log(myDate.toLocaleString()); //it will return the current date and time in local format

console.log(myDate.getFullYear()); //it will return the current year

console.log(myDate.getMonth() + 1); //it will return the current month, it starts from 0 So, do +1 to get the correct month

console.log(myDate.getDate()); //it will return the current date

console.log(myDate.getDay()); //it will return the current day

console.log(myDate.getHours()); //it will return the current hours

console.log(myDate.getMinutes()); //it will return the current minutes

console.log(myDate.getSeconds()); //it will return the current seconds 

console.log(myDate.getMilliseconds()); //it will return the current milliseconds

console.log(typeof myDate); //object





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Creating a date object with a specific date and time

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); //it will return the date and time of the created date

let myCreatedDate1 = new Date(2023, 0, 23, 10, 30, 0);
console.log(myCreatedDate1.toLocaleString()); //it will return the date and time of the created date

let myCreatedDate2 = new Date("01-23-2023");
console.log(myCreatedDate2.toLocaleString()); //it will return the date and time of the created date




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Timestamps

let myTimeStamp = Date.now();
console.log(myTimeStamp); //it will return the current timestamp

console.log(myCreatedDate2.getTime()); //it will return the timestamp of the created date

console.log(Math.floor(Date.now()/1000)); //it will return the current timestamp in seconds




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC',
}) //it will return the date in the specified format and timezone and locale and so on


