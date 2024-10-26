import React from 'react'

// how to import css
// reminder: the ./ means the current directory
import "./style.css";

import logo from './assets/react.svg'

export default function App() {

  // no need for quotes to stoer JSX elements in a variable
  const greeting = <h1>Hello World</h1>

  return (
    <>
      {/* Anything between { } is an Expression */}
      {greeting}
      {/* We must use className instead of class for JSX */}
      <p className="important">This is important!</p>
      <img src={logo}/>
  </>)
};