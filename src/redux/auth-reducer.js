const AUTH_FETHING = 'AUTH_FETHING';
const SET_LOGIN = 'SET_LOGIN';

let initialState = {
	dataLogin: null,
	isFetching: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_FETHING:
			return {
				...state,
				isFetching: action.isFetching,
			};
		case SET_LOGIN:
			return {
				...state,
				dataLogin: action.dataLogin,
			};
		default:
			return state;
	}
};

export const setAuthFetching = (isFetching) => ({
	type: AUTH_FETHING,
	isFetching,
});
export const setAuthLoginMe = (dataLogin) => ({
	type: SET_LOGIN,
	dataLogin,
});

export default authReducer;
