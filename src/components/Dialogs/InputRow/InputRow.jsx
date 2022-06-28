import { useRef } from 'react';
import s from './InputRow.module.css';

const InputRow = (props) => {
  let ref = useRef();
  let eventBtn = () => [alert(ref.current.value)];

  return (
    <div className={s.input_row}>
      <textarea ref={ref}></textarea>
      <button onClick={eventBtn}>accept</button>
    </div>
  );
};

export default InputRow;
