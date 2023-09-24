
const Catergories = ({ name, image }) => {
    return (
        <div className='w-full h-[200px] rounded-xl shadow-md flex flex-col justify-evenly p-3'>
            <img src={image} className='h-[70%] bg-primary' alt="" />
            <div className="text-black text-xl text-center font-billabong">{name}</div>
        </div>
    )
}

export default Catergories
