import ItemWrapper from "./ItemWrapper"
import Searchbar from "./Searchbar"

const Home = () => {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Searchbar />
            <ItemWrapper />
        </div>
    )
}

export default Home
