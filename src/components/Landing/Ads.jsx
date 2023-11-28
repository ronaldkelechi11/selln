
const Ads = () => {
    return (
        //Contains to ads from a customer that choses to advertise (picks 2 random ad's from paidAds List)
        <div className='w-screen md:h-64 flex flex-row gap-3 p-3'>
            <Ad image={'/src/assets/images/gamepad.jpg'} discount={20} name={"Multipurpose Gaming Pad"} />
            <Ad image={'/src/assets/images/gamepad2.jpg'} discount={20} name={"Multipurpose Gaming Pad"} />
        </div>
    )
}

function Ad({ discount, name, image }) {
    return (
        <div className="w-[50%] h-full bg-white flex flex-col md:flex-row p-2 shadow-xl rounded-xl">
            <div className="flex flex-col md:w-[60%] w-full justify-center items-center md:items-start gap-3 p-2">
                <div className="text-sm text-gray-400">Get up to {discount}% off </div>
                <div className="md:text-2xl text-lg text-black font-extrabold">{name}</div>
                <div className="text-white text-sm bg-primary self-start p-2 rounded-xl uppercase cursor-pointer hover:scale-110 transition-all">Buy Now</div>
            </div>
            <img className="md:w-[40%] w-full" src={image} />
        </div>
    )
}

export default Ads
