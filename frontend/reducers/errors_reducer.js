import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer'
//this file combines our reducers that handle errors
// combinereducer accepts an object whose property will represent properties of our application state
// and values that correspond to a reducer function
const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
})

export default errorsReducer;