import React from 'react'
import { FirebaseContext } from '../FireBase';

export default function SignIn() {
    return (
        <div>
            <p>Please SignIn</p>
            <FirebaseContext.Consumer>
                {firebase => <button onClick={() => firebase.signInWithGoogle()}>Sign in with Google</button>}
            </FirebaseContext.Consumer>
        </div>
    )
}
