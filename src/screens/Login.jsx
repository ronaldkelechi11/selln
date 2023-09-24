import { motion } from 'framer-motion';
import { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    var itemStyling = "border-white bg-transparent placeholder:text-white outline-none text-[14px] text-white border p-2 rounded-xl md:border md:placeholder:text-black md:border-primary md:text-black font-poppins";

    const navigate = useNavigate()

    function goBack() {
        navigate("/")
    }
    function goToSignup() {
        navigate("/signup")
    }


    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    function signup() {

    }
    return (
        <div className='bg-primary md:bg-white h-screen w-screen flex flex-col md:flex-row p-5'>
            <motion.div
                whileHover={{ scale: 1.3 }}
                onClick={goBack}
                className="cursor-pointer fixed top-5 left-5 w-10 h-10 rounded-lg flex justify-center items-center bg-white text-primary md:text-white md:bg-primary" >
                <AiOutlineLeft size={24} color="currentColor" />
            </motion.div>

            <div className="w-full h-full flex flex-col justify-center items-center gap-2 md:w-[50%]">
                <div className="text-4xl md:text-5xl text-white md:text-primary font-billabong text-center">Log In</div>
                <div className="text-xl text-white font-billabong md:text-3xl md:text-primary text-center">Log into your account now</div>
                <form className="w-full flex gap-5 flex-col">
                    <input className={itemStyling} type='tel' placeholder="Phone" value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                    <input className={itemStyling} type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <motion.input
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-lg p-[10px_20px] text-xl font-billabong text-primary md:bg-primary md:text-white cursor-pointer" type="submit" value="Log in" onClick={signup} />
                    <div className="font-billabong text-[16px] md:text-2xl text-center text-white md:text-primary">Don&apos;t have an acoount?
                        <span className="underline" onClick={goToSignup}>Sign Up Here</span></div>
                </form>
            </div>
            <div className="hidden md:flex md:w-[50%] p-5">
                <div className="bg-signinPattern w-full h-full bg-center bg-no-repeat bg-contain"></div>
            </div>
        </div>
    )
}

export default Login
