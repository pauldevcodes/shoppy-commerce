import { Link, useLoaderData } from 'react-router-dom';
import Hero from '../images/hero image.png';
import ProductsList from '../components/ProductsList';

export const homeLoader = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=9&skip=10')
    const info = await res.json();

    const data = await info.products
    // console.log(data)
    return data
}

const Home = () => {
    const data = useLoaderData()

    return (
        <>
            {/* banner */}
            <div className=' bg-slate-100 flex flex-col-reverse items-center px-5 lg:px-20 lg:flex-row'>
                <div className=' flex flex-col items-center gap-y-3 md:basis-1/2 lg:items-start'>
                    <h4 className=' text-sm uppercase font-["Nunito_Sans"] font-bold md:text-lg'>
                        spring / summer collection 2023
                    </h4>
                    <p className=' text-2xl text-center font-medium md:text-4xl lg:text-start'>
                        Get up to 30% discount Off New Arrivals
                    </p>
                    <button className=' py-2 px-8 bg-pink-600 rounded-md mt-2'>
                        <Link
                            to="all-products"
                            className=' font-["Nunito_Sans"] uppercase text-sm text-white font-semibold md:text-lg'
                        >
                            shop now
                        </Link>
                    </button>
                </div>
                <div className=' md:basis-1/2'>
                    <img src={Hero} alt="" className='' />
                </div>
            </div>

            <div className=' py-16 px-5 lg:px-20'>
                <h1 className="font-['Orbitron'] text-center text-lg font-bold flex flex-col items-center md:text-2xl lg:text-4xl">
                    New Arrivals
                    <div className="bg-pink-500 mt-4 w-16 h-1"></div>
                </h1>

                <ProductsList data={data} />
            </div>

            <div className="py-16 px-5 lg:px-20">
            <h1 className="font-['Orbitron'] text-center text-lg font-bold flex flex-col items-center md:text-2xl lg:text-4xl">
                    Latest Blogs
                    <div className="bg-pink-500 mt-4 w-16 h-1"></div>
                </h1>
            </div>
        </>
    );
}

export default Home;