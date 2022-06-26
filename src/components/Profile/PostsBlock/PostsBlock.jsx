import NewPost from './NewPost/NewPost';
import MyPosts from './MyPosts/MyPosts';
import TitlePosts from './TitlePosts/TitlePosts';
import s from './PostsBlock.module.css';

const PostsBlock = () => {
  return (
    <div className={s.main}>
      <TitlePosts />
      <NewPost />
      <MyPosts />
    </div>
  );
};

export default PostsBlock;
