import React from 'react';
import {Link} from 'react-router-dom';
import './Calendar.css';

const Calendar = props => {
  let moodList;
  if (props.savedMood.length > 0) {
    moodList = props.savedMood.map ((item, index) => {
      return (
        <li className="mood__item" key={`mood-${index}`}>
          <div
            className={`mood__face ${item.moodSaved === ':)' ? 'happy__face' : 'sad__face'}`}>{item.moodSaved}</div>
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
          <ul className="calendar__list">
            {moodList}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calendar;
