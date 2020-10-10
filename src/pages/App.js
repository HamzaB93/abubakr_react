import React from 'react';
import Button from 'react-bootstrap/Button';
import Navigation from '../components/navigation/navigation';

import './App.scss';

function App() {
  return (
      <div>

        <Navigation/>

        <h1>Abubakr Mosque</h1>
        <Button onClick={() => alert("You clicked Hi there")}>Hi there</Button>
      </div>
  );
}

export default App;
