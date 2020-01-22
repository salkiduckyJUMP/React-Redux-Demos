import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
}

const ResultReducer = (state = initialState, action) => {
   switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), val: action.result})
            }
        case actionTypes.DELETE_RESULT:
            const updatedResults = state.results.filter(result => {
                return result.id !== action.delId
            })
            return {
                ...state,
                results: updatedResults
            }
        
   }

    return state;
};

export default ResultReducer;