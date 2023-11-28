import { AiOutlineShoppingCart } from "react-icons/ai"
import Rating from "../utils/Rating"
import { TypeAnimation } from "react-type-animation"

const AdWrapper = () => {
  var ads = [
    { image: '/src/assets/images/household.jpg', name: 'Direct cool Double door Refrigerator', rating: 4, price: 100000, condition: 'Used' },
    { image: '/src/assets/images/skirt.jpg', name: 'Ladies xl mini skirt', rating: 3, price: 2500, condition: 'New' },
    { image: '/src/assets/images/smartwatch.jpg', name: 'Round shape smartwatch', rating: 5, price: 15000, condition: 'Used' },
    { image: '/src/assets/images/household.jpg', name: 'Direct cool Double door Refrigerator', rating: 4, price: 100000, condition: 'Used' },
    { image: '/src/assets/images/skirt.jpg', name: 'Ladies xl mini skirt', rating: 3, price: 2500, condition: 'Used' },
    { image: '/src/assets/images/smartwatch.jpg', name: 'Round shape smartwatch', rating: 5, price: 15000, condition: 'New' },
    { image: '/src/assets/images/household.jpg', name: 'Direct cool Double door Refrigerator', rating: 4, price: 100000, condition: 'Used' },
    { image: '/src/assets/images/skirt.jpg', name: 'Ladies xl mini skirt', rating: 3, price: 2500, condition: 'New' },
    { image: '/src/assets/images/smartwatch.jpg', name: 'Round shape smartwatch', rating: 5, price: 15000, condition: 'Used' },
    { image: '/src/assets/images/household.jpg', name: 'Direct cool Double door Refrigerator', rating: 4, price: 100000, condition: 'Used' },
    { image: '/src/assets/images/skirt.jpg', name: 'Ladies xl mini skirt', rating: 3, price: 2500, condition: 'Used' },
    { image: '/src/assets/images/smartwatch.jpg', name: 'Round shape smartwatch', rating: 5, price: 15000, condition: 'New' }
  ]

  return (
    // Returns a list of 12 trending products
    <div className="w-screen p-3 flex flex-col gap-3">
      <TypeAnimation sequence={[
        'Latest Products...', 2000,
        'Trending Products...', 2000,
        'Best Seller...', 2000,
      ]}
        repeat={Infinity}
        wrapper="span"
        speed={50}
        className="text-5xl font-billabong"
      />
      <div className="grid md:grid-cols-6 grid-cols-2 gap-3">
        {
          ads.map(ad => {
            return (<Ad key={ads.indexOf(ad)} image={ad.image} name={ad.name} rating={ad.rating} price={ad.price} condition={ad.condition} />)
          })
        }
      </div>
    </div>
  )
}




function Ad({ image, name, rating, price, condition }) {
  return (
    <div className="flex max-h-[400px] w-full p-2 rounded-xl shadow-xl flex-col cursor-pointer hover:scale-105 transition-transform">
      <img src={image} className="w-full h-[60%]" />

      <div className="flex flex-col gap-1">
        <Rating rating={rating} />
        <p className="font-poppins text-ellipsis line-clamp-1">{name}</p>
        <p className="text-slate-400 text-sm">N{price}</p>
        <p className="text-black font-poppins text-sm">{condition} </p>
        <button className="bg-primary rounded-xl text-white font-poppins h-12 hover:bg-[#7c9b34] flex justify-center items-center text-2xl">
          <AiOutlineShoppingCart color="currentColor" /></button>
      </div>
    </div>
  )
}


export default AdWrapper
