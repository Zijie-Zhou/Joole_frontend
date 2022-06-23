import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function Search() {

  //const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);

  const [project, setProject] = useState([]);
  const [product, setProduct] = useState([]);
  const [value, setValue] = React.useState(6);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  let navi = useNavigate();



  function searchAction() {

    let token = user.token;

    console.log(token);

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios
      .get('http://localhost:8080/project/findall_project', config)
      .then(res => {
        if (res.data.type != undefined && res.data.type == "error") {
          alert(Object.values(res.data.error)[0]);
        } else {
          setProject(res.data);
          console.log(res.data);
        }
      })
      .catch(err => { alert(err); });

      axios
      .get('http://localhost:8080/project/get_product_from_project?project_id='+value, config)
      .then(res => {
        if (res.data.type != undefined && res.data.type == "error") {
          alert(Object.values(res.data.error)[0]);
        } else {
          setProduct(res.data);
          console.log(res.data);
        }
      })
      .catch(err => { alert(err); });
  }


  useEffect(() => {
    searchAction();
  }, [value]);


  return (
    <div>
      <div style={{ display: "flex" }}>

        <div style={{ marginLeft: "150px" }}>
          <select value={value} onChange={handleChange} style={{ height: "58px" }}>
            {project.map((option) => (
              <option value={option.id}>{option.projectName}</option>
            ))}
          </select>
        </div>

        <div style={{width:"850px"}}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={product.map((option) => option.productName)}
            renderInput={(params) => <TextField {...params} label = "Search..."/>}
          />
        </div>
        <button style={{ color: "white", backgroundColor: "#336699", border: "none", width: "100px",height:"58px" }}

        >Search</button>

      </div>

      <br />
      <br />

      <button style={{ color: "white", fontSize: "20px", backgroundColor: "#8585ad", border: "none", height: "50px", width: "150px", marginLeft: "600px" }}

        onClick={() => {

          navi("/product");

        }}

      >Go shopping</button>


    </div>

  );
}

export default Search;