import { combineReducers } from 'redux';
import auth from  './auth';
import userInfo from './userInfo';
import match from './match';
import friends from './friends';

const rootReducer = combineReducers({
    auth,
    userInfo,
    match,
    friends
});
export default rootReducer;
