import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function SmurfForm({ values, errors, touched, isSubmitting }) {
    return (
        <div className="login-form">
            <Form>
                <div>
                    <label>
                        Name:
                        <Field name="name" type="text" placeholder="Name" />
                        {touched.name && errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                    </label>
                    <label>
                        Age:
                        <Field name="age" type="number" placeholder="Age" />
                        {touched.age && errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
                    </label>
                    <label>
                        Name:
                        <Field name="height" type="text" placeholder="Height" />
                        {touched.height && errors.height && <span style={{ color: 'red' }}>{errors.height}</span>}
                    </label>
                </div>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        </div>
    );
}

const FormikSmurfForm = withFormik({
    mapPropsToValues({ name, age, height }) {
        return {
            name: name || '',
            age: age || '',
            height: height || ''
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        age: Yup.number().required('Age is required'),
        height: Yup.string().required('Height is required')
    }),
    handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
        axios
            .post('http://localhost:3333/smurfs', values)
            .then(res => {
                console.log(res); // Data was created successfully and logs to console
                resetForm();
                setSubmitting(false);
            })
            .catch(err => {
                console.log(err); // There was an error creating the data and logs to console
                setSubmitting(false);
            });
    }
})(SmurfForm);

export default FormikSmurfForm;
