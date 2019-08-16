import axios from 'axios';

export const API_CALL_START = 'API_CALL_START';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

export const apiCall = () => {
    return dispatch => {
        dispatch({ type: API_CALL_START });
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res.data);
                dispatch({ type: API_CALL_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: API_CALL_FAILURE, payload: err.response });
            });
    };
};
