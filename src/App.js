import React, {useEffect, useState} from 'react';
import Form from './components/Form';
import Calendar from './components/Calendar';
import {Route, Switch} from 'react-router-dom';
import './App.css';

const App = () => {
  const [state, setState] = useState ({
    savedMood: [],
    date: '',
    mood: '',
    message: '',
  });

  const handleChange = event => {
    const key = event.currentTarget.name;
    const value = event.currentTarget.value;
    setState (prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  // useEffect (() => {
  //   const getLocal = JSON.parse (localStorage.getItem ('mood'));
  //   if (state.savedMood.length > 0) {
  //     localStorage.setItem ('mood', JSON.stringify (state.savedMood));
  //   } else if (state.savedMood.length === 0 && getLocal !== null) {
  //     setState ({
  //       moodSaved: [...getLocal],
  //       date: '',
  //       mood: '',
  //       message: '',
  //     });
  //   }
  // });

  const handleSave = () => {
    setState (prevState => ({
      savedMood: [
        ...prevState.savedMood,
        {
          dateSaved: prevState.date,
          moodSaved: prevState.mood,
          messageSaved: prevState.message,
        },
      ],
      date: '',
      mood: '',
      message: '',
    }));
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Calendar savedMood={state.savedMood} />}
        />
        <Route
          path="/edit"
          render={() => (
            <Form handleChange={handleChange} handleSave={handleSave} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
