import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";


const LogIn = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div>
            <Helmet>
                <title>Login | Job Utsob</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-[calc(100vh-175px)]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-center">Don&apos;t have an account? <Link to="/register" className="underline">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;