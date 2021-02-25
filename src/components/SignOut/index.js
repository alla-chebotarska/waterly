import React from 'react';
import { FirebaseContext } from '../FireBase';

export default function SignOut() {
    return (
            <FirebaseContext.Consumer>
                {firebase => <button onClick={() => firebase.signOutWithGoogle()}>Sign out</button>}
            </FirebaseContext.Consumer>
    )
}
