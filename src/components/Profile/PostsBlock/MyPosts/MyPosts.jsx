import MyPost from './MyPost/MyPost';
import s from './MyPosts.module.css';

let MyPosts = () => {
  return (
    <div className={s.posts}>
      <MyPost message="Hi, first post" likes="5" />
      <MyPost message="Natasha post" likes="24" />
    </div>
  );
};

export default MyPosts;
