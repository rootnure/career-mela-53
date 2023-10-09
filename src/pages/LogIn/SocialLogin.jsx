import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { user, googleLogin, githubLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSocialLogin = media => {
        media()
            .then(() => {
                toast.success("Successfully logged in");
                navigate("/");
            })
    }

    return (
        <>
            {!user &&
                <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-4">Login With</h3>
                    <div className='space-y-2'>
                        <div className="space-y-2">
                            <button
                                onClick={() => handleSocialLogin(googleLogin)}
                                title="Use your google account to login"
                                className='my-btn justify-center w-full hover:bg-blue-500 !border-blue-500 !text-blue-500 hover:!text-white transition-all'>
                                <AiOutlineGoogle className='text-3xl'></AiOutlineGoogle>
                                <p className='text-sm'>Login with Google</p>
                            </button>
                            <button
                                onClick={() => handleSocialLogin(githubLogin)}
                                title="Use your github account to login"
                                className='my-btn justify-center w-full hover:bg-gray-700 !border-gray-700 hover:!text-white transition-all'>
                                <AiFillGithub className='text-3xl'></AiFillGithub>
                                <p className='text-sm'>Login with Github</p>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default SocialLogin;