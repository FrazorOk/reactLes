import MyPost from './MyPost/MyPost';
import s from './MyPosts.module.css';

let MyPosts = () => {
  return (
    <div className={s.posts}>
      <MyPost message="Hi, first post" />
      <MyPost message="Natasha post" />
    </div>
  );
};

export default MyPosts;
