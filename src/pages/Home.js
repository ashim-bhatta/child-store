import React, { useState } from 'react'
import Nav from '../component/nav/Nav'
import Newsletter from '../component/newsletter/Newsletter'
import Footer from '../component/footer/Footer'

import './home.css'
const Home = ( ) => {
    const [ collections ] = useState([
        {  
            id :0,
            img: 'https://cdn.shopify.com/s/files/1/1439/9526/files/207_795dc165-6afa-4bfe-905e-559c4a52b28d_900x.jpg?v=1589861758',
            name: 'new in'
        },   {  
            id :1,
            img: 'https://cdn.shopify.com/s/files/1/1439/9526/files/139_900x.jpg?v=1585123387',
            name: 'essentials'
        },        {
            id: 2,
            img: 'https://cdn.shopify.com/s/files/1/1439/9526/files/120_900x.jpg?v=1586075267',
            name: 'tops'
        },        {
            id: 3,
            img: 'https://cdn.shopify.com/s/files/1/1439/9526/files/225_900x.jpg?v=1585123451',
            name: 'bottoms'
        },        {
            id: 4,
            img: 'https://cdn.shopify.com/s/files/1/1439/9526/files/211_900x.jpg?v=1585123476',
            name: 'onesies'
        },        {
            id: 5,
            img: 'https://cdn.shopify.com/s/files/1/1439/9526/files/134_900x.jpg?v=1586075282',
            name: 'sprinkles'
        }
       
    ])
    return(
       <div className='home'>
            <Nav />
            <div className='home-content'>
                <div className='grid'>
                    {
                        collections.map((item) => {
                            return(
                                <div className='single-item' key={item.id}>
                                    <img src={item.img} alt={item.name} />

                                    <h2>
                                        {item.name}
                                    </h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Newsletter />
            <Footer />
       </div>
    )
}

export default Home