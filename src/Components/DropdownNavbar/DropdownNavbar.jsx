import React, { useState } from 'react';
import './DropdownNavbar.css';
import HamburgerImg from '../../assets/img/hamburger.png'
import Dropdown from './Dropdown';
const DropdownNavbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = ()=> {
        setDropdown(!dropdown)
    };



    return (
        <div>
            <ul className='dropdown-nav'>
            <li id='dropdown-list'>
            <img onClick={onMouseEnter} className='hamburger-img' src={HamburgerImg} alt=""/>
            <a href="" id='toate-categ'>
            Toate categoriile
            </a>
            
            {dropdown && <Dropdown />}

            </li>
            <li>
                <a href="#">
                black Friday 2021
                </a>
            </li>
            <li>lichidare stoc</li>
            <li>second hand</li>
            <li>reduceri pret</li>
            <li></li>
            <li></li>
            <li>despre noi</li>
            <li>contact</li>
            </ul>
        </div>
    )
}

export default DropdownNavbar;
