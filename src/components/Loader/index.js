import React from 'react';
import leaf from '../../icons/leaf.svg';
import CircularProgress from '@material-ui/core/CircularProgress';
import './loader.css';

export default function Loader() {
    return (
        <div className='loader-container'>
            <img src={leaf} alt="waterly logo" className="waterly-logo" />
            <h1 className="waterly-logo-text">Waterly</h1>
            <CircularProgress style={{color: "#127E66"}} />
        </div>
    )
}
