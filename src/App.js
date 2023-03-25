import React from 'react'
import Main from "./component/Main"
import { Routes,Route } from 'react-router-dom'
import Contact from './component/Contact'
import Profile from './component/Profile'
import Story from './component/Story'

 const App = () => {
  return ( 
    <>
  
   <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/story" element={<Story/>}/>
   </Routes>
    </>
  )
}
export default App