import React from 'react';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <Button onClick={() => alert("You clicked Hi there")}>Hi there</Button>
        </div>
    )
}

export default Home;