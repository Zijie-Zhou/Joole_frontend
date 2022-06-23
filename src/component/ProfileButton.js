import React from 'react'
import { useNavigate } from "react-router-dom";


function ProfileButton() 
{
let navi = useNavigate();

  return (
    <div>
        <button style={{height:"40px"}}
                onClick={
                    () =>{
                        navi("/profile");
                    }
                }
        >
            Profile
        </button>
    </div>
  );
}

export default ProfileButton;