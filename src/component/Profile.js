import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { useSelector } from "react-redux";


function Profile() {


  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <h2>Profile display</h2>
      <div>
        <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} src={process.env.PUBLIC_URL + '/profile.png'} />
      </div>
      <div style={{marginTop:"50px"}}>
        <table>
          <tr style={{backgroundColor: "#e0e0eb"}}>
            <td>Name:</td>
            <td>{user.name}</td>
          </tr>
          <tr style={{backgroundColor: "#e0e0eb"}}>
            <td>Password:</td>
            <td>{user.password}</td>
          </tr>
          <tr style={{backgroundColor: "#e0e0eb"}}>
            <td>Token:</td>
            <td>{user.token}</td>
          </tr>
        </table>
      </div>

    </div>
  );
}
export default Profile;