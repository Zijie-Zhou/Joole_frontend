import React from 'react'
import Signup from './component/Signup';


function RegisterPage() {
  return (
    <div style={{backgroundColor:"#b3d9ff", height:"800px"}}>
      <div style = {{marginLeft:"450px"}}>
        <div style = {{height:"50px", width:"100px"}}>
            <img src={process.env.PUBLIC_URL + '/joole.png'} />
        </div>
        <br/>
        <div style= {{marginTop:"180px"}}>
            <Signup />
        </div>
      </div>
    </div>
    
  );
}

export default RegisterPage;