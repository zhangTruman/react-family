import types from '../store/types';

export function increment() {
    return { 
        type: types.INCREMENT,
     }
}

export function decrement() {
    return { type: types.DECREMENT }
}

export function reset() {
    return { type: types.RESET }
}