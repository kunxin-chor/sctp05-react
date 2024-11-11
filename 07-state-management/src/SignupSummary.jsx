import React from  'react'

export default function SignupSummary(props) {
    return (
        <>
        <h1>Thank you for signing up</h1>
        <p>Here are your details</p>
        <ul>
            <li>Username:{props.userName} </li>
            <li>Email:{props.email} </li>
        </ul>
        </>
    )
}