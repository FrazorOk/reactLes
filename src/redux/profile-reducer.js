const ADD_NEW_POST = 'ADD-NEW-POST';
const UPGRADE_TEXTAREA = 'UPGRADE-TEXTAREA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
	dataPosts: [
		{ id: '1', message: 'Hi, first post', likes: '5' },
		{ id: '2', message: 'Natasha post', likes: '11' },
		{ id: '3', message: 'Dima post', likes: '13' },
	],
	userProfile: null,
	postNewText: '',
	isFetching: false,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_POST:
			return {
				...state,
				dataPosts: [...state.dataPosts, { id: '5', message: state.postNewText, likes: '5' }],
				postNewText: '',
			};
		case UPGRADE_TEXTAREA:
			return {
				...state,
				postNewText: `${action.textArea}`,
			};
		case SET_USER_PROFILE:
			return {
				...state,
				userProfile: action.userProfile,
			};
		case IS_FETCHING:
			return {
				...state,
				isFetching: action.fetching,
			};
		default:
			return state;
	}
};

export const addPostActionCreator = () => ({
	type: ADD_NEW_POST,
});
export const upgardeTextAreaActionCreator = (text) => ({
	type: UPGRADE_TEXTAREA,
	textArea: text,
});
export const setUserProfile = (userProfile) => ({
	type: SET_USER_PROFILE,
	userProfile,
});
export const setProfileFetching = (fetching) => ({
	type: IS_FETCHING,
	fetching,
});

export default profileReducer;
