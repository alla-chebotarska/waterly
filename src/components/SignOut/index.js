import Link from '@material-ui/core/Link';
import React from 'react';
import { FirebaseContext } from '../FireBase';

export default function SignOut() {
    return (
        <FirebaseContext.Consumer>
            {firebase => <Link onClick={() => firebase.signOutWithGoogle()}>Sign out</Link>}
        </FirebaseContext.Consumer>
    )
}
