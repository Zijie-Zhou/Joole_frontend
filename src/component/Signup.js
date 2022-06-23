import React, {useState} from 'react';

import { useDispatch } from "react-redux";
//import {login, logout} from "../Reducer/user";
import axios from "axios";

function Signup() {

  //const dispatch = useDispatch();


  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [label, setLabel] = useState("-");


  function signUpAction() {

    const newUser = {
      name: name,
      password: password,
    };

    axios
      .post('http://localhost:8080/user/register', newUser)
      .then(res => {
        if(res.data.type != undefined && res.data.type == "error"){
          alert(Object.values(res.data.error)[0]);
        }else{
          setLabel("User register success !");
        }
      })
      .catch(err => {alert(err)});
}


  return (
    <div>


      <h2 style={{color: "#47476b"}}>Create your account</h2>

      <input style={{height:"30px"}} type = "text"
        placeholder="Username or email"
        size="70"
        onChange = {

            (event) => {
              setName(event.target.value);
            }

        }/>
      <br/>
      <br/>
      <input style={{height:"30px"}} type = "Password"
        placeholder="Password"
        size="70"
        onChange = {

            (event) => {
              setPassword(event.target.value);
            }

        }/>
      
      <br/>
      <br/>
      <button style={{color:"white",backgroundColor:"#336699", border:"none", width:"100px",height:"30px"}} onClick={() => {

        signUpAction();

      }}>
        Sign up
      </button>

      <div style = {{ color: "green"}}>
        <p> {label} </p>
      </div>
      

    </div>
  );
}

export default Signup;