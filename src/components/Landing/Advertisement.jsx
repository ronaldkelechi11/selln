import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const Advertisement = () => {
    const ref = useRef()
    const inView = useInView(ref, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (inView) {
            mainControls.start({ y: 0, opacity: 1 })
        }
    }, [inView])

    return (
        <div id="advertisement" className='h-auto bg-white flex flex-col p-5'>
            <div className="text-3xl md:text-5xl text-black text-center font-billabong">Advertisement</div>
            <div className="flex flex-col md:flex-row gap-5 h-full">
                <div className="md:w-1/2 h-auto flex flex-col items-center gap-5">
                    <div className="font-poppins">Feel free to contact us @marketing@selln.com to place adverts on our platform for your business. <br /> Businesses thrive from good exposure and reach. <br /> Working with us to have your ad&apos;s on our platform increses your chances of having a wider reach for your audience.</div>
                    <motion.a whileHover={{ scale: 1.2 }} href="/#contact" className="p-[10px_20px] text-white md:p-[20px_40px] bg-primary rounded-3xl transition-all cursor-pointer self-center md:self-start">Contact Us</motion.a>
                </div>
                <motion.div
                    animate={mainControls}
                    initial={{ y: 100, opacity: 0 }}
                    transition={{ duration: 2, delay: 0.1 }}
                    ref={ref}
                    className="bg-[url('/src/assets/delivery.svg')] bg-contain bg-no-repeat bg-center h-[200px] md:w-1/2  md:flex"></motion.div>
            </div>
        </div >
    )
}

export default Advertisement
