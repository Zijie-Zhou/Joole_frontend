import React from 'react'
import Search from './component/Search';


function SearchPage() {
  return (
    <div style={{backgroundColor:"#b3d9ff", height:"800px"}}>

      <div style={{marginLeft:"450px"}}>

        <div style = {{height:"50px", width:"100px"}}>
              <img src={process.env.PUBLIC_URL + '/joole.png'} />
        </div>

      </div>

      
      <div style= {{marginTop:"190px"}}>
          <Search />
      </div>
        
    </div>
  );
}

export default SearchPage;