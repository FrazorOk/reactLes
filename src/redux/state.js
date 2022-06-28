import { rerenderEntireTree } from '../render';

let state = {
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
      { id: '4', message: 'Dima post', likes: '13' },
    ],
    postNewText: '',
  },
};

export let addPost = () => {
  let newPost = {
    id: '5',
    message: state.profile.postNewText,
    likes: '5',
  };
  state.profile.dataPosts.push(newPost);
  state.profile.postNewText = '';
  rerenderEntireTree(state);
};

export let addPostNewTextArea = (text) => {
  state.profile.postNewText = `${text}`;
  rerenderEntireTree(state);
};

export default state;
