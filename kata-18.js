const squareCode = function(message) {
  //Remove spaces function
  function noSpace(message) {
    let output = "";
    for (char of message) {
      if (char != " ") {
        output += char;
      }
    }
    return output;
  }

  //Remove spaces
  let noSpaceMessage = noSpace(message);

  //count characters
  let charNum = noSpaceMessage.length;

  //Determine width of square
  let charPerLine = Math.ceil(Math.sqrt(charNum));
  
  //Group letters in array
  let line = "";
  let squaredMessage = [];
  let charCount = 0;
  for (char of noSpaceMessage) {
    line += char;
    charCount++;
    if (line.length === charPerLine || charCount === charNum) {
      squaredMessage.push(line);
      line = "";
    }
  }

  //Add grouped letters in array to string
  let output = "";
  let i; //i = number of item in array
  let j; //j = number of character of string
  charCount = 0;
  for (j = 0; j < charPerLine && charCount != charNum; j++) {
    for (i = 0; i < squaredMessage.length; i++) {
      line += squaredMessage[i].charAt(j);
      charCount++;
      if (i === squaredMessage.length - 1) {
        line += " ";
      }
    }
  }
  output = line;
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));