import { combineReducers } from 'redux';
import auth from  './auth';
import userInfo from './userInfo';

const rootReducer = combineReducers({
    auth,
    userInfo
});
export default rootReducer;
