import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from '../MainPage';
import SignIn from '../SignIn';

const Content = ({ authUser }) => (
    <div>
        {authUser ? <ContentAuth /> : <ContentNonAuth />}
    </div>
)

const ContentAuth = () => (
    <Router>
        <MainPage />
    </Router>
);

const ContentNonAuth = () => (
    <SignIn />
);

export default Content;