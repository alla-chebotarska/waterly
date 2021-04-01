import React from 'react';
import GoogleButton from 'react-google-button';
import { FacebookProvider, LoginButton } from 'react-facebook';
import { FirebaseContext } from '../FireBase';
import leaf from '../../icons/leaf.svg';
import './singIn.css';

export default function SignIn() {
    return (
        <div>
            <div className="waterly-logo-container">
                <img src={leaf} alt="waterly logo" className="waterly-logo" />
            </div>
            <h1 className="waterly-logo-text">Waterly</h1>
            <div className="signin-buttons-container">
                <div className="google-signin">
                    <FirebaseContext.Consumer>
                        {firebase => <GoogleButton onClick={() => firebase.signInWithGoogle()}>Sign in with Google</GoogleButton>}
                    </FirebaseContext.Consumer>
                </div>
                {/* <FacebookProvider appId="123456789">
                    <LoginButton>
                        <span>Login via Facebook</span>
                    </LoginButton>
                </FacebookProvider> */}
            </div>

        </div>
    )
}
