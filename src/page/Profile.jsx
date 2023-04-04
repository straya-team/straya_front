import { onAuthStateChanged  } from "firebase/auth";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { auth } from "../firebase";
import profilePic from "../img/profile.webp";
import "../style.scss";

const Profile = (props) => {
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const Loggeduser = localStorage.getItem("current user");
      if (Loggeduser === user.uid) {
        setImage(user.photoURL);
        setUsername(user.displayName);
      }
    });
  }, []);

  
  
  return (
    <div>
      <NavBar />
      <div className="profile">
        <img src={image ? image : profilePic} alt="" className="profilePic" />
        <p>{username ? username : "user name"}</p>
      </div>
    </div>
  );
};

export default Profile;
