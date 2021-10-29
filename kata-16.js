const makeCase = function(input, cases) {
  //Helper functions
  function camelCase (input) {
    let output = '';
    for (let i = 0; i < input.length; i++)
      if (input[i] === ' ') {
        i++;
        output += input[i].toUpperCase();
      } else {
        output += input[i];
      }
    return output;
  }
  
  function pascalCase (input) {
    let output = input[0].toUpperCase();
    output += camelCase(input.slice(1,input.length));
    return output;
  }

  function snakeCase (input) {
    let output = '';
    for (let i = 0; i < input.length; i++)
      if (input[i] === ' ') {
        output += '_'
      } else {
        output += input[i];
      }
    return output;
  }

  function kebabCase (input) {
    let output = '';
    for (let i = 0; i < input.length; i++)
      if (input[i] === ' ') {
        output += '-'
      } else {
        output += input[i];
      }
    return output;
  }

  function titleCase (input) {
    let output = input[0].toUpperCase();
    for (let i = 1; i < input.length; i++)
      if (input[i-1] === ' ') {
        output += input[i].toUpperCase();
      } else {
        output += input[i];
      }
    return output;
  }

  function vowelCase (input) {
    let output = "";
    vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < input.length; i++)
      if (vowels.includes(input[i])) {
        output += input[i].toUpperCase();
      } else {
        output += input[i];
      }
    return output;
  }

  function consonantCase (input) {
    let output = "";
    vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < input.length; i++)
      if (!vowels.includes(input[i])) {
        output += input[i].toUpperCase();
      } else {
        output += input[i];
      }
    return output;
  }

  function upperCase (input) {
    let output = input.toUpperCase();
    return output;
  }

  function lowerCase (input) {
    let output = input.toLowerCase();
    return output;
  }

  //Start of function
  let output = input;
  let casesTotal = "";
  for (i = 0; i < cases.length; i++) {
    if (!Array.isArray(cases)) { //If not an array
      casesTotal = cases;
    } else { //If an array
      casesTotal = cases[i];
    }
    switch (casesTotal) {
      case 'camel':
        output = camelCase(output);
        break;
      case 'pascal':
        output = pascalCase(output);
        break;
      case 'snake':
        output = snakeCase(output);
        break;
      case 'kebab':
        output = kebabCase(output);
        break;
      case 'title':
        output = titleCase(output);
        break;
      case 'vowel':
        output = vowelCase(output);
        break;
      case 'consonant':
        output = consonantCase(output);
        break;
      case 'upper':
        output = upperCase(output);
        break;
      case 'lower':
        output = lowerCase(output);
        break;
      default:
        output = output;
    }
    if (!Array.isArray(cases)) { //Exit loop if not an array
      i = cases.length;
    }
  }
  return output;  
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));