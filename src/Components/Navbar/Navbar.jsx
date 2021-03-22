import React from 'react';
import './Navbar.css';
import Logo from '../../assets/img/logo_2@1X.png';
import SearchIcon from '../../assets/img/Rectangle 46@1X.png';

const Navbar = () => {
    return (
    <nav className='NavbarItems'>
        <div className="navbar-logo">
            <img src={Logo} alt=""/>
        </div>
        <div className='header-form'>
        <input type="search" placeholder="Cautare produs dorit..."/>
        <button className='search-btn' >
        
        <i className="fas fa-search fa-2x"></i>
        </button>
        </div>
        <div className="contulMeu">
        <div>
        <i className="far fa-user "><span className='login'>Logare</span></i>
        <p className='yellow-text'>Contul meu</p>
        </div>
        <div>
        <i className="fas fa-shopping-cart "><span className='login'>Cos</span></i>
        <p className='yellow-text'>245.95lei</p>
        </div>
        </div>
        
        
    </nav>
  
    );
};

export default Navbar;
