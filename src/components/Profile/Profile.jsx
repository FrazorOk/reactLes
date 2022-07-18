import PostsBlock from './PostsBlock/PostsBlock';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo {...props} />
			<PostsBlock />
		</div>
	);
};

export default Profile;
