import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { profileAPI } from '../../api/api';
import { setProfileFetching, setUserProfile } from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import Profile from './Profile';

function withRouter(Children) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Children {...props} router={{ location, navigate, params }} />;
	}
	return ComponentWithRouterProp;
}

class ProfileComponent extends React.Component {
	componentDidMount() {
		this.props.setProfileFetching(false);

		profileAPI.getProfileUser(this.props.router.params.userId).then((response) => {
			this.props.setUserProfile(response.data);
			this.props.setProfileFetching(true);
		});
	}

	render() {
		return this.props.profile.isFetching === true ? <Profile {...this.props} /> : <Preloader />;
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profile,
	};
};
const mapDispatchToProps = {
	setUserProfile,
	setProfileFetching,
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileComponent));

export default ProfileContainer;
