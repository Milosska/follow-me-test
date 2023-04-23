import { Link } from 'react-router-dom';
import { Title } from 'components/Title/Title';
import { Container, PageMotto, TweetLink } from './Home.styled';

const Home = () => {
  return (
    <>
      <Container>
        <Title />
        <PageMotto>Fint a tweet to your liking!</PageMotto>
        <TweetLink as={Link} to="/tweets">
          Go to tweets
        </TweetLink>
      </Container>
    </>
  );
};

export default Home;
