const multiplicationTable = function(maxValue) {
  let table = "";
  let num = 1;
  let factor = 1;
  while (factor <= maxValue) {
    table += num * factor;
    while (num < maxValue) {
      num++;
      table += (" " + num * factor);
    }
    if (num === maxValue) {
      table += "\n";
      factor++;
      num = 1;
    }
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));