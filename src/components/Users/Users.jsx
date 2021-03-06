import s from './Users.module.css';
import user from './user.png';
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../api/api';

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalCount / props.maxUsers);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div className={s.users_container}>
			<div className={s.pagination}>
				{pages.map((p) => {
					return (
						<span
							className={p === props.activePage ? `${s.active}` : ''}
							onClick={() => {
								props.activeNomber(p);
							}}>
							{p}
						</span>
					);
				})}
			</div>
			<div>
				<div className={s.users}>
					{props.users.map((u) => (
						<div className={s.user} key={u.id}>
							<div className={s.avatar}>
								<NavLink to={`/profile/${u.id}`}>
									<img src={u.photos.small != null ? u.photos.small : `${user}`} alt="sorry" />
								</NavLink>
								{u.followed ? (
									<button
										disabled={!props.isFollowingProgress.some((id) => id === u.id) ? false : true}
										onClick={() => {
											props.toggleFollowingProgress(false, u.id);
											followAPI.deleteFollow(u.id).then((response) => {
												if (response.data.resultCode === 0) {
													props.unfollow(u.id);
													props.toggleFollowingProgress(true, u.id);
												}
											});
										}}>
										Unfollow
									</button>
								) : (
									<button
										disabled={!props.isFollowingProgress.some((id) => id === u.id) ? false : true}
										onClick={() => {
											props.toggleFollowingProgress(false, u.id);
											followAPI.postFollow(u.id).then((response) => {
												if (response.data.resultCode === 0) {
													props.follow(u.id);
													props.toggleFollowingProgress(true, u.id);
												}
											});
										}}>
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
		</div>
	);
};

export default Users;
