import React, {useState, useEffect} from 'react'

export default function App() {

  const [count, setCount] = useState(100);

  // a component is being mounted when it ready to
  // be rendered for first time


  // two parameters
  // 1st parameter - a function to call when the effect triggers
  // 2nd parameter - an array of dependencies: when any variable changes, triggers the effect
  useEffect(()=>{
    // set an interval to reduce count by 1 for every second
    const timer = setInterval(()=>{
      console.log(count);
      setCount((prevCount) => prevCount -1);
    }, 1000);

    // the return of an useEffect is what to do clean up the side effect
    return () => clearInterval(timer);

  }, []);   // <-- if the dependency array is EMPTY, it means the effect
            // always once when the component is being mounted



  return (
    <h1>Time Left: {count}</h1>
  )
}