import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import User from "../User/User";


const NavBar = () => {

    const { user } = useContext(AuthContext);

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/upcomingEvents">Upcoming Events</NavLink></li>
        {
            user && <>
                <li><NavLink to="/appliedEvents">Applied Events</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
            </>
        }
    </>

    return (
        <>
            <div className="container mx-auto fixed top-0 left-0 right-0 z-50">
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
                        <User></User>
                    </div>
                </div>
            </div>
            <div className="h-20"></div>
        </>
    );
};

export default NavBar;