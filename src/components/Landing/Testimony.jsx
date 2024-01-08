/* eslint-disable react/prop-types */

const Testimony = () => {
    return (
        <div className="h-48 w-screen flex flex-row">
            <TestimonyItem />
            <TestimonyItem />
            <TestimonyItem />
        </div>
    )
}

// eslint-disable-next-line no-unused-vars
function TestimonyItem({ image, header, body }) {
    return (
        <div className="w-auto h-full flex flex-row">
            <img src="/src/assets/images/gamepad2.jpg" className="rounded-full m-6" alt="" />
            <div className="flex flex-col">
                <p className="font-billabong text-2xl">Header</p>
                <p className="font-poppins text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default Testimony
