import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Career Mela</title>
            </Helmet>
            <Header></Header>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-6 my-12">
                    <Services></Services>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default Home;