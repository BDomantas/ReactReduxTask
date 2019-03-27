import { FETCH_ERROR } from '../constants/action-types';

const initialState = {
    errors: [],
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_ERROR:
            return {errors: [...state.errors, action.payload]};
        default:
            return state;
    }
}