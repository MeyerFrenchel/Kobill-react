import React, { useState } from 'react'
import { MenuItems } from '../MenuItems';
import './Dropdown.css';

const Dropdown = () => {
    const[click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    return (
        <div>
            <ul onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>
                        <a className={item.cName} href="#" onClick={() => setClick(false)}>
                            {item.title}
                        </a>
                    </li>
                )
            })}
            </ul>
        </div>
    );
};

export default Dropdown;
