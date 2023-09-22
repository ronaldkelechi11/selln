import { motion } from "framer-motion"
import { useState } from "react"


const Contact = () => {
  const [name, setName] = useState("")
  const [telephone, setTelephone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function submitForm() {
    console.log(`${name}, ${telephone}, ${email}, ${message}`);
    setName("")
    setTelephone("")
    setEmail("")
    setMessage("")
  }

  return (
    <div id="contact" className="h-auto md:h-screen flex flex-col p-5">
      <div className="text-3xl text-black font-billabong md:text-5xl md:text-center">Contact Us</div>

      <div className="w-full h-full flex justify-around flex-col gap-2 md:gap-3">
        <input className="h-[50px] md:h-[90px] font-poppins bg-gray-200 text-[14px] md:text-xl text-black p-3 focus-visible:outline-none" type="text" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input className="h-[50px] md:h-[90px] font-poppins bg-gray-200 text-[14px] md:text-xl text-black p-3 focus-visible:outline-none" type="tel" placeholder='Telephone' value={telephone} onChange={(e) => setTelephone(e.target.value)} />
        <input className="h-[50px] md:h-[90px] font-poppins bg-gray-200 text-[14px] md:text-xl text-black p-3 focus-visible:outline-none" type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea className="h-[100px] md:h-[150px] font-poppins bg-gray-200 text-[14px] md:text-xl text-black p-3 focus-visible:outline-none" placeholder="Message" cols="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <motion.input
          whileHover={{ scale: 1.01, }}
          transition={{ duration: 0.5, type: "tween" }}
          onClick={submitForm}
          type="button" value="Done" className="h-[50px] cursor-pointer bg-primary text-white font-poppins" />
      </div>
    </div>
  )
}

export default Contact
