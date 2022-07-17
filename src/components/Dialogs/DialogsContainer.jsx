import {
  addNewMessageActionCreator,
  upgradeDialogsTextInputActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux/es/exports';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upgradeDialogsText: (text) => {
      dispatch(upgradeDialogsTextInputActionCreator(text));
    },
    addMessage: () => {
      dispatch(addNewMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
