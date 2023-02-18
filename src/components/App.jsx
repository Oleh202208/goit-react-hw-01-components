import UserProfile from '../user.json';
import DataStatistics from '../data.json';
import Friends from '../Friends.json';
import transactions from "../transactions.json" ;


import { Profile } from "./Profile/Profile";
import { Statistic } from './Statistics/Statistic';
import { FriendListItem } from './Friends/FriendListItem';
import {TransactionHistory} from './Transaction/TransactionHistory.js'







export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile user={UserProfile}/>
      <Statistic stats={DataStatistics}/>
      <FriendListItem friends={Friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
