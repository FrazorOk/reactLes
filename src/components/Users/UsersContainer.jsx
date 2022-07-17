import { connect } from 'react-redux';
import { activePageAC, followAC, setTotalCountAC, setUserAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';
import axios from 'axios';
import React from 'react';

class UsersComponent extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.maxUsers}&page=${this.props.activePage}`)
      .then((response) => {
        this.props.setUser(response.data.items);
        response.data.totalCount >= 100 ? this.props.setTotalCount(100) : this.props.setTotalCount(response.data.totalCount);
      });
  }

  activeNomber = (p) => {
    this.props.setActivePage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.maxUsers}&page=${p}`).then((response) => {
      this.props.setUser(response.data.items);
      console.log(this.props.maxUsers);
      console.log(this.props.activePage);
    });
  };

  render() {
    return (
      <Users
        totalCount={this.props.totalCount}
        maxUsers={this.props.maxUsers}
        activePage={this.props.activePage}
        activeNomber={this.activeNomber}
        unfollow={this.props.unfollow}
        users={this.props.users}
        follow={this.props.follow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.usersData,
    activePage: state.users.activePage,
    totalCount: state.users.totalCount,
    maxUsers: state.users.maxUsers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUser: (users) => {
      dispatch(setUserAC(users));
    },
    setActivePage: (page) => {
      dispatch(activePageAC(page));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

export default UsersContainer;
