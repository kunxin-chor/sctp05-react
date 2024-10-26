// function addTwo(a, b) {
//     return a + b;
// }

// 1. remove the function and put arrow between
// the parameter list and the { }
const addTwo = (a, b) => {
    return a + b
}

// 2. if the arrow function is exactly one line
// you can remove the curly braces
// AND at the same time if there is a return
// you HAVE to omit the return
const addTwoV2 = (a, b) =>  a + b;

// 3. if the arrow function only have one parameter
// you can omit the () around the parameters
function calcAreaOfCircle(r) {
    return 22/7 * r ** 2;
}

// (r) => {
//     return 22/7 * r ** 2;
// }

// (r) => 22/7 * r ** 2;

const circleArea = r => 22/7 * r ** 2;
circleArea(100);