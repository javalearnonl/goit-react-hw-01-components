import Profile from "./Profile/Profile";
import profileData from "../components/user";
import Statistics from "./Statistics/Statistics";
import data from "./Statistics/data"
import FriendList  from "./FriendList/FriendList";
import friends from "./FriendList/friends"
import transactions from "./Transactions/transactions";
import TransactionsHistory from './Transactions/TransactionsHistory'
import Container from './Container/Container'



export const App = () => {
  return (
    <Container>
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
      <Statistics title="Upload stats" stats={data} />
       <FriendList friends={friends} />
       <TransactionsHistory transactions={transactions} />
    </Container>
  );
};
