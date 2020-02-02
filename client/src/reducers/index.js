import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReduser from './authReduser';
import streamReducer from './streamReducer';

export default combineReducers({
	auth : authReduser,
	form : formReducer,
	streams: streamReducer
});