import PostsBlock from './PostsBlock/PostsBlock';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <PostsBlock />
    </div>
  );
};

export default Profile;
