
import { AiOutlineSearch } from 'react-icons/ai'

const Searchbar = () => {
    return (
        <div className='w-full h-[100px] md:h-[150px] p-5 flex justify-center items-center bg-primary'>
            <input className='rounded-[100px] w-[90%] md:w-[70%] font-poppins p-3 self-center' type="text" placeholder={"Search"} />
        </div>
    )
}

export default Searchbar
