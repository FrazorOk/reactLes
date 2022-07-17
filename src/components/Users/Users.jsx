import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import user from './user.png';

class Users extends React.Component {
  componentDidMount() {
    alert('working');
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
      this.props.setUser(response.data.items);
    });
  }

  render() {
    console.log(user);
    return (
      <div className={s.users_container}>
        <div className={s.users}>
          {this.props.users.map((u) => (
            <div className={s.user} key={u.id}>
              <div className={s.avatar}>
                <img src={u.photos.small != null ? u.photos.small : `${user}`} alt="sorry" />
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
              <div className={s.info}>
                <p className={s.name}>{u.name}</p>
                <p className={s.status}>{u.status != null ? u.status : 'Status is undefined'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
