import { useState } from "react"


const SocialProof = () => {
    const [userCount, setUserCount] = useState(506)
    const [adsCount, setAdsCount] = useState(1004)
    const [venderCount, setVendorCount] = useState(203)

    return (
        <div className="h-auto md:h-auto p-5 flex flex-col">
            <div className="font-billabong text-2xl md:text-center md:text-5xl">We&apos;ve built a platform for you so what are you waiting for?</div>

            <div className="h-full w-full flex md:flex-row flex-col gap-5 mt-5 items-center">
                <div className="w-full md:w-1/2 h-[300px] bg-shoppingSales bg-center bg-cover bg-no-repeat"></div>
                <div className="md:w-1/2 h-[100px] grid grid-cols-2 mt-5 gap-5">
                    <div className="">
                        <div className="text-black font-sans">Total Active Users <span className="font-bold">{userCount}</span></div>
                    </div>
                    <div className="">
                        <div className="text-black font-sans">Total Active Ads <span className="font-bold">{adsCount}</span></div>
                    </div>
                    <div className="">
                        <div className="text-black font-sans">Total Active Vendors <span className="font-bold">{venderCount}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialProof
