import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Career Mela</title>
            </Helmet>
            <Header></Header>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 my-12">
                    <Services></Services>
                    {/* aside */}
                </div>
            </div>
        </div>
    );
};

export default Home;