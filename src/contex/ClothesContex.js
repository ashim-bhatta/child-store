import React, { createContext, useState } from 'react'
import img1 from '../assets/img/img-1.webp'
import img2 from '../assets/img/img-2.webp'
import img3 from '../assets/img/img-3.webp'
import img4 from '../assets/img/img-4.webp'
import img5 from '../assets/img/img-5.webp'
import img6 from '../assets/img/img-6.webp'
import img7 from '../assets/img/img-7.webp'
import img8 from '../assets/img/img-8.webp'
import img9 from '../assets/img/img-9.webp'
import img10 from '../assets/img/img-10.webp'
import img11 from '../assets/img/img-11.webp'
import img12 from '../assets/img/img-12.webp'
import img13 from '../assets/img/img-13.jpg'



export const ClothesContex = createContext()

export const ClothesContexProvider = ( props ) => {
    const [ noOfClothesInCart, setNoOfClothesInCart ] = useState(1)

    const [ clothes ] = useState([
        {
            id : 0,
            img : img1
        },
        {
            id : 1,
            img : img2
        },
        {
            id : 2,
            img : img3
        },
        {
            id : 3,
            img : img4
        },
        {
            id : 4,
            img : img5
        },
        {
            id : 5,
            img : img6
        },
        {
            id : 6,
            img : img7
        },
        {
            id : 7,
            img : img8
        },
        {
            id : 8,
            img : img9
        },
        {
            id : 9,
            img : img10
        },
        {
            id : 10,
            img : img11
        },
        {
            id : 11,
            img : img12
        },        
        {
            id : 12,
            img : img13
        }
    ])
    return(
        <ClothesContex.Provider value={[clothes, noOfClothesInCart]}>
            {props.children}
        </ClothesContex.Provider>
    )
}