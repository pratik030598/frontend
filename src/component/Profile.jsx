import React from 'react'
import "./style.css";

const Profile = () => {
  return (
	<div class="row py-5 px-4"> 
	<div class="col-md-5 mx-auto">  
	<div class="bg-white shadow rounded overflow-hidden">
		 <div class="px-4 pt-0 pb-4 cover"> 
		 <div class="media align-items-end profile-head"> 
		 <div class="profile mr-3">
			<img src="data:image/jpeg;base64,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" alt="..." width="130" class="rounded mb-2 img-thumbnail"/>
			<a href="#" class="btn btn-outline-dark btn-sm btn-block">Edit profile</a>
			</div>
			 <div class="media-body mb-5 text-white">
				 <h4 class="mt-0 mb-0">Ankur Singh</h4> 
				 <p class="small mb-4"> 
				 <i class="fas fa-map-marker-alt mr-2"></i>Chandigarh</p>
				  </div> 
				  </div> 
				  </div>
				   <div class="bg-light p-4 d-flex justify-content-end text-center">
					 <ul class="list-inline mb-0"> 
					 <li class="list-inline-item"> 
					 <h5 class="font-weight-bold mb-0 d-block">215</h5>
					 <small class="text-muted"> <i class="fas fa-image mr-1"></i>Photos</small>
					  </li> <li class="list-inline-item"> 
					  <h5 class="font-weight-bold mb-0 d-block">745</h5>
					  <small class="text-muted"> <i class="fas fa-user mr-1"></i>Followers</small>
					   </li>
					    <li class="list-inline-item">
						<h5 class="font-weight-bold mb-0 d-block">340</h5>
						<small class="text-muted"> <i class="fas fa-user mr-1"></i>Following</small>
					</li>
				</ul>
		</div>
		<div class="px-4 py-3">
		<h5 class="mb-0">About</h5>
		<div class="p-4 rounded shadow-sm bg-light"> 
		<p class="font-italic mb-0">Web Developer</p>
		<p class="font-italic mb-0">Lives in New York</p>
		<p class="font-italic mb-0">Photographer</p>
		</div>
		 </div> 
	 <div class="py-4 px-4">
	<div class="d-flex align-items-center justify-content-between mb-3">
 <h5 class="mb-0">Recent photos</h5>
	<a href="#" class="btn btn-link text-muted">Show all</a>
	 </div> 
	<div class="row"> 
<div class="col-lg-6 mb-2 pr-lg-1">
	<img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/>
</div>
	<div class="col-lg-6 mb-2 pl-lg-1">
<img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/></div> <div class="col-lg-6 pr-lg-1 mb-2">
<img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" class="img-fluid rounded shadow-sm"/>
	</div> 
<div class="col-lg-6 pl-lg-1">
<img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/>
</div> 
	</div>
</div>
</div>
 </div>
</div>
  )
}

export default Profile