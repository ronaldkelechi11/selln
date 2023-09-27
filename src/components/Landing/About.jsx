import { AiOutlineSearch } from "react-icons/ai"

const About = () => {
    return (
        <div id="about" className=" h-auto bg-primary flex flex-col p-5">
            <div className="text-3xl md:text-5xl flex flex-row items-center gap-3 font-billabong text-black">About Us <AiOutlineSearch size={24} /></div>

            <div className="flex w-full">
                <div className="md:w-1/2 h-full font-poppins ">
                    Selln: Your One-Stop E-commerce Marketplace <br />

                    Welcome to Selln, the ultimate destination for all your online shopping needs! At Selln, we strive to provide you with a seamless and enjoyable e-commerce experience. <br />

                    With a wide range of products from various categories, Selln offers something for everyone. Whether you&apos;re looking for trendy fashion items, cutting-edge electronics, or unique home decor, our marketplace has got you covered. <br />

                    We pride ourselves on our commitment to quality and customer satisfaction. We carefully curate our sellers to ensure that you receive only the best products. Our user-friendly interface makes it easy to browse, compare, and purchase items, all with just a few clicks. <br />

                    But Selln is more than just a marketplace. We believe in fostering a vibrant community of buyers and sellers. Connect with like-minded individuals, discover new products, and engage in meaningful conversations. Our platform is designed to bring people together and create a sense of belonging. <br />

                    At Selln, your security is our top priority. We implement strict measures to protect your personal information and ensure secure transactions. Shop with confidence, knowing that your data is in safe hands. <br />

                    So why wait? Join the Selln community today and experience the joy of online shopping like never before. Discover new products, find great deals, and connect with a community that shares your passion for all things e-commerce. Happy shopping with Selln! 🛍️
                </div>
                <div className="hidden md:w-1/2 md:flex flex-col gap-1 items-center justify-center">
                    <h1 className="font-billabong text-white font-bold text-8xl">Selln</h1>
                    <h1 className="text-white font-poppins">Home of Student&apos;s Marketplace</h1>
                </div>
            </div>
        </div>
    )
}

export default About
