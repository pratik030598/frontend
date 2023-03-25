import React from 'react'
import Navbar from './Navbar';

import Mainbody from "./Mainbody"
import FooterBody from './FooterBody';
import { Link } from 'react-router-dom';
import Mbody from './Mbody';

const Main = () => {
  return (
   <>
   <Navbar/>
   <Mainbody/>
   < >  <Link to="/story">Stories</Link> </>
   <h2>Resturant & Musicals</h2>
        <Mbody/>
       
   <FooterBody/>
   </>
  )
}

export default Main