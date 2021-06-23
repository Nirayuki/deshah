import { combineReducers } from 'redux';
import { userReducer } from './userReducer';



export const Reducers = combineReducers({
    user: userReducer,
 });