import React, { useRef } from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
  let valueTextArea = useRef();

  let eventClickBtn = () => {
    props.dispatch({ type: 'ADD-NEW-POST' });
  };

  let eventChageArea = () => {
    let text = valueTextArea.current.value;
    props.dispatch({ type: 'UPGRADE-TEXTAREA', textArea: `${text}` });
  };

  return (
    <div className={s.new_post}>
      <textarea onChange={eventChageArea} ref={valueTextArea} value={props.postNewText} />
      <button onClick={eventClickBtn}>
        <span>accept</span>
      </button>
    </div>
  );
};

export default NewPost;
