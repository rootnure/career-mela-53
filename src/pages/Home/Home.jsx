import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Career Mela</title>
            </Helmet>
            <Header></Header>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
                    <Services></Services>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default Home;