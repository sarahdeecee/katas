const talkingCalendar = function(date) {
  let month = "";
  let day = "";
  let dayEnding = "";
  let year = "";
  let fullDate = "";
  
  //Year
  year = date.slice(0,4);

  //Month
  switch (date.slice(5,7)) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";  
  }
  //Day
  if (date.slice(8,9) === "0") {
    day = date.slice(9,10);
  } else {
    day = date.slice(8,10);
  }

  //Day suffix
  if (date.slice(8,9) === "1"){ //11-19 end in "th"
    dayEnding = "th";
  } else {
    switch (date.slice(9,10)) {
      case "1":
        dayEnding = "st";
        break;
      case "2":
        dayEnding = "nd";
        break;
      case "3":
        dayEnding = "rd";
        break;
      default:
        dayEnding = "th";
    }
  }

  //Put together date string
  fullDate = (month + " " + day + dayEnding + ", " + year);
  return fullDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));