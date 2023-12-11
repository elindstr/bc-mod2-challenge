
//populate ageSpan
var currentDate = new Date();
var age = currentDate.getFullYear() - 2016;
if (currentDate.getMonth() <= 8 && currentDate.getDate() < 2) {age--};
document.getElementById("ageSpan").innerHTML = age;
