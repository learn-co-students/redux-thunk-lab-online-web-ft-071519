/*
Build out the reducer. Add cases as you build.

The Reducer:
1. Sets the initial state of the app.
2. Is a function that uses switch statements to determine which block of code to activate. Its purpose and return values change the state/store of the app. Changes in state will cause a re-render and therefore update the browser window based on the information in state.
*/

const catsReducer = (state = { cats: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_CATS':
            return {
                ...state,
                cats: [...state.cats],
                loading: true
            }
        case 'ADD_CATS':
            return {
                ...state,
                cats: action.cats,
                loading: false
            }
        default:
            return state;
    }
}

// exporting the function or class allows other components to import it. 
export default catsReducer
