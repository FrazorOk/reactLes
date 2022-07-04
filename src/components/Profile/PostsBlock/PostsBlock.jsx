import NewPost from './NewPost/NewPost';
import MyPosts from './MyPosts/MyPosts';
import TitlePosts from './TitlePosts/TitlePosts';
import s from './PostsBlock.module.css';

const PostsBlock = (props) => {
  return (
    <div className={s.main}>
      <TitlePosts />
      <NewPost dispatch={props.dispatch} postNewText={props.profile.postNewText} />
      <MyPosts profile={props.profile} />
    </div>
  );
};

export default PostsBlock;
