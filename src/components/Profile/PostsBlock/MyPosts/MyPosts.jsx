import MyPost from './MyPost/MyPost';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
  let postsElements = props.dataPosts.map((post) => <MyPost message={post.message} likes={post.likes} />);

  return <div className={s.posts}>{postsElements}</div>;
};

export default MyPosts;
