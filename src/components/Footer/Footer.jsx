import { FaSquareXTwitter, FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="min-h-fit py-6 flex flex-col items-center justify-center">
            <footer className="footer p-10">
                <aside>
                    <h3 className="text-3xl font-bold font-handlee">Career Mela</h3>
                    <p>Build your career from scratch.</p>
                    <h5 className="text-center"><small>Copyright &copy; 2023 | Career Mela</small></h5>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="#" title="Facebook Page"><FaSquareFacebook className="hover:scale-110 cursor-pointer text-4xl text-blue-600"></FaSquareFacebook></Link>
                        <Link to="#" title="Twitter"><FaSquareXTwitter className="hover:scale-110 cursor-pointer text-4xl text-black"></FaSquareXTwitter></Link>
                        <Link to="#" title="Instagram"><FaInstagram className="hover:scale-110 cursor-pointer text-4xl text-rose-600"></FaInstagram></Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;