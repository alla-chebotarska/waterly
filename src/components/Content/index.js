import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { FirebaseContext } from '../FireBase';
import SignIn from '../SignIn';
import Landing from '../Landing/index';

const Content = ({ authUser }) => (
    <div>{authUser ? <ContentAuth /> : <ContentNonAuth />}</div>
)

const ContentAuth = () => (
    <Landing />
);

const ContentNonAuth = () => (
    <SignIn />
);

export default Content;