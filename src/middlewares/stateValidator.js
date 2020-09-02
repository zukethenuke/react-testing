import tv4 from 'tv4';
import stateSchema from './stateSchema';

export const stateValidator = ({ dispatch, getState }) => next => action => {
    next(action); // Do everything else the initial action is for, then run the validation

    if (!tv4.validate(getState(), stateSchema)) {
        console.warn('Invalid state schema detected!');
    }
}