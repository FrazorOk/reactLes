import { connect } from 'react-redux';
import { follow, setActivePage, setIsFetching, setTotalCount, setUser, unfollow } from '../../redux/users-reducer';
import Users from './Users';
import axios from 'axios';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.maxUsers}&page=${this.props.activePage}`)
      .then((response) => {
        this.props.setUser(response.data.items);
        response.data.totalCount >= 100 ? this.props.setTotalCount(100) : this.props.setTotalCount(response.data.totalCount);
        this.props.setIsFetching(false);
      });
  }

  activeNomber = (p) => {
    this.props.setIsFetching(true);
    this.props.setActivePage(p);

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.maxUsers}&page=${p}`).then((response) => {
      this.props.setUser(response.data.items);
      this.props.setIsFetching(false);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCount={this.props.totalCount}
          maxUsers={this.props.maxUsers}
          activePage={this.props.activePage}
          activeNomber={this.activeNomber}
          unfollow={this.props.unfollow}
          users={this.props.users}
          follow={this.props.follow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.usersData,
    activePage: state.users.activePage,
    totalCount: state.users.totalCount,
    maxUsers: state.users.maxUsers,
    isFetching: state.users.isFetching,
  };
};
const mapDispatchToProps = {
  follow,
  unfollow,
  setUser,
  setActivePage,
  setTotalCount,
  setIsFetching,
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

export default UsersContainer;
