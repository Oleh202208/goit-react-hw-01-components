

import PropTypes from 'prop-types';
import Friend from './Friend';
import { List } from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  const listItem = friends.map(({ id, avatar, name, isOnline }) => (
    <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
  ));

  return <List>{listItem}</List>;
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};