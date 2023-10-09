import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";


const SocialLogin2 = () => {

    const { googleLogin, githubLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSocialLogIn = media => {
        media()
            .then(() => {
                toast.success("Successfully Logged in");
                navigate('/');
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="divider">continue with</div>
            <div className="flex justify-center gap-x-2">
                <button
                    onClick={() => handleSocialLogIn(googleLogin)}
                    className="my-btn">
                    <img src="https://i.ibb.co/xD6yNvD/google-2015-logo-65-BBD07-B01-seeklogo-com.png" alt="Google Logo" className="w-8" />
                    <span>Google</span>
                </button>
                <button
                    onClick={() => handleSocialLogIn(githubLogin)}
                    className="my-btn">
                    <img src="https://i.ibb.co/tPgLqxz/github-logo-7880-D80-B8-D-seeklogo-com.png" alt="Github logo" className="w-8" />
                    <span>GitHub</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin2;