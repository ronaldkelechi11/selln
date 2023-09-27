import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item";

const ItemWrapper = () => {
    const [itemArrayList, setItemArrayList] = useState([])

    useEffect(() => {
        axios.get("/src/__tests__/ads.json",)
            .then((result) => {
                console.log(result.data);
                setItemArrayList(result.data)
            }).catch((err) => {
                console.log(err);
            });
    }, [])


    return (
        <div className='w-full h-screen bg-white grid grid-cols-2 md:grid-cols-5 md:p-5 p-3 gap-3'>
            {
                itemArrayList.map(item => {
                    return (<Item key={item.id} item={item} />)
                })
            }
        </div>
    )
}

export default ItemWrapper
