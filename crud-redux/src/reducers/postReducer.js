import * as ActionTypes from '../actions/actionTypes'

const initialState = {
    posts: []
};

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.ADD_POST:
           // let newPosts = state.posts.concat(action.data);
           let newPosts = [...state.posts, action.data];
            return {
                ...state,
                posts: newPosts
            };
        
        case ActionTypes.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.id)
            }
        
        case ActionTypes.EDIT_POST:
            return {
                ...state,
                posts: state.posts.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post)
            }
        
        case ActionTypes.UPDATE:
            let updatedPosts = state.posts.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        title: action.data.newTitle,
                        message: action.data.newMessage,
                        editing: !post.editing
                    }
                } else return post;
            })

            return {...state,
                posts: updatedPosts}
                
        default:
            return state;
    }
}
export default postReducer;