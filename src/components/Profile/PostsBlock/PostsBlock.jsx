import NewPost from './NewPost/NewPost';
import MyPosts from './MyPosts/MyPosts';
import TitlePosts from './TitlePosts/TitlePosts';
import s from './PostsBlock.module.css';

const PostsBlock = (props) => {
  return (
    <div className={s.main}>
      <TitlePosts />
      <NewPost addPost={props.addPost} />
      <MyPosts dataPosts={props.dataPosts} />
    </div>
  );
};

export default PostsBlock;
