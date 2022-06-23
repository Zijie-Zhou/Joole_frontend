import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './ProfilePage';
import Login from './LoginPage';
import Signup from './RegisterPage';
import SearchPage from './SearchPage';
import ProductPage from './ProductPage';
import DetailPage from './DetailPage';
import Logout from './component/Logout';
import SignupButton from './component/SignupButton';
import ProtectedRoute from './ProtectedRoute';

import { useSelector } from "react-redux";
import HomeButton from './component/HomeButton';
import ProfileButton from './component/ProfileButton';
import LoginButton from './component/LoginButton';

function App() {

  const user = useSelector((state) => state.user.value);


  return (
    <Router>
      <div className='APP'>

        <div style={{marginLeft:"0", marginRight:"0", marginTop:"0", height:"40px", backgroundColor:"#24478f", display: "flex"}}>

          <div style={{marginLeft:"100px"}}>
            {user.isAuth ? null : <LoginButton/>}
          </div>     

          <div style={{marginLeft:"1000px"}}>
            {user.isAuth ? <HomeButton/> : null}
          </div>     

          <div style={{marginLeft:"50px"}}>
            {user.isAuth ? <ProfileButton/> : null}
          </div>    

          <div style={{marginLeft:"50px"}}>
            <SignupButton/>
          </div>

          
          <div style={{marginLeft:"50px"}}>
            {user.isAuth ? <Logout/> : null}
          </div>
          
                    
        </div>

        <div className='content'>

          <Routes>

            <Route path="/" element={<Login/>}/>

            <Route path="/signup" element={<Signup/>}/>

            <Route element={<ProtectedRoute />}>

              <Route path="/profile" element={<Profile/>}/>

              <Route path="/search" element={<SearchPage/>}/>

              <Route path="/detail" element={<DetailPage/>}/>

              <Route path="/product" element={<ProductPage/>}/>

            </Route>

            
          </Routes>

          

        </div>
      
      </div>
    </Router>
  );
}

export default App;
