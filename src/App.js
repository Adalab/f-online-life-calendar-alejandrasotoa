import React from 'react';
import Form from './components/Form';
import Calendar from './components/Calendar';
import {Route, Switch} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/" component={Calendar} />
      </Switch>
    </div>
  );
};

export default App;
