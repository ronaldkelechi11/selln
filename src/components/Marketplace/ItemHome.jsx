import Navbar from "./Navbar"
import Searchbar from "./Searchbar"
import ItemWrapper from "./ItemWrapper";


const ItemHome = () => {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Navbar />
            <Searchbar />
            <p className="p-3 font-poppins text-2xl">Top Items</p>
            <ItemWrapper />
        </div>
    )
}

export default ItemHome
