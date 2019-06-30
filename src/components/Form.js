import React from 'react';
import {Link} from 'react-router-dom';
import './Form.css';

const Form = props => {
  const {handleChange, handleSave, handleCancel, mood} = props;
  return (
    <React.Fragment>
      <small className="form__container--title">Edit</small>
      <div className="section__container">
        <div className="form__container--date">
          <h2 className="form__title">Date</h2>
          <label className="form__label" htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            className="form__input"
            onChange={handleChange}
          />
        </div>
        <div className="form__container--mood">
          <h2 className="form__title">Mood</h2>
          <label className="form__label" htmlFor="mood">
            <input
              type="radio"
              name="mood"
              value=":)"
              className="form__radio happy__input"
              onChange={handleChange}
              checked={mood === ':)' ? true : false}
            />
            {':)'}
          </label>
          <label className="form__label" htmlFor="mood">
            <input
              type="radio"
              name="mood"
              value=":("
              className="form__radio sad__input"
              onChange={handleChange}
              checked={mood === ':(' ? true : false}
            />
            {':('}
          </label>
        </div>
        {mood === ':)'
          ? <div className="form__container--message">
              <h2 className="form__title">Message</h2>
              <label className="form__label" htmlFor="text">Message</label>
              <input
                type="text"
                name="message"
                className="form__input"
                placeholder="Why it whas a good day?"
                onChange={handleChange}
              />
            </div>
          : ''}
        <div className="form__container--button">
          <Link
            to="/"
            className="form__button form__save--button"
            onClick={handleSave}
          >
            Save
          </Link>
          <Link
            to="/"
            className="form__button form__cancel--button"
            onClick={handleCancel}
          >
            Cancel
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
