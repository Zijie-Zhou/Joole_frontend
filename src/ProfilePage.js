import React from 'react'
import Profile from './component/Profile';


function ProfilePage() {
  return (
    <div  style={{ backgroundColor: "#b3d9ff", height: "800px"}}>
      
      <img style={{marginLeft:"500px", height: "200px", width: "380px" }} src={process.env.PUBLIC_URL + '/joole.png'} />
     
      
      <div style={{ marginLeft: "200px" }}>
        <Profile />
      </div>

     

    </div>

  );
}

export default ProfilePage;