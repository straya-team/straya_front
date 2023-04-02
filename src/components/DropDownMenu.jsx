import React, { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
const DropDownMenu = ({selected, setSelected}) => {
    const [isActive , setIsActive] = useState(false);
    const options = ["react", "react2" ,"react3" ,"react4"]
  return (
    <div className='dropdown'>
        <div className="dropdownBTN" onClick={e => setIsActive(!isActive)}>
        {selected}
        <FaCaretDown/>
        </div>
        {isActive && (
            <div className="dropdownContent">
            {
                options.map(option =>(
                    <div className="dropdownItem" onClick={e=> 
                        {
                            setSelected(option)
                            setIsActive(false)
                        }
                    }>
                        {option}
                    </div>
            ))
            }
            </div>
        )

        }
    </div>
  )
}

export default DropDownMenu