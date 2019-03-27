import { fetchExposure } from './fetchExposure';
import { fetchFacility } from './fetchFacility';
import { fetchPerson } from './fetchPerson';

import { FETCH_ERROR } from '../constants/action-types';

export * from './fetchPerson';
export * from './fetchFacility';
export * from './fetchExposure';


export const chainedOperation = (input) => {
    return (dispatch, getState) => {
        dispatch({type: "CHAIN_REQ"});
        return dispatch(fetchPerson(input)).then(() => {
            const fetchedVal1 = getState().person.val1;
            const fetchedVal2 = getState().person.val2;
            return Promise.all([
                dispatch(fetchFacility(fetchedVal1)),
                dispatch(fetchExposure(fetchedVal2))
            ])
                .then(() => {
                    return dispatch({type: 'CHAIN_SUCCESS'});
                }).catch(e => {
                    dispatch({type: 'CHAIN_FAIL' });
                    dispatch({type: FETCH_ERROR, payload: {type: 'CHAIN_FAIL', error: e}})
                });
          });
    }
}