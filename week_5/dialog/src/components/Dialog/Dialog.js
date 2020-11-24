import React from 'react';
import { Article } from './';
import Button, { ButtonWrapper } from '../Button';
import './style.css';

const articleText =
  'Ty zapomnisz a ja Wciąż będę stał I patrzył w odległy raj, Wsłucham się w jego głos Otworzę umysł przywołam ten w którym Odeszłaś dzień';

function Dialog({ handleClick }) {
  return (
    <div className='dialog__container'>
      <Button text='x' btnClass='dialog__button' handleClick={handleClick} />
      <Article text={articleText} />
      <ButtonWrapper>
        <Button text='Confirm' />
        <Button text='Abort' />
      </ButtonWrapper>
    </div>
  );
}

export default Dialog;
