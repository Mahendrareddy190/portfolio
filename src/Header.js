import React from "react";
import "./Header.css";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="name">
       <Link to="/">
       <h1 className="mahi">M</h1>
       </Link>
      </div>
      <div className="headerMenu">
        <div className="icon1" >
            <Link to='/home'>
                <HomeTwoToneIcon  style={{ fontSize: 30 }} color="primary" /> 
            </Link>
         <div className="icon2 pt-3">
         <Link to='/skill'>
                <HomeTwoToneIcon  style={{ fontSize: 30 }} color="primary" /> 
            </Link>
         </div>
         <div className="icon2 pt-3">
         <Link to='/skill'>
                <HomeTwoToneIcon  style={{ fontSize: 30 }} color="primary" /> 
            </Link>
         </div>
         <div className="icon2 pt-3">
         <Link to='/skill'>
                <HomeTwoToneIcon  style={{ fontSize: 30 }} color="primary" /> 
            </Link>
         </div>
         <div className="icon2 pt-3">
                
         </div>
        <div className="overlay">
            <div className="text">
                home
            </div>
        </div>
        </div>
        
      </div>
      <script>
        
    </script>
    </div>
    
  );
};

export default Header;
