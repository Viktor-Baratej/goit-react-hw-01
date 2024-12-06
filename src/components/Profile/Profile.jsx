import css from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile__container}>
      <div className={css.profile__soc}>
        <img
          className={css.profile__soc_avatar}
          src={avatar}
          alt="User avatar"
        />
        <p className={css.profile__name}>{name}</p>
        <p className={css.profile__tag}>@{tag}</p>
        <p className={css.profile__location}>{location}</p>
      </div>

      <ul className={css.profile__info_list}>
        <li className={css.profile__info_item}>
          <span className={css.profile__info_title}>Followers</span>
          <span className={css.profile__info_text}>{stats.followers}</span>
        </li>

        <li className={css.profile__info_item}>
          <span className={css.profile__info_title}>Views</span>
          <span className={css.profile__info_text}>{stats.views}</span>
        </li>

        <li className={css.profile__info_item}>
          <span className={css.profile__info_title}>Likes</span>
          <span className={css.profile__info_text}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
