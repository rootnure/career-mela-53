import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex items-center flex-col">
            <Helmet>
                <title>Page Not Found | Job Utshob</title>
            </Helmet>
            <h1 className="text-4xl h-96 text-gray-400 font-bold flex justify-center items-center text-center">Oops!!! Something went wrong...</h1>
            <Link to="/"><button className="btn">Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;