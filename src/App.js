import React from 'react'
import './App.css'
import User from './components/user/user.jsx'
import Post from './components/post/post.jsx'

function App() {
  const [userId, setUserId] = React.useState('1')
  const [postId, setPostId] = React.useState('1')

  return (
    <div className='App'>
      <button onClick={() => setUserId((prev) => String(+prev + 1))}>Change User Id</button>
      <button onClick={() => setPostId((prev) => String(+prev + 1))}>Change Post Id</button>
      <div className='container'>
        <User userId={userId} />
        <Post postId={postId} />
      </div>
    </div>
  )
}

export default App
