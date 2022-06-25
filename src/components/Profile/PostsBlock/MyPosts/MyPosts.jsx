import MyPost from './MyPost/MyPost';
import s from './MyPosts.module.css';

let MyPosts = () => {
  return (
    <div className={s.posts}>
      <MyPost />
      <MyPost />
    </div>
  );
};

export default MyPosts;
