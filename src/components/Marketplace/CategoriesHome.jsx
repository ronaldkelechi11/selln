
import CatergoriesWrapper from "./CatergoriesWrapper"
import Navbar from "./Navbar"
import Searchbar from "./Searchbar"

const Home = () => {

    return (
        <div className="flex flex-col w-screen h-screen">
            <Navbar />
            <Searchbar />
            <CatergoriesWrapper />
        </div>
    )
}

export default Home
