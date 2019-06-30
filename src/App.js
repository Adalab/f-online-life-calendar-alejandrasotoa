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
  const [repeated, setRepeated] = useState (false);

  useEffect (() => {
    const localMood = getLocalStorage ();
    if (localMood !== null) {
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

  const checkRepeat = valueDate => {
    const isRepeated = state.savedMood.findIndex (
      item => item.dateSaved === valueDate
    );
    if (isRepeated !== -1) {
      setRepeated (true);
    } else {
      setRepeated (false);
    }
  };

  const handleChange = event => {
    const key = event.currentTarget.name;
    const value = event.currentTarget.value;
    checkRepeat (value);
    setState (prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const getLocalStorage = () => JSON.parse (localStorage.getItem ('mood'));

  const handleSave = () => {
    if (!repeated) {
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
    }
  };

  const handleCancel = () => {
    setState (prevState => ({
      ...prevState,
      date: '',
      mood: ':)',
      message: '',
    }));
    setRepeated (false);
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
              repeated={repeated}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
