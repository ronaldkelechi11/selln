import { AiOutlinePhone } from "react-icons/ai"
import Catergories from "./Catergories"


const CatergoriesWrapper = () => {
    return (
        <div className='h-full w-full grid grid-cols-2 gap-2 md:grid-cols-5 p-3'>
            <Catergories name="Mobile Phones" image={<AiOutlinePhone />} />
            <Catergories name="Fashion" image="" />
            <Catergories name="Furniture" image="" />
            <Catergories name="Animal's and Pets" image="" />
            <Catergories name="Services" image="" />
            <Catergories name="Electronics" image="" />
            <Catergories name="Food" image="" />
            <Catergories name="Property" image="" />
            <Catergories name="Health and Beauty" image="" />
            <Catergories name="Vehicles" image="" />
            <Catergories name="Recreation" image="" />
        </div>
    )
}

export default CatergoriesWrapper
