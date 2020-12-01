import PropTypes from "prop-types";
import s from "./friendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map((friend) => (
        <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

function FriendItem({ avatar, name, isOnline }) {
  const status = isOnline ? "online" : "offline";
  return (
    <li className={s.item}>
      <span className={s[status]}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
