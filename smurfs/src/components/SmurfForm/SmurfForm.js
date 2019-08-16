import React from 'react';
import { connect } from 'react-redux';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { postSmurf } from '../../actions';

function SmurfForm({ errors, touched, isSubmitting }) {
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
                        Height:
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
    handleSubmit(values, { props, resetForm, setSubmitting }) {
        props.postSmurf(values, resetForm, setSubmitting);
    }
})(SmurfForm);

export default connect(
    null,
    { postSmurf }
)(FormikSmurfForm);
