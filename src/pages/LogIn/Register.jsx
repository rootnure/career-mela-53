import { useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import SocialLogin2 from "./SocialLogin2";


const Register = () => {

    const { createUser, updateInfo } = useContext(AuthContext);

    const navigate = useNavigate();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleCreateUser = e => {
        e.preventDefault();
        const loadingText = document.getElementById("loadingText");
        loadingText.classList.remove("hidden");
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.reset();

        createUser(email, password)
            .then(() => {
                updateInfo(name, photoURL)
                    .then(() => {
                        loadingText.classList.add("hidden");
                        toast.success("Welcome " + name);
                        navigate('/');
                    })
                    .catch(err => console.error(err.message))
            })
            .catch(err => {
                loadingText.classList.add("hidden");
                if (err.message.toLowerCase().includes("already")) toast.warn("Email already exists. Try with another mail or login.");
            })
    }

    const handleValidPassword = (e) => {
        setErrorMsg("");

        const password = e.target.value;

        const registerBtn = document.getElementById("registerBtn");

        registerBtn.setAttribute("disabled", true);

        if (password.length === 0) setErrorMsg("");
        else if (password.length < 6) setErrorMsg("Password must be at lest 6 character long");
        else if (!/[A-Z]/.test(password)) setErrorMsg("Password must contain at lest one UPPERCASE letter");
        else if (!/[!@#$%^&*()_+\-=[\]{};'~`:"\\|,.<>/?]/.test(password)) setErrorMsg("Password must contain at lest one special character");
        else registerBtn.removeAttribute("disabled");
    }

    return (
        <>

            <form onSubmit={handleCreateUser} className="card-body pb-2">
                <h2 className="text-4xl font-bold text-center">Register</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Profile Image</span>
                    </label>
                    <input type="text" name="photoURL" placeholder="Photo URL (Direct Link)" className="input input-bordered" required />
                </div>
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
                        <input onChange={handleValidPassword} type={isPasswordVisible ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered w-full" required />
                        <span onClick={() => setIsPasswordVisible(!isPasswordVisible)} className="absolute top-0 bottom-0 right-0 px-3 flex items-center cursor-pointer">{isPasswordVisible ? <BsFillEyeFill></BsFillEyeFill> : <BsFillEyeSlashFill></BsFillEyeSlashFill>}</span>
                    </div>
                    <label className="label relative">
                        {errorMsg && <small className="absolute top-3 text-red-400 font-semibold">{errorMsg}</small>}
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" id="registerBtn" className="btn btn-primary" disabled>Register</button>
                </div>
                <SocialLogin2></SocialLogin2>
            </form>
        </>
    );
};

export default Register;