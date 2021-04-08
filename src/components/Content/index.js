import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Loader from '../Loader';
import MainPage from '../MainPage';
import SignIn from '../SignIn';

const Content = ({firebase, authUser }) => (
    <div>
        {authUser === "not_assigned" ? <Loader/> : authUser ? <ContentAuth firebase={firebase}/> : <ContentNonAuth />}
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