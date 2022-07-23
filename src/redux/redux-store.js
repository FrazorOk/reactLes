import { combineReducers, legacy_createStore as createStore } from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	users: usersReducer,
	auth: authReducer,
});
let store = createStore(reducers);

export default store;
window.store = store;
