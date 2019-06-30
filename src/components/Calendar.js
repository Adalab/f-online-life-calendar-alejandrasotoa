import React from 'react';
import {Link} from 'react-router-dom';
import './Calendar.css';

const Calendar = props => {
  let moodList;
  if ( props.savedMood.length > 0) {
    moodList = props.savedMood
      .sort ((a, b) => {
        return new Date (a.dateSaved) - new Date (b.dateSaved);
      })
      .map ((item, index) => {
        return (
          <li
            className="mood__item"
            key={`mood-${index}`}
            title={`Date: ${item.dateSaved} ${item.messageSaved}`}
          >
            <div
              className={`mood__face ${item.moodSaved === ':)' ? 'happy__face' : 'sad__face'}`}
            >
              {item.moodSaved}
            </div>
          </li>
        );
      });
  }
  return (
    <React.Fragment>
      <small className="form__container--title">Calendar</small>
      <div className="section__container">
        <div className="calendar__button--container">
          <Link className="calendar__button" to="/edit">+</Link>
        </div>
        <div className="calendar__list--container">
          {moodList 
            ? <ul className="calendar__list">
                {moodList}
              </ul>
            : <p className="calendar__no-faces">{`Add a mood to start :)!`}</p>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calendar;
