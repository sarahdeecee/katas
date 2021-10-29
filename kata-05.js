const urlEncode = function(text) {
  let spaceChar = '%20';
  let newText = '';
  for (let char of text) {
    if (char === ' ') {
      newText += spaceChar;
    } else {
      newText += char;
    }
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));