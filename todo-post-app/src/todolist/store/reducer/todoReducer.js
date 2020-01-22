import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
   switch (action.type) {
        case actionTypes.ADD_TODO:
            let newTodos = state.todos.concat([action.data]);
            return {
                ...state,
                todos: newTodos
            };
    }
}

export default todoReducer;