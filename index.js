// Leap Year Check
function isLeapYear(year) {
  if ((year % 100 !== 0) & (year % 4 === 0)) {
    return "Yes This is Leap Year";
  }
  if (year % 100 === 0 && year % 400 === 0) {
    return "Yes This is Leap Year";
  }
  return "No";
}

let checkLeapYear = isLeapYear(2022);
console.log(checkLeapYear);
