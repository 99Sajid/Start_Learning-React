import { use } from "react";
import Post from './Post'

export default function Posts({ PostsPromise }) {
  const makeBorder = {
    border: '2px solid black',
    margin: '10px',
    padding: '10px'
  };

  const posts = use(PostsPromise); // unwraps Promise (React 19 feature)
  console.log(posts);

  return (
    <div style={makeBorder}>
      <h2>All posts are here: {posts.length}</h2>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
