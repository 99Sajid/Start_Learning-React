import { use } from "react";
import Friend from "./friend";
import './App.css';

export default function Friends({ FriendsPromise }) {
  const friends = use(FriendsPromise); // works only on server
  return (
    <div className="bcard">
      <h3>Friends: {friends.length}</h3>
      {
        friends.map(friend => <Friend key={friend.id} friend={friend}/>)
      }
    </div>
  );
}
