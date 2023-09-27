import Navbar from "./Navbar"
import Searchbar from "./Searchbar"
import ItemWrapper from "./ItemWrapper";


const ItemHome = () => {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Navbar />
            <Searchbar />
            <ItemWrapper />
        </div>
    )
}

export default ItemHome
