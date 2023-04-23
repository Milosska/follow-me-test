import { useEffect } from 'react';
import { useState } from 'react';
import { TweetCard } from 'components/TweetCard/TweetCard';
import { List } from './TweetCardList.styled';

export const TweetCardList = ({ users }) => {
  const [followedUsers, setFollowedUsers] = useState(
    JSON.parse(localStorage.getItem('followed')) || []
  );

  useEffect(() => {
    localStorage.setItem('followed', JSON.stringify(followedUsers));
  }, [followedUsers]);

  return (
    <List>
      {users.map(user => {
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
