import PostsBlock from './PostsBlock/PostsBlock';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <PostsBlock profile={props.profile} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
