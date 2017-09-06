import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import {RECEIVE_PUPPIES, SELECT_PUPPY} from './action-creators';
import rootReducer from './reducer';
// import { combineReducers } from 'redux';

// const hardcodedPuppy = {
//   id: 1,
//   name: 'Taylor',
//   image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
// };


// const initialState = {
//     allPuppies : [],
//     singlePuppy: {}
// }

// function reducer(state = initialState, action){
//     switch(action.type){
//         case RECEIVE_PUPPIES:
//           return Object.assign({}, state, {allPuppies: action.receivedPuppies})

//         case SELECTED_PUPPY:
//           return Object.assign({}, state, {singlePuppy: action.selectedPuppy})

//         default:
//           return state
//     }
// }

// function allPuppiesReducer (state = [], action) {
//   switch (action.type) {
//     case RECEIVE_PUPPIES: return action.receivedPuppies;
//     default: return state;
//   }
// }

// function selectedPuppyReducer (state = {}, action) {
//   switch (action.type) {
//     case SELECT_PUPPY: return action.selectedPuppy;
//     default: return state;
//   }
// }

// const rootReducer = combineReducers({
//   allPuppies: allPuppiesReducer,
//   selectedPuppy: selectedPuppyReducer
// });

// const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default store;

// {...state, allPuppies: action.receivedPuppies}
