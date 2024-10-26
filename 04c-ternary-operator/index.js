let password = "rotiprata123";
let userEnteredPassword = "applepie456";


// When the case for your if/else is only one statement then can use ternary operator
if (userEnteredPassword == password) {
    console.log("Your password is correct")
} else {
    console.log("Your password is wrong")
}

// <condition> ? <what to return if true> : what to return if false>
// userEnteredPassword == password ? console.log("Your password is correct") : console.log("Your password is wrong");
console.log( userEnteredPassword == password ? "Your password is correct" : "Your password is wrong");


function whichOneIsBigger(x, y) {
    // return the number that is bigger
    // if ( x > y) {
    //     return x;
    // } else {
    //     return y;
    // }
    return x > y ? x : y;
}