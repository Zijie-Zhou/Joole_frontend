import React from 'react'
import { useNavigate } from "react-router-dom";


function HomeButton() 
{
let navi = useNavigate();

  return (
    <div>
        <button style={{height:"40px"}}
                onClick={
                    () =>{
                        navi("/search");
                    }
                }
        >
            Home
        </button>
    </div>
  );
}

export default HomeButton;