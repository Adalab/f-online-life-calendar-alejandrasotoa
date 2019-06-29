import React from 'react';
import {Link} from 'react-router-dom';
import './Calendar.css';

const Calendar = props => {
  console.log(props);
  return (
    <React.Fragment>
      <small className="form__container--title">Calendar</small>
      <div className="section__container">
        <div className="calendar__button--container">
          <Link className="calendar__button" to="/edit">+</Link>
        </div>
        <div className="calendar__list--container">
            <ul className="calendar__list">
            </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calendar;
