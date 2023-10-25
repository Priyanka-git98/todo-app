import React from 'react';
import { Form, Field } from 'react-final-form';


// define an onSubmit function that will be called when the form is submitted.
const onSubmit = (values) => {
  // Handle form submission here (e.g., send data to a server)
  console.log('Form values:', values);
};

// define a validate function to specify validation rules for the form fields. It returns an object with validation errors for each field.
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  return errors;
};


// Inside the MyForm component, we use the Form component to create the form. It takes an onSubmit prop for handling form submission and a validate prop for validation.
const MyForm = () => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}

    //   Within the Form component, we use the render prop to render the form fields and manage their state. The handleSubmit function is provided to handle form submission.
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div>

          {/* define two form fields (First Name and Last Name) using the Field component. We specify the name of each field, the component to use (an HTML input element in this case), and a placeholder text. */}
            <label>First Name</label>
            <Field name="firstName" component="input" type="text" placeholder="First Name" />
          </div>
          <div>
            <label>Last Name</label>
            <Field name="lastName" component="input" type="text" placeholder="Last Name" />
          </div>
          <div>
          {/* The "Submit" button is disabled when the form is submitting or when it's in its pristine state (no changes). */}
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default MyForm;
