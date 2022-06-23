import React from 'react'
import { useNavigate } from "react-router-dom";


function SignupButton() 
{
let navi = useNavigate();

  return (
    <div>
        <button style={{height:"40px"}}
                onClick={
                    () =>{
                        navi("/signup");
                    }
                }
        >
            Signup
        </button>
    </div>
  );
}

export default SignupButton;