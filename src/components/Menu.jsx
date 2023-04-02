import React from 'react'

const Menu = () => {
    const Checkbox =(props) =>{
        const name = props.name;
        return(
            <div>
                <input type="checkbox" />
                <label htmlFor="">{name}</label>
            </div> 
        )
    }
  return (
    <div className='checkBoxMenu'>
    <h2>Menu</h2>
        <div className='Menu'>
            <Checkbox name="test1"/>
            <Checkbox name="test2"/>
            <Checkbox name="test3"/>
            <Checkbox name="test4"/>
        </div>
    </div>
  )
}

export default Menu