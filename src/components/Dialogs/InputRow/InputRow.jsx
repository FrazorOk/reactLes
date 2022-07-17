import { useRef } from 'react';
import s from './InputRow.module.css';

const InputRow = (props) => {
  let ref = useRef();

  let eventTeaxtArea = () => {
    let text = ref.current.value;
    props.upgradeDialogsText(text);
  };
  let eventBtn = () => {
    props.addMessage();
  };

  return (
    <div className={s.input_row}>
      <textarea onChange={eventTeaxtArea} ref={ref} value={props.inputText} />
      <button onClick={eventBtn}>accept</button>
    </div>
  );
};

export default InputRow;
