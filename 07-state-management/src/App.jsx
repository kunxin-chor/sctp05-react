import React, { useState } from "react";
import SignupForm from "./SignupForm";
import SignupSummary from "./SignupSummary"

export default function App() {

  // useState returns two parameters
  // 1. the current value of the state
  // 2. a setter (i.e mutator) for the state
  // No other components can access those states
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (<>
    <h1>Sign Up Form</h1>
    <SignupForm userName={userName}
      email={email}
      password={password}
      onUpdateField={(e) => {
        if (e.target.name === "userName") {
          setUserName(e.target.value)
        }
        if (e.target.name === "email") {
          setEmail(e.target.value)
        }
        if (e.target.name === "password") {
          setPassword(e.target.value)
        }


      }}

    />
    <SignupSummary userName={userName}
                   email={email} 
                   password={password} />
  </>)
}