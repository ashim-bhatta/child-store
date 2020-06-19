import React, { useState, useContext } from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import {ClothesContex} from '../../contex/ClothesContex'
const Nav = ( ) => {
    const [ isNavOpen, setIsNavOpen ] = useState(false)
    const [ menuItem ] = useState([ 'home', 'about', 'shop', 'contact'])
    const [ clothes, noOfClothesInCart ] = useContext(ClothesContex)
    console.log(noOfClothesInCart);
    
    return(
        <div>
            <nav>
                <div className={isNavOpen?'toggle animate':'toggle'} onClick={() => setIsNavOpen(!isNavOpen)} >
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
                <div className='logo'>
                    <h2>
                        milk
                    </h2>
                </div>
            </nav>
            <div className={isNavOpen?'nav-menu open' :'nav-menu'}>
                    <div className='nav-content'>
                        <p className='para para-bold'>
                            we make millk for your baby
                        </p>
                        <ul className='menu-items'>
                            {
                                menuItem.map((item) => {
                                    return(
                                        <li className='menu-item' key={item}>
                                            <Link to={item}>
                                                {item}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <p className='para' style={{padding : '0 30px 0 0'}}>
                            a handful of clothing for babies designed and handmade with comfort, style and practicality in mind. to be worn day in and out, played in, lived in and then passed onto many tiny's to come — millk is made for your baby.
                        </p>
                    </div>
            </div>
            <div className='cart-menu'>
                <div className='cart'>
                        <FaOpencart className='icon-cart' />
                        <span>
                            {noOfClothesInCart}
                        </span>
                </div>
                <div className='account'>
                    <MdAccountCircle className='icon-account' />
                </div>
            </div>
        </div>
    )
}

export default Nav