import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const User = () => {

    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.error("Logout successfully")
                navigate("/");
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            {
                user ?
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-12 rounded-full">
                                <img src={user.photoURL} alt={user.email || "User Profile Picture"} className="rounded-full w-full" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 bg-cyan-100">
                            <li><p className="font-bold">{user.displayName}</p></li>
                            <li><button className="font-bold" onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div>
                    :
                    <Link to="/loginRegister"><button className="btn">Login</button></Link>
            }
        </>
    );
};

export default User;