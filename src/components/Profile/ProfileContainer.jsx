import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileComponent extends React.Component {
	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then((response) => {
			this.props.setUserProfile(response.data);
		});
	}

	render() {
		return <Profile {...this.props} />;
	}
}

const mapStateToProps = (state) => {
	return {
		userProfile: state.profile.userProfile,
	};
};
const mapDispatchToProps = {
	setUserProfile,
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);

export default ProfileContainer;
