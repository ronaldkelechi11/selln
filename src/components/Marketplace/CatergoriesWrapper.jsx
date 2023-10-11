import Catergories from "./Catergories"

const CatergoriesWrapper = () => {
    const categories = [
        { id: 1, name: "Mobile Phones" },
        { id: 2, name: "Fashion" },
        { id: 3, name: "Furniture" },
        { id: 4, name: "Animal's and Pets" },
        { id: 5, name: "Services" },
        { id: 6, name: "Electronics" },
        { id: 7, name: "Food" },
        { id: 8, name: "Property" },
        { id: 9, name: "Health and Beauty" },
        { id: 10, name: "Vehicles" },
        { id: 11, name: "Recreation" },
        { id: 12, name: "Books and Stationery" }
    ]

    return (
        <div className='h-full w-full grid grid-cols-2 gap-2 md:grid-cols-5 p-3 md:p-5'>
            {
                categories.map(category => {
                    return (<Catergories key={category.id} name={category.name} image={"/src/assets/icon.png"} />)
                })
            }
        </div>
    )
}

export default CatergoriesWrapper
