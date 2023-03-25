import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
 
 const Size={
  width:35,
  height:35,
  borderRadius:'50% 50%',
 margin: 5
 
 }
 const MySize={
  width:50,
  height:50,
  borderRadius:'50% 50%'
 }
 
 const s1={
  zIndex:2,
  backgroundColor:'#fafaf7',
  
 }
  


  return ( 
    <>
<nav class="navbar navbar-expand   "  >
  <div class="container-fluid">
    <a class="navbar-brand  fs-6" href="#"  >
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>  Dilevery</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcIoViHxhxGRmPkylqC9T6vSkyaAPPfw0yYAekUxf1-ppl3UYbQvUH5_lii7wHssSe_KQ&usqp=CAU" alt="" style={{width:25,height:25,borderRadius:'50% 50%'}}/>
            Chandigarh
          </a>
          <ul class="dropdown-menu " style={{zIndex:3}}>
            <li><a class="dropdown-item" href="#">Chandigarh</a></li>
            <li><a class="dropdown-item" href="#">Mohali</a></li>
            <li><a class="dropdown-item" href="#">Ludihana</a></li>
            
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            USD
          </a>
          <ul class="dropdown-menu " style={{zIndex:3}}>
            <li><a class="dropdown-item" href="#">USD</a></li>
            <li><a class="dropdown-item" href="#">EUR</a></li>
            <li><a class="dropdown-item" href="#">Rupees</a></li>
            
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            English
          </a>
          <ul class="dropdown-menu " style={{zIndex:3}}>
            <li><a class="dropdown-item" href="#">English</a></li> 
            <li><a class="dropdown-item" href="#">Hindi</a></li> 
          </ul>
        </li>
</ul>
        <ul class="nav justify-content-end">
  
  <li class="nav-item">
    <a class="nav-link" href="#">FAQ</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
     <> <Link to="/contact">Contact</Link></>
     </a>
  </li>
 
      </ul>
      
    </div>
  </div>
</nav>



<nav class="navbar  sticky-top" style={s1}  >
  <div class="container-fluid"  >
    <a class="navbar-brand" href="#"><img src="https://image.shutterstock.com/image-vector/letter-b-pulse-music-player-260nw-1581685942.jpg" alt="" style={Size}/>D~MusicaLane</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div 
      class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
        <img src="https://image.shutterstock.com/image-vector/letter-b-pulse-music-player-260nw-1581685942.jpg" alt="" style={Size}/>D~MusicaLane
        </h5>
        <button  type="button"  class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
      </div>
      <div class="offcanvas-body" >
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg> <> <Link to="/profile">Profile</Link></>
&nbsp;</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
&nbsp;Booking(Current)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
              &nbsp;Previous Booking</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
             &nbsp;Favoroite</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Our Motto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Company Policies</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Transation History
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              
             
            </ul>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar