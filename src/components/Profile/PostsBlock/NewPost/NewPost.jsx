import React, { useRef } from 'react';
import {
  addPostActionCreator,
  upgardeTextAreaActionCreator,
} from '../../../../redux/profile-reducer';
import s from './NewPost.module.css';

const NewPost = (props) => {
  let valueTextArea = useRef();

  let eventClickBtn = () => {
    props.dispatch(addPostActionCreator());
  };

  let eventChageArea = () => {
    let text = valueTextArea.current.value;
    props.dispatch(upgardeTextAreaActionCreator(text));
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
