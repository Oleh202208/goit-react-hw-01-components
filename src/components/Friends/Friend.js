import PropTypes from 'prop-types';

import {
  ListItem,
  StatusSpan,
  Image,
  FriendsName,
} from './Friend.styled';
const Friend = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <StatusSpan status={isOnline}></StatusSpan>
      <Image src={avatar} alt="User avatar" width="48" />
      <FriendsName>{name}</FriendsName>
    </ListItem>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;