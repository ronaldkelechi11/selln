import { FiStar } from "react-icons/fi"
import { HiStar } from "react-icons/hi"


const Rating = ({ rating }) => {
    return (
        <div className="flex flex-row text-xl">
            <HiStar className={rating >= 1 ? 'text-yellow-400' : 'text-white'} />
            <HiStar className={rating >= 2 ? 'text-yellow-400' : 'text-white'} />
            <HiStar className={rating >= 3 ? 'text-yellow-400' : 'text-white'} />
            <HiStar className={rating >= 4 ? 'text-yellow-400' : 'text-white'} />
            <HiStar className={rating >= 5 ? 'text-yellow-400' : 'text-white'} />
        </div>
    )
}

export default Rating
