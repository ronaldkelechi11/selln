import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"


const Hero = () => {

    const navigate = useNavigate()
    function signUp() {
        navigate("/signup")
    }
    function LogIn() {
        navigate("/login")
    }

    return (
        <div id="hero" className="bg-white h-screen flex flex-col justify-center gap-4 items-center p-5">
            <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                className="text-2xl md:text-4xl md:mt-10 text-primary text-center font-poppins font-bold">
                <TypeAnimation
                    sequence={
                        [
                            "Your Number 1 online Marketplace to Buy.", 1000,
                            "Your Number 1 online Shop to Sell.", 1000,
                            "Number 1 Marketplace for Used and New Items.", 1000,
                        ]
                    }
                    repeat={Infinity}
                    speed={50}
                    wrapper="span"
                />
            </motion.div>
            <div className="bg-shoppingOnline w-full md:w-1/3 h-[150px] md:h-[250px] m-5 bg-center bg-cover bg-no-repeat"></div>

            <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                className="text-[16px] text-black font-poppins text-center">Selln is an Online marketplace that connects users, vendors and service providers in a open marketplace.
            </motion.div>

            <div className="flex flex-row w-full justify-center gap-5 md:gap-6">
                <motion.button
                    animate={{ x: 0 }}
                    initial={{ x: -1000 }}
                    transition={{ type: "tween", duration: 1 }}
                    onClick={signUp}
                    whileHover={{ scale: 1.2 }}
                    className="p-[10px_20px] text-white md:p-[20px_40px] bg-primary rounded-3xl transition-all cursor-pointer">Sign Up
                </motion.button>

                <motion.button
                    animate={{ x: 0 }}
                    initial={{ x: 500 }}
                    transition={{ type: "tween", duration: 1 }}
                    onClick={LogIn}
                    whileHover={{ scale: 1.2 }}
                    className="p-[10px_20px] md:p-[20px_40px] text-primary border-primary border-solid border-2 rounded-3xl cursor-pointer hover:scale-150 transition-all">Log In
                </motion.button>
            </div>
        </div>
    )
}

export default Hero
