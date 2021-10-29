const urlDecode = function(text) {
  let output = {};
  
  //Helper function
  function removeSpecialChar(text) {
    let spaceChar = '%20';
    let newText = '';
    for (let i = 0; i < text.length; i++) {
      if (text.slice(i,i+3) === spaceChar) {
        newText += ' ';
        i += 2;
      } else {
        newText += text[i];
      }
    }
    return newText;
  }

  let key = "";
  let value = "";
  let startChar = 0;
  let endChar = text.length;
  let textLeft = text;
  while (textLeft.indexOf('&') > 0) { //If there is &
    endChar = text.indexOf('&');
    key = text.slice(startChar,text.indexOf('='));
    value = removeSpecialChar(text.slice(text.indexOf('=') + 1, endChar));
    output[key] = value;
    textLeft = textLeft.slice(textLeft.indexOf("&") + 1, textLeft.length);
  } //If no more &
  endChar = textLeft.length;
  key = textLeft.slice(startChar,textLeft.indexOf('='));
  value = removeSpecialChar(textLeft.slice(textLeft.indexOf('=') + 1, endChar));
  output[key] = value;
  textLeft = "";

  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);