import { NavLink } from 'react-router-dom';
import s from './Member.module.css';
const activeNav = ({ isActive }) => (isActive ? s.active : '');

const Member = (props) => {
  return (
    <li className={s.member}>
      <NavLink to={`/dialogs/${props.id}`} className={activeNav}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default Member;
