import { useParams } from "react-router-dom"

const ItemDescription = () => {
    const { itemname, itemid } = useParams()
    console.log(itemname + " " + itemid);

    return (
        <div className="w-screen h-screen bg-primary">

        </div>
    )
}

export default ItemDescription
