/* eslint-disable react/prop-types */

const Categories = () => {

    // Returns a list of categories
    var categories = [
        { image: '/src/assets/images/furniture.jpg', name: 'Furniture' },
        { image: '/src/assets/images/mobile.jpg', name: 'Mobile phones' },
        { image: '/src/assets/images/dress.jpg', name: 'Clothing' },
        { image: '/src/assets/images/laptop.jpg', name: 'Laptops' },
        { image: '/src/assets/images/smartwatch.jpg', name: 'Gadgets' },
        { image: '/src/assets/images/shoes.jpg', name: 'Shoes' },
    ]

    return (
        <div className="hidden w-full md:flex flex-row gap-4 p-3">
            {
                categories.map(category => {
                    return (
                        <Category key={categories.indexOf(category)} image={category.image} name={category.name} />
                    )
                })
            }
        </div>
    )
}

function Category({ image, name }) {
    return (
        <div className="rounded-xl shadow-lg h-52 w-64 flex flex-col cursor-pointer hover:scale-110 transition-all">
            <img src={image} className="h-[80%] w-full" />
            <p className="text-center font-poppins text-sm">{name}</p>
        </div>
    )
}
export default Categories
