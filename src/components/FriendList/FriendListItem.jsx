import './FriendListItem.css';
// import styles from "./FriendListItem.module.css";


export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className="friendListItem-li">
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p>{name}</p>
      <p style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

  