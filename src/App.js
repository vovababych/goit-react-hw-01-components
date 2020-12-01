import user from "./components/profile/user.json";
import Profile from "./components/profile/Profile";
import statisticalData from "./components/statistics/statistical-data.json";
import Statistics from "./components/statistics/Statistics";
import friends from "./components/friendList/friends.json";
import FriendList from "./components/friendList/FriendList";
import transactions from "./components/transaction/transactions.json";
import Transactions from "./components/transaction/Transactions";

export default function App() {
  return (
    <>
      <Profile
        {...user}
        // name={user.name}
        // tag={user.tag}
        // location={user.location}
        // avatar={user.avatar}
        // stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
}
