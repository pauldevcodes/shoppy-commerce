import { Link } from "react-router-dom";

const Categories = ({ category, handleBool }) => {

    return (
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
            {category.map((category, index) => {
                return (
                    <Link
                        key={index}
                        onClick={handleBool}
                        className=" border-2 border-gray-500 shadow-xl rounded-md"
                        to={`${category}`}
                    >
                        <div
                            className=" p-2 uppercase text-sm font-medium text-pink-500"
                        >
                    
                            {category}
                        </div>
                      
                    </Link>
                )
            })}
        </div>
    );
}

export default Categories;