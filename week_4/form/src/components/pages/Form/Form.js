import React, { useState, useRef } from 'react';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import './form.css';

function useInput(initialValue = '') {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
}

function Form() {
  const [name, handleNameChange] = useInput('');
  const [surname, handleSurnameChange] = useInput('');
  const [textarea, handleTextareaChange] = useInput('');
  const [gender, handleGenderChange] = useInput('');

  const [message, setMessage] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeErrorMessage, setActiveErrorMessage] = useState(null);

  const nameInput = useRef();
  const surnameInput = useRef();
  const textareaInput = useRef();
  const genderInput = useRef();
  const checkboxInput = useRef();

  const validation = () => {
    !name
      ? nameInput.current.classList.add('error')
      : nameInput.current.classList.remove('error');
    !surname
      ? surnameInput.current.classList.add('error')
      : surnameInput.current.classList.remove('error');
    !textarea
      ? textareaInput.current.classList.add('error')
      : textareaInput.current.classList.remove('error');
    !gender
      ? genderInput.current.classList.add('errorLabel')
      : genderInput.current.classList.remove('errorLabel');
    !checkbox
      ? checkboxInput.current.classList.add('errorLabel')
      : checkboxInput.current.classList.remove('errorLabel');
  };

  const clearField = () => {
    nameInput.current.value = '';
    surnameInput.current.value = '';
    textareaInput.current.value = '';
    setCheckbox(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && surname && textarea && gender && checkbox) {
      setIsSubmitting(!isSubmitting);
      setActiveErrorMessage(false);
      setTimeout(() => {
        setMessage(<p>Dziekuje za wiadomosc</p>);
        clearField();
      }, 500);
    } else {
      setIsSubmitting(false);
      setActiveErrorMessage(true);
      setTimeout(() => {
        setMessage(
          <p className='errorLabel'>Prosze wypelnic wszystkie pola</p>
        );
        setActiveErrorMessage(false);
      }, 1000);
    }

    validation();
  };

  const handleCheckbox = (e) => {
    setCheckbox(!checkbox);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <div className='inputWrapper'>
          <input
            className='input'
            type='text'
            placeholder='Name'
            name='name'
            onChange={handleNameChange}
            ref={nameInput}
          />
          {activeErrorMessage ? <ErrorMessage /> : null}
        </div>
        <div className='inputWrapper'>
          <input
            className='input'
            type='text'
            placeholder='Surname'
            name='surname'
            onChange={handleSurnameChange}
            ref={surnameInput}
          />
          {activeErrorMessage ? <ErrorMessage /> : null}
        </div>
        <div>
          <textarea
            type='text'
            placeholder='Bio'
            name='textarea'
            onChange={handleTextareaChange}
            ref={textareaInput}
          />
          {activeErrorMessage ? <ErrorMessage /> : null}
        </div>
        <div ref={genderInput}>
          <input
            type='radio'
            name='gender'
            value='male'
            id='male'
            onChange={handleGenderChange}
          />
          <label htmlFor='male'>Male</label>
          <input
            type='radio'
            name='gender'
            value='female'
            id='female'
            onChange={handleGenderChange}
          />
          <label htmlFor='female'>Female</label>
        </div>
        <div>
          <input
            type='checkbox'
            name='policy'
            id='policy'
            onChange={handleCheckbox}
            checked={checkbox ? true : false}
          />
          <label htmlFor='policy' ref={checkboxInput}>
            Accept policy
          </label>
        </div>
        <button type='submit' className='btn'>
          Send
        </button>
        {message}
      </form>
    </>
  );
}

export default Form;
