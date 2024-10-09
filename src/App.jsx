import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import ProfilePage from './pages/ProfilePage';
import PostPage from './pages/PostPage';

function App() {
  
  let [users, setUsers] = useState([]);
  let [posts, setPosts] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

      const allusers = await fetch("https://jsonplaceholder.typicode.com/users");
      const userData = await allusers.json();
      

      setPosts(data);
      setUsers(userData);
      // console.log("Allposts", data);
      // console.log("AllUsers", users);
    }
    fetchData();
  }, [])

  return (
    <>
    <Router>
          <Navigation/>
        <Routes>
          <Route path="/" element={<HomePage posts={posts}/>}></Route>
          <Route path="profile/:id" element={<ProfilePage users={users}/>}></Route>
          <Route path="post/:id" element={<PostPage data={posts}/>}></Route>
        </Routes>

    </Router>
      
    </>
  )
}

export default App
