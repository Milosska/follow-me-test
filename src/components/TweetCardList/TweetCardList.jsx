import { useEffect } from 'react';
import { useState } from 'react';
import { TweetCard } from 'components/TweetCard/TweetCard';
import { List } from './TweetCardList.styled';

export const TweetCardList = ({ users, filter = 'all' }) => {
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
    let newList;

    switch (filter) {
      case 'all':
        setList(users);
        break;

      case 'follow':
        newList = users.filter(user => !unfollowedUsers.includes(user.id));
        setList(newList);
        break;

      case 'followings':
        newList = users.filter(user => unfollowedUsers.includes(user.id));
        setList(newList);
        break;

      default:
        return;
    }
  }, [filter, followedUsers, users]);

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
