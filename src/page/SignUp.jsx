import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Add from "../img/add.png";
import { auth, storage } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref as sRef, uploadBytes } from "firebase/storage";
import logo from "../img/logo.png"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [photoUrl, setPhotoUrl] = useState(null);
  const [file, setFile] = useState(null);

  const fileInputRef = useRef(null);
  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const signIn = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        const userId = user.uid;
        localStorage.setItem("current user", user.uid);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
          if (file) {
            // Upload the file to Firebase Storage and get the download URL
            const ImageRef = sRef(storage, `users`);
            const storageRef = sRef(ImageRef, `${userId}`);
            const snapshot = await uploadBytes(storageRef, file);
            const downloadUrl = await getDownloadURL(snapshot.ref);
            // Update photoUrl with the download URL
            setPhotoUrl(downloadUrl);
          } else {
            alert("Please Upload A Photo");
          }
        };
      })
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: prenom + " " + nom,
          email: email,
          photoURL: photoUrl,
        });
        window.location.href = '/';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
      <img src={logo} alt="" className="logo"/>
        <span className="title">Sign up</span>
        <form>
          <input
            type="text"
            placeholder="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <input
            type="text"
            placeholder="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="file">
          <img src={Add} alt="" />
          <span>Ajoutez votre photo</span>
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
          />
          {photoUrl && (
            <img
              src={photoUrl}
              alt="uploaded photo"
              className="uploadedPhoto"
            />
          )}
          <button type="submit" onClick={(e) => signIn(e)}>
            Sign up
          </button>
        </form>
        <p className="link">
          Tu a un compte? <a href="/Login">connecter vous</a>
        </p>
      </div>
      
    </div>
  );
};

export default SignUp;
