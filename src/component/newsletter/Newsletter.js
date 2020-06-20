import React from 'react'
import './newsletter.css'
const Newsletter = ( ) => {
    return(
        <div className='newsletter'>
            <h2>
                newsletter
            </h2>
            <form>
                <input type='text' className='newsletter-text' placeholder='name' />
                <input className='newsletter-email' type='email' placeholder='email'/>
                <input className='btn newsletter-btn' type='submit' value='subscribe'/> 
            </form>
        </div>
    )
}

export default Newsletter
