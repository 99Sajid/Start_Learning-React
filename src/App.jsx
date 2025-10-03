import Friends from './friends';
import Users from './users';
import Batsman from './Batsman';
import Counter from './export';
import Posts from './Posts';


import './App.css';
import { Suspense } from 'react';

// const fatchUsers=fetch('https://jsonplaceholder.typicode.com/users')
//  .then(res => res.json())

const fetchFriends= async()=>{
       const res=await fetch("https://jsonplaceholder.typicode.com/users");
       return res.json();
}

const fetchPosts=async() =>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}
function App() {
  function handleClick() {
    alert('I am clicked.');
  }
  const clikedStyle={
    border:'2px solid black'
  }
  const FriendsPromise=fetchFriends();
  const PostsPromise=fetchPosts();

  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<h4>Posts are coming.......</h4>}>
         <Posts PostsPromise={PostsPromise}></Posts>
      </Suspense>





      
       <Suspense fallback={<h3>Loading friends...</h3>}>
        <Friends FriendsPromise={FriendsPromise} />
      </Suspense>
      
      <Batsman></Batsman>
      <Counter />
      <button style={clikedStyle} onClick={handleClick}>Click Me 1</button>
      <button style={clikedStyle} onClick={handleClick}>Click Me 2</button>
      <button style={clikedStyle} onClick={handleClick}>Click Me 3</button>
      <button style={clikedStyle} onClick={handleClick}>Click Me 4</button>
    </>
  );
}

export default App;
