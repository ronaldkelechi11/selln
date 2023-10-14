import React, { useState } from 'react'
import Navbar from '../components/Landing/Navbar'
import EmptyCart from '../components/Cart/EmptyCart'

const Cart = () => {
    const [cartIsEmpty, setCartIsEmpty] = useState(true)


    return (
        <div className="flex flex-col w-screen h-screen">
            <Navbar />

            {cartIsEmpty &&
                <EmptyCart />
            }
        </div>
    )
}

export default Cart
