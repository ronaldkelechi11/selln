import { AiOutlineSearch } from "react-icons/ai"

const About = () => {
    return (
        <div id="about" className=" h-auto bg-primary flex flex-col p-5">
            <div className="text-3xl md:text-5xl flex flex-row items-center gap-3 font-billabong text-black">About Us <AiOutlineSearch size={24} /></div>

            <div className="flex w-full">
                <div className="md:w-1/2 h-full font-poppins ">
                    Selln is a Web Marketplace that allows users to buy, sell, trade and exchange goods and services.
                    It was created with the sole aim of bringing everyone to a open playing field for bussiness to thrive and excel while taking credit as the connector between users all from the comfort of their households.
                    Selln built for students bridges the gap of connectivity and takes over all the hassle and stress of running a bussiness online by giving you a full brand profile, customer reviews, followers and many wonderful features not yet seen on any E-commetce platform.
                    At Selln we are not just a website we are a home for trade.
                    Founded by Ronald Kelechi as a sidehustle it soon developed into a passion to build a platform that helps transform students and users everyday life.
                    Selln also make Affliate marketing relatively easy and profitable for everyone.
                </div>
                <div className="hidden md:w-1/2 md:flex flex-col gap-1 items-center justify-center">
                    <h1 className="font-billabong text-white font-bold text-8xl">Selln</h1>
                    <h1 className="text-white font-poppins">Home of Student&apos;s Marketplace</h1>
                </div>
            </div>
        </div>
    )
}

export default About
