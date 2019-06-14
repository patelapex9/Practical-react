import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import appReducer from './appReducer';


export default combineReducers({
  app: appReducer,
  errors: errorReducer
});
