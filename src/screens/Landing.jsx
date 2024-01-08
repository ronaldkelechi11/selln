import Ads from "../components/Landing/Ads"
import Categories from "../components/Landing/Categories"
import Navbar from "../components/Landing/Navbar"
import AdWrapper from "../components/Landing/AdWrapper"
import Testimony from "../components/Landing/Testimony"


const Landing = () => {
    return (
        <div className="w-screen flex flex-col scroll-smooth">
            <Navbar />

            {/* Company that pay for the highest ads go here, Please switch to a carousel */}
            <div className="bg-s1Pattern h-96 bg-cover bg-no-repeat flex md:justify-end items-center p-4">
                <div className="text-white md:w-[50%] w-full flex flex-col gap-3">
                    <h1 className="text-primary font-poppins text-2xl md:text-3xl">Shop Marketing Ad</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio officiis molestias nihil sequi ea tempora! Maxime quis fugiat vitae laborum pariatur, minima culpa quam eos similique debitis asperiores, natus saepe!</p>
                    <div className="bg-primary text-white font-poppins self-start cursor-pointer rounded-lg p-4 hover:bg-transparent hover:border-primary hover:border">View Collections</div>
                </div>
            </div>

            <Categories />

            <Ads />

            {/* Company that pay for the highest ads go here, Please switch to a carousel*/}
            <div className="bg-s2Pattern bg-center h-96 bg-cover bg-no-repeat flex md:justify-end items-center p-4">
                <div className="text-white md:w-[50%] w-full flex flex-col gap-3">
                    <h1 className="text-primary font-poppins text-2xl md:text-3xl">Shop Marketing Ad</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio officiis molestias nihil sequi ea tempora! Maxime quis fugiat vitae laborum pariatur, minima culpa quam eos similique debitis asperiores, natus saepe!</p>
                    <div className="bg-primary text-white font-poppins self-start cursor-pointer rounded-lg p-4 hover:bg-transparent hover:border-primary hover:border">View Collections</div>
                </div>
            </div>

            <AdWrapper />

            <Testimony />
        </div>
    )
}


export default Landing
