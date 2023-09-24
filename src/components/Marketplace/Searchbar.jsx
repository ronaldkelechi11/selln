

const Searchbar = () => {
    return (
        <div className='w-full h-[100px] md:h-[150px] p-5 flex justify-center items-center bg-primary'>
            <input
                inputMode="search"
                className='rounded-[100px] w-[90%] md:w-[70%] outline-none text-[14px] font-poppins p-3 self-center' type="text" placeholder={"Search"} />
        </div>
    )
}

export default Searchbar
