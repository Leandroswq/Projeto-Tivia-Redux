import { Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Ranking from './pages/Ranking';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/game" component={ Game } />
          <Route path="/settings" component={ Settings } />
          <Route path="/ranking" component={ Ranking } />
          <Route path="/feedback" component={ Feedback } />
        </Switch>
      </header>
    </div>
  );
}
