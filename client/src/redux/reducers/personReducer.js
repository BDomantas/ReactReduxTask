import { FETCH_PERSON_REQ, FETCH_PERSON_SUCCESS, FETCH_PERSON_FAIL } from '../constants/action-types';

const initialState = {
    loading: false,
    val1: null,
    val2: null
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_PERSON_REQ:
            return {...state, loading: true};
        case FETCH_PERSON_FAIL:
            return {error: true, loading: false}
        case FETCH_PERSON_SUCCESS:
            return {...action.payload, loading: false}
        default:
            return state;
    }
}