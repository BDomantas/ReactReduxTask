import { FETCH_PERSON_REQ, FETCH_PERSON_SUCCESS, FETCH_PERSON_FAIL, FETCH_ERROR } from '../constants/action-types';
import { API_URL } from '../constants/urls';

export const fetchPerson = (input) => {
    return (dispatch) => {
        dispatch({type: FETCH_PERSON_REQ});
        return fetch(`${API_URL}person/${input}`)
            .then(res => res.json())
            .then(data => dispatch({type: FETCH_PERSON_SUCCESS, payload: data }))
            .catch(e => {
                dispatch({type: FETCH_PERSON_FAIL});
                dispatch({type: FETCH_ERROR, payload: {type: FETCH_PERSON_FAIL, error: e}});
            });
    }
}