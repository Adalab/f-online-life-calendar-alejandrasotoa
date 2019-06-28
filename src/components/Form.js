import React from 'react';
import './Form.css';

const Form = props => {
  return (
    <React.Fragment>
      <small className="form__container--title">Edit</small>
      <div className="form__container">
        <div className="form__container--date">
          <h2 className="form__title">Date</h2>
          <label className="form__label" htmlFor="date">Date</label>
          <input type="date" name="date" className="form__input" />
        </div>
        <div className="form__container--mood">
          <h2 className="form__title">Mood</h2>
          <label className="form__label" htmlFor="mood">
            <input
              type="radio"
              name="mood"
              value="happy"
              className="form__radio happy__input"
            />{':)'}
          </label>
          <label className="form__label" htmlFor="mood">
            <input
              type="radio"
              name="mood"
              value="sad"
              className="form__radio sad__input"
            />{':('}
          </label>
        </div>
        <div className="form__container--message">
          <h2 className="form__title">Message</h2>
          <label className="form__label" htmlFor="text">Message</label>
          <input
            type="text"
            name="message"
            className="form__input"
            placeholder="¿Why it whas a good/bad day?"
          />

        </div>
        <div className="form__container--button">
          <button className="form__button form__save--button">Save</button>
          <button className="form__button form__cancel--button">Cancel</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
