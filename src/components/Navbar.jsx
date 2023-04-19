// react imports
import { useState } from "react";

// react router imports
import { Link } from "react-router-dom";

// heroicon import
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

// components
import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";
import User from "./User";

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => {
        setMenuToggle(!menuToggle)
    }

    return (
        <div className=" bg-slate-900 w-full text-white nav-shadow fixed z-50">
            <nav className=" flex items-center justify-between py-8 px-5 lg:px-20">

                <Logo />

                <div className=" flex items-center gap-x-10 xl:gap-x-20">
                    <div className=" hidden lg:flex lg:gap-x-10 lg:uppercase lg:text-xs lg:font-semibold">
                        <Link
                            to="/"
                            className="lg:hover:opacity-75 lg:hover:mix-blend-normal"
                        >
                            Home
                        </Link>
                        <Link
                            to="all-products"
                            className="lg:hover:opacity-75 lg:hover:mix-blend-normal"
                        >
                            Shop
                        </Link>
                        <Link
                            to="about"
                            className="lg:hover:opacity-75 lg:hover:mix-blend-normal"
                        >
                            About
                        </Link>
                        <Link
                            to="blogs"
                            className="lg:hover:opacity-75 lg:hover:mix-blend-normal"
                        >
                            Blogs
                        </Link>
                        <Link
                            to="support"
                            className="lg:hover:opacity-75 lg:hover:mix-blend-normal"
                        >
                            Contact
                        </Link>
                    </div>

                    <div className=" flex gap-x-5">
                        <Search />
                        <User />
                        <Cart />
                    </div>

                    <div onClick={handleClick} className=" lg:hidden">
                        {menuToggle ? <XMarkIcon width={20} /> : <Bars3Icon width={20} />}
                    </div>
                </div>
            </nav>
            <div></div>
        </div>
    );
}

export default Navbar;