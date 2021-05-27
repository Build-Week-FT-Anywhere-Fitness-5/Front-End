import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_CLASS = "ADD_CLASS";

export const fetchClasses = () => {
    return (dispatch => {
        dispatch({ type: FETCH_START });

        dispatch(fetchStart());
        axios.get("https://anywherefitnessclasses.herokuapp.com/api/classes")
            .then(res => {
                dispatch({ type: FETCH_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_FAIL, payload: err })
            })
    });
};

export const fetchStart = () => {
    return ({ type: FETCH_START });
};

export const FetchSuccess = (classes) => {
    return({ type: FETCH_SUCCESS, payload: classes });
};

export const fetchFail = (error) => {
    return({ type: FETCH_FAIL, payload: error });
};

export const addClass = (newClass) => {
    return ({ type: ADD_CLASS, payload: newClass })
};