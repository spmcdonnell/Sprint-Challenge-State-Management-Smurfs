import axios from 'axios';

export const API_CALL_START = 'API_CALL_START';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

export const POST_START = 'POST_START';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const apiCall = () => {
    return dispatch => {
        dispatch({ type: API_CALL_START });
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({ type: API_CALL_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: API_CALL_FAILURE, payload: err.response });
            });
    };
};

export const postSmurf = (values, resetForm, setSubmitting) => {
    return dispatch => {
        dispatch({ type: POST_START });
        axios
            .post('http://localhost:3333/smurfs', values)
            .then(res => {
                console.log(res.data);
                dispatch({ type: POST_SUCCESS, payload: res.data });
                resetForm();
                setSubmitting(false);
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: POST_FAILURE, payload: err.response });
                resetForm();
                setSubmitting(false);
            });
    };
};
