import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from '../MainPage';
import SignIn from '../SignIn';

const Content = ({firebase, authUser }) => (
    <div>
        {authUser ? <ContentAuth firebase={firebase}/> : <ContentNonAuth />}
    </div>
)

const ContentAuth = ({firebase}) => (
    <Router>
        <MainPage firebase={firebase}/>
    </Router>
);

const ContentNonAuth = () => (
    <SignIn />
);

export default Content;