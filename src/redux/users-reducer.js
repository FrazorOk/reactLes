const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const ACTIVE_PAGE = 'ACTIVE_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING';

let initialState = {
  usersData: [],
  totalCount: 0,
  maxUsers: 10,
  activePage: 1,
  isFetching: false,
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

    case ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.page,
      };

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };

    case TOGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUser = (users) => ({
  type: SET_USER,
  users,
});
export const setActivePage = (page) => ({
  type: ACTIVE_PAGE,
  page,
});
export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const setIsFetching = (isFetching) => ({
  type: TOGLE_IS_FETCHING,
  isFetching,
});

export default usersReducer;
