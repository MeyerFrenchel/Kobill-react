import React from 'react'
import './Products.css';
import MachineImg from '../../assets/img/group.png';
import Button from '../Button/Button';
const Products = () => {
    return (
        <div className='product-page'>
            <div className="product-text">
            <h1>Produsele iWeld</h1>
            <p>Cea mai noua tehnologie pentru protectia si confortul tau</p>
            <Button/>
            </div>
            <img className='group' src={MachineImg} alt=""/>
        </div>
    )
}

export default Products
