import PostsBlock from './PostsBlock/PostsBlock';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <PostsBlock profile={props.profile} addPost={props.addPost} addPostNewTextArea={props.addPostNewTextArea} />
    </div>
  );
};

export default Profile;
