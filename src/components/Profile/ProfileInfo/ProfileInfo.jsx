import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	console.log(props);
	return (
		<div>
			<div className={s.img_wallpaper}></div>
			{!props.userProfile ? (
				<Preloader />
			) : (
				<div>
					<div className={s.profile_info_row}>
						<img className={s.profile_info__img} src={props.userProfile.photos.large} alt="" />
						<div className={s.profile_info_column}>
							<p className={s.profile__fullName}>{props.userProfile.fullName}</p>
							<div className={s.profile_info_row_contant}>
								<div className={s.profile__contacts}>
									<p>Контакты:</p>
									<a href={'https://' + props.userProfile.contacts.facebook}>{props.userProfile.contacts.facebook}</a>
									<a href={'https://' + props.userProfile.contacts.website}>{props.userProfile.contacts.website}</a>
									<a href={'https://' + props.userProfile.contacts.vk}>{props.userProfile.contacts.vk}</a>
									<a href={props.userProfile.contacts.twitter}>{props.userProfile.contacts.twitter}</a>
									<a href={'https://' + props.userProfile.contacts.instagram}>{props.userProfile.contacts.instagram}</a>
									<a href={'https://' + props.userProfile.contacts.youtube}>{props.userProfile.contacts.youtube}</a>
									<a href={'https://' + props.userProfile.contacts.github}>{props.userProfile.contacts.github}</a>
									<a href={'https://' + props.userProfile.contacts.mainLink}>{props.userProfile.contacts.mainLink}</a>
								</div>
								<div className={s.profile__job}>
									<p>
										<span className={s.profile__job_h}>Ищет работу:</span>
										{props.userProfile.lookingForAJob ? <input type="checkBox" checked /> : <input type="checkBox" disabled />}
									</p>
									<p>
										<span>Описание:</span>
										<span className={s.profile__job_status}>{props.userProfile.lookingForAJobDescription}</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProfileInfo;
