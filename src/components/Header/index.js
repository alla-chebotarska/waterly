import React from 'react'
import Navigation from '../Navigation'
import SignOut from '../SignOut'

export default function Header() {
    return (
        <div>
            <h2>HEADER</h2>
            <SignOut />
            <Navigation/>
            <hr/>
        </div>
    )
}
