import { FaSquareXTwitter, FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="min-h-fit py-6 flex flex-col items-center justify-center">
            <h5 className="text-center"><small>&copy; 2023 | Career Mela</small></h5>
            <div className="font-semibold flex gap-x-2 mt-4">
                <Link to="#"><FaSquareFacebook className="hover:scale-110 cursor-pointer text-4xl text-blue-600"></FaSquareFacebook></Link>
                <Link to="#"><FaSquareXTwitter className="hover:scale-110 cursor-pointer text-4xl text-black"></FaSquareXTwitter></Link>
                <Link to="#"><FaInstagram className="hover:scale-110 cursor-pointer text-4xl text-rose-500"></FaInstagram></Link>
            </div>
        </div>
    );
};

export default Footer;