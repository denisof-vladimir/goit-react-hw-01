import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Profile/Profile'
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory'
import friends from "../components/friends.json";
import userData from "../components/userData.json";
import transactions from "../components/transactions.json";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
    <FriendList friends={friends} />
    <TransactionHistory Items={transactions} />
  </>
  )
}

export default App

  