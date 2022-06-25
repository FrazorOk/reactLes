import s from './Navigation.module.css';

let Naivgation = () => {
  return (
    <nav className={s.navigation}>
      <ul>
        <li>
          <span>Profile</span>
        </li>
        <li>
          <span>Messages</span>
        </li>
        <li>
          <span>News</span>
        </li>
        <li>
          <span>Music</span>
        </li>
      </ul>
    </nav>
  );
};

export default Naivgation;
