const conditionalSum = function(values, condition) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let value of values) {
    if (value % 2 === 0) {
      sumEven += value;
    } else {
      sumOdd += value;
    }
  }
  if (condition === 'even') {
    return sumEven;
  } else if (condition === 'odd') {
    return sumOdd;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));