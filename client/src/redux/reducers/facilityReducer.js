import { FETCH_FACILITY_SUCCESS, FETCH_FACILITY_REQ, FETCH_FACILITY_FAIL } from '../constants/action-types';

const initialState = {
    loading: false,
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_FACILITY_REQ:
            return {...state, loading: true};
        case FETCH_FACILITY_FAIL:
            return {...initialState, error: true}
        case FETCH_FACILITY_SUCCESS:
            return {...action.payload, loading: false}
        default:
            return state;
    }
}