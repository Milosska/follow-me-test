import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TweetCardList } from 'components/TweetCardList/TweetCardList';
import { Loader } from 'components/Loader/Loader';
import { Container, LoadMoreBtn, BackLink } from './TweetsPage.styled';
import { MdArrowBackIos } from 'react-icons/md';
import { fetchUsers } from 'helpers/fetchAPI';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [enableFetch, setEnableFetch] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();
    fetchUsers(page, abortController.signal)
      .then(data => {
        if (!data) {
          return;
        } else if (data.length < 3) {
          setUsers(prev => [...prev, ...data]);
          setEnableFetch(false);
          return;
        }

        page === 1 ? setUsers([...data]) : setUsers(prev => [...prev, ...data]);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));

    return () => {
      abortController.abort();
    };
  }, [page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Container>
        <BackLink as={Link} to={location.state?.from ?? '/'}>
          <MdArrowBackIos /> Go back
        </BackLink>
        <TweetCardList users={users} />
        {enableFetch && (
          <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
        )}
        {isLoading && <Loader />}
      </Container>
    </>
  );
};

export default TweetsPage;
