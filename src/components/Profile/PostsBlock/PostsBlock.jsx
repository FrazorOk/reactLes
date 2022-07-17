import TitlePosts from './TitlePosts/TitlePosts';
import s from './PostsBlock.module.css';
import NewPostContainer from './NewPost/NewPostContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const PostsBlock = (props) => {
  return (
    <div className={s.main}>
      <TitlePosts />
      <NewPostContainer />
      <MyPostsContainer />
    </div>
  );
};

export default PostsBlock;
