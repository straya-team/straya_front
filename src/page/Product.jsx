import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Add from "../img/add.png";
import DropDownMenu from '../components/DropDownMenu';
const Product = () => {
  const [selected , setSelected] = useState("");
  return (
    <div className='product'>
        <NavBar/>
        <div className='formulaireP'>
        <h1>ajouter votre produit</h1>
            <form action="">
                <input type="text" placeholder='nom de produit'/>
                <input type="text" placeholder='prix'/>
                <DropDownMenu selected={selected} setSelected={setSelected} />
                <input type="text" placeholder='emplacement'/>
                <label className='file' htmlFor='file'>
                <img src={Add} alt="" />
                  <span>ajouter une photo</span>
                  <input type="file" id='file' accept='image/*' className='inpFile'/>
                </label>
                <button type='submit'>
                  ajouter votre produit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Product