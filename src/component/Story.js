import React from 'react'
import Stories from 'react-insta-stories';

const Story = () => {
  const story = [
   
   {
    url:'https://player.vimeo.com/external/412306034.hd.mp4?s=67a93ffedd18e9e5c46fb05182ac8f4fc423c3cd&profile_id=174&oauth2_token_id=57447761',
    type:'video'
  },
  {
    url: 'https://player.vimeo.com/external/390187828.hd.mp4?s=130a7aa3d4352a26e60b572fdfbcefba499c24cf&profile_id=174&oauth2_token_id=57447761',
    type:'video',
  
  },
   
  
  ]
  return (
    <>
    <div class="container d-flex justify-content-center">
    <div class="card p-3 py-4">
        <div class="text-center"> 
    <Stories
    loop={true}
    stories={story}
   
        />
     </div>
    </div>
</div>
    </>
    
  )
}

export default Story