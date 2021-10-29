const sumLargestNumbers = function(data) {
  let largest = 0;
  let secondLargest = 0;
  if (data[1] > data[0]) {
    largest = data[1];
    secondLargest = data[0];
  } else {
    largest = data[0];
    secondLargest = data[1];
  }
  for (let i = 2; i < data.length; i++) {
    if (data[i] > largest && data[i] > secondLargest) {
      secondLargest = largest;
      largest = data[i];
    } else if (data[i] < largest && data[i] > secondLargest) {
      secondLargest = data[i];
    }
  }  
  let sum = largest + secondLargest;
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));