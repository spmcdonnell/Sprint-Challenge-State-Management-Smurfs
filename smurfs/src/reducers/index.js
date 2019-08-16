import { API_CALL_START, API_CALL_SUCCESS, API_CALL_FAILURE } from '../actions';

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case API_CALL_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case API_CALL_SUCCESS:
            return {
                smurfs: action.payload,
                isLoading: false,
                error: ''
            };
        case API_CALL_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;
