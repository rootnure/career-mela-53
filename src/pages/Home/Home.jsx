import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";
import Jobs from "../../components/Jobs/Jobs";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Job Utsob</title>
            </Helmet>
            <Header></Header>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 my-12">
                    <Jobs></Jobs>
                    {/* aside */}
                </div>
            </div>
        </div>
    );
};

export default Home;