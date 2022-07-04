let store = {
  _state: {
    dialogs: {
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
    },
    profile: {
      dataPosts: [
        { id: '1', message: 'Hi, first post', likes: '5' },
        { id: '2', message: 'Natasha post', likes: '11' },
        { id: '3', message: 'Dima post', likes: '13' },
      ],
      postNewText: '',
    },
  },
  _rerenderEntireTree() {
    console.log('hi');
  },

  getState() {
    return this._state;
  },
  rerender(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-NEW-POST') {
      let newPost = {
        id: '5',
        message: this._state.profile.postNewText,
        likes: '5',
      };
      this._state.profile.dataPosts.push(newPost);
      this._state.profile.postNewText = '';
      this._rerenderEntireTree(this);
    } else if (action.type === 'UPGRADE-TEXTAREA') {
      this._state.profile.postNewText = `${action.textArea}`;
      this._rerenderEntireTree(this);
    }
  },
};

export default store;
window.store = store;
