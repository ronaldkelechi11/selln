import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineUser } from "react-icons/ai";


import { Link, useNavigate } from "react-router-dom"


const AccountInfo = () => {
    const navigate = useNavigate();

    function goBack() {
        console.log(window);
    }

    useEffect(() => {
        console.log(JSON.parse(sessionStorage.getItem(import.meta.env.VITE_SESSION_STORAGE_USER_OBJECT)));
    }, [])

    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [about, setAbout] = useState("")

    var itemStyling = "border-white bg-transparent placeholder:text-white outline-none text-[14px] text-white border p-2 rounded-xl md:border md:placeholder:text-black md:border-primary md:text-black font-poppins";

    return (
        <div
            className="bg-primary md:bg-white h-screen w-screen flex flex-col md:flex-row p-5 justify-center items-center">
            <div className="w-full h-full flex flex-col justify-center items-center gap-2 md:w-[50%]">
                <div className="text-4xl md:text-5xl text-white md:text-primary font-billabong text-center">Account Setup</div>
                <div className="text-xl text-white font-billabong md:text-3xl md:text-primary text-center">Complete this step to activate your account.</div>
                <form className="w-full flex gap-5 flex-col">
                    <div type="file" className="h-[100px] w-[100px] bg-white self-center rounded-[50%] file:text-[transparent] text-primary file:bg-white file:border-none flex justify-center  cursor-pointer items-center md:bg-primary md:text-white">
                        <AiOutlineUser size={64} color="currentColor" />
                    </div>
                    <input className={itemStyling} type="text" placeholder="Street" />
                    <input className={itemStyling} type="text" placeholder="City" />
                    <input className={itemStyling} type="text" placeholder="State" />
                    <input className={itemStyling} type="text" placeholder="ZIP Code" />
                    <textarea className={itemStyling} type="text" placeholder="About" />
                    <motion.input
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-lg p-[10px_20px] text-xl font-billabong text-primary md:bg-primary md:text-white cursor-pointer" type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    )
}

export default AccountInfo
