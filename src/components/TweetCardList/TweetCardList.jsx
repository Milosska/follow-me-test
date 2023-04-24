import { useEffect } from 'react';
import { useState } from 'react';
import { TweetCard } from 'components/TweetCard/TweetCard';
import { List } from './TweetCardList.styled';

export const TweetCardList = ({
  users,
  filter = 'all',
  setPage,
  enableFetch,
}) => {
  const [followedUsers, setFollowedUsers] = useState(
    JSON.parse(localStorage.getItem('followed')) || []
  );
  const [list, setList] = useState([]);

  useEffect(() => {
    localStorage.setItem('followed', JSON.stringify(followedUsers));
  }, [followedUsers]);

  useEffect(() => {
    const unfollowedUsers = [];
    followedUsers.forEach(user => unfollowedUsers.push(user.id));
    let newList = [];

    const handleNewList = newList => {
      if (newList.length < 3) {
        setPage(prev => prev + 1);
        return;
      }
      if (newList.length % 3 !== 0) {
        if (enableFetch === false) {
          setList(newList);
          return;
        }

        let index = 3 * Math.floor(newList.length / 3);
        const filtredList = newList.splice(0, index);
        setList(filtredList);
        return;
      }
      setList(newList);
    };

    switch (filter) {
      case 'all':
        setList(users);
        break;

      case 'follow':
        newList = users.filter(user => !unfollowedUsers.includes(user.id));
        handleNewList(newList);
        break;

      case 'followings':
        newList = users.filter(user => unfollowedUsers.includes(user.id));
        handleNewList(newList);
        break;

      default:
        return;
    }
  }, [filter, followedUsers, users, setPage, enableFetch]);

  return (
    <List>
      {list.map(user => {
        const isUserFollowed = followedUsers.filter(
          item => item.user === user.user
        );
        const followed = isUserFollowed.length > 0 ? true : false;

        return (
          <TweetCard
            key={user.id}
            userObj={user}
            setFollowedUsers={setFollowedUsers}
            followed={followed}
          />
        );
      })}
    </List>
  );
};
