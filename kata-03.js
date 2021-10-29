const numberOfVowels = function(data) {
  let vowels = ['a','e','i','o','u'];
  let sum = 0;
  for (let char of data) {
    for (let vowel of vowels) {
      if (char === vowel){
        sum++;
      }
    }    
  }
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));