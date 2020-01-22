import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const add = (payload) => {
    return {
        type: actionTypes.ADD,
        payload: payload
    }
}

export const subtract = (payl) => {
    return {
        type: actionTypes.SUBTRACT,
        payload: payl
    }
}

