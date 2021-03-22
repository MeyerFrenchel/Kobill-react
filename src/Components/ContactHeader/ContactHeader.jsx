import React from 'react';
import PhoneImg from "../../assets/img/Icon awesome-phone-alt@1X.png";
import MailImg from "../../assets/img/Icon ionic-ios-mail-open@1X.png";
import ServicesImg from "../../assets/img/repairing-service@1X.png";
import HeartImg from "../../assets/img/heart.png";
import './ContactHeader.css';

const ContactHeader = () => {
    return (
        <div className='top-bar'>
        <ul className='contact'>
            <li>
                <img className='contact-img' src={PhoneImg} alt="phoneImg"/>
                <a href="#">
                    Comenzi: +40-755-KOBIL (562455)
                </a>
            </li>
            <li>
            <img className='contact-img' src={PhoneImg} alt="phoneImg"/>
            <a href="#">
                Info: +40-755-KOBIL (562455)
            </a>
            </li>
            <li><img className='contact-img' src={MailImg} alt="mailImg"/>
            <a href="#">
                Office@kobil.ro
            </a></li>
            
            
        </ul>
        <div className='services'>
            <img className='contact-img' src={ServicesImg} alt="serviceImg"/>
            <a href="#">
                Servicii
            </a>
            <img className='contact-img' src={HeartImg} alt="heartImg"/>
            <a href="#">
                Favorite
            </a>
            </div>
        </div>

    )
};

export default ContactHeader;
