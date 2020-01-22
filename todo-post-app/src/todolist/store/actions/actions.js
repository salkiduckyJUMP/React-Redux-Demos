import * as actionTypes from './actionTypes';

export const addTodo = (data) => { 
    return {
        type: actionTypes.ADD_TODO,
        data: data
    }
}