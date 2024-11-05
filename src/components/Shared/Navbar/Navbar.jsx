
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    const menus = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "nav-link nav-link-active" : "nav-link"
                    }
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/donate-blood"
                    className={({ isActive }) =>
                        isActive ? "nav-link nav-link-active" : "nav-link"
                    }
                >
                    Donate Blood
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/find-blood"
                    className={({ isActive }) =>
                        isActive ? "nav-link nav-link-active" : "nav-link"
                    }
                >
                    Find Blood
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/campaigns"
                    className={({ isActive }) =>
                        isActive ? "nav-link nav-link-active" : "nav-link"
                    }
                >
                    Campaigns
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                        isActive ? "nav-link nav-link-active" : "nav-link"
                    }
                >
                    Gallery
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                        isActive ? "nav-link nav-link-active" : "nav-link"
                    }
                >
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (

        <div className="navbar">

            <div className="navbar-start">

                {/* Mobile Menu */}
                <div className="dropdown">

                    <div tabIndex={0} role="button" className="lg:hidden">
                        <AiOutlineMenu />
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-200 rounded-lg z-[1] mt-3 w-52 p-2 shadow">
                        {menus}
                    </ul>

                </div>

                {/* Website Logo */}
                <div className="">

                    <Link to="/">
                        <button className="ms-6 md:ms-6 lg:ms-0 text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#FF0000] to-[#8B0000] bg-clip-text text-transparent">
                            L B D G
                        </button>

                    </Link>

                </div>

            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">

                <ul className="menu-horizontal flex space-x-6 font-medium">
                    {menus}
                </ul>

            </div>

            <div className="navbar-end">

                <div className="flex justify-center gap-4">

                    <Link to="/login">
                        <button className="bg-gradient-to-r from-[#FF0000] to-[#8B0000] text-white font-medium px-4 py-2 rounded-md transition-transform duration-200 transform hover:scale-105 hover:bg-[#8B0000]">
                            Log In
                        </button>
                    </Link>

                    <Link to="/sign-up">
                        <button className="bg-gradient-to-r from-[#FF0000] to-[#8B0000] text-white font-medium px-4 py-2 rounded-md transition-transform duration-200 transform hover:scale-105 hover:bg-[#8B0000]">
                            Sign Up
                        </button>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default Navbar;
