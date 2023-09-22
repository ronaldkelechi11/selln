import About from "../components/Landing/About"
import Advertisement from "../components/Landing/Advertisement"
import Contact from "../components/Landing/Contact"
import Footer from "../components/Landing/Footer"
import Hero from "../components/Landing/Hero"
import Navbar from "../components/Landing/Navbar"
import SocialProof from "../components/Landing/SocialProof"

const Landing = () => {
    return (
        <div className="flex flex-col scroll-smooth">
            <Navbar />
            <Hero />
            <About />
            <Advertisement />
            <SocialProof />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landing
