const blocksAway = function(directions) {
  let output = {};
  let moveX = 0;
  let moveY = 0;
  let facing = "";
  
  //Helper functions
  function turnLeft(facing) {
    switch (facing) {
      case 'east':
        facing = 'north';
        break;
      case 'west':
        facing = 'south';
        break;
      case 'north':
        facing = 'west';
        break;
      case 'south':
        facing = 'east';
    }
    return facing;
  }
  function turnRight(facing) {
    switch (facing) {
      case 'east':
        facing = 'south';
        break;
      case 'west':
        facing = 'north';
        break
      case 'north':
        facing = 'east';
        break;
      case 'south':
        facing = 'west';
    }
    return facing;
  }

  //Determine initial direction
  if (directions[0] === 'right') {
    facing = 'north';
  } else if (directions[0] === 'left') {
    facing = 'east';
  }
  
  let posX = 0;
  let posY = 0;
  //Calculate final destination
  for (let direction of directions) {
    if (direction === 'right') {
      facing = turnRight(facing);
    } else if (direction === 'left') {
      facing = turnLeft(facing);
    } else if (typeof(direction) === 'number') {
      switch (facing) {
        case 'north':
          moveX = 0;
          moveY = 1;
          break;
        case 'south':
          moveX = 0;
          moveY = -1;
          break;
        case 'east':
          moveX = 1;
          moveY = 0;
          break;
        case 'west':
          moveX = -1;
          moveY = 0;
      }
      posX += moveX * direction;
      posY += moveY * direction;
    }
  }

  //Calculate displacement
  let displacementX = "";
  let displacementY = "";
  if (posX >= 0) {
    displacementX = 'east';
  } else if (posX < 0) {
    displacementX = 'west';
    posX *= -1;
  }
  if (posY >= 0) {
    displacementY = 'north';
  } else if (posY < 0) {
    displacementY = 'south';
    posY *= -1;
  }

  //Output final position as an object
  output[displacementX] = posX;
  output[displacementY] = posY;
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));