import { FETCH_FACILITY_REQ, FETCH_FACILITY_SUCCESS, FETCH_FACILITY_FAIL, FETCH_ERROR } from '../constants/action-types';
import { API_URL } from '../constants/urls';

export const fetchFacility = (input) => {
    return (dispatch) => {
        dispatch({type: FETCH_FACILITY_REQ});
        return fetch(`${API_URL}facility/${input}`)
            .then(res => res.json())
            .then(data => dispatch({type: FETCH_FACILITY_SUCCESS, payload: data }))
            .catch(e => {
                dispatch({type: FETCH_FACILITY_FAIL})
                dispatch({type: FETCH_ERROR, payload: {type: FETCH_FACILITY_FAIL, error: e}})
            });
    }
}