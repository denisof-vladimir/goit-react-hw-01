import './FriendList.css';
import FriendListItem from '../FriendListItem/FriendListItem';


export default function FriendList({friends}) {
    return (
        <ul className="friendList-ul">
	        {friends.map((friend) => {
                return (
                    <li key={friend.id}>
                    <FriendListItem friend={friend} />
                    </li>
                    );
            })}
        </ul>

        
    );
  };