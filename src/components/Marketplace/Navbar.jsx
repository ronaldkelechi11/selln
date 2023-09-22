import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaX } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false)

    function toggleNav() {
        setIsOpen(!isOpen)
    }
    return (
        <div className='h-auto sticky top-0 bg-white z-50 w-full p-2 flex flex-wrap items-center justify-between'>
            <NavLink reloadDocument className="text-primary text-3xl md:text-6xl font-billabong">Selln</NavLink>
            <div className="hidden md:flex flex-row gap-5 text-primary">
                <NavLinks />
            </div>
            <div className="md:hidden p-2 transition-all cursor-pointer" onClick={toggleNav}>{isOpen ? <FaX color="#97d700" /> : <AiOutlineMenu color="#97d700" />}</div>
            {isOpen &&
                <>
                    <div className="text-primary basis-full md:hidden">
                        <NavLinks />
                    </div>
                </>
            }
        </div>
    )
}

function NavLinks() {
    const navbarStyling = "hover:scale-[1.1] hover:text-primary font-poppins text-[16px] cursor-pointer transition-all"
    return (
        <div className='text-2xl font- text-black flex flex-col justify-center md:flex-row gap-4 items-center'>
            <a className={navbarStyling} href="/#hero">Home</a>
            <a className={navbarStyling} href="/marketplace">Marketplace</a>
            <a className={navbarStyling} href="/account">Account</a>
            <a className={navbarStyling} href="/cart">Cart</a>
        </div>
    )
}

export default Navbar
