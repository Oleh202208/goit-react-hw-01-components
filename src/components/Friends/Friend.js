
import PropTypes from 'prop-types';

export const FriendList = ({friend: {avatar, name: username, isOnline},}) => {
  return(<li class="item">
  <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt="User avatar" width="48"/>
  <p class="name">{username}</p>
</li>)
}

FriendList.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};