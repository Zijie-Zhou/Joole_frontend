import React from 'react';
import Login from './component/Login';
import Profile from './component/Profile';




function LoginPage() {
  return (
    <div style={{backgroundColor:"#b3d9ff", height:"800px"}}>

      <div style={{marginLeft:"450px"}}>
        
        <div style = {{height:"50px", width:"100px"}}>
            <img src={process.env.PUBLIC_URL + '/joole.png'} />
        </div>
        <br/>
       
        <div style= {{marginTop:"150px"}}>
            <Login />
        </div>


      </div>

    </div>
    
  );
}

export default LoginPage;
 