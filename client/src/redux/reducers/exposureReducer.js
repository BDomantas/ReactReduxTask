import { FETCH_EXPOSURE_SUCCESS, FETCH_EXPOSURE_REQ, FETCH_EXPOSURE_FAIL } from '../constants/action-types';

const initialState = {
    loading: false,
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_EXPOSURE_REQ:
            return {...state, loading: true};
        case FETCH_EXPOSURE_FAIL:
            return {...initialState, error: true}
        case FETCH_EXPOSURE_SUCCESS:
            return {...action.payload, loading: false}
        default:
            return state;
    }
}