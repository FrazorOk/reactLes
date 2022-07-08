import { useRef } from 'react';
import {
  addNewMessageActionCreator,
  upgradeDialogsTextInputActionCreator,
} from '../../../redux/dialogs-reducer';
import s from './InputRow.module.css';

const InputRow = (props) => {
  let ref = useRef();

  let eventTeaxtArea = () => {
    let text = ref.current.value;
    props.dispatch(upgradeDialogsTextInputActionCreator(text));
  };
  let eventBtn = () => {
    props.dispatch(addNewMessageActionCreator());
  };

  return (
    <div className={s.input_row}>
      <textarea onChange={eventTeaxtArea} ref={ref} value={props.inputText} />
      <button onClick={eventBtn}>accept</button>
    </div>
  );
};

export default InputRow;
