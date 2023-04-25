import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TweetCardList } from 'components/TweetCardList/TweetCardList';
import { SelectBar } from 'components/SelectBar/SelectBar';
import { Loader } from 'components/Loader/Loader';
import {
  Container,
  SelectThumb,
  LoadMoreBtn,
  BackLink,
} from './TweetsPage.styled';
import { MdArrowBackIos } from 'react-icons/md';
import { fetchUsers } from 'helpers/fetchAPI';
import { useFollowing } from 'hooks/useFollowing';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [followedUsers, setFollowedUsers] = useState(
    JSON.parse(localStorage.getItem('followed')) || []
  );
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [enableFetch, setEnableFetch] = useState(null);
  const [endOfResults, setEndOfResults] = useState(false);
  const location = useLocation();
  const followedId = useFollowing(users, followedUsers);

  useEffect(() => {
    localStorage.setItem('followed', JSON.stringify(followedUsers));
  }, [followedUsers]);

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
          setEndOfResults(true);
          return;
        }

        page === 1 ? setUsers([...data]) : setUsers(prev => [...prev, ...data]);
        setEnableFetch(true);
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
        <SelectThumb>
          <BackLink
            as={Link}
            to={location.state?.from ?? '/'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <MdArrowBackIos /> Go back
          </BackLink>
          <SelectBar setFilter={setFilter} />
        </SelectThumb>
        <TweetCardList
          users={users}
          filter={filter}
          setEnableFetch={setEnableFetch}
          followedId={followedId}
          setFollowedUsers={setFollowedUsers}
          endOfResults={endOfResults}
        />
        {!isLoading && enableFetch && (
          <LoadMoreBtn
            onClick={handleLoadMore}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Load more
          </LoadMoreBtn>
        )}
        {isLoading && <Loader />}
      </Container>
    </>
  );
};

export default TweetsPage;
