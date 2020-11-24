import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ErrorText from '../../ErrorText/ErrorText.js';
import * as Yup from 'yup';
import { InputWrapper } from '../../../components/Input';

class FormFormik extends Component {
  state = {
    name: '',
    surname: '',
    textarea: '',
    gender: '',
    isValid: false,
    checked: false,
  };

  handleChange = (values) => {
    this.setState({
      name: values.name,
      surname: values.surname,
      textarea: values.textarea,
      gender: values.gender,
      checked: values.checked,
    });
  };

  validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, 'Input Name')
      .max(15, 'Name should be less than 15 characters')
      .required('Name is required'),

    surname: Yup.string()
      .min(1, 'Input Surname')
      .max(15, 'Surnname should be less than 15 characters')
      .required('Surname is required'),

    textarea: Yup.string()
      .min(10, 'Message shoud be between 10 and 200 characters')
      .max(200, 'Message shoud be between 10 and 200 characters')
      .required('Message is required'),
    gender: Yup.string().oneOf(['male', 'female'], 'Choose gender'),
    checked: Yup.bool().oneOf([true], 'Must accept terms'),
  });

  render() {
    return (
      <div>
        <h2>Formik form</h2>
        <Formik
          initialValues={{
            name: '',
            surname: '',
            textarea: '',
            gender: '',
            isValid: false,
            checked: false,
            isSubmiting: true,
          }}
          validationSchema={this.validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(true);

            setSubmitting(false);
          }}
        >
          {({
            values,
            handleReset,
            errors,
            touched,
            isSubmitting,
            isValid,
          }) => (
            <Form className='form'>
              <InputWrapper>
                <Field
                  className='input'
                  id='name'
                  type='text'
                  name='name'
                  placeholder='Name'
                />
              </InputWrapper>
              {errors.name && touched.name ? (
                <ErrorMessage
                  name='name'
                  component='div'
                  className='errorLabel error'
                />
              ) : null}

              <InputWrapper>
                <Field
                  className='input'
                  type='text'
                  name='surname'
                  placeholder='Surname'
                />
              </InputWrapper>
              {errors.surname && touched.surname ? (
                <ErrorMessage
                  name='surname'
                  component='div'
                  className='errorLabel'
                />
              ) : null}

              <InputWrapper>
                <Field
                  className='textarea'
                  type='textarea'
                  name='textarea'
                  placeholder='Message field'
                />
              </InputWrapper>
              {errors.textarea && touched.textarea ? (
                <ErrorMessage
                  name='textarea'
                  component='div'
                  className='errorLabel'
                />
              ) : null}

              <InputWrapper role='group'>
                <Field type='radio' name='gender' value='male' />
                <label htmlFor='male'>Male</label>
                <Field type='radio' name='gender' value='female' />
                <label htmlFor='female'>Female</label>
              </InputWrapper>
              <ErrorMessage
                name='gender'
                component='div'
                className='errorLabel'
              />
              <InputWrapper>
                <Field
                  type='checkbox'
                  name='checked'
                  checked={values.checked}
                />
              </InputWrapper>
              <label htmlFor='checkbox'>Accept policy</label>
              <button type='submit' onClick={handleReset}>
                Send
              </button>
              {!isValid ? <ErrorText /> : null}
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default FormFormik;
