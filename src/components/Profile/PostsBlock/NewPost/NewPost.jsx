import React, { useRef } from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
  let valueTextArea = useRef();

  let eventClickBtn = () => {
    let text = valueTextArea.current.value;
    props.addPost(text);
  };

  return (
    <div className={s.new_post}>
      <textarea ref={valueTextArea}></textarea>
      <button onClick={eventClickBtn}>
        <span>accept</span>
      </button>
    </div>
  );
};

export default NewPost;
