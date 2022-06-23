import React from 'react'
import {logout} from "../Reducer/user";
import setAuthToken from "../util/setAuthToken";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logout() {

    let navi = useNavigate();
    const dispatch = useDispatch();

  return (
      <div >
        <button style={{height:"40px"}} onClick={() => {

            dispatch(logout());
            setAuthToken(false);
            navi("/");

        }}>
            Logout
        </button>
      </div>
    
  )
}

export default Logout