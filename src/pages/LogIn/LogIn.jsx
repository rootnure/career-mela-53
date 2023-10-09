import { useLocation, useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";


const LogIn = () => {

    const { signIn } = useContext(AuthContext);

    const location = useLocation();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const loadingText = document.getElementById("loadingText");
        loadingText.classList.remove('hidden');
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(() => {
                loadingText.classList.add('hidden');
                toast.success('Successfully logged in');
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                loadingText.classList.add('hidden');
                if (err.message.toLowerCase().includes("invalid")) toast.error("Invalid Email or Password.");
            })
    }

    return (
        <div className="h-full w-96 bg-white flex items-center rounded-l-lg">
            <form onSubmit={handleLogin} className="card-body pb-2">
                <h2 className="text-4xl font-bold text-center">Log In</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email Address" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                        <input type={isPasswordVisible ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered w-full" required />
                        <span onClick={() => setIsPasswordVisible(!isPasswordVisible)} className="absolute top-0 bottom-0 right-0 px-3 flex items-center cursor-pointer">{isPasswordVisible ? <BsFillEyeFill></BsFillEyeFill> : <BsFillEyeSlashFill></BsFillEyeSlashFill>}</span>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;