import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'

const Landing = () => {
    return(
        <div>
            <h1>My site</h1>
            <Link to="/about">About</Link>
        </div>
    );
};

export default Landing;

