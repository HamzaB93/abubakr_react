import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import Navigation from '../components/navigation/navigation';

import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
