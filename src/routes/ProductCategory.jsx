import { useLoaderData, useParams } from "react-router-dom"
import Categories from "../components/Categories"
import ProductsList from "../components/ProductsList"


export const categoryLoader = async ({ params }) => {
    const cart = params.category
    const res = await fetch(`https://dummyjson.com/products/category/${params.category}`)
    const data =await res.json()
    console.log(data)

    return data.products
}


const ProductCategory = () => {
    const {category} = useParams();
    const cart = category

    const data = useLoaderData()
    return (
        <div>
            <h1>THIS IS {cart}</h1>
          <ProductsList data={data}/>
        </div>
    );
}

export default ProductCategory;