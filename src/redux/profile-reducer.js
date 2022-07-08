const ADD_NEW_POST = 'ADD-NEW-POST';
const UPGRADE_TEXTAREA = 'UPGRADE-TEXTAREA';

let initialState = {
  dataPosts: [
    { id: '1', message: 'Hi, first post', likes: '5' },
    { id: '2', message: 'Natasha post', likes: '11' },
    { id: '3', message: 'Dima post', likes: '13' },
  ],
  postNewText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        id: '5',
        message: state.postNewText,
        likes: '5',
      };
      state.dataPosts.push(newPost);
      state.postNewText = '';
      return state;
    case UPGRADE_TEXTAREA:
      state.postNewText = `${action.textArea}`;
      return state;
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

export default profileReducer;