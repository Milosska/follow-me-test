import { Link } from 'react-router-dom';
import { Title } from 'components/Title/Title';
import { Container, TextThumb, PageMotto, TweetLink } from './Home.styled';
import { ParticlesBg } from 'components/Particles/Particles';

const Home = () => {
  return (
    <>
      <Container>
        <ParticlesBg />
        <TextThumb>
          <Title />
          <PageMotto>Find a tweet to your liking!</PageMotto>
          <TweetLink
            as={Link}
            to="/tweets"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Go to tweets
          </TweetLink>
        </TextThumb>
      </Container>
    </>
  );
};

export default Home;
