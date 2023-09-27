import React from 'react'

const EmptyCart = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-2 md:gap-5'>
            <img src="/src/assets/empty_cart.svg" className='h-[200px] w-[200px] md:w-1/3 md:h-1/3' />
            <div className="text-black text-3xl md:text-6xl text-center font-billabong">Cart is Empty</div>
        </div>
    )
}

export default EmptyCart
