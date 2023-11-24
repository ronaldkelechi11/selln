import axios from 'axios'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const SignupForm = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    function goBack() {
        navigate("/")
    }

    function signup(e) {
        e.preventDefault();
        var newUser = {
            name: name,
            email: email,
            phone: phone,
            password: password
        }
        axios.post(import.meta.env.VITE_BACKEND_URL + "signup", { newUser })
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
    }

    function goToLogin() {
        navigate("/login")
    }

    var itemStyling = "border-white bg-transparent placeholder:text-white outline-none text-[14px] text-white border p-2 rounded-xl md:border md:placeholder:text-grey md:border-primary md:text-black font-poppins";






    return (
        <div className='bg-primary md:bg-white h-screen w-screen flex flex-col md:flex-row p-5'>
            <motion.div
                whileHover={{ scale: 1.3 }}
                onClick={goBack}
                className="cursor-pointer fixed top-5 left-5 w-10 h-10 rounded-lg flex justify-center items-center bg-white text-primary md:text-white md:bg-primary" >
                <FaArrowLeft size={24} color="currentColor" />
            </motion.div>

            <div className="w-full h-full flex flex-col justify-center items-center gap-2 md:w-[50%]">
                <div className="text-4xl md:text-5xl text-white md:text-primary font-billabong text-center">Sign Up</div>
                <div className="text-xl text-white font-billabong md:text-3xl md:text-primary text-center">Create an account now</div>


                <form className="w-full flex gap-5 flex-col" onSubmit={signup}>
                    <input className={itemStyling + " my_input"} type="text" placeholder="Name" value={name}
                        onChange={(e) => setName(e.target.value)} required />

                    <input className={itemStyling} type="email" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} required pattern='[a-zA-Z0-9._%+-+@[a-zA-Z]{2,}]' />

                    <input className={itemStyling} type="tel" placeholder="Phone" value={phone}
                        onChange={(e) => setPhone(e.target.value)} required />

                    <input className={itemStyling} type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} required
                        pattern='^(?=.*[0-9])(=.*[!][a-zA-Z0-9!]+$'
                        title='Password should contain numbers,alphabets and Exclamation marks'
                    />

                    <motion.input
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-lg p-[10px_20px] text-xl font-billabong text-primary md:bg-primary md:text-white cursor-pointer" type="submit" value="Sign Up" />

                    <div className="font-billabong text-[16px] cursor-pointer md:text-2xl text-center text-white md:text-primary">Already have an account?
                        <span className="underline" onClick={goToLogin}>Log In</span></div>
                </form>
            </div>
            <div className="hidden md:flex md:w-[50%] p-5">
                <div className="bg-signupPattern w-full h-full bg-center bg-no-repeat bg-contain"></div>
            </div>
        </div>
    )
}

export default SignupForm
