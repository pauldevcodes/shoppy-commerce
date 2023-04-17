import { Link } from "react-router-dom";

const Categories = ({ category }) => {
    return (
        <div className=" grid grid-cols-4 gap-4">
            {category.map((item, index) => {
                return (
                    <Link key={index} className=" border-2 border-gray-500 shadow-xl rounded-md">
                        <div
                        className=" p-2 uppercase text-sm font-medium text-pink-500"
                        >
                            {item}
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}

export default Categories;