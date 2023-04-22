import { Button } from 'components/Button/Button';
import { Container, ImgBorder, ImgThumb, CardText } from './TweetCard.styled';
import * as userImgPlaceholder from '../../images/card/user-placeholder.jpg';

export const TweetCard = () => {
  return (
    <Container>
      <ImgBorder>
        <ImgThumb>
          <img src={userImgPlaceholder.default} alt="User" />
        </ImgThumb>
      </ImgBorder>
      <CardText>777 Tweets</CardText>
      <CardText>100500 Followers</CardText>
      <Button />
    </Container>
  );
};
