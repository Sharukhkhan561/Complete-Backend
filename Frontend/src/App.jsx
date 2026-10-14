import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './pages/createPost'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/about' element={<h1>About us</h1>}/>
      </Routes>
    </Router>
  )
}

export default App