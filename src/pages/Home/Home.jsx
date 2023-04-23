import { Link } from 'react-router-dom';
import { Container, PageHeader, PageMotto, TweetLink } from './Home.styled';

const Home = () => {
  return (
    <>
      <Container>
        <PageHeader>FollowMe</PageHeader>
        <PageMotto>Fint a tweet to your liking!</PageMotto>
        <TweetLink as={Link} to="/tweets">
          Go to tweets
        </TweetLink>
      </Container>
    </>
  );
};

export default Home;
