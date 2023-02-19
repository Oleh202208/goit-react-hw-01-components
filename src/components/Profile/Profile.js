import PropTypes from 'prop-types';
import {
  Container,
  UserThumb,
  Avatar,
  UserName,
  UserTag,
  Location,
  StatList,
  StatListItem,
  StatLabel,
  StatValue,
} from './Profile.styled';

export const Profile = ({user:{avatar,username,tag,location, stats}}) =>(
  <Container>
    <UserThumb>
      <Avatar src={avatar} alt="User avatar" />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <Location>{location}</Location>
    </UserThumb>

    <StatList>
      <StatListItem>
        <StatLabel>Followers</StatLabel>
        <StatLabel>{stats.followers}</StatLabel>
      </StatListItem>
      <StatListItem>
        <StatLabel>Views</StatLabel>
        <StatLabel>{stats.views}</StatLabel>
      </StatListItem>
      <StatListItem>
        <StatLabel>Likes</StatLabel>
        <StatLabel>{stats.likes}</StatLabel>
      </StatListItem>
    </StatList>
  </Container>
);

Profile.propTypes ={
  user: PropTypes.shape({
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape( {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,}),
  }),
};