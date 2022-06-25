import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const activeNav = ({ isActive }) => (isActive ? s.active : '');

let Naivgation = () => {
  return (
    <nav className={s.navigation}>
      <ul>
        <li>
          <NavLink to="/profile" className={activeNav}>
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
      </ul>
    </nav>
  );
};

export default Naivgation;