import React from 'react'
import logo from '../img/logo.png'
import panier from '../img/panier.png'
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
  function Panier() {
    const panierDisplay = document.querySelector('.panierDisplay');
    panierDisplay.classList.toggle('active');
  }
  
  return (
    <nav>
        <a href="/"><img src={logo} alt="" className='logo'/></a>
        <Search />
        <div className='prof'>
            <div>
              <img src={panier} alt="" className='panier' onClick={Panier}/>
              <div className='panierDisplay'>
                <p>no product added</p>
                <hr />
                <p>total : 0.00 $</p>
              </div>
            </div>
            <a href="/profile"><img src={profilePic} alt="" className='profilePic'/></a>
            <button onClick={LogOut} className="logoutBTN">log out</button>
            </div>
    </nav>
  )
}

export default NavBar;