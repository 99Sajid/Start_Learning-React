export default function Post({ post }) {
  return (
    <div>
      <p><strong>{post.title}</strong></p>
      <p>{post.body}</p>
    </div>
  );
}
