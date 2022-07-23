import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthLoginMe, setAuthFetching } from '../../redux/auth-reducer';
import { authAPI } from '../../api/api';

class HeaderComponent extends React.Component {
	componentDidMount() {
		this.props.setAuthFetching(false);

		authAPI.getAuthMe().then((response) => {
			if (response.data.resultCode === 0) {
				this.props.setAuthLoginMe(response.data.data);
				this.props.setAuthFetching(true);
				console.log(this.props);
			}
		});
	}
	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	};
};
const mapDispatchToProps = {
	setAuthLoginMe,
	setAuthFetching,
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

export default HeaderContainer;
