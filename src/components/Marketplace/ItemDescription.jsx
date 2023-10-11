import { useParams } from "react-router-dom"
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const ItemDescription = () => {
    const BACKEND_URL = "/src/__tests__/ads.json"
    const { itemid } = useParams()
    const [item, setItem] = useState({})


    useEffect(() => {
        axios.get(BACKEND_URL,)
            .then((result) => {
                setItem(result.data.at(itemid - 1))
            }).catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <>
            <Navbar />
            <div className="w-screen h-screen bg-white flex flex-col overflow-x-hidden">
                <div className="h-10 w-screen text-xl md:text-2xl flex items-center font-billabong p-2 md:p-5">{item.name}</div>
                <div className="h-[300px] md:h-[400px] bg-grey p-2 md:p-3 flex flex-row gap-3 md:gap-5 overflow-x-auto">
                    {item.image?.map(imageUrl => {
                        return (<img className="rounded-xl" key={1} src={imageUrl} />)
                    })}
                </div>
                <div className="p-2 h-auto flex flex-col">
                    <div className="text-red text-2xl font-billabong font-bold">N{item.price}</div>
                </div>
            </div>
        </>

    )
}

export default ItemDescription
