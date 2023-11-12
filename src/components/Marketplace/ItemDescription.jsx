import { useParams } from "react-router-dom"
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaCartPlus, FaStar, FaTruckPickup } from "react-icons/fa6";
import SimilarProducts from './SimilarProducts'

const ItemDescription = () => {
    const BACKEND_URL = "/src/__tests__/ads.json"
    const { itemid } = useParams()
    const [item, setItem] = useState({})
    const [owner, setOwner] = useState({
        "id": 1,
        "name": "John Doe",
        "phone": "+234 123456789",
        "email": "johndoe@gmail.com",
        "password": "myPassword",
        "imageUrl": "",
        "rating": 4,
        "about": "",
        "address": {
            "street": "Ademole Adetokunbo Crescent.",
            "city": "Wuse 2",
            "state": "Abuja",
            "zipCode": "900001"
        },
        "cart": []
    })
    const [ownerNumber, setOwnerNumber] = useState("Show Contact")

    useEffect(() => {
        // send request for the item and the owner
        axios.get(BACKEND_URL,)
            .then((result) => {
                setItem(result.data.at(itemid - 1))
            }).catch((err) => {
                console.log(err);
            });
    }, [itemid])

    function addToCart() {
        owner.cart.push({ item: item })
        alert("New Item added to cart")
        console.log(owner.cart);
    }
    const showOwnerNumber = () => {
        setOwnerNumber(owner.phone)
    }



    return (
        <>
            <Navbar />

            <div className="w-screen bg-white flex flex-col overflow-x-hidden">
                <div className="h-[300px] md:h-[400px] p-1 md:p-3 flex flex-row overflow-x-auto">
                    {item.image?.map(imageUrl => {
                        return (<img className="rounded-xl" key={+1} src={imageUrl} />)
                    })}
                </div>

                <div className="p-2 h-auto flex gap-2 flex-col">
                    <div className="flex flex-row gap-1 md:w-[60%]">
                        <div onClick={addToCart} className="w-[20%] border-2 rounded border-primary flex justify-center items-center text-primary cursor-pointer"><FaCartPlus color="currentColor" /></div>
                        <div onClick={showOwnerNumber} className="w-[80%] p-3 bg-primary font-poppins text-white text-center rounded cursor-pointer">{ownerNumber}</div>
                    </div>
                    <div className="w-screen text-5xl md:text-7xl font-billabong ">{item.name}</div>
                    <div className="text-primary text-3xl font-poppins font-bold">N{item.price}</div>
                    <div className="bg-grey rounded font-poppins text-[16px] h-auto p-1">{item.condition} <br />{item.description}</div>
                </div>

                <div className="p-2">
                    <div className="font-poppins text-black uppercase">Owner Details</div>
                </div>
                <div className="p-2">
                    <div className="bg-grey h-full flex flex-col gap-2 rounded p-2">
                        <div className="font-poppins text-[16px]">Name: {owner.name}</div>
                        <div className="font-poppins text-[16px]">Phone: {owner.phone}</div>
                        <div className="font-poppins text-[16px] flex flex-row gap-2 items-center">
                            Rating:<StarRating rating={owner.rating} />
                        </div>
                        <div className="font-poppins text-[16px]">Address: {owner.address.street}, {owner.address.city}, {owner.address.state}.</div>
                    </div>
                </div>
                <div className="m-2 p-2 border-2 border-black border-dotted">
                    <strong>Legal:</strong> Please meet with the vendor in their shops or meet in open spaces. Do not pay for any product before delivery. Inspect all products fully before payment. Please when contacting the vendor be straight to the point and precise.
                </div>
            </div>
        </>

    )
}

// eslint-disable-next-line react/prop-types
function StarRating({ rating }) {
    return (
        <div className="flex justify-center items-center gap-1">
            <FaStar color={rating >= 1 ? "rgb(225,229,124)" : ""} />
            <FaStar color={rating >= 2 ? "rgb(225,229,124)" : ""} />
            <FaStar color={rating >= 3 ? "rgb(225,229,124)" : ""} />
            <FaStar color={rating >= 4 ? "rgb(225,229,124)" : ""} />
            <FaStar color={rating >= 5 ? "rgb(225,229,124)" : ""} />
        </div>
    )
}

export default ItemDescription
