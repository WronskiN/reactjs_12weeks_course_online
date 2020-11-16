import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { InputWrapper } from '../../../components/Input';

class FormFormik extends Component {
  state = {
    name: '',
    surname: '',
    textarea: '',
    gender: '',
    isValid: false,
    checked: null,
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
    // gender: Yup.string().oneOf(['male', 'female'], 'Choose gender'),
    checked: Yup.boolean().oneOf([true], 'Must accept terms'),
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
            checked: false,
            isSubmiting: true,
          }}
          validationSchema={this.validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            handleChange,
            errors,
            touched,
            isSubmitting,
            handleBlur,
            handleReset,
            handleSubmit,
          }) => (
            <Form className="form" onSubmit={handleSubmit} noValidate>
              <InputWrapper>
                <Field
                  className="input"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  values={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </InputWrapper>
              {errors.name && touched.name ? (
                <ErrorMessage
                  name="name"
                  component="div"
                  className="errorLabel"
                />
              ) : null}

              <InputWrapper>
                <Field
                  className="input"
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  values={values.surname}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </InputWrapper>
              {errors.surname && touched.surname ? (
                <ErrorMessage
                  name="surname"
                  component="div"
                  className="errorLabel"
                />
              ) : null}

              <InputWrapper>
                <Field
                  className="textarea"
                  type="textarea"
                  name="textarea"
                  placeholder="Message field"
                  values={values.textarea}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </InputWrapper>
              {errors.textarea && touched.textarea ? (
                <ErrorMessage
                  name="textarea"
                  component="div"
                  className="errorLabel"
                />
              ) : null}

              <InputWrapper role="group">
                <Field
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  values={values.gender}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <label htmlFor="male">Male</label>
                <Field
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  values={values.gender}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <label htmlFor="female">Female</label>
              </InputWrapper>
              <ErrorMessage
                name="gender"
                component="div"
                className="errorLabel"
              />
              <InputWrapper>
                <Field
                  type="checkbox"
                  name="checkbox"
                  values={values.checkbox}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </InputWrapper>
              <label htmlFor="checkbox">Accept policy</label>
              <button type="submit">Send</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default FormFormik;
