const camelCase = function(input) {
  let output = '';
  for (let i = 0; i < input.length; i++)
    if (input[i] === ' ') {
      i++;
      output += input[i].toUpperCase();
    } else {
      output += input[i];
    }
  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));