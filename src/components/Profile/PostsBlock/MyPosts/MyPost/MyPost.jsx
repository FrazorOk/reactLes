import s from './MyPost.module.css';

const MyPost = (props) => {
  return (
    <div className={s.post}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsI0xnTENDch9mM55jf8QQDe4AzWVj5qJ1g&usqp=CAU"
        alt=""
      />
      <p>{props.message}</p>
      <p>like - {props.likes}</p>
    </div>
  );
};

export default MyPost;
