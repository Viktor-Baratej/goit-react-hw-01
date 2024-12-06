import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map((item, index) => {
        return (
          <li key={item.id}>
            <FriendListItem allFriends={friends[index]} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
