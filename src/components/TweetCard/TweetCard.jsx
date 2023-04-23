import { useState } from 'react';
import { Button } from 'components/Button/Button';
import {
  Container,
  ImgBorder,
  ImgThumb,
  ImgLabel,
  CardText,
} from './TweetCard.styled';
import * as userImgPlaceholder from '../../images/card/user-placeholder.jpg';

export const TweetCard = ({ userObj, setFollowedUsers, followed }) => {
  const uiFollowers = userObj.followers.toLocaleString('en-IN');
  const uiTweets = userObj.tweets.toLocaleString('en-IN');

  const [isActive, setIsActive] = useState(followed);

  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
      setFollowedUsers(prev => [...prev, userObj]);
    } else {
      setIsActive(false);
      setFollowedUsers(prev => {
        const newFollowedUsers = prev.filter(
          item => item.user !== userObj.user
        );
        return newFollowedUsers;
      });
    }
  };

  return (
    <Container>
      <ImgBorder>
        <ImgLabel>{userObj.user}</ImgLabel>
        <ImgThumb>
          <img
            src={userObj.avatar ?? userImgPlaceholder.default}
            alt={userObj.user}
          />
        </ImgThumb>
      </ImgBorder>
      <CardText>{uiTweets} Tweets</CardText>
      <CardText>{uiFollowers} Followers</CardText>
      <Button
        text={isActive ? 'Following' : 'Follow'}
        onClick={handleClick}
        isActive={isActive}
      />
    </Container>
  );
};
