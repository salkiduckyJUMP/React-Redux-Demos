import * as ActionTypes from './actionTypes';

export const addPost= (data) => {
    return {
        type: ActionTypes.ADD_POST,
        data: data
    }
}

export const deletePost= (id) => {
    return {
        type: ActionTypes.DELETE_POST,
        id: id
    }
}

export const editPost= (id) => {
    return {
        type: ActionTypes.EDIT_POST,
        id: id
    }
}