import React from 'react';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <Button onClick={() => alert("You clicked Hi there")}>Hi there</Button>
        </div>
    )
}

export default About;