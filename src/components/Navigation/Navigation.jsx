import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setProfileFetching, setUserProfile } from '../../redux/profile-reducer';
import s from './Navigation.module.css';
import { profileAPI } from '../../api/api';

const activeNav = ({ isActive }) => (isActive ? s.active : '');

const Naivgation = (props) => {
	let fetchingToServer = () => {
		props.setProfileFetching(false);

		profileAPI.getProfileUser('2').then((response) => {
			props.setUserProfile(response.data);
			props.setProfileFetching(true);
		});
	};

	return (
		<nav className={s.navigation}>
			<ul>
				<li>
					<NavLink to="/profile/2" className={activeNav} onClick={fetchingToServer}>
						<span>Profile</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/dialogs" className={activeNav}>
						<span>Messages</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/news" className={activeNav}>
						<span>News</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/music" className={activeNav}>
						<span>Music</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/users" className={activeNav}>
						<span>Users</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state,
	};
};
const mapDispatchToProps = {
	setUserProfile,
	setProfileFetching,
};

const NaivgationContainer = connect(mapStateToProps, mapDispatchToProps)(Naivgation);
export default NaivgationContainer;
