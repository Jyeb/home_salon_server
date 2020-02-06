import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import deal from './deal'

export default combineReducers({
  alert,
  auth,
  deal
});
