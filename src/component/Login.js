import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import {login, logout} from "../Reducer/user";
import axios from "axios";
import setAuthToken from "../util/setAuthToken";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Login() {

  let navi = useNavigate();

  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const [jwt, setJwt] = useState("");

  const [flag, setFlag] = useState(false);

  function loginAction() {

    axios
      .get('http://localhost:8080/user/login?username='+name+'&password='+password)
      .then(res => {
        if(res.data.type != undefined && res.data.type == "error"){
          dispatch(logout());
          alert("Wrong username or wrong password.");
        }else{
          const token = res.data;
          localStorage.setItem("jwtToken", token);
          setAuthToken(token);

          const decoded = jwt_decode(token);
          
          setJwt(token);
          setFlag(true);
          alert("Login success!");
        }
      })
      .catch(err => {dispatch(logout()); alert("Wrong username or wrong password.");});
}




  return (
    <div>

      <h2 style={{color: "#47476b"}}>Login</h2>

      
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
      <input style={{height:"30px"}} type = "password"
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

        loginAction();

        dispatch(

          login({
            name: name,
            password: password,
            token: jwt,
            isAuth: true,
          })

        );
        if(flag == true)
        {
          navi("/search");
        }
        
      }}>
        Log in
      </button>


    </div>
  );
}

export default Login;