import './FriendList.css';
import FriendListItem from './FriendListItem';
import friends from "../friends.json";

export default function FriendList(props) {
    return (
        <ul className="friendList-ul">
	        {friends.map((friend) => {
                return (
          <         li key={friend.id}>
                    <FriendListItem friend={friend} />
                    </li>
                    );
            })}
        </ul>

        
    );
  };