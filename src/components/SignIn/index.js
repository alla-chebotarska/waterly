import React from 'react'
import { FirebaseContext } from '../FireBase';

export default function SignIn() {
    return (
        <div>
            <p>Logo</p>
            <FirebaseContext.Consumer>
                {firebase => <button onClick={() => firebase.signInWithGoogle()}>Sign in with Google</button>}
            </FirebaseContext.Consumer>
            <br/>
            <button>Sign in with FaceBook</button>
        </div>
    )
}
