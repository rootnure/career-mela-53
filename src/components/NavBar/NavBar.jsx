import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


const NavBar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/appliedJobs">Success Stories</NavLink></li>
        <li><NavLink to="/appliedJobs">Students Review</NavLink></li>
        <li><NavLink to="/appliedJobs">About Us</NavLink></li>
    </>

    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Logo></Logo>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login"><button className="btn">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;