import { useParams } from "react-router-dom"
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaCartPlus, FaTruckPickup } from "react-icons/fa6";

const ItemDescription = () => {
    const BACKEND_URL = "/src/__tests__/ads.json"
    const { itemid } = useParams()
    const [item, setItem] = useState({})
    const [ownerNumber, setOwnerNumber] = useState("Show Contact")

    useEffect(() => {
        axios.get(BACKEND_URL,)
            .then((result) => {
                setItem(result.data.at(itemid - 1))
            }).catch((err) => {
                console.log(err);
            });
    }, [])

    function addToCart() {

    }
    const showOwnerNumber = () => {
        setOwnerNumber("+234 123456789")
    }

    return (
        <>
            <Navbar />

            <div className="w-screen h-screen bg-white flex flex-col overflow-x-hidden">
                <div className="h-[300px] md:h-[400px] p-1 md:p-3 flex flex-row gap-3 md:gap-5 overflow-x-auto">
                    {item.image?.map(imageUrl => {
                        return (<img className="rounded-xl" key={+1} src={imageUrl} />)
                    })}
                </div>

                <div className="p-2 h-auto flex gap-1 flex-col">
                    <div className="flex flex-row gap-1">
                        <div onClick={addToCart} className="w-[20%] border-2 rounded border-primary flex justify-center items-center text-primary"><FaCartPlus color="currentColor" /></div>
                        <div onClick={showOwnerNumber} className="w-[80%] p-3 bg-primary font-poppins text-white text-center rounded">{ownerNumber}</div>
                    </div>
                    <div className="h-10 w-screen text-3xl md:text-2xl font-billabong md:p-5">{item.name}</div>
                    <div className="text-primary text-xl font-poppins font-bold">N{item.price}</div>
                    <div className="bg-grey rounded font-poppins text-[14px] h-auto p-1 mt-3">{item.condition} <br />{item.description}</div>
                </div>
            </div>
        </>

    )
}

export default ItemDescription
