import React from 'react'
import logo from '../img/Logo.png'
import profilePic from "../img/profile.webp"
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Search from './Search';

const NavBar = () => {
  const LogOut =()=>{
    signOut(auth).then(() => {
      localStorage.removeItem("current user");
      window.location.href = '/Login';
    }).catch((error) => {
      console.log(error);
    });
    
  }
 
  return (
    <nav>
        <img src={logo} alt="" className='logo'/>
        <Search />
        <div className='prof'>
            <p>panier</p>
            <img src={profilePic} alt="" className='profilePic'/>
            <button onClick={LogOut} className="logoutBTN">log out</button>
            </div>
    </nav>
  )
}

export default NavBar;