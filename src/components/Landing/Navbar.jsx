import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {

    return (
        <div className="bg-white w-screen sticky top-0 h-16 flex flex-row justify-between items-center p-3">

            {/* Navbar Icon (visible in mobile) */}
            <Link reloadDocument to={'/'} className="font-billabong text-4xl text-primary stroke-black">Selln</Link>

            {/* Custom Search Bar (not visible in mobile)*/}
            <SearchBar />


            {/* Icons for Profile and Cart (visible in mobile) */}
            <div className="flex flex-row gap-3 text-4xl stroke-2 text-primary">
                <Link> <AiOutlineUser color="currentColor" /> </Link>
                <Link to={'/cart'}> <AiOutlineShoppingCart color="currentColor" /> </Link>
            </div>
        </div >
    )
}

// Custom Search bar
function SearchBar() {

    return (
        <form className="hidden md:flex flex-row h-full w-[50%]">
            <input className="w-[80%] bg-slate-200 p-3 font-poppins rounded-[10px_0px_0px_10px] outline-none" type="text" placeholder="Search" />
            <button className="w-[20%] text-white rounded-[0px_10px_10px_0px] bg-primary flex justify-center items-center text-3xl"><AiOutlineSearch color="currentcolor" /></button>
        </form>
    )
}

export default Navbar
