import React from 'react'
import { useNavigate } from "react-router-dom";


function LoginButton() 
{
let navi = useNavigate();

  return (
    <div>
        <button style={{height:"40px"}}
                onClick={
                    () =>{
                        navi("/");
                    }
                }
        >
            Login
        </button>
    </div>
  );
}

export default LoginButton;