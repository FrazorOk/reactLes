import PostsBlock from './PostsBlock/PostsBlock';
import s from './Profile.module.css';

let Profile = () => {
  return (
    <div>
      <div className={s.img}></div>
      <div>ava+description</div>
      <PostsBlock />
    </div>
  );
};

export default Profile;
