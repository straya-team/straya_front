import React from 'react'
import NavBar from '../components/NavBar';
import Menu from '../components/Menu';
import Chatbot from '../components/Chatbot';
const Main = () => {
  return (
    <div>
        <NavBar /> 
        <div className='mainInterface'>
          <Menu />
          <Chatbot/>
        </div>
    </div>
  )
}

export default Main;