const squareCode = function(message) {
  let noSpaces = message.replace(/\s+/g,'');
  let width = Math.ceil(Math.sqrt(noSpaces.length));
  let line = [];
  let output = "";
  
  for (let i = 0; i < noSpaces.length; i += width) {
    line.push(noSpaces.slice(i, i + width));
  }
  for (let i = 0; i <= line.length; i++) {
    for (let lineChar of line) {
      (lineChar[i]) ? output += lineChar[i] : null;
    }
    (i !== line.length) ? output += ' ' : null;
  }
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

/*
clu hlt io
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/