console.log("Time or Date Output");
const date = new Date().toDateString();
const time = new Date().toTimeString();
const question = prompt("which would you like to know, date or time");
if (question == "date") {
    console.log(`current date=${date}`)
};
if (question == "time") {
    console.log(`current time =${time}`)
};