import {
  addPostActionCreator,
  upgardeTextAreaActionCreator,
} from '../../../../redux/profile-reducer';
import NewPost from './NewPost';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    postNewText: state.profile.postNewText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    upgradeTextArea: (text) => {
      dispatch(upgardeTextAreaActionCreator(text));
    },
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);
export default NewPostContainer;
