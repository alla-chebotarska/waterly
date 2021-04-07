import React from 'react';
import GoogleButton from 'react-google-button';
import { FirebaseContext } from '../FireBase';
import GuestSignIn from '../GuestSignIn';
import leaf from '../../icons/leaf.svg';
import './singIn.css';

export default function SignIn(props) {
    return (
        <div>
            <div className="singIn-container">
                <img src={leaf} alt="waterly logo" className="waterly-logo" />
                <h1 className="waterly-logo-text">Waterly</h1>
                <div className="signin-buttons-container">
                    <div className="google-signin">
                        <FirebaseContext.Consumer>
                            {firebase => <GoogleButton onClick={() => firebase.signInWithGoogle()}>Sign in with Google</GoogleButton>}
                        </FirebaseContext.Consumer>
                    </div>
                    <div>
                        <FirebaseContext.Consumer>
                            {firebase => <GuestSignIn onClick={() => props.alertDialogClick()} firebase={firebase}/>}
                        </FirebaseContext.Consumer>
                    </div>
                </div>
            </div>

        </div>
    )
}
