
const Ads = () => {
    return (
        // Contains to ads from a customer that choses to advertise
        <div className='w-screen h-64 flex flex-row gap-3 p-3'>
            <Ad image={'/src/assets/images/gamepad.jpg'} discount={20} name={"Multipurpose Gaming Pad"} />
            <Ad image={'/src/assets/images/gamepad.jpg'} discount={20} name={"Multipurpose Gaming Pad"} />
        </div>
    )
}

function Ad({ discount, name, image }) {
    return (
        <div className="w-[50%] h-full bg-white flex flex-row p-2 shadow-xl">
            <div className="flex flex-col w-[60%] justify-center gap-3">
                <div className="text-sm text-gray-400">Get up to {discount}% off </div>
                <div className="text-2xl text-black font-extrabold">{name}</div>
                <div className="text-white text-sm bg-primary self-start p-2 rounded-xl uppercase">Buy Now</div>
            </div>
            <div className="w-[40%]"><img src={image} /></div>
        </div>
    )
}

export default Ads
