import React from 'react'

const Mainbody = () => {
  const MyStyle={height:350};

  return (
    
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
<div style={MyStyle} class="carousel-inner">
  <div class="carousel-item active " data-bs-interval="1800">
    
    <img src="https://images.unsplash.com/photo-1651942365278-c83cf3014ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxyZXN0dXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=180" class="d-block w-100" alt="..." style={MyStyle}/>
  </div>
  <div  class="carousel-item" data-bs-interval="1800">
    <img src="https://images.unsplash.com/photo-1588510474135-9c25001c892f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNsdWJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..." style={MyStyle}/>
  </div>
  <div   class="carousel-item" data-bs-interval="1800">
    <img src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsdWJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" class="d-block w-100" alt="..." style={MyStyle}/>
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>
  )
}

export default Mainbody