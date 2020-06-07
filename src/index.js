/*
1. Build the frame work of necessary imports and creating a store.
2. Build the reducer after setting up the required imports and creating the store.
*/

// Importing core React components from the react libraries.
import React from 'react';
import ReactDOM from 'react-dom'
// Import App class from App file.
import App from './App'
// Import specific functions from react/redux libraries.
// Note: applyMiddleware.
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// Importing specific functions from a file.
import catsReducer from './reducers/catsReducer';
// Note: thunk
import thunk from 'redux-thunk'

// Build the store with reducer and necessary middleware.
// Middleware allows wrapping the dispatch function with additional capabilities not native in redux.
const store = createStore(catsReducer, applyMiddleware(thunk))

// Make sure to use all classes and functions imported in.
console.log("index.js")

ReactDOM.render(
    // Provides access to the store to all the children of App.
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

