import React, { Component } from 'react';
import './form.css';
import { InputWrapper, Input, InputRadio, Label } from '../../Input';

export class FormClass extends Component {
  state = {
    name: '',
    nameErr: false,
    surname: '',
    surnameErr: false,
    textarea: '',
    textareaErr: false,
    gender: '',
    fieldMessage: 'Please complete field',
    message: '',
    checkbox: false,
    isSubmitted: null,
  };

  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.textareaInput = React.createRef();
    this.genderInput = React.createRef();
    this.checkboxInput = React.createRef();
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
      message: '',
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, textarea, gender, checkbox } = this.state;

    name && surname && textarea && gender && checkbox
      ? this.setState({
          name: '',
          surname: '',
          textarea: '',
          gender: '',
          message: 'Thank you for sending message',
          isSubmitted: true,
        })
      : this.setState({
          message: 'Please complete fields',
          isSubmitted: false,
          fieldMessage: 'Please complete field',
        });

    if (name.length > 0) {
      this.setState({
        nameErr: false,
      });
    } else {
      this.setState({
        nameErr: true,
      });
    }

    if (surname.length > 0) {
      this.setState({
        surnameErr: false,
      });
    } else {
      this.setState({
        surnameErr: true,
      });
    }

    if (textarea.length > 0) {
      this.setState({
        textareaErr: false,
      });
    } else {
      this.setState({
        textareaErr: true,
      });
    }

    !name
      ? this.nameInput.current.classList.add('error')
      : this.nameInput.current.classList.remove('error');
    !surname
      ? this.surnameInput.current.classList.add('error')
      : this.surnameInput.current.classList.remove('error');
    !textarea
      ? this.textareaInput.current.classList.add('error')
      : this.textareaInput.current.classList.remove('error');
    !gender
      ? this.genderInput.current.classList.add('errorLabel')
      : this.genderInput.current.classList.remove('errorLabel');
    !checkbox
      ? this.checkboxInput.current.classList.add('errorLabel')
      : this.checkboxInput.current.classList.remove('errorLabel');

    setTimeout(() => {
      this.setState({ message: '' });
    }, 2000);
  };

  render() {
    const {
      name,
      surname,
      checkbox,
      message,
      fieldMessage,
      nameErr,
      surnameErr,
      textareaErr,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form'>
          <InputWrapper ref={this.nameInput}>
            <Input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
          </InputWrapper>
          {nameErr && <Label htmlFor='name'>{fieldMessage}</Label>}
          <InputWrapper ref={this.surnameInput}>
            <Input
              type='text'
              placeholder='Surname'
              name='surname'
              value={surname}
              onChange={this.handleChange}
            />
          </InputWrapper>
          {surnameErr && <Label htmlFor='name'>{fieldMessage}</Label>}
          <InputWrapper ref={this.textareaInput}>
            <textarea
              type='text'
              placeholder='Bio'
              name='textarea'
              value={this.state.textarea}
              onChange={this.handleChange}
              ref={this.textareaInput}
            />
          </InputWrapper>
          {textareaErr && <Label htmlFor='name'>{fieldMessage}</Label>}
          <InputWrapper ref={this.genderInput}>
            <InputRadio
              type='radio'
              name='gender'
              value='male'
              id='male'
              onChange={this.handleChange}
            />
            <Label htmlFor='male'>Male</Label>
            <InputRadio
              type='radio'
              name='gender'
              value='female'
              id='female'
              onChange={this.handleChange}
            />
            <Label htmlFor='female'>Female</Label>
          </InputWrapper>
          <InputWrapper ref={this.checkboxInput}>
            <Input
              type='checkbox'
              id='terms'
              name='terms'
              value={checkbox}
              onChange={() => {
                this.setState({ checkbox: !checkbox });
              }}
              checked={checkbox}
            />
            <Label htmlFor='terms'>Accept policy</Label>
          </InputWrapper>
          <button type='submit' className='btn'>
            Send
          </button>
          <p>{message}</p>
        </form>
      </div>
    );
  }
}

export default FormClass;
