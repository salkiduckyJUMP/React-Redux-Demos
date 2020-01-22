import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: []
}


const reducer = (state = initialState, action) => {
    console.log(state);

    switch (action.type) {
        case actionTypes.ADD_POST:
            let newPosts = state.posts.concat([action.data]);
            return {
                ...state,
                posts: newPosts
            };
 
        case actionTypes.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.id)
            };

        case actionTypes.EDIT_POST:
            return {
                ...state,
                posts: state.posts.map((post) => post.id === action.id ? {...post, editing: !post.editing} : post )
            };
            
        case actionTypes.UPDATE:
            let updatedPosts = state.posts.map((post) => {
                if (post.id === action.id ) {
                    return {
                        ...post,
                        title: action.data.newTitle,
                        content: action.data.newContent,
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

export default reducer;