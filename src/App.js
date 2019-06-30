import React, {useEffect, useState} from 'react';
import Form from './components/Form';
import Calendar from './components/Calendar';
import {Route, Switch} from 'react-router-dom';
import './App.css';

const App = () => {
  const [state, setState] = useState ({
    savedMood: [],
    date: '',
    mood: ':)',
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

  const getLocalStorage = () => JSON.parse (localStorage.getItem ('mood'));

  useEffect (() => {
    const localMood = getLocalStorage ();
    if (localMood !== undefined) {
      setState (prevState => ({
        ...prevState,
        savedMood: localMood,
      }));
    }
  }, []);

  useEffect (
    () => {
      if (state.savedMood !== null) {
        localStorage.setItem ('mood', JSON.stringify (state.savedMood));
      }
    },
    [state.savedMood]
  );

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
      mood: ':)',
      message: '',
    }));
  };

  const handleCancel = () => {
    setState (prevState => ({
      ...prevState,
      date: '',
      mood: ':)',
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
            <Form
              handleChange={handleChange}
              handleSave={handleSave}
              handleCancel={handleCancel}
              mood={state.mood}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
