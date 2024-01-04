import AnotherComp from "./AnotherComp";
import { useGetPostsQuery } from "./redux/services/postsApi"

function App() {
  const { data: posts = [] } = useGetPostsQuery();

  return (
    <>
      <h1>Welcome to Reduxjstoolkit demo</h1>
      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
      <AnotherComp />
    </>
  )
}

export default App
