import css from "../FriendList/FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({ allFriends }) => {
  const { avatar, name, isOnline, id } = allFriends;

  return (
    <div
      key={id}
      className={clsx(css.friend_item, {
        [css.is_online]: isOnline,
      })}
    >
      <img className={css.friend_img} src={avatar} alt={name} />
      <p className={css.friend_item_name}>{name}</p>
      <p className={clsx(isOnline ? "" : css.friend_offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
