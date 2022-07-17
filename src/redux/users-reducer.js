const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';

let initialState = {
  usersData: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USER:
      return {
        ...state,
        usersData: [...action.users],
      };

    default:
      return state;
  }
};

export const followAC = (userId) => ({
  type: FOLLOW,
  userId: userId,
});
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId: userId,
});
export const setUserAC = (users) => ({
  type: SET_USER,
  users: users,
});

export default usersReducer;
