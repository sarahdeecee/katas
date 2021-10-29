const organizeInstructors = function(instructors) {
  let output = {};

  for (let instructor of instructors) {
    if (!output[instructor['course']]) { //Check output for existing course
      output[instructor['course']] = []; //Add course to output object
    }
    output[instructor['course']].push(instructor['name']); //Push name onto existing array
  }

  return output;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));