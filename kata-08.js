const repeatNumbers = function(data) {
  let repeated = "";
  let pair = [];
  for (pair of data) {
    for (let i = 0; i < pair[1]; i++) {
      repeated += String(pair[0]);
    }
    if (pair !== data[data.length - 1]) {
      repeated += ", ";
    }
  }
  return repeated;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));