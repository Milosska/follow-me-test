import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TweetCardList } from 'components/TweetCardList/TweetCardList';
import { Container, LoadMoreBtn, BackLink } from './TweetsPage.styled';
import { MdArrowBackIos } from 'react-icons/md';

const TweetsPage = () => {
  const location = useLocation();

  return (
    <>
      <Container>
        <BackLink as={Link} to={location.state?.from ?? '/'}>
          <MdArrowBackIos /> Go back
        </BackLink>
        <TweetCardList />
        <LoadMoreBtn>Load more</LoadMoreBtn>
      </Container>
    </>
  );
};

export default TweetsPage;
