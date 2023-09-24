
import CatergoriesWrapper from "./CatergoriesWrapper"
import Searchbar from "./Searchbar"

const Home = () => {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Searchbar />
            <CatergoriesWrapper />
        </div>
    )
}

export default Home
