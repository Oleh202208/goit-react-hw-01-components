import { FriendList } from "./Friend"
import PropTypes from 'prop-types';

export const FriendListItem = ({friends})=>{
  return ( <li>
    {friends.map(friend => {
      return <FriendList key={friend.id} friend={friend}/>
    })}
  </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id:PropTypes.number.isRequired,
  })
  ).isRequired,
};