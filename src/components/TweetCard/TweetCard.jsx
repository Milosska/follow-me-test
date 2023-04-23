import { Button } from 'components/Button/Button';
import {
  Container,
  ImgBorder,
  ImgThumb,
  ImgLabel,
  CardText,
} from './TweetCard.styled';
import * as userImgPlaceholder from '../../images/card/user-placeholder.jpg';

export const TweetCard = ({ user: { user, avatar, followers, tweets } }) => {
  const uiFollowers = followers.toLocaleString('en-IN');
  const uiTweets = tweets.toLocaleString('en-IN');

  return (
    <Container>
      <ImgBorder>
        <ImgLabel>{user}</ImgLabel>
        <ImgThumb>
          <img src={avatar ?? userImgPlaceholder.default} alt={user} />
        </ImgThumb>
      </ImgBorder>
      <CardText>{uiTweets} Tweets</CardText>
      <CardText>{uiFollowers} Followers</CardText>
      <Button text="Follow" />
    </Container>
  );
};
