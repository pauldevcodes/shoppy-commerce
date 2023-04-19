import { Suspense, useState } from "react";
import { Await, useLoaderData, useRouteLoaderData, defer, Outlet } from "react-router-dom";
import Categories from "../components/Categories";
import Loaderone from "../loader/Loaderone";
import ProductsList from "../components/ProductsList";


const Products = () => {

    const { categories, products } = useRouteLoaderData('product-id')
    const [bool,setBool] = useState(false)

    const handleBool = () => {
        setBool(true)
    }

    return (
        <div className=" pt-28 py-16 px-5 lg:px-20">

            <Suspense fallback={<Loaderone />}>
                <Await resolve={(categories)}>
                    {category => <Categories category={category} handleBool={handleBool} />}
                </Await>
            </Suspense>
            
            {bool ? <Outlet /> : <Suspense fallback={<Loaderone />}>
                <Await resolve={(products)}>
                    {product => <ProductsList data={product} />}
                </Await>
            </Suspense> }
            
   
        </div>
    );
}

const categoryLoader = async () => {
    const res = await fetch('https://dummyjson.com/products/categories')
    const info = await res.json()
    return info
}

const allProducts = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=0')
    if (!res.ok) {
        // do something here
    }

    const info = await res.json();

    const data = await info.products
    // console.log(data)
    return data
}
export const productLoader = () => {
    return defer({
        categories: categoryLoader(),
        products: allProducts()
    })
}
export default Products;