import { useState } from "react";
import LogIn from "./LogIn";
import Register from "./Register";
import LogInOverlay from "./LogInOverlay";
import RegistrationOverlay from "./RegistrationOverlay";
import { Helmet } from "react-helmet-async";


const LoginRegisterPage = () => {

    const [isLoginPage, setIsLoginPage] = useState(true);

    const handlePageLoading = () => {
        setIsLoginPage(!isLoginPage);
    }

    return (
        <div>
            <Helmet>
                <title>{isLoginPage ? "LogIn | Career Mela" : "Register | Career Mela"}</title>
            </Helmet>
            <div id="loadingText" className="fixed top-0 left-0 right-0 w-fit mx-auto z-[500] bg-[#fff384] hidden">
                <p className="px-2">Loading. Please wait...</p>
            </div>
            <div className="hero bg-base-200 min-h-[calc(100vh-175px)]">
                <div className="hero-content h-full">
                    <div className={`flex ${isLoginPage ? "flex-col-reverse" : "flex-col"} md:flex-row h-auto md:h-full`}>
                        <div className={`h-auto w-96 flex items-center p-4 md:rounded-l-lg ${isLoginPage ? "bg-white rounded-b-lg md:rounded-b-none" : "bg-cyan-100 py-12 rounded-t-lg md:rounded-t-none"}`}>
                            {isLoginPage && <LogIn></LogIn>}
                            {!isLoginPage && <RegistrationOverlay handlePageLoading={handlePageLoading}></RegistrationOverlay>}
                        </div>
                        <div className={`h-auto w-96 flex items-center p-4 md:rounded-r-lg ${!isLoginPage ? "bg-white rounded-b-lg md:rounded-b-none" : "bg-cyan-100 py-12 rounded-t-lg md:rounded-t-none"}`}>
                            {!isLoginPage && <Register></Register>}
                            {isLoginPage && <LogInOverlay handlePageLoading={handlePageLoading}></LogInOverlay>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegisterPage;