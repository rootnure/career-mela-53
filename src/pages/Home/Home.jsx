import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Job Utsob</title>
            </Helmet>
            <Header></Header>
            <div className="container mx-auto">
                <div className="grid grid-cols-4">
                    {/* main */}
                    {/* aside */}
                </div>
            </div>
        </div>
    );
};

export default Home;