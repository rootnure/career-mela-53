import { FaSquareXTwitter, FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import SocialLogin from "../../pages/LogIn/SocialLogin";


const RightSidebar = () => {

    return (
        <div>
            <div className="sticky top-24 flex gap-4 flex-col">
                <SocialLogin></SocialLogin>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Find Us On</h2>
                    <div className="font-semibold">
                        <p className="flex items-center gap-2 border-2 rounded-t-lg p-4"><FaSquareFacebook className="text-4xl text-blue-600"></FaSquareFacebook> Facebook</p>
                        <p className="flex items-center gap-2 border-x-2 p-4"><FaSquareXTwitter className="text-4xl text-black"></FaSquareXTwitter> X (formerly Twitter)</p>
                        <p className="flex items-center gap-2 border-2 rounded-b-lg p-4"><FaInstagram className="text-4xl text-rose-500"></FaInstagram> Instagram</p>
                    </div>
                </div>
                {/* recently viewed events */}
                {/* advertisement */}
            </div>
        </div>
    );
};

export default RightSidebar;