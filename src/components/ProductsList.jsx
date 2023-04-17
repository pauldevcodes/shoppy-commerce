const ProductsList = ({data}) => {
    return ( 
        <div className=" grid grid-cols-1 md:grid-cols-3 mt-4 md:gap-2">
            {data.map((item,index) => {
                return (
                    <div key={index} className=" p-3 flex flex-col items-center hover:shadow-2xl hover:cursor-pointer">
                        <img src={item.images[0]} alt="products" className=" h-52" />
                        <br />
                        <h4 className=" font-['Raleway'] uppercase font-bold md:text-base">{item.title}</h4>
                        <br />
                        <p className=" text-pink-600 font-semibold text-lg">&#36; {item.price}</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default ProductsList;