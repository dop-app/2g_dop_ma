import { combineReducers } from 'redux';
import auth from  './auth';
import userInfo from './userInfo';
import match from './match';

const rootReducer = combineReducers({
    auth,
    userInfo,
    match
});
export default rootReducer;
