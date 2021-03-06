const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPGRADE_DIALOGS_INPUT = 'UPGRADE-DIALOGS-INPUT';

let initialState = {
  dataMembers: [
    { id: '1', name: 'Dima' },
    { id: '2', name: 'Vasya' },
    { id: '3', name: 'Natasha' },
    { id: '4', name: 'Maks' },
    { id: '5', name: 'Petya' },
  ],
  dataMessage: [
    { id: '1', message: 'Hi' },
    { id: '2', message: 'How are you?' },
    { id: '3', message: 'Wow, Bro!' },
  ],
  inputText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        inputText: '',
        dataMessage: [...state.dataMessage, { id: '4', message: state.inputText }],
      };

    case UPGRADE_DIALOGS_INPUT:
      return {
        ...state,
        inputText: `${action.textInput}`,
      };

    default:
      return state;
  }
};

export const addNewMessageActionCreator = () => ({
  type: ADD_NEW_MESSAGE,
});
export const upgradeDialogsTextInputActionCreator = (text) => ({
  type: UPGRADE_DIALOGS_INPUT,
  textInput: text,
});

export default dialogsReducer;
