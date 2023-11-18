/* eslint-disable react/prop-types */
import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Item = ({ item }) => {

    return (
        <Link to={`${item.name}/${item.id}`} className='w-full h-[350px] max-h-[300px] rounded-xl shadow-md flex flex-col justify-evenly p-3'>
            <img src={item.image[0]} className='aspect-square' alt="" />
            <div className="flex flex-row justify-center gap-1">
                <span className='text-primary text-2xl'>N</span>
                <div className="text-primary text-center text-2xl">{item.price}</div>
            </div>
            <div className="text-black text-xl font-billabong">{item.name}</div>
            <div className="text-grey text-[14px] font-billabong">{item.condition}</div>

            <div className="flex flex-row items-center bg-grey rounded-xl p-2 self-start gap-1">
                <FaLocationPin size={12} />
                <div className="text-black font-bold text-[12px]">{item?.location.state}</div>
            </div>
        </Link>
    )
}

export default Item
