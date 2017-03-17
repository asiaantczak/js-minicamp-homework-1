//Do not change any of the function names

function multiplyByTen(num) {
  return num * 10;
}

function subtractFive(num) {
  return num - 5;
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  }
  return false;
}

function areEqual(x, y) {
  if ( x === y) {
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  if (num < 90) {
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  if (num > 50) {
    return true;
  }
  return false;
}

function add(x, y) {
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  var sub = x - y;
  return sub;
}

function divide(x, y) {
  var div = x / y;
  return div;
}

function multiply(x, y) {
  var multi = x * y;
  return multi;
}

function getRemainder(x, y) {
  var reminder = x % y;
  return reminder;
}

function isEven(num) {
  if ( num % 2 === 0) {
    return true;
  }
  return false;
}

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

function square(num) {
  var square = Math.pow(num,2);
  return square;
}

function cube(num) {
  var cube = Math.pow(num, 3);
  return cube;
}

function raiseToPower(num, exponent) {
  var power = Math.pow(num, exponent);
  return power;
}

function roundNumber(num) {
  var round= Math.round(num);
  return round;
}

function roundUp(num) {
  var roundUp= Math.ceil(num);
  return roundUp;
}

function addExclamationPoint(str) {
  var newStr= str + '!';
  return newStr;
}

function combineNames(firstName, lastName) {
  var fullName= firstName + ' ' + lastName;
  return fullName;
}

function getGreeting(name) {
  var greetings = 'Hello' + ' ' + name + '!';
  return greetings;
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  var recArea = length * width;
  return recArea;
}

function getTriangleArea(base, height) {
  var triArea = (height * base) / 2;
  return triArea;
}

function getCircleArea(radius) {
  return Math.round(Math.PI * Math.pow(radius, 2));
  }

function getRectangularPrismVolume(length, width, height) {
  var prisVol = length * width * height;
  return prisVol;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
