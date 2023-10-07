import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";


const Register = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleValidPassword = (e) => {
        setErrorMsg("");
        const password = e.target.value;
        console.log(password);
        if (password.length === 0) setErrorMsg("");
        else if (password.length < 6) setErrorMsg("Password must be at lest 6 character long");
        else if (!/[A-Z]/.test(password)) setErrorMsg("Password must contain at lest one UPPERCASE letter");
        else if (!/[!@#$%^&*()_+\-=[\]{};'~`:"\\|,.<>/?]/.test(password)) setErrorMsg("Password must contain at lest one special character");
    }

    return (
        <div>
            <Helmet>
                <title>Register | Job Utsob</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-[calc(100vh-175px)]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register an account!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
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
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                            <p className="text-center">Already have an account? <Link to="/login" className="underline">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;