import * as actionTypes from './actionTypes';

export const addPost = (data) => { 
    console.log('add post' + data);
    return {
        type: actionTypes.ADD_POST,
        data: data
    }
}

export const deletePost = (id) => {
    return {
        type: actionTypes.DELETE_POST,
        id: id
    }
}

export const editPost = (id) => {
    return {
        type: actionTypes.EDIT_POST,
        id: id
    }
}

