import React, { useState } from 'react'
// useState is a react HOOK. A hook is a way to
// add new functionalty to a React componnet

const App = () => {

  // create a state in React
  // a state is to remember if something event has happened
  // or to represent the current status of the component
  // rule of thumb: as long as it is something that affects
  // how the component is displayed, it should be a state
  const [textColor, setTextColor] = useState("red");
  // useState("red") -> return an array with 2 elements
  //                1st element -> the current value of the state variable
  //                2nd element -> a function to change the value of the state variable
  // the first parameter to useState is the default value
  const [clickCount, setClickCount] = useState(0);

  // function handleClick() {
  //   alert("hello world!")
  // }
  // React prefers to use Arrow Functions when possible
  // 1. All arrow functions are anoymous functions
  // ...it possible to assign it to a variable
  // 2. There is an arrow between the parameters and the braces
  // const handleClick = () => {
  //   alert("Hello World!")
  // }

  // 3. if you arrow function is only one line, you don't need the { }
  const handleClick = () => {
    if (textColor === "red") {
      // color = "blue" ==> WON'T WORK!
      setTextColor("blue"); // setTextColor is second index of the array returned by useSatte
    } else {
      setTextColor("red");
    }
    setClickCount(clickCount + 1);
  }

  // 4. if your arrow function is only one and is returning something
  // you can omit the return

  return (
    <>
      {/* The onClick must point to the NAME of a function or ANYTHING that is a function */}
      <button onClick={handleClick}>Change Color</button>
      <div style={{
        "color": textColor
      }}>She sells seashell at the seashore</div>
      <div>You have clicked the button {clickCount} times</div>
    </>
  )
}

export default App
