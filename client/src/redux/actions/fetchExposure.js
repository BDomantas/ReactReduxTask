import { FETCH_EXPOSURE_REQ, FETCH_EXPOSURE_SUCCESS, FETCH_EXPOSURE_FAIL, FETCH_ERROR} from '../constants/action-types';
import { API_URL } from '../constants/urls';

export const fetchExposure = (input) => {
    return (dispatch) => {
        dispatch({type: FETCH_EXPOSURE_REQ});
        return fetch(`${API_URL}exposure/${input}`)
            .then(res => res.json())
            .then(data => dispatch({type: FETCH_EXPOSURE_SUCCESS, payload: data }))
            .catch(e => {
                dispatch({type: FETCH_EXPOSURE_FAIL})
                dispatch({type: FETCH_ERROR, payload: {type: FETCH_EXPOSURE_FAIL, error: e}})
            });
    }
}