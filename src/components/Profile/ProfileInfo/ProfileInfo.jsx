import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import imgUser from '../../Users/user.png';

const ProfileInfo = (props) => {
	return (
		<>
			<div className={s.img_wallpaper}></div>
			<div className={s.profile_info_row}>
				<img
					className={s.profile_info__img}
					src={
						!props.profile.userProfile.photos.large || !props.profile.userProfile
							? `${imgUser}`
							: `${props.profile.userProfile.photos.large}`
					}
					alt=""
				/>
				<div className={s.profile_info_column}>
					<p className={s.profile__fullName}>{props.profile.userProfile.fullName}</p>
					<div className={s.profile_info_row_contant}>
						<div className={s.profile__contacts}>
							<p>Контакты:</p>
							<a href={'https://' + props.profile.userProfile.contacts.facebook}>{props.profile.userProfile.contacts.facebook}</a>
							<a href={'https://' + props.profile.userProfile.contacts.website}>{props.profile.userProfile.contacts.website}</a>
							<a href={'https://' + props.profile.userProfile.contacts.vk}>{props.profile.userProfile.contacts.vk}</a>
							<a href={props.profile.userProfile.contacts.twitter}>{props.profile.userProfile.contacts.twitter}</a>
							<a href={'https://' + props.profile.userProfile.contacts.instagram}>{props.profile.userProfile.contacts.instagram}</a>
							<a href={'https://' + props.profile.userProfile.contacts.youtube}>{props.profile.userProfile.contacts.youtube}</a>
							<a href={'https://' + props.profile.userProfile.contacts.github}>{props.profile.userProfile.contacts.github}</a>
							<a href={'https://' + props.profile.userProfile.contacts.mainLink}>{props.profile.userProfile.contacts.mainLink}</a>
						</div>
						<div className={s.profile__job}>
							<div>
								<span className={s.profile__job_h}>Ищет работу:</span>
								{!props.profile.userProfile.lookingForAJob ? <span>-</span> : <span>+</span>}
							</div>
							<p>
								<span>Описание:</span>
								<span className={s.profile__job_status}>{props.profile.userProfile.lookingForAJobDescription}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileInfo;
