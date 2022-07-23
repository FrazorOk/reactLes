import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
	return (
		<header className={s.header}>
			<Link to="/">
				<img src="https://www.kindpng.com/picc/m/41-413822_avengers-logo-png-transparent-png.png"></img>
			</Link>
			<Link to="login/">
				<div>{!props.auth.dataLogin ? 'login' : props.auth.dataLogin.login}</div>
			</Link>
		</header>
	);
};

export default Header;
