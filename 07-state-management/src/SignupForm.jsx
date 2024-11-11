import React from "react"

// Signup form is a MANAGED component
// because it has no internal state
// and its behvaior is dictated by the parent
export default function SignupForm(props) {

    return (
        <>
            <div>
                <label>Username</label>
                <input type="text"
                    name="userName"
                    value={props.userName}
                    onChange={props.onUpdateField}
                />
            </div>
            <div>
                <label>Email</label>
                <input type="text"
                    name="email"
                    value={props.email}
                    onChange={props.onUpdateField} />
            </div>
            <div>
                <label>Password</label>
                <input type="password"
                    name="password"
                    value={props.password}
                    onChange={props.onUpdateField} />
            </div>
            <button>Register</button>
        </>
    );
}