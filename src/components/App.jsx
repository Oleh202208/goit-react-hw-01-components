import { GlobalStyles } from './GlobalStyle';
import UserProfile from './Data/user.json';
import DataStatistics from './Data/data.json';
import Friends from './Data/Friends.json';
import transactions from "./Data/transactions.json" ;


import { Profile } from "./Profile/Profile";
import { Statistic } from './Statistics/Statistic';
import { FriendListItem } from './Friends/FriendListItem';
import {TransactionHistory} from './Transaction/TransactionHistory.js';









export const App = () => {
  return (
    <div>
      <GlobalStyles/>
      <Profile user={UserProfile}/>
      <Statistic stats={DataStatistics}/>
      <FriendListItem friends={Friends}/>
      <TransactionHistory transactions={transactions}/>
    </div>
  );
};
