import { TweetCard } from 'components/TweetCard/TweetCard';
import { List } from './TweetCardList.styled';

export const TweetCardList = ({ users }) => {
  return (
    <List>
      {users.map(user => {
        return <TweetCard key={user.id} user={user} />;
      })}
    </List>
  );
};
